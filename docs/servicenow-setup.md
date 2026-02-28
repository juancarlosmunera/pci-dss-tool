# ServiceNow Integration Setup

The platform integrates with ServiceNow in two directions:

- **Outbound:** When an assessment item is marked `NON_COMPLIANT`, the platform automatically creates a ServiceNow incident via the REST Table API.
- **Inbound:** When ServiceNow updates an incident (state changes, work notes, resolution), a Business Rule sends a webhook POST to the platform, which updates the assessment item status and writes an audit log entry.

---

## Part 1 — Platform Configuration (Admin UI)

### 1.1 Configure the integration

1. Log in as an `ADMIN` user
2. Navigate to **Admin → ServiceNow**
3. Fill in:
   - **Instance URL**: `https://<your-instance>.service-now.com` (no trailing slash)
   - **Auth Method**: `Basic Auth` (OAuth coming later)
   - **Username / Password**: credentials of a ServiceNow account with `rest_api_explorer` and `itil` roles
   - **Incident Table**: `incident` (default, change if using a custom table)
   - **Assignment Group**: the SN group that should receive incidents (optional)
   - **Webhook Secret**: a shared secret that ServiceNow will send in the `X-SN-Webhook-Secret` header — generate with `openssl rand -base64 32`
4. Toggle **Integration Enabled** to on
5. Click **Save & Test** — the platform will attempt a GET against the SN instance to validate credentials

### 1.2 How incidents are created

When a user sets an assessment item status to `NON_COMPLIANT`, a ServiceNow incident is created with:

| SN Field | Value |
|---|---|
| `short_description` | `PCI DSS Non-Compliance: Req {number} — {title}` |
| `description` | Requirement text, assessment name, item notes |
| `category` | `security` |
| `impact` | `1` (High) |
| `urgency` | `1` (High) |
| `assignment_group` | From config (if set) |

The platform stores the resulting `sys_id`, `number`, and a direct URL to the incident.

---

## Part 2 — ServiceNow Configuration

### 2.1 Create a dedicated integration user (recommended)

Instead of using a personal account, create a dedicated SN user:

1. In ServiceNow, go to **User Administration → Users → New**
2. Username: `pci_platform_integration`
3. Assign roles: `itil`, `rest_api_explorer`
4. Set a strong password and use these credentials in the platform config

### 2.2 Create the inbound webhook Business Rule

This Business Rule fires whenever an incident is updated and sends a POST to the platform.

1. Go to **System Definition → Business Rules → New**
2. Fill in:
   - **Name**: `PCI Platform Webhook`
   - **Table**: `Incident [incident]`
   - **When**: `after`
   - **Insert**: ☑ (to notify on new incidents from other sources)
   - **Update**: ☑
3. Under **Advanced**, enable **Advanced** and paste into the **Script** field:

```javascript
(function executeRule(current, previous) {
  var webhookUrl  = 'https://<your-app-domain>/api/webhooks/servicenow';
  var secret      = '<your SERVICENOW_WEBHOOK_SECRET value>';

  var body = {
    sys_id:           current.sys_id.toString(),
    number:           current.number.toString(),
    state:            current.state.toString(),
    state_label:      current.state.getDisplayValue(),
    work_notes:       current.work_notes.toString(),
    resolved_at:      current.resolved_at.toString()
  };

  var r = new sn_ws.RESTMessageV2();
  r.setHttpMethod('POST');
  r.setEndpoint(webhookUrl);
  r.setRequestHeader('Content-Type', 'application/json');
  r.setRequestHeader('X-SN-Webhook-Secret', secret);
  r.setRequestBody(JSON.stringify(body));
  r.execute();

})(current, previous);
```

4. Replace `<your-app-domain>` and `<your SERVICENOW_WEBHOOK_SECRET value>` with your actual values
5. Click **Submit**

> For development/testing, use an ngrok tunnel for the webhook URL.

### 2.3 State mapping

The platform maps SN incident states as follows:

| SN State (numeric) | SN Label | Platform Status |
|---|---|---|
| 1 | New | `IN_PROGRESS` |
| 2 | In Progress | `IN_PROGRESS` |
| 3 | On Hold | `IN_PROGRESS` |
| 6 | Resolved | `COMPLIANT` |
| 7 | Closed | `COMPLIANT` |
| 8 | Canceled | *(no change)* |

Each status change is recorded in the `AuditLog` with `sourceSystem: "servicenow"`.

---

## Part 3 — Testing

### Test incident creation

1. Create or open an assessment in the platform
2. Open any assessment item
3. Set status to `NON_COMPLIANT`
4. Click **Create ServiceNow Ticket**
5. The platform creates the incident and displays the incident number and a direct link

### Test inbound webhook

1. In ServiceNow, find the incident created above
2. Change its state (e.g., to `In Progress`)
3. Check the assessment item in the platform — the status should update automatically
4. Check the item's audit log to confirm `sourceSystem: "servicenow"`

### Manual sync

If the Business Rule hasn't fired or you want to force a sync, on the assessment item page click **Sync from ServiceNow** — this calls `GET /api/assessments/[id]/items/[itemId]/servicenow` which fetches the current state directly from the SN REST API.

---

## Troubleshooting

**Incident creation fails with 401:**
- Verify the username/password in the admin config
- Check the SN user has `rest_api_explorer` role

**Incident creation fails with 403:**
- The SN user may not have `itil` role, or the incident table ACL is restricting them

**Webhook not received:**
- Verify the Business Rule is active and the URL is correct
- Check SN outbound REST message logs: **System Log → Application Logs**
- Confirm `X-SN-Webhook-Secret` matches the value stored in the platform

**Status not updating after webhook:**
- Check the platform logs for the webhook handler
- Confirm the `sys_id` in the webhook payload matches the one stored in `ServiceNowTicket.ticketSysId`
