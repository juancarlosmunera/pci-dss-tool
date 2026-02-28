// PCI DSS v4.0.1 — Database Seed Data (Defined Approach Only)
// Auto-generated from PCI-DSS-v4_0_1.pdf
//
// Usage with Prisma:
//   import { requirements, testingProcedures } from './pci-dss-v4.0.1-seed'

export interface PciRequirement {
  number: string
  title: string
  level: 1 | 2 | 3 | 4
  parentNumber: string | null
  domain: string
  requirementText: string
  applicabilityNotes: string
  guidancePurpose: string
  guidanceGoodPractice: string
  guidanceDefinitions: string
  guidanceExamples: string
  guidanceFurtherInformation: string
}

export interface PciTestingProcedure {
  id: string
  requirementNumber: string
  text: string
}

export const requirements: PciRequirement[] = [
  {
    "number": "1",
    "title": "Install and Maintain Network Security Controls",
    "level": 1,
    "parentNumber": null,
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.1",
    "title": "Processes and mechanisms for installing and maintaining network security controls are defined and understood.",
    "level": 2,
    "parentNumber": "1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 1 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "1.1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 1 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures \nas needed to address changes in processes, \ntechnologies, and business objectives. For these \nreasons, consider updating these documents as \nsoon as possible after a change occurs and not \nonly on a periodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 1 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "1.1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 1 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained \nwithin separate documents. \nAs part of communicating roles and \nresponsibilities, entities can consider having \npersonnel acknowledge their acceptance and \nunderstanding of their assigned roles and \nresponsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.2",
    "title": "Network security controls (NSCs) are configured and maintained.",
    "level": 2,
    "parentNumber": "1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.2.1",
    "title": "Configuration standards for NSC rulesets are: \u2022 Defined. \u2022 Implemented. \u2022 Maintained.",
    "level": 3,
    "parentNumber": "1.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Configuration standards for NSC rulesets are: \u2022 Defined. \u2022 Implemented. \u2022 Maintained.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "These standards often define the requirements for \nacceptable protocols, ports that are permitted to \nbe used, and specific configuration requirements \nthat are acceptable. Configuration standards may \nalso outline what the entity considers not \nacceptable or not permitted within its network.",
    "guidanceDefinitions": "NSCs are key components of a network \narchitecture. Most commonly, NSCs are used at \nthe boundaries of the CDE to control network \ntraffic flowing inbound and outbound from the \nCDE. \nConfiguration standards outline an entity\u2019s \nminimum requirements for the configuration of its \nNSCs.",
    "guidanceExamples": "Examples of NSCs covered by these \nconfiguration standards include, but are not \nlimited to, firewalls, routers configured with \naccess control lists, and cloud virtual networks.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.2.2",
    "title": "All changes to network connections and to configurations of NSCs are approved and managed in accordance with the change control process defined at Requirement 6.5.1.",
    "level": 3,
    "parentNumber": "1.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "All changes to network connections and to configurations of NSCs are approved and managed in accordance with the change control process defined at Requirement 6.5.1.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Changes should be approved by individuals with \nthe appropriate authority and knowledge to \nunderstand the impact of the change. Verification \nshould provide reasonable assurance that the \nchange did not adversely impact the security of \nthe network and that the change performs as \nexpected. \nTo avoid having to address security issues \nintroduced by a change, all changes should be \napproved prior to being implemented and verified \nafter the change is implemented. Once approved \nand verified, network documentation should be \nupdated to include the changes to prevent \ninconsistencies between network documentation \nand the actual configuration.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Examples of NSCs covered by these \nconfiguration standards include, but are not \nlimited to, firewalls, routers configured with \naccess control lists, and cloud virtual networks.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.2.3",
    "title": "An accurate network diagram(s) is maintained that shows all connections between the CDE and other networks, including any wireless networks.",
    "level": 3,
    "parentNumber": "1.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "An accurate network diagram(s) is maintained that shows all connections between the CDE and other networks, including any wireless networks.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "All connections to and from the CDE should be \nidentified, including systems providing security, \nmanagement, or maintenance services to CDE \nsystem components. Entities should consider \nincluding the following in their network diagrams:\n\u2022 All locations, including retail locations, data \ncenters, corporate locations, cloud providers, \netc.\n\u2022 Clear labeling of all network segments.\n\u2022 All security controls providing segmentation, \nincluding unique identifiers for each control \n(for example, name of control, make, model, \nand version).\n\u2022 All in-scope system components, including \nNSCs, web app firewalls, anti-malware\nsolutions, change management solutions, \nIDS/IPS, log aggregation systems, payment \nterminals, payment applications, HSMs, etc.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.2.4",
    "title": "An accurate data-flow diagram(s) is maintained that meets the following: \u2022 Shows all account data flows across systems and networks. \u2022 Updated as needed upon changes to the environment.",
    "level": 3,
    "parentNumber": "1.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "An accurate data-flow diagram(s) is maintained that meets the following: \u2022 Shows all account data flows across systems and networks. \u2022 Updated as needed upon changes to the environment.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The data-flow diagram should include all \nconnection points where account data is received \ninto and sent out of the network, including \nconnections to open, public networks, application \nprocessing flows, storage, transmissions between \nsystems and networks, and file backups. \n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.2.5",
    "title": "All services, protocols, and ports allowed are identified, approved, and have a defined business need.",
    "level": 3,
    "parentNumber": "1.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "All services, protocols, and ports allowed are identified, approved, and have a defined business need.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The security risk associated with each service, \nprotocol, and port allowed should be understood. \nApprovals should be granted by personnel \nindependent of those managing the configuration. \nApproving personnel should possess knowledge \nand accountability appropriate for making \napproval decisions.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For guidance on services, protocols, or ports \nconsidered to be insecure, refer to industry \nstandards and guidance (for example, from NIST, \nENISA, OWASP)."
  },
  {
    "number": "1.2.6",
    "title": "Security features are defined and implemented for all services, protocols, and ports that are in use and considered to be insecure, such that the risk is mitigated.",
    "level": 3,
    "parentNumber": "1.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Security features are defined and implemented for all services, protocols, and ports that are in use and considered to be insecure, such that the risk is mitigated.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The security risk associated with each service, \nprotocol, and port allowed should be understood. \nApprovals should be granted by personnel \nindependent of those managing the configuration. \nApproving personnel should possess knowledge \nand accountability appropriate for making \napproval decisions.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For guidance on services, protocols, or ports \nconsidered to be insecure, refer to industry \nstandards and guidance (for example, from NIST, \nENISA, OWASP)."
  },
  {
    "number": "1.2.7",
    "title": "Configurations of NSCs are reviewed at least once every six months to confirm they are relevant and effective.",
    "level": 3,
    "parentNumber": "1.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Configurations of NSCs are reviewed at least once every six months to confirm they are relevant and effective.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "This review, which can be implemented using \nmanual, automated, or system-based methods, is \nintended to confirm that the settings that manage \ntraffic rules, what is allowed in and out of the \nnetwork, match the approved configurations. \nThe review should provide confirmation that all \npermitted access has a justified business reason. \nAny discrepancies or uncertainties about a rule or \nconfiguration should be escalated for resolution.\nWhile this requirement specifies that this review \noccur at least once every six months, \norganizations with a high volume of changes to \ntheir network configurations may wish to consider \nperforming reviews more frequently to ensure that \nthe configurations continue to meet the needs of \nthe business.",
    "guidanceDefinitions": "",
    "guidanceExamples": "If the secure configuration for a router is stored in \nnon-volatile memory, when that router is restarted \nor rebooted, these controls should ensure that its \nsecure configuration is reinstated.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.2.8",
    "title": "Configuration files for NSCs are: \u2022 Secured from unauthorized access. \u2022 Kept consistent with active network configurations.",
    "level": 3,
    "parentNumber": "1.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Configuration files for NSCs are: \u2022 Secured from unauthorized access. \u2022 Kept consistent with active network configurations.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "All traffic inbound to the CDE, regardless of where \nit originates, should be evaluated to ensure it \nfollows established, authorized rules. Connections \nshould be inspected to ensure traffic is restricted \nto only authorized communications\u2014for example, \nby restricting source/destination addresses and \nports, and blocking of content.",
    "guidanceDefinitions": "",
    "guidanceExamples": "If the secure configuration for a router is stored in \nnon-volatile memory, when that router is restarted \nor rebooted, these controls should ensure that its \nsecure configuration is reinstated.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.3",
    "title": "Network access to and from the cardholder data environment is restricted.",
    "level": 2,
    "parentNumber": "1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.3.1",
    "title": "Inbound traffic to the CDE is restricted as follows: \u2022 To only traffic that is necessary. \u2022 All other traffic is specifically denied.",
    "level": 3,
    "parentNumber": "1.3",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Inbound traffic to the CDE is restricted as follows: \u2022 To only traffic that is necessary. \u2022 All other traffic is specifically denied.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "All traffic inbound to the CDE, regardless of where \nit originates, should be evaluated to ensure it \nfollows established, authorized rules. Connections \nshould be inspected to ensure traffic is restricted \nto only authorized communications\u2014for example, \nby restricting source/destination addresses and \nports, and blocking of content.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Implementing a rule that denies all inbound and \noutbound traffic that is not specifically needed\u2014\nfor example, by using an explicit \u201cdeny all\u201d or \nimplicit deny after allow statement\u2014helps to \nprevent inadvertent holes that would allow \nunintended and potentially harmful traffic.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.3.2",
    "title": "Outbound traffic from the CDE is restricted as follows: \u2022 To only traffic that is necessary. \u2022 All other traffic is specifically denied.",
    "level": 3,
    "parentNumber": "1.3",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Outbound traffic from the CDE is restricted as follows: \u2022 To only traffic that is necessary. \u2022 All other traffic is specifically denied.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "All traffic outbound from the CDE, regardless of \nthe destination, should be evaluated to ensure it \nfollows established, authorized rules. Connections \nshould be inspected to restrict traffic to only \nauthorized communications\u2014for example, by \nrestricting source/destination addresses and \nports, and blocking of content.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Implementing a rule that denies all inbound and \noutbound traffic that is not specifically needed\u2014\nfor example, by using an explicit \u201cdeny all\u201d or \nimplicit deny after allow statement\u2014helps to \nprevent inadvertent holes that would allow \nunintended and potentially harmful traffic.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.3.3",
    "title": "NSCs are installed between all wireless networks and the CDE, regardless of whether the wireless network is a CDE, such that: \u2022 All wireless traffic from wireless networks into the CDE is denied by de",
    "level": 3,
    "parentNumber": "1.3",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "NSCs are installed between all wireless networks and the CDE, regardless of whether the wireless network is a CDE, such that: \u2022 All wireless traffic from wireless networks into the CDE is denied by default. \u2022 Only wireless traffic with an authorized business purpose is allowed into the CDE.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "Implementing a rule that denies all inbound and \noutbound traffic that is not specifically needed\u2014\nfor example, by using an explicit \u201cdeny all\u201d or \nimplicit deny after allow statement\u2014helps to \nprevent inadvertent holes that would allow \nunintended and potentially harmful traffic.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.4",
    "title": "Network connections between trusted and untrusted networks are controlled.",
    "level": 2,
    "parentNumber": "1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.4.1",
    "title": "NSCs are implemented between trusted and untrusted networks.",
    "level": 3,
    "parentNumber": "1.4",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "NSCs are implemented between trusted and untrusted networks.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "System components that provide publicly \naccessible services, such as email, web, and \nDNS servers, are the most vulnerable to threats \noriginating from untrusted networks. \nIdeally, such systems are placed within a \ndedicated trusted network that is public facing (for \nexample, a DMZ) but that is separated via NSCs \nfrom more sensitive internal systems, which helps \nprotect the rest of the network in the event these \nexternally accessible systems are compromised. \nThis functionality is intended to prevent malicious \nactors from accessing the organization's internal \nnetwork from the Internet, or from using services, \nprotocols, or ports in an unauthorized manner.\nWhere this functionality is provided as a built-in \nfeature of an NSC, the entity should ensure that \nits configurations do not result in the functionality \nbeing disabled or bypassed.",
    "guidanceDefinitions": "Maintaining the \"state\" (or status) for each \nconnection into a network means the NSC \n\u201cknows\u201d whether an apparent response to a \nprevious connection is a valid, authorized \nresponse (since the NSC retains each \nconnection\u2019s status) or whether it is malicious \ntraffic trying to fool the NSC into allowing the \nconnection.",
    "guidanceExamples": "An entity could implement a DMZ, which is a part \nof the network that manages connections \nbetween an untrusted network (for examples of \nuntrusted networks refer to the Requirement 1 \nOverview) and services that an organization \nneeds to have available to the public, such as a \nweb server. Please note that if an entity\u2019s DMZ \nprocesses or transmits account data (for example, \ne-commerce website), it is also considered a \nCDE.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.4.2",
    "title": "Inbound traffic from untrusted networks to trusted networks is restricted to: \u2022 Communications with system components that are authorized to provide publicly accessible services, protocols, and ports.",
    "level": 3,
    "parentNumber": "1.4",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Inbound traffic from untrusted networks to trusted networks is restricted to: \u2022 Communications with system components that are authorized to provide publicly accessible services, protocols, and ports. \u2022 Stateful responses to communications initiated by system components in a trusted network. \u2022 All other traffic is denied.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "System components that provide publicly \naccessible services, such as email, web, and \nDNS servers, are the most vulnerable to threats \noriginating from untrusted networks. \nIdeally, such systems are placed within a \ndedicated trusted network that is public facing (for \nexample, a DMZ) but that is separated via NSCs \nfrom more sensitive internal systems, which helps \nprotect the rest of the network in the event these \nexternally accessible systems are compromised. \nThis functionality is intended to prevent malicious \nactors from accessing the organization's internal \nnetwork from the Internet, or from using services, \nprotocols, or ports in an unauthorized manner.\nWhere this functionality is provided as a built-in \nfeature of an NSC, the entity should ensure that \nits configurations do not result in the functionality \nbeing disabled or bypassed.",
    "guidanceDefinitions": "Maintaining the \"state\" (or status) for each \nconnection into a network means the NSC \n\u201cknows\u201d whether an apparent response to a \nprevious connection is a valid, authorized \nresponse (since the NSC retains each \nconnection\u2019s status) or whether it is malicious \ntraffic trying to fool the NSC into allowing the \nconnection.",
    "guidanceExamples": "Normally, a packet contains the IP address of the \ncomputer that originally sent it so other computers \nin the network know where the packet originated. \nMalicious individuals will often try to spoof (or \nimitate) the sending IP address to fool the target \nsystem into believing the packet is from a trusted \nsource.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.4.3",
    "title": "Anti-spoofing measures are implemented to detect and block forged source IP addresses from entering the trusted network.",
    "level": 3,
    "parentNumber": "1.4",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Anti-spoofing measures are implemented to detect and block forged source IP addresses from entering the trusted network.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Products usually come with anti-spoofing set as a \ndefault and may not be configurable. Entities \nshould consult the vendor's documentation for \nmore information.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Normally, a packet contains the IP address of the \ncomputer that originally sent it so other computers \nin the network know where the packet originated. \nMalicious individuals will often try to spoof (or \nimitate) the sending IP address to fool the target \nsystem into believing the packet is from a trusted \nsource.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.4.4",
    "title": "System components that store cardholder data are not directly accessible from untrusted networks.",
    "level": 3,
    "parentNumber": "1.4",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "System components that store cardholder data are not directly accessible from untrusted networks.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Products usually come with anti-spoofing set as a \ndefault and may not be configurable. Entities \nshould consult the vendor's documentation for \nmore information.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Normally, a packet contains the IP address of the \ncomputer that originally sent it so other computers \nin the network know where the packet originated. \nMalicious individuals will often try to spoof (or \nimitate) the sending IP address to fool the target \nsystem into believing the packet is from a trusted \nsource.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.4.5",
    "title": "The disclosure of internal IP addresses and routing information is limited to only authorized parties.",
    "level": 3,
    "parentNumber": "1.4",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "The disclosure of internal IP addresses and routing information is limited to only authorized parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Methods used to meet the intent of this \nrequirement may vary, depending on the specific \nnetworking technology being used. For example, \nthe controls used to meet this requirement may \nbe different for IPv4 networks than for IPv6 \nnetworks.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to obscure IP addressing may include, \nbut are not limited to:\n\u2022 IPv4 Network Address Translation (NAT).\n\u2022 Placing system components behind proxy \nservers/NSCs. \n\u2022 Removal or filtering of route advertisements \nfor internal networks that use registered \naddressing.\n\u2022 Internal use of RFC 1918 (IPv4) or use IPv6 \nprivacy extension (RFC 4941) when initiating \noutgoing sessions to the internet.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.5",
    "title": "Risks to the CDE from computing devices that are able to connect to both untrusted networks and the CDE are mitigated.",
    "level": 2,
    "parentNumber": "1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "1.5.1",
    "title": "Security controls are implemented on any computing devices, including company- and employee-owned devices, that connect to both untrusted networks (including the Internet) and the CDE as follows: \u2022 Sp",
    "level": 3,
    "parentNumber": "1.5",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Security controls are implemented on any computing devices, including company- and employee-owned devices, that connect to both untrusted networks (including the Internet) and the CDE as follows: \u2022 Specific configuration settings are defined to prevent threats being introduced into the entity\u2019s network. \u2022 Security controls are actively running. \u2022 Security controls are not alterable by users of the computing devices unless specifically documented and authorized by management on a case-by-case basis for a limited period.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "2",
    "title": "Apply Secure Configurations to All System Components",
    "level": 1,
    "parentNumber": null,
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "2.1",
    "title": "Processes and mechanisms for applying secure configurations to all system components are defined and understood.",
    "level": 2,
    "parentNumber": "2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "2.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 2 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "2.1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 2 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures \nas needed to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as \nsoon as possible after a change occurs and not \nonly on a periodic cycle",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. \nOperational procedures describe how to perform \nactivities, and define the controls, methods, and \nprocesses that are followed to achieve the \ndesired result in a consistent manner and in \naccordance with policy objectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "2.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 2 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "2.1",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 2 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained \nwithin separate documents. \nAs part of communicating roles and \nresponsibilities, entities can consider having \npersonnel acknowledge their acceptance and \nunderstanding of their assigned roles and \nresponsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. \nOperational procedures describe how to perform \nactivities, and define the controls, methods, and \nprocesses that are followed to achieve the \ndesired result in a consistent manner and in \naccordance with policy objectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": "Sources for guidance on configuration standards \ninclude but are not limited to: Center for Internet \nSecurity (CIS), International Organization for \nStandardization (ISO), National Institute of \nStandards and Technology (NIST), Cloud \nSecurity Alliance, and product vendors."
  },
  {
    "number": "2.2",
    "title": "System components are configured and managed securely.",
    "level": 2,
    "parentNumber": "2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "2.2.1",
    "title": "Configuration standards are developed, implemented, and maintained to: \u2022 Cover all system components. \u2022 Address all known security vulnerabilities. \u2022 Be consistent with industry-accepted system harden",
    "level": 3,
    "parentNumber": "2.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Configuration standards are developed, implemented, and maintained to: \u2022 Cover all system components. \u2022 Address all known security vulnerabilities. \u2022 Be consistent with industry-accepted system hardening standards or vendor hardening recommendations. \u2022 Be updated as new vulnerability issues are identified, as defined in Requirement 6.3.1. \u2022 Be applied when new systems are configured and verified as in place before or immediately after a system component is connected to a production environment.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Keeping up to date with current industry guidance \nwill help the entity maintain secure configurations.\nThe specific controls to be applied to a system will \nvary and should be appropriate for the type and \nfunction of the system.\nNumerous security organizations have \nestablished system-hardening guidelines and \nrecommendations, which advise how to correct \ncommon, known weaknesses.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Defaults to be considered include user IDs, \npasswords, and other authentication credentials\ncommonly used by vendors in their products.",
    "guidanceFurtherInformation": "Sources for guidance on configuration standards \ninclude but are not limited to: Center for Internet \nSecurity (CIS), International Organization for \nStandardization (ISO), National Institute of \nStandards and Technology (NIST), Cloud \nSecurity Alliance, and product vendors."
  },
  {
    "number": "2.2.2",
    "title": "Vendor default accounts are managed as follows: \u2022 If the vendor default account(s) will be used, the default password is changed per Requirement",
    "level": 3,
    "parentNumber": "2.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Vendor default accounts are managed as follows: \u2022 If the vendor default account(s) will be used, the default password is changed per Requirement",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "All vendor default accounts should be identified, \nand their purpose and use understood. It is \nimportant to establish controls for application and \nsystem accounts, including those used to deploy \nand maintain cloud services so that they do not \nuse default passwords and are not usable by \nunauthorized individuals.\nWhere a default account is not intended to be \nused, changing the default password to a unique \npassword that meets PCI DSS Requirement \n8.3.6, removing any access to the default \naccount, and then disabling the account, will \nprevent a malicious individual from re-enabling \nthe account and gaining access with the default \npassword.\nUsing an isolated staging network to install and \nconfigure new systems is recommended and can \nalso be used to confirm that default credentials \nhave not been introduced into production \nenvironments.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Defaults to be considered include user IDs, \npasswords, and other authentication credentials\ncommonly used by vendors in their products.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "2.2.3",
    "title": "Primary functions requiring different security levels are managed as follows: \u2022 Only one primary function exists on a system component, OR \u2022 Primary functions with differing security levels that exist",
    "level": 3,
    "parentNumber": "2.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Primary functions requiring different security levels are managed as follows: \u2022 Only one primary function exists on a system component, OR \u2022 Primary functions with differing security levels that exist on the same system component are isolated from each other, OR \u2022 Primary functions with differing security levels on the same system component are all secured to the level required by the function with the highest security need.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Ideally, each function should be placed on \ndifferent system components. This can be \nachieved by implementing only one primary \nfunction on each system component. Another \noption is to isolate primary functions on the same \nsystem component that have different security \nlevels, for example, isolating web servers (which \nneed to be directly connected to the Internet) from \napplication and database servers.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "2.2.4",
    "title": "Only necessary services, protocols, daemons, and functions are enabled, and all unnecessary functionality is removed or disabled.",
    "level": 3,
    "parentNumber": "2.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "Only necessary services, protocols, daemons, and functions are enabled, and all unnecessary functionality is removed or disabled.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "There are many protocols that could be enabled \nby default that are commonly used by malicious \nindividuals to compromise a network. Disabling or \nremoving all services, functions, and protocols \nthat are not used minimizes the potential attack \nsurface\u2014for example, by removing or disabling \nan unused FTP or web server.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Unnecessary functionality may include, but is not \nlimited to scripts, drivers, features, subsystems, \nfile systems, interfaces (USB and Bluetooth), and \nunnecessary web servers.",
    "guidanceFurtherInformation": "For guidance on services, protocols, or daemons \nconsidered to be insecure, refer to industry \nstandards and guidance (for example, as \npublished by NIST, ENISA, and OWASP)."
  },
  {
    "number": "2.2.5",
    "title": "If any insecure services, protocols, or daemons are present: \u2022 Business justification is documented. \u2022 Additional security features are documented and implemented that reduce the risk of using insecur",
    "level": 3,
    "parentNumber": "2.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "If any insecure services, protocols, or daemons are present: \u2022 Business justification is documented. \u2022 Additional security features are documented and implemented that reduce the risk of using insecure services, protocols, or daemons.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Enabling security features before new system \ncomponents are deployed will prevent insecure \nconfigurations from being introduced into the \nenvironment. Some vendor solutions may provide \nadditional security functions to assist with \nsecuring an insecure process.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Unnecessary functionality may include, but is not \nlimited to scripts, drivers, features, subsystems, \nfile systems, interfaces (USB and Bluetooth), and \nunnecessary web servers.",
    "guidanceFurtherInformation": "For guidance on services, protocols, or daemons \nconsidered to be insecure, refer to industry \nstandards and guidance (for example, as \npublished by NIST, ENISA, and OWASP)."
  },
  {
    "number": "2.2.6",
    "title": "System security parameters are configured to prevent misuse.",
    "level": 3,
    "parentNumber": "2.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "System security parameters are configured to prevent misuse.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "System configuration standards and related \nprocesses should specifically address security \nsettings and parameters that have known security \nimplications for each type of system in use.\nFor systems to be configured securely, personnel \nresponsible for configuration and/or administering \nsystems should be knowledgeable in the specific \nsecurity parameters and settings that apply to the \nsystem. Considerations should also include \nsecure settings for parameters used to access \ncloud portals.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Cleartext protocols (such as HTTP, telnet, etc.) do \nnot encrypt traffic or logon details, making it easy \nfor an eavesdropper to intercept this information. \nNon-console access may be facilitated by \ntechnologies that provide alternative access to \nsystems, including but not limited to, out-of-band \n(OOB), lights-out management (LOM), Intelligent \nPlatform Management Interface (IPMI), and \nkeyboard, video, mouse (KVM) switches with \nremote capabilities. These and other non-console \naccess technologies and methods must be \nsecured with strong cryptography.",
    "guidanceFurtherInformation": "Refer to vendor documentation and industry \nreferences noted in Requirement 2.2.1 for \ninformation about applicable security parameters \nfor each type of system."
  },
  {
    "number": "2.2.7",
    "title": "All non-console administrative access is encrypted using strong cryptography.",
    "level": 3,
    "parentNumber": "2.2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "All non-console administrative access is encrypted using strong cryptography.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Whichever security protocol is used, it should be \nconfigured to use only secure versions and \nconfigurations to prevent use of an insecure \nconnection\u2014for example, by using only trusted \ncertificates, supporting only strong encryption, \nand not supporting fallback to weaker, insecure \nprotocols or methods.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Cleartext protocols (such as HTTP, telnet, etc.) do \nnot encrypt traffic or logon details, making it easy \nfor an eavesdropper to intercept this information. \nNon-console access may be facilitated by \ntechnologies that provide alternative access to \nsystems, including but not limited to, out-of-band \n(OOB), lights-out management (LOM), Intelligent \nPlatform Management Interface (IPMI), and \nkeyboard, video, mouse (KVM) switches with \nremote capabilities. These and other non-console \naccess technologies and methods must be \nsecured with strong cryptography.",
    "guidanceFurtherInformation": "Refer to industry standards and best practices \nsuch as NIST SP 800-52 and SP 800-57."
  },
  {
    "number": "2.3",
    "title": "Wireless environments are configured and managed securely.",
    "level": 2,
    "parentNumber": "2",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "2.3.1",
    "title": "For wireless environments connected to the CDE or transmitting account data, all wireless vendor defaults are changed at installation or are confirmed to be secure, including but not limited to: \u2022 Def",
    "level": 3,
    "parentNumber": "2.3",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "For wireless environments connected to the CDE or transmitting account data, all wireless vendor defaults are changed at installation or are confirmed to be secure, including but not limited to: \u2022 Default wireless encryption keys. \u2022 Passwords on wireless access points. \u2022 SNMP defaults. \u2022 Any other security-related wireless vendor defaults.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Wireless passwords should be constructed so \nthat they are resistant to offline brute force \nattacks.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to industry standards and best practices \nsuch as NIST SP 800-52 and SP 800-57."
  },
  {
    "number": "2.3.2",
    "title": "For wireless environments connected to the CDE or transmitting account data, wireless encryption keys are changed as follows: \u2022 Whenever personnel with knowledge of the key leave the company or the ro",
    "level": 3,
    "parentNumber": "2.3",
    "domain": "Build and Maintain a Secure Network and Systems",
    "requirementText": "For wireless environments connected to the CDE or transmitting account data, wireless encryption keys are changed as follows: \u2022 Whenever personnel with knowledge of the key leave the company or the role for which the knowledge was necessary. \u2022 Whenever a key is suspected of or known to be compromised.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "This goal can be accomplished in multiple ways, \nincluding periodic changes of keys, changing keys \nvia a defined \u201cjoiners-movers-leavers\u201d (JML) \nprocess, implementing additional technical \ncontrols, and not using fixed pre-shared keys. \nIn addition, any keys that are known to be, or \nsuspected of being, compromised should be \nmanaged in accordance with the entity\u2019s incident \nresponse plan at Requirement 12.10.1.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3",
    "title": "Protect Stored Account Data",
    "level": 1,
    "parentNumber": null,
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.1",
    "title": "Processes and mechanisms for protecting stored account data are defined and understood.",
    "level": 2,
    "parentNumber": "3",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 3 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "3.1",
    "domain": "Protect Account Data",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 3 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures as \nneeded to address changes in processes, technologies, \nand business objectives. For this reason, consider \nupdating these documents as soon as possible after a \nchange occurs and not only on a periodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security objectives \nand principles. Operational procedures describe how to \nperform activities, and define the controls, methods, \nand processes that are followed to achieve the desired \nresult in a consistent manner and in accordance with \npolicy objectives.",
    "guidanceExamples": "A method to document roles and responsibilities is a \nresponsibility assignment matrix that includes who is \nresponsible, accountable, consulted, and informed \n(also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 3 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "3.1",
    "domain": "Protect Account Data",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 3 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented within \npolicies and procedures or maintained within separate \ndocuments. \nAs part of communicating roles and responsibilities, \nentities can consider having personnel acknowledge \ntheir acceptance and understanding of their assigned \nroles and responsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security objectives \nand principles. Operational procedures describe how to \nperform activities, and define the controls, methods, \nand processes that are followed to achieve the desired \nresult in a consistent manner and in accordance with \npolicy objectives.",
    "guidanceExamples": "A method to document roles and responsibilities is a \nresponsibility assignment matrix that includes who is \nresponsible, accountable, consulted, and informed \n(also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.2",
    "title": "Storage of account data is kept to a minimum.",
    "level": 2,
    "parentNumber": "3",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.2.1",
    "title": "Account data storage is kept to a minimum through implementation of data retention and disposal policies, procedures, and processes that include at least the following: \u2022 Coverage for all locations of",
    "level": 3,
    "parentNumber": "3.2",
    "domain": "Protect Account Data",
    "requirementText": "Account data storage is kept to a minimum through implementation of data retention and disposal policies, procedures, and processes that include at least the following: \u2022 Coverage for all locations of stored account data. \u2022 Coverage for any sensitive authentication data (SAD) stored prior to completion of authorization. This bullet is a best practice until its effective date; refer to",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When identifying locations of stored account data, \nconsider all processes and personnel with access to \nthe data, as data could have been moved and stored in \ndifferent locations than originally defined. Storage \nlocations that are often overlooked include backup and \narchive systems, removable data storage devices, \npaper-based media, and audio recordings.\nTo define appropriate retention requirements, an entity \nfirst needs to understand its own business needs as \nwell as any legal or regulatory obligations that apply to \nits industry or to the type of data being retained. \nImplementing an automated process to ensure data is \nautomatically and securely deleted upon its defined \nretention limit can help ensure that account data is not \nretained beyond what is necessary for business, legal, \nor regulatory purposes.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.3",
    "title": "Sensitive authentication data (SAD) is not stored after authorization.",
    "level": 2,
    "parentNumber": "3",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.3.1",
    "title": "SAD is not stored after authorization, even if encrypted. All sensitive authentication data received is rendered unrecoverable upon completion of the authorization process.",
    "level": 3,
    "parentNumber": "3.3",
    "domain": "Protect Account Data",
    "requirementText": "SAD is not stored after authorization, even if encrypted. All sensitive authentication data received is rendered unrecoverable upon completion of the authorization process.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It may be acceptable for an entity to store SAD in non\u0002persistent memory for a short time after authorization is \ncomplete, if following conditions are met:\n\u2022 There is a legitimate business need to access \nSAD in memory after authorization is complete.\n\u2022 SAD is only ever stored in non-persistent memory \n(for example, RAM, volatile memory).\n\u2022 Controls are in place to ensure that memory \nmaintains a non-persistent state.\n\u2022 SAD is removed as soon as the business purpose \nis complete.\nIt is not permissible to store SAD in persistent memory.",
    "guidanceDefinitions": "The authorization process completes when a merchant \nreceives a transaction response (for example, an \napproval or decline).\nRefer to Appendix G for the definition of \u201cauthorization.\u201d",
    "guidanceExamples": "Data sources to review to ensure that the full contents \nof any track are not retained upon completion of the \nauthorization process include, but are not limited to:\n\u2022 Incoming transaction data. \n\u2022 All logs (for example, transaction, history, \ndebugging, error). \n\u2022 History files. \n\u2022 Trace files. \n\u2022 Database schemas. \n\u2022 Contents of databases, and on-premise and cloud \ndata stores. \n\u2022 Any existing memory/crash dump files.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.3.1.1",
    "title": "The full contents of any track are not stored upon completion of the authorization process.",
    "level": 4,
    "parentNumber": "3.3.1",
    "domain": "Protect Account Data",
    "requirementText": "The full contents of any track are not stored upon completion of the authorization process.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It may be acceptable for an entity to store SAD in non\u0002persistent memory for a short time after authorization is \ncomplete, if following conditions are met:\n\u2022 There is a legitimate business need to access \nSAD in memory after authorization is complete.\n\u2022 SAD is only ever stored in non-persistent memory \n(for example, RAM, volatile memory).\n\u2022 Controls are in place to ensure that memory \nmaintains a non-persistent state.\n\u2022 SAD is removed as soon as the business purpose \nis complete.\nIt is not permissible to store SAD in persistent memory.",
    "guidanceDefinitions": "The authorization process completes when a merchant \nreceives a transaction response (for example, an \napproval or decline).\nRefer to Appendix G for the definition of \u201cauthorization.\u201d",
    "guidanceExamples": "Data sources to review to ensure that the full contents \nof any track are not retained upon completion of the \nauthorization process include, but are not limited to:\n\u2022 Incoming transaction data. \n\u2022 All logs (for example, transaction, history, \ndebugging, error). \n\u2022 History files. \n\u2022 Trace files. \n\u2022 Database schemas. \n\u2022 Contents of databases, and on-premise and cloud \ndata stores. \n\u2022 Any existing memory/crash dump files.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.3.1.2",
    "title": "The card verification code is not stored upon completion of the authorization process.",
    "level": 4,
    "parentNumber": "3.3.1",
    "domain": "Protect Account Data",
    "requirementText": "The card verification code is not stored upon completion of the authorization process.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider encrypting SAD with a different \ncryptographic key than is used to encrypt PAN. Note \nthat this does not mean that PAN present in SAD (as \npart of track data) would need to be separately \nencrypted.",
    "guidanceDefinitions": "",
    "guidanceExamples": "If card verification codes are stored on paper media \nprior to completion of authorization, a method of \nerasing or covering the codes should prevent them \nfrom being read after authorization is complete. \nExample methods of rendering the codes unreadable \ninclude removing the code with scissors and applying a \nsuitably opaque and un-removable marker over the \ncode.\nData sources to review to ensure that the card \nverification code is not retained upon completion of the \nauthorization process include, but are not limited to:\n\u2022 Incoming transaction data. \n\u2022 All logs (for example, transaction, history, \ndebugging, error). \n\u2022 History files. \n\u2022 Trace files. \n\u2022 Database schemas. \n\u2022 Contents of databases, and on-premise and cloud \ndata stores. \n\u2022 Any existing memory/crash dump files.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.3.1.3",
    "title": "The personal identification number (PIN) and the PIN block are not stored upon completion of the authorization process.",
    "level": 4,
    "parentNumber": "3.3.1",
    "domain": "Protect Account Data",
    "requirementText": "The personal identification number (PIN) and the PIN block are not stored upon completion of the authorization process.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider encrypting SAD with a different \ncryptographic key than is used to encrypt PAN. Note \nthat this does not mean that PAN present in SAD (as \npart of track data) would need to be separately \nencrypted.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Data sources to review to ensure that PIN and PIN \nblocks are not retained upon completion of the \nauthorization process include, but are not limited to:\n\u2022 Incoming transaction data. \n\u2022 All logs (for example, transaction, history, \ndebugging, error). \n\u2022 History files. \n\u2022 Trace files. \n\u2022 Database schemas. \n\u2022 Contents of databases, and on-premise and cloud \ndata stores. \n\u2022 Any existing memory/crash dump files.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.3.2",
    "title": "SAD that is stored electronically prior to completion of authorization is encrypted using strong cryptography.",
    "level": 3,
    "parentNumber": "3.3",
    "domain": "Protect Account Data",
    "requirementText": "SAD that is stored electronically prior to completion of authorization is encrypted using strong cryptography.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider encrypting SAD with a different \ncryptographic key than is used to encrypt PAN. Note \nthat this does not mean that PAN present in SAD (as \npart of track data) would need to be separately \nencrypted.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Data sources to review to ensure that PIN and PIN \nblocks are not retained upon completion of the \nauthorization process include, but are not limited to:\n\u2022 Incoming transaction data. \n\u2022 All logs (for example, transaction, history, \ndebugging, error). \n\u2022 History files. \n\u2022 Trace files. \n\u2022 Database schemas. \n\u2022 Contents of databases, and on-premise and cloud \ndata stores. \n\u2022 Any existing memory/crash dump files.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.3.3",
    "title": "Additional requirement for issuers and companies that support issuing services and store sensitive authentication data: Any storage of sensitive authentication data is: \u2022 Limited to that which is need",
    "level": 3,
    "parentNumber": "3.3",
    "domain": "Protect Account Data",
    "requirementText": "Additional requirement for issuers and companies that support issuing services and store sensitive authentication data: Any storage of sensitive authentication data is: \u2022 Limited to that which is needed for a legitimate issuing business need and is secured. \u2022 Encrypted using strong cryptography. This bullet is a best practice until its effective date; refer to",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It may be acceptable for an entity to store SAD in non\u0002persistent memory for a short time after authorization is \ncomplete, if following conditions are met:\n\u2022 There is a legitimate business need to access \nSAD in memory after authorization is complete.\n\u2022 SAD is only ever stored in non-persistent memory \n(for example, RAM, volatile memory).\n\u2022 Controls are in place to ensure that memory \nmaintains a non-persistent state.\n\u2022 SAD is removed as soon as the business purpose \nis complete.\nIt is not permissible to store SAD in persistent memory.",
    "guidanceDefinitions": "The authorization process completes when a merchant \nreceives a transaction response (for example, an \napproval or decline).\nRefer to Appendix G for the definition of \u201cauthorization.\u201d",
    "guidanceExamples": "Data sources to review to ensure that the full contents \nof any track are not retained upon completion of the \nauthorization process include, but are not limited to:\n\u2022 Incoming transaction data. \n\u2022 All logs (for example, transaction, history, \ndebugging, error). \n\u2022 History files. \n\u2022 Trace files. \n\u2022 Database schemas. \n\u2022 Contents of databases, and on-premise and cloud \ndata stores. \n\u2022 Any existing memory/crash dump files.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.4",
    "title": "Access to displays of full PAN and ability to copy PAN are restricted.",
    "level": 2,
    "parentNumber": "3",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.4.1",
    "title": "PAN is masked when displayed (the BIN and last four digits are the maximum number of digits to be displayed), such that only personnel with a legitimate business need can see more than the BIN and las",
    "level": 3,
    "parentNumber": "3.4",
    "domain": "Protect Account Data",
    "requirementText": "PAN is masked when displayed (the BIN and last four digits are the maximum number of digits to be displayed), such that only personnel with a legitimate business need can see more than the BIN and last four digits of the PAN. (continued on next page)",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Applying access controls according to defined roles is \none way to limit access to viewing full PAN to only \nthose individuals with a defined business need.\nThe masking approach should always display only the \nnumber of digits needed to perform a specific business \nfunction. For example, if only the last four digits are \nneeded to perform a business function, PAN should be \nmasked to only show the last four digits. As another \nexample, if a function needs to view the bank \nidentification number (BIN) for routing purposes, \nunmask only the BIN digits for that function.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For more information about masking and truncation, \nsee PCI SSC\u2019s FAQs on these topics.\nPAN displays are restricted to the minimum number of \ndigits necessary to meet a defined business need."
  },
  {
    "number": "3.4.2",
    "title": "When using remote-access technologies, technical controls prevent copy and/or relocation of PAN for all personnel, except for those with documented, explicit authorization and a legitimate, defined bu",
    "level": 3,
    "parentNumber": "3.4",
    "domain": "Protect Account Data",
    "requirementText": "When using remote-access technologies, technical controls prevent copy and/or relocation of PAN for all personnel, except for those with documented, explicit authorization and a legitimate, defined business need.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Copying and relocation of PAN should only be done to \nstorage devices that are permissible and authorized for \nthat individual.",
    "guidanceDefinitions": "A virtual desktop is an example of a remote-access \ntechnology. Such remote access technologies often \ninclude tools to disable copy and/or relocation \nfunctionality. \nStorage devices include, but are not limited to, local \nhard drives, virtual drives, removable electronic media, \nnetwork drives, and cloud storage.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For more information about masking and truncation, \nsee PCI SSC\u2019s FAQs on these topics.\nPAN displays are restricted to the minimum number of \ndigits necessary to meet a defined business need."
  },
  {
    "number": "3.5",
    "title": "Primary account number (PAN) is secured wherever it is stored.",
    "level": 2,
    "parentNumber": "3",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.5.1",
    "title": "PAN is rendered unreadable anywhere it is stored by using any of the following approaches: \u2022 One-way hashes based on strong cryptography of the entire PAN. \u2022 Truncation (hashing cannot be used to repl",
    "level": 3,
    "parentNumber": "3.5",
    "domain": "Protect Account Data",
    "requirementText": "PAN is rendered unreadable anywhere it is stored by using any of the following approaches: \u2022 One-way hashes based on strong cryptography of the entire PAN. \u2022 Truncation (hashing cannot be used to replace the truncated segment of PAN). \u2013 If hashed and truncated versions of the same PAN, or different truncation formats of the same PAN, are present in an environment, additional controls are in place such that the different versions cannot be correlated to reconstruct the original PAN. \u2022 Index tokens. \u2022 Strong cryptography with associated key\u0002management processes and procedures.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Copying and relocation of PAN should only be done to \nstorage devices that are permissible and authorized for \nthat individual.",
    "guidanceDefinitions": "A virtual desktop is an example of a remote-access \ntechnology. Such remote access technologies often \ninclude tools to disable copy and/or relocation \nfunctionality. \nStorage devices include, but are not limited to, local \nhard drives, virtual drives, removable electronic media, \nnetwork drives, and cloud storage.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For more information about masking and truncation, \nsee PCI SSC\u2019s FAQs on these topics.\nPAN displays are restricted to the minimum number of \ndigits necessary to meet a defined business need."
  },
  {
    "number": "3.5.1.1",
    "title": "Hashes used to render PAN unreadable (per the first bullet of Requirement 3.5.1) are keyed cryptographic hashes of the entire PAN, with associated key\u0002management processes and procedures in accordance",
    "level": 4,
    "parentNumber": "3.5.1",
    "domain": "Protect Account Data",
    "requirementText": "Hashes used to render PAN unreadable (per the first bullet of Requirement 3.5.1) are keyed cryptographic hashes of the entire PAN, with associated key\u0002management processes and procedures in accordance with Requirements 3.6 and 3.7.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is a relatively trivial effort for a malicious individual to \nreconstruct original PAN data if they have access to \nboth the truncated and hashed versions of a PAN. \nControls that prevent the correlation of this data will \nhelp ensure that the original PAN remains unreadable. \nImplementing keyed cryptographic hashes with \nassociated key management processes and \nprocedures in accordance with Requirement 3.5.1.1 is \na valid additional control to prevent correlation.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For information about truncation formats and truncation \nin general, see PCI SSC\u2019s FAQs on the topic.\nSources for information about index tokens include:\n\u2022 PCI SSC\u2019s Tokenization Product Security \nGuidelines \n(https://www.pcisecuritystandards.org/documents/T\nokenization_Product_Security_Guidelines.pdf)\n\u2022 ANSI X9.119-2-2017: Retail Financial Services - \nRequirements For Protection Of Sensitive Payment \nCard Data - Part 2: Implementing Post-Authorization \nTokenization Systems"
  },
  {
    "number": "3.5.1.2",
    "title": "If disk-level or partition-level encryption (rather than file-, column-, or field-level database encryption) is used to render PAN unreadable, it is implemented only as follows: \u2022 On removable electro",
    "level": 4,
    "parentNumber": "3.5.1",
    "domain": "Protect Account Data",
    "requirementText": "If disk-level or partition-level encryption (rather than file-, column-, or field-level database encryption) is used to render PAN unreadable, it is implemented only as follows: \u2022 On removable electronic media OR \u2022 If used for non-removable electronic media, PAN is also rendered unreadable via another mechanism that meets Requirement 3.5.1.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Where available, following vendors\u2019 hardening and \nindustry best practice guidelines can assist in securing \nPAN on these devices."
  },
  {
    "number": "3.5.1.3",
    "title": "If disk-level or partition-level encryption is used (rather than file-, column-, or field-level database encryption) to render PAN unreadable, it is managed as follows: \u2022 Logical access is managed sep",
    "level": 4,
    "parentNumber": "3.5.1",
    "domain": "Protect Account Data",
    "requirementText": "If disk-level or partition-level encryption is used (rather than file-, column-, or field-level database encryption) to render PAN unreadable, it is managed as follows: \u2022 Logical access is managed separately and independently of native operating system authentication and access control mechanisms. \u2022 Decryption keys are not associated with user accounts. \u2022 Authentication factors (passwords, passphrases, or cryptographic keys) that allow access to unencrypted data are stored securely.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Full disk encryption helps to protect data in the event of \nphysical loss of a disk and therefore its use is best \nlimited only to removable electronic media storage \ndevices.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "The entity\u2019s key management procedures will benefit \nthrough alignment with industry requirements, Sources \nfor information on cryptographic key management life \ncycles include:\n\u2022 ISO 11568-1 Banking \u2014 Key management (retail) \n\u2014 Part 1: Principles (specifically Chapter 10 and the \nreferenced Parts 2 & 4)\n\u2022 NIST SP 800-57 Part 1 Revision 5\u2014\nRecommendation for Key Management, Part 1: \nGeneral."
  },
  {
    "number": "3.6",
    "title": "Cryptographic keys used to protect stored account data are secured.",
    "level": 2,
    "parentNumber": "3",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.6.1",
    "title": "Procedures are defined and implemented to protect cryptographic keys used to protect stored account data against disclosure and misuse that include: \u2022 Access to keys is restricted to the fewest number",
    "level": 3,
    "parentNumber": "3.6",
    "domain": "Protect Account Data",
    "requirementText": "Procedures are defined and implemented to protect cryptographic keys used to protect stored account data against disclosure and misuse that include: \u2022 Access to keys is restricted to the fewest number of custodians necessary. \u2022 Key-encrypting keys are at least as strong as the data-encrypting keys they protect. \u2022 Key-encrypting keys are stored separately from data-encrypting keys. \u2022 Keys are stored securely in the fewest possible locations and forms.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Having a centralized key management system based \non industry standards is recommended for managing \ncryptographic keys.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "The entity\u2019s key management procedures will benefit \nthrough alignment with industry requirements, Sources \nfor information on cryptographic key management life \ncycles include:\n\u2022 ISO 11568-1 Banking \u2014 Key management (retail) \n\u2014 Part 1: Principles (specifically Chapter 10 and the \nreferenced Parts 2 & 4)\n\u2022 NIST SP 800-57 Part 1 Revision 5\u2014\nRecommendation for Key Management, Part 1: \nGeneral."
  },
  {
    "number": "3.6.1.1",
    "title": "Additional requirement for service providers only: A documented description of the cryptographic architecture is maintained that includes: \u2022 Details of all algorithms, protocols, and keys used for the",
    "level": 4,
    "parentNumber": "3.6.1",
    "domain": "Protect Account Data",
    "requirementText": "Additional requirement for service providers only: A documented description of the cryptographic architecture is maintained that includes: \u2022 Details of all algorithms, protocols, and keys used for the protection of stored account data, including key strength and expiry date. \u2022 Preventing the use of the same cryptographic keys in production and test environments. This bullet is a best practice until its effective date; refer to Applicability Notes below for details. \u2022 Description of the key usage for each key. \u2022 Inventory of any hardware security modules (HSMs), key management systems (KMS), and other secure cryptographic devices (SCDs) used for key management, including type and location of devices, to support meeting Requirement",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Having an automated reporting mechanism can assist \nwith maintenance of the cryptographic attributes.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.6.1.2",
    "title": "Secret and private keys used to protect stored account data are stored in one (or more) of the following forms at all times: \u2022 Encrypted with a key-encrypting key that is at least as strong as the dat",
    "level": 4,
    "parentNumber": "3.6.1",
    "domain": "Protect Account Data",
    "requirementText": "Secret and private keys used to protect stored account data are stored in one (or more) of the following forms at all times: \u2022 Encrypted with a key-encrypting key that is at least as strong as the data-encrypting key, and that is stored separately from the data\u0002encrypting key. \u2022 Within a secure cryptographic device (SCD), such as a hardware security module (HSM) or PTS-approved point-of-interaction device. \u2022 As at least two full-length key components or key shares, in accordance with an industry\u0002accepted method.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where data-encrypting keys are stored in an HSM, the \nHSM interaction channel should be protected to prevent \ninterception of encryption or decryption operations.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.6.1.3",
    "title": "Access to cleartext cryptographic key components is restricted to the fewest number of custodians necessary.",
    "level": 4,
    "parentNumber": "3.6.1",
    "domain": "Protect Account Data",
    "requirementText": "Access to cleartext cryptographic key components is restricted to the fewest number of custodians necessary.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Only personnel with defined key custodian \nresponsibilities (creating, altering, rotating, distributing,\nor otherwise maintaining encryption keys) should be \ngranted access to key components.\nIdeally this will be a very small number of people.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See the sources referenced at Cryptographic Key \nGeneration in Appendix G."
  },
  {
    "number": "3.6.1.4",
    "title": "Cryptographic keys are stored in the fewest possible locations.",
    "level": 4,
    "parentNumber": "3.6.1",
    "domain": "Protect Account Data",
    "requirementText": "Cryptographic keys are stored in the fewest possible locations.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Only personnel with defined key custodian \nresponsibilities (creating, altering, rotating, distributing,\nor otherwise maintaining encryption keys) should be \ngranted access to key components.\nIdeally this will be a very small number of people.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See the sources referenced at Cryptographic Key \nGeneration in Appendix G."
  },
  {
    "number": "3.7",
    "title": "Where cryptography is used to protect stored account data, key management processes and procedures covering all aspects of the key",
    "level": 2,
    "parentNumber": "3",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "3.7.1",
    "title": "Key-management policies and procedures are implemented to include generation of strong cryptographic keys used to protect stored account data.",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Key-management policies and procedures are implemented to include generation of strong cryptographic keys used to protect stored account data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Data encryption keys can be protected by encrypting \nthem with a key-encrypting key. \nKeys can be stored in a Hardware Security Module \n(HSM). \nSecret or private keys that can decrypt data should \nnever be present in source code.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See the sources referenced at Cryptographic Key \nGeneration in Appendix G."
  },
  {
    "number": "3.7.2",
    "title": "Key-management policies and procedures are implemented to include secure distribution of cryptographic keys used to protect stored account data.",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Key-management policies and procedures are implemented to include secure distribution of cryptographic keys used to protect stored account data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Data encryption keys can be protected by encrypting \nthem with a key-encrypting key. \nKeys can be stored in a Hardware Security Module \n(HSM). \nSecret or private keys that can decrypt data should \nnever be present in source code.",
    "guidanceDefinitions": "A cryptoperiod is the time span during which a \ncryptographic key can be used for its defined purpose. \nCryptoperiods are often defined in terms of the period \nfor which the key is active and/or the amount of cipher\u0002text that has been produced by the key. Considerations \nfor defining the cryptoperiod include, but are not limited \nto, the strength of the underlying algorithm, size or \nlength of the key, risk of key compromise, and the \nsensitivity of the data being encrypted.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See the sources referenced at Cryptographic Key \nGeneration in Appendix G."
  },
  {
    "number": "3.7.3",
    "title": "Key-management policies and procedures are implemented to include secure storage of cryptographic keys used to protect stored account data.",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Key-management policies and procedures are implemented to include secure storage of cryptographic keys used to protect stored account data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Data encryption keys can be protected by encrypting \nthem with a key-encrypting key. \nKeys can be stored in a Hardware Security Module \n(HSM). \nSecret or private keys that can decrypt data should \nnever be present in source code.",
    "guidanceDefinitions": "A cryptoperiod is the time span during which a \ncryptographic key can be used for its defined purpose. \nCryptoperiods are often defined in terms of the period \nfor which the key is active and/or the amount of cipher\u0002text that has been produced by the key. Considerations \nfor defining the cryptoperiod include, but are not limited \nto, the strength of the underlying algorithm, size or \nlength of the key, risk of key compromise, and the \nsensitivity of the data being encrypted.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "NIST SP 800-57 Part 1, Revision 5, Section 5.3 \nCryptoperiods \u2013 provides guidance for establishing the \ntime span during which a specific key is authorized for \nuse by legitimate entities, or the keys for a given \nsystem will remain in effect. See Table 1 of SP 800-57\nPart 1 for suggested cryptoperiods for different key \ntypes."
  },
  {
    "number": "3.7.4",
    "title": "Key management policies and procedures are implemented for cryptographic key changes for keys that have reached the end of their cryptoperiod, as defined by the associated application vendor or key ow",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Key management policies and procedures are implemented for cryptographic key changes for keys that have reached the end of their cryptoperiod, as defined by the associated application vendor or key owner, and based on industry best practices and guidelines, including the following: \u2022 A defined cryptoperiod for each key type in use. \u2022 A process for key changes at the end of the defined cryptoperiod.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Archived cryptographic keys should be used only for \ndecryption/verification purposes.\nThe encryption solution should provide for and facilitate \na process to replace keys that are due for replacement \nor that are known to be, or suspected of being, \ncompromised. In addition, any keys that are known to \nbe, or suspected of being, compromised should be \nmanaged in accordance with the entity\u2019s incident \nresponse plan per Requirement 12.10.1.",
    "guidanceDefinitions": "A cryptoperiod is the time span during which a \ncryptographic key can be used for its defined purpose. \nCryptoperiods are often defined in terms of the period \nfor which the key is active and/or the amount of cipher\u0002text that has been produced by the key. Considerations \nfor defining the cryptoperiod include, but are not limited \nto, the strength of the underlying algorithm, size or \nlength of the key, risk of key compromise, and the \nsensitivity of the data being encrypted.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "NIST SP 800-57 Part 1, Revision 5, Section 5.3 \nCryptoperiods \u2013 provides guidance for establishing the \ntime span during which a specific key is authorized for \nuse by legitimate entities, or the keys for a given \nsystem will remain in effect. See Table 1 of SP 800-57\nPart 1 for suggested cryptoperiods for different key \ntypes."
  },
  {
    "number": "3.7.5",
    "title": "Key management policies procedures are implemented to include the retirement, replacement, or destruction of keys used to protect stored account data, as deemed necessary when: \u2022 The key has reached t",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Key management policies procedures are implemented to include the retirement, replacement, or destruction of keys used to protect stored account data, as deemed necessary when: \u2022 The key has reached the end of its defined cryptoperiod. \u2022 The integrity of the key has been weakened, including when personnel with knowledge of a cleartext key component leaves the company, or the role for which the key component was known. \u2022 The key is suspected of or known to be compromised. Retired or replaced keys are not used for encryption operations.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Archived cryptographic keys should be used only for \ndecryption/verification purposes.\nThe encryption solution should provide for and facilitate \na process to replace keys that are due for replacement \nor that are known to be, or suspected of being, \ncompromised. In addition, any keys that are known to \nbe, or suspected of being, compromised should be \nmanaged in accordance with the entity\u2019s incident \nresponse plan per Requirement 12.10.1.",
    "guidanceDefinitions": "Split knowledge is a method in which two or more \npeople separately have key components, where each \nperson knows only their own key component, and the \nindividual key components convey no knowledge of \nother components or of the original cryptographic key. \nDual control requires two or more people to \nauthenticate the use of a cryptographic key or perform \na key-management function. No single person can \naccess or use the authentication factor (for example, \nthe password, PIN, or key) of another.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Industry best practices for archiving retired keys are \noutlined in NIST SP 800-57 Part 1, Revision 5, Section \n8.3.1, and includes maintaining the archive with a \ntrusted third party and storing archived key information \nseparately from operational data."
  },
  {
    "number": "3.7.6",
    "title": "Where manual cleartext cryptographic key\u0002management operations are performed by personnel, key-management policies and procedures are implemented, including managing these operations using split knowl",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Where manual cleartext cryptographic key\u0002management operations are performed by personnel, key-management policies and procedures are implemented, including managing these operations using split knowledge and dual control.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where key components or key shares are used, \nprocedures should ensure that no single custodian ever \nhas access to sufficient key components or shares to \nreconstruct the cryptographic key. For example, in an \nm-of-n scheme (for example, Shamir), where only two \nof any three components are required to reconstruct the \ncryptographic key, a custodian must not have current or \nprior knowledge of more than one component. If a \ncustodian was previously assigned component A, which \nwas then reassigned, the custodian should not then be \nassigned component B or C, as this would give the \ncustodian knowledge of two components and the ability \nto recreate the key.\n(continued on next page)",
    "guidanceDefinitions": "Split knowledge is a method in which two or more \npeople separately have key components, where each \nperson knows only their own key component, and the \nindividual key components convey no knowledge of \nother components or of the original cryptographic key. \nDual control requires two or more people to \nauthenticate the use of a cryptographic key or perform \na key-management function. No single person can \naccess or use the authentication factor (for example, \nthe password, PIN, or key) of another.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Industry standards for managing key components \ninclude: \n\u2022 NIST SP 800-57 Part 2, Revision 1 -- \nRecommendation for Key Management: Part 2 \u2013 \nBest Practices for Key Management Organizations \n[4.6 Keying Material Distribution]\n\u2022 ISO 11568-2 Banking \u2014 Key management (retail) \n\u2014 Part 2: Symmetric ciphers, their key \nmanagement and life cycle [4.7.2.3 Key \ncomponents and 4.9.3 Key components]\n\u2022 European Payments Council EPC342-08 \nGuidelines on Cryptographic Algorithms Usage and \nKey Management [especially 4.1.4 Key installation].\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nIf an attacker is able to substitute an entity\u2019s key with a \nkey the attacker knows, the attacker will be able to \ndecrypt all data encrypted with that key."
  },
  {
    "number": "3.7.7",
    "title": "Key management policies and procedures are implemented to include the prevention of unauthorized substitution of cryptographic keys.",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Key management policies and procedures are implemented to include the prevention of unauthorized substitution of cryptographic keys.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The encryption solution should not allow for or accept \nsubstitution of keys from unauthorized sources or \nunexpected processes. \nControls should include ensuring that individuals with \naccess to key components or shares do not have \naccess to other components or shares that form the \nnecessary threshold to derive the key.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Industry standards for managing key components \ninclude: \n\u2022 NIST SP 800-57 Part 2, Revision 1 -- \nRecommendation for Key Management: Part 2 \u2013 \nBest Practices for Key Management Organizations \n[4.6 Keying Material Distribution]\n\u2022 ISO 11568-2 Banking \u2014 Key management (retail) \n\u2014 Part 2: Symmetric ciphers, their key \nmanagement and life cycle [4.7.2.3 Key \ncomponents and 4.9.3 Key components]\n\u2022 European Payments Council EPC342-08 \nGuidelines on Cryptographic Algorithms Usage and \nKey Management [especially 4.1.4 Key installation].\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nIf an attacker is able to substitute an entity\u2019s key with a \nkey the attacker knows, the attacker will be able to \ndecrypt all data encrypted with that key."
  },
  {
    "number": "3.7.8",
    "title": "Key management policies and procedures are implemented to include that cryptographic key custodians formally acknowledge (in writing or electronically) that they understand and accept their key-custod",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Key management policies and procedures are implemented to include that cryptographic key custodians formally acknowledge (in writing or electronically) that they understand and accept their key-custodian responsibilities.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The encryption solution should not allow for or accept \nsubstitution of keys from unauthorized sources or \nunexpected processes. \nControls should include ensuring that individuals with \naccess to key components or shares do not have \naccess to other components or shares that form the \nnecessary threshold to derive the key.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Industry guidance for key custodians and their roles \nand responsibilities includes: \n\u2022 NIST SP 800-130 A Framework for Designing \nCryptographic Key Management Systems [5. Roles \nand Responsibilities (especially) for Key \nCustodians]\n\u2022 ISO 11568-1 Banking -- Key management (retail) --\nPart 1: Principles [5 Principles of key management \n(especially b)]"
  },
  {
    "number": "3.7.9",
    "title": "Additional requirement for service providers only: Where a service provider shares cryptographic keys with its customers for transmission or storage of account data, guidance on secure transmission, s",
    "level": 3,
    "parentNumber": "3.7",
    "domain": "Protect Account Data",
    "requirementText": "Additional requirement for service providers only: Where a service provider shares cryptographic keys with its customers for transmission or storage of account data, guidance on secure transmission, storage and updating of such keys is documented and distributed to the service provider\u2019s customers.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Industry guidance for key custodians and their roles \nand responsibilities includes: \n\u2022 NIST SP 800-130 A Framework for Designing \nCryptographic Key Management Systems [5. Roles \nand Responsibilities (especially) for Key \nCustodians]\n\u2022 ISO 11568-1 Banking -- Key management (retail) --\nPart 1: Principles [5 Principles of key management \n(especially b)]"
  },
  {
    "number": "4",
    "title": "Protect Cardholder Data with Strong Cryptography During Transmission Over Open, Public Networks",
    "level": 1,
    "parentNumber": null,
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "4.1",
    "title": "Processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are",
    "level": 2,
    "parentNumber": "4",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "4.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 4 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "4.1",
    "domain": "Protect Account Data",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 4 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures \nas needed to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as \nsoon as possible after a change occurs and not \nonly on a periodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives. Policies and procedures, including \nupdates, are actively communicated to all affected \npersonnel, and are supported by operating \nprocedures describing how to perform activities.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "4.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 4 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "4.1",
    "domain": "Protect Account Data",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 4 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained \nwithin separate documents. \nAs part of communicating roles and \nresponsibilities, entities can consider having \npersonnel acknowledge their acceptance and \nunderstanding of their assigned roles and \nresponsibilities.",
    "guidanceDefinitions": "",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "4.2",
    "title": "PAN is protected with strong cryptography during transmission",
    "level": 2,
    "parentNumber": "4",
    "domain": "Protect Account Data",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "4.2.1",
    "title": "Strong cryptography and security protocols are implemented as follows to safeguard PAN during transmission over open, public networks: \u2022 Only trusted keys and certificates are accepted. \u2022 Certificates",
    "level": 3,
    "parentNumber": "4.2",
    "domain": "Protect Account Data",
    "requirementText": "Strong cryptography and security protocols are implemented as follows to safeguard PAN during transmission over open, public networks: \u2022 Only trusted keys and certificates are accepted. \u2022 Certificates used to safeguard PAN during transmission over open, public networks are confirmed as valid and are not expired or revoked. This bullet is a best practice until its effective date; refer to applicability notes below for details. \u2022 The protocol in use supports only secure versions or configurations and does not support fallback to, or use of insecure versions, algorithms, key sizes, or implementations. \u2022 The encryption strength is appropriate for the encryption methodology in use.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The network and data-flow diagrams defined in \nRequirement 1 are useful resources for identifying \nall connection points where account data is \ntransmitted or received over open, public \nnetworks. \nWhile not required, it is considered a good \npractice for entities to also encrypt PAN over their \ninternal networks, and for entities to establish any \nnew network implementations with encrypted \ncommunications. \nPAN transmissions can be protected by \nencrypting the data before it is transmitted, or by \nencrypting the session over which the data is \ntransmitted, or both. While it is not required that \nstrong cryptography be applied at both the data \nlevel and the session level, it is strongly \nrecommended. If encrypted at the data level, the \ncryptographic keys used for protecting the data \ncan be managed in accordance with \nRequirements 3.6 and 3.7. If the data is encrypted \nat the session level, designated key custodians \nshould be assigned responsibility for managing \ntransmission keys and certificates. \n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "4.2.1.1",
    "title": "An inventory of the entity\u2019s trusted keys and certificates used to protect PAN during transmission is maintained.",
    "level": 4,
    "parentNumber": "4.2.1",
    "domain": "Protect Account Data",
    "requirementText": "An inventory of the entity\u2019s trusted keys and certificates used to protect PAN during transmission is maintained.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "For certificates, the inventory should include the \nissuing CA and certification expiration date.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Vendor recommendations and industry best \npractices can be consulted for information about \nthe proper encryption strength specific to the \nencryption methodology in use.\nFor more information about strong cryptography \nand secure protocols, see industry standards and \nbest practices such as NIST SP 800-52 and SP \n800-57. \nFor more information about trusted keys and \ncertificates, see NIST Cybersecurity Practice \nGuide Special Publication 1800-16, Securing Web \nTransactions: Transport Layer Security (TLS) \nServer Certificate Management.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 116\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nThe inventory of trusted keys helps the entity \nkeep track of the algorithms, protocols, key \nstrength, key custodians, and key expiry dates. \nThis enables the entity to respond quickly to \nvulnerabilities discovered in encryption software, \ncertificates, and cryptographic algorithms."
  },
  {
    "number": "4.2.1.2",
    "title": "Wireless networks transmitting PAN or connected to the CDE use industry best practices to implement strong cryptography for authentication and transmission.",
    "level": 4,
    "parentNumber": "4.2.1",
    "domain": "Protect Account Data",
    "requirementText": "Wireless networks transmitting PAN or connected to the CDE use industry best practices to implement strong cryptography for authentication and transmission.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Wireless networks should not permit fallback or \ndowngrade to an insecure protocol or lower \nencryption strength that does not meet the intent \nof strong cryptography.",
    "guidanceDefinitions": "",
    "guidanceExamples": "E-mail, instant messaging, SMS, and chat are \nexamples of the type of end-user messaging \ntechnology that this requirement refers to.",
    "guidanceFurtherInformation": "Review the vendor\u2019s specific documentation for \nmore details on the choice of protocols, \nconfigurations, and settings related to \ncryptography."
  },
  {
    "number": "4.2.2",
    "title": "PAN is secured with strong cryptography whenever it is sent via end-user messaging technologies.",
    "level": 3,
    "parentNumber": "4.2",
    "domain": "Protect Account Data",
    "requirementText": "PAN is secured with strong cryptography whenever it is sent via end-user messaging technologies.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Wireless networks should not permit fallback or \ndowngrade to an insecure protocol or lower \nencryption strength that does not meet the intent \nof strong cryptography.",
    "guidanceDefinitions": "",
    "guidanceExamples": "E-mail, instant messaging, SMS, and chat are \nexamples of the type of end-user messaging \ntechnology that this requirement refers to.",
    "guidanceFurtherInformation": "Review the vendor\u2019s specific documentation for \nmore details on the choice of protocols, \nconfigurations, and settings related to \ncryptography."
  },
  {
    "number": "5",
    "title": "Protect All Systems and Networks from Malicious Software",
    "level": 1,
    "parentNumber": null,
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.1",
    "title": "Processes and mechanisms for protecting all systems and networks from malicious software are defined and understood.",
    "level": 2,
    "parentNumber": "5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 5 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "5.1",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 5 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures as \nneeded to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as soon \nas possible after a change occurs and not only on a \nperiodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are followed \nto achieve the desired result in a consistent manner \nand in accordance with policy objectives.",
    "guidanceExamples": "A method to document roles and responsibilities is a \nresponsibility assignment matrix that includes who is \nresponsible, accountable, consulted, and informed \n(also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 5 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "5.1",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 5 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained within \nseparate documents. \nAs part of communicating roles and responsibilities, \nentities can consider having personnel acknowledge \ntheir acceptance and understanding of their \nassigned roles and responsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are followed \nto achieve the desired result in a consistent manner \nand in accordance with policy objectives.",
    "guidanceExamples": "A method to document roles and responsibilities is a \nresponsibility assignment matrix that includes who is \nresponsible, accountable, consulted, and informed \n(also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.2",
    "title": "Malicious software (malware) is prevented, or detected and addressed.",
    "level": 2,
    "parentNumber": "5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.2.1",
    "title": "An anti-malware solution(s) is deployed on all system components, except for those system components identified in periodic evaluations per Requirement 5.2.3 that concludes the system components are n",
    "level": 3,
    "parentNumber": "5.2",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "An anti-malware solution(s) is deployed on all system components, except for those system components identified in periodic evaluations per Requirement 5.2.3 that concludes the system components are not at risk from malware.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is beneficial for entities to be aware of \"zero-day\" \nattacks (those that exploit a previously unknown \nvulnerability) and consider solutions that focus on \nbehavioral characteristics and will alert and react to \nunexpected behavior.",
    "guidanceDefinitions": "System components known to be affected by \nmalware have active malware exploits available in \nthe real world (not only theoretical exploits).",
    "guidanceExamples": "A method to document roles and responsibilities is a \nresponsibility assignment matrix that includes who is \nresponsible, accountable, consulted, and informed \n(also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.2.2",
    "title": "The deployed anti-malware solution(s): \u2022 Detects all known types of malware. \u2022 Removes, blocks, or contains all known types of malware.",
    "level": 3,
    "parentNumber": "5.2",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "The deployed anti-malware solution(s): \u2022 Detects all known types of malware. \u2022 Removes, blocks, or contains all known types of malware.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Anti-malware solutions may include a combination \nof network-based controls, host-based controls, and \nendpoint security solutions. In addition to signature\u0002based tools, capabilities used by modern anti\u0002malware solutions include sandboxing, privilege \nescalation controls, and machine learning. \nSolution techniques include preventing malware \nfrom getting into the network and removing or \ncontaining malware that does get into the network.",
    "guidanceDefinitions": "System components known to be affected by \nmalware have active malware exploits available in \nthe real world (not only theoretical exploits).",
    "guidanceExamples": "Types of malware include, but are not limited to, \nviruses, Trojans, worms, spyware, ransomware, \nkeyloggers, rootkits, malicious code, scripts, and \nlinks.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.2.3",
    "title": "Any system components that are not at risk for malware are evaluated periodically to include the following: \u2022 A documented list of all system components not at risk for malware. \u2022 Identification and e",
    "level": 3,
    "parentNumber": "5.2",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Any system components that are not at risk for malware are evaluated periodically to include the following: \u2022 A documented list of all system components not at risk for malware. \u2022 Identification and evaluation of evolving malware threats for those system components. \u2022 Confirmation whether such system components continue to not require anti-malware protection.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is beneficial for entities to be aware of \"zero-day\" \nattacks (those that exploit a previously unknown \nvulnerability) and consider solutions that focus on \nbehavioral characteristics and will alert and react to \nunexpected behavior.",
    "guidanceDefinitions": "System components known to be affected by \nmalware have active malware exploits available in \nthe real world (not only theoretical exploits).",
    "guidanceExamples": "Types of malware include, but are not limited to, \nviruses, Trojans, worms, spyware, ransomware, \nkeyloggers, rootkits, malicious code, scripts, and \nlinks.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.2.3.1",
    "title": "The frequency of periodic evaluations of system components identified as not at risk for malware is defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specifi",
    "level": 4,
    "parentNumber": "5.2.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "The frequency of periodic evaluations of system components identified as not at risk for malware is defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Anti-malware mechanisms should be updated via a \ntrusted source as soon as possible after an update \nis available. Using a trusted common source to \ndistribute updates to end-user systems helps ensure \nthe integrity and consistency of the solution \narchitecture. \nUpdates may be automatically downloaded to a \ncentral location\u2014for example, to allow for testing\u2014\nprior to being deployed to individual system \ncomponents.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.3",
    "title": "Anti-malware mechanisms and processes are active, maintained, and monitored.",
    "level": 2,
    "parentNumber": "5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.3.1",
    "title": "The anti-malware solution(s) is kept current via automatic updates.",
    "level": 3,
    "parentNumber": "5.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "The anti-malware solution(s) is kept current via automatic updates.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Anti-malware mechanisms should be updated via a \ntrusted source as soon as possible after an update \nis available. Using a trusted common source to \ndistribute updates to end-user systems helps ensure \nthe integrity and consistency of the solution \narchitecture. \nUpdates may be automatically downloaded to a \ncentral location\u2014for example, to allow for testing\u2014\nprior to being deployed to individual system \ncomponents.",
    "guidanceDefinitions": "Active, or real-time, scanning checks files for \nmalware upon any attempt to open, close, rename, \nor otherwise interact with a file, preventing the \nmalware from being activated.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.3.2",
    "title": "The anti-malware solution(s): \u2022 Performs periodic scans and active or real-time scans. OR \u2022 Performs continuous behavioral analysis of systems or processes.",
    "level": 3,
    "parentNumber": "5.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "The anti-malware solution(s): \u2022 Performs periodic scans and active or real-time scans. OR \u2022 Performs continuous behavioral analysis of systems or processes.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Using a combination of periodic scans (scheduled \nand on-demand) and active, real-time (on-access) \nscanning helps ensure that malware residing in both \nstatic and dynamic elements of the CDE is \naddressed. Users should also be able to run on\u0002demand scans on their systems if suspicious activity \nis detected \u2013 this can be useful in the early \ndetection of malware. \nScans should include the entire file system, \nincluding all disks, memory, and start-up files and \nboot records (at system restart) to detect all \nmalware upon file execution, including any software \nthat may be resident on a system but not currently \nactive. Scan scope should include all systems and \nsoftware in the CDE, including those that are often \noverlooked such as email servers, web browsers, \nand instant messaging software.",
    "guidanceDefinitions": "Active, or real-time, scanning checks files for \nmalware upon any attempt to open, close, rename, \nor otherwise interact with a file, preventing the \nmalware from being activated.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.3.2.1",
    "title": "If periodic malware scans are performed to meet Requirement 5.3.2, the frequency of scans is defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in R",
    "level": 4,
    "parentNumber": "5.3.2",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "If periodic malware scans are performed to meet Requirement 5.3.2, the frequency of scans is defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "Active, or real-time, scanning checks files for \nmalware upon any attempt to open, close, rename, \nor otherwise interact with a file, preventing the \nmalware from being activated.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.3.3",
    "title": "For removable electronic media, the anti\u0002malware solution(s): \u2022 Performs automatic scans of when the media is inserted, connected, or logically mounted, OR \u2022 Performs continuous behavioral analysis of",
    "level": 3,
    "parentNumber": "5.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "For removable electronic media, the anti\u0002malware solution(s): \u2022 Performs automatic scans of when the media is inserted, connected, or logically mounted, OR \u2022 Performs continuous behavioral analysis of systems or processes when the media is inserted, connected, or logically mounted.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.3.4",
    "title": "Audit logs for the anti-malware solution(s) are enabled and retained in accordance with Requirement 10.5.1.",
    "level": 3,
    "parentNumber": "5.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Audit logs for the anti-malware solution(s) are enabled and retained in accordance with Requirement 10.5.1.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where there is a legitimate need to temporarily \ndisable a system\u2019s anti-malware protection\u2014for \nexample, to support a specific maintenance activity \nor investigation of a technical problem\u2014the reason \nfor taking such action should be understood and \napproved by an appropriate management \nrepresentative. Any disabling or altering of anti\u0002malware mechanisms, including on administrators\u2019 \nown devices, should be performed by authorized \npersonnel. It is recognized that administrators have \nprivileges that may allow them to disable anti\u0002malware on their own computers, but there should \nbe alerting mechanisms in place when such \nsoftware is disabled and then follow up that occurs \nto ensure correct processes were followed.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Additional security measures that may need to be \nimplemented for the period during which anti\u0002malware protection is not active include \ndisconnecting the unprotected system from the \nInternet while the anti-malware protection is \ndisabled and running a full scan once it is re\u0002enabled.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.3.5",
    "title": "Anti-malware mechanisms cannot be disabled or altered by users, unless specifically documented, and authorized by management on a case-by-case basis for a limited time period.",
    "level": 3,
    "parentNumber": "5.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Anti-malware mechanisms cannot be disabled or altered by users, unless specifically documented, and authorized by management on a case-by-case basis for a limited time period.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where there is a legitimate need to temporarily \ndisable a system\u2019s anti-malware protection\u2014for \nexample, to support a specific maintenance activity \nor investigation of a technical problem\u2014the reason \nfor taking such action should be understood and \napproved by an appropriate management \nrepresentative. Any disabling or altering of anti\u0002malware mechanisms, including on administrators\u2019 \nown devices, should be performed by authorized \npersonnel. It is recognized that administrators have \nprivileges that may allow them to disable anti\u0002malware on their own computers, but there should \nbe alerting mechanisms in place when such \nsoftware is disabled and then follow up that occurs \nto ensure correct processes were followed.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Additional security measures that may need to be \nimplemented for the period during which anti\u0002malware protection is not active include \ndisconnecting the unprotected system from the \nInternet while the anti-malware protection is \ndisabled and running a full scan once it is re\u0002enabled.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.4",
    "title": "Anti-phishing mechanisms protect users against phishing attacks.",
    "level": 2,
    "parentNumber": "5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "5.4.1",
    "title": "Processes and automated mechanisms are in place to detect and protect personnel against phishing attacks.",
    "level": 3,
    "parentNumber": "5.4",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Processes and automated mechanisms are in place to detect and protect personnel against phishing attacks.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When developing anti-phishing controls, entities are \nencouraged to consider a combination of \napproaches. For example, using anti-spoofing \ncontrols such as Domain-based Message \nAuthentication, Reporting & Conformance \n(DMARC), Sender Policy Framework (SPF), and \nDomain Keys Identified Mail (DKIM) will help stop \nphishers from spoofing the entity\u2019s domain and \nimpersonating personnel. \nThe deployment of technologies for blocking \nphishing emails and malware before they reach \npersonnel, such as link scrubbers and server-side \nanti-malware, can reduce incidents and decrease \nthe time required by personnel to check and report \nphishing attacks. Additionally, training personnel to \nrecognize and report phishing emails can allow \nsimilar emails to be identified and permit them to be \nremoved before being opened. \nIt is recommended (but not required) that anti\u0002phishing controls are applied across an entity\u2019s \nentire organization.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6",
    "title": "Develop and Maintain Secure Systems and Software",
    "level": 1,
    "parentNumber": null,
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.1",
    "title": "Processes and mechanisms for developing and maintaining secure systems and software are defined and understood.",
    "level": 2,
    "parentNumber": "6",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 6 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "6.1",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 6 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures as \nneeded to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as soon \nas possible after a change occurs and not only on a \nperiodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are followed to \nachieve the desired result in a consistent manner and \nin accordance with policy objectives.",
    "guidanceExamples": "A method to document roles and responsibilities is a \nresponsibility assignment matrix that includes who is \nresponsible, accountable, consulted, and informed \n(also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 6 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "6.1",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 6 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented within \npolicies and procedures or maintained within \nseparate documents. \nAs part of communicating roles and responsibilities, \nentities can consider having personnel acknowledge \ntheir acceptance and understanding of their assigned \nroles and responsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are followed to \nachieve the desired result in a consistent manner and \nin accordance with policy objectives.",
    "guidanceExamples": "A method to document roles and responsibilities is a \nresponsibility assignment matrix that includes who is \nresponsible, accountable, consulted, and informed \n(also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.2",
    "title": "Bespoke and custom software are developed securely.",
    "level": 2,
    "parentNumber": "6",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.2.1",
    "title": "Bespoke and custom software are developed securely, as follows: \u2022 Based on industry standards and/or best practices for secure development. \u2022 In accordance with PCI DSS (for example, secure authentica",
    "level": 3,
    "parentNumber": "6.2",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Bespoke and custom software are developed securely, as follows: \u2022 Based on industry standards and/or best practices for secure development. \u2022 In accordance with PCI DSS (for example, secure authentication and logging). \u2022 Incorporating consideration of information security issues during each stage of the software development lifecycle.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Understanding how sensitive data is handled by the \napplication\u2014including when stored, transmitted, and \nin memory\u2014can help identify where data needs to be \nprotected. \nPCI DSS requirements must be considered when \ndeveloping software to meet those requirements by \ndesign, rather than trying to retrofit the software later.",
    "guidanceDefinitions": "",
    "guidanceExamples": "A method to document roles and responsibilities is a \nresponsibility assignment matrix that includes who is \nresponsible, accountable, consulted, and informed \n(also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.2.2",
    "title": "Software development personnel working on bespoke and custom software are trained at least once every 12 months as follows: \u2022 On software security relevant to their job function and development langua",
    "level": 3,
    "parentNumber": "6.2",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Software development personnel working on bespoke and custom software are trained at least once every 12 months as follows: \u2022 On software security relevant to their job function and development languages. \u2022 Including secure software design and secure coding techniques. \u2022 Including, if security testing tools are used, how to use the tools for detecting vulnerabilities in software.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Training for developers may be provided in-house or \nby third parties.\nTraining should include, but is not limited to, \ndevelopment languages in use, secure software \ndesign, secure coding techniques, use of \ntechniques/methods for finding vulnerabilities in \ncode, processes to prevent reintroducing previously \nresolved vulnerabilities, and how to use any \nautomated security testing tools for detecting \nvulnerabilities in software.\nAs industry-accepted secure coding practices \nchange, organizational coding practices and \ndeveloper training may need to be updated to \naddress new threats.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.2.3",
    "title": "Bespoke and custom software is reviewed prior to being released into production or to customers, to identify and correct potential coding vulnerabilities, as follows: \u2022 Code reviews ensure code is dev",
    "level": 3,
    "parentNumber": "6.2",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Bespoke and custom software is reviewed prior to being released into production or to customers, to identify and correct potential coding vulnerabilities, as follows: \u2022 Code reviews ensure code is developed according to secure coding guidelines. \u2022 Code reviews look for both existing and emerging software vulnerabilities. \u2022 Appropriate corrections are implemented prior to release.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The following items should be considered for \ninclusion in code reviews:\n\u2022 Searching for undocumented features (implant \ntools, backdoors).\n\u2022 Confirming that software securely uses external \ncomponents\u2019 functions (libraries, frameworks, \nAPIs, etc.). For example, if a third-party library \nproviding cryptographic functions is used, verify \nthat it was integrated securely.\n\u2022 Checking for correct use of logging to prevent \nsensitive data from getting into logs.\n\u2022 Analysis of insecure code structures that may \ncontain potential vulnerabilities related to \ncommon software attacks identified in \nRequirement 6.2.4. \n\u2022 Checking the application\u2019s behavior to detect \nlogical vulnerabilities.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See the OWASP Code Review Guide."
  },
  {
    "number": "6.2.3.1",
    "title": "If manual code reviews are performed for bespoke and custom software prior to release to production, code changes are: \u2022 Reviewed by individuals other than the originating code author, and who are kno",
    "level": 4,
    "parentNumber": "6.2.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "If manual code reviews are performed for bespoke and custom software prior to release to production, code changes are: \u2022 Reviewed by individuals other than the originating code author, and who are knowledgeable about code-review techniques and secure coding practices. \u2022 Reviewed and approved by management prior to release.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Having a formal review methodology and review \nchecklists has been found to improve the quality of \nthe code review process.\nCode review is a tiring process, and for this reason, it \nis most effective when reviewers only review small \namounts of code at a time.\nTo maintain the effectiveness of code reviews, it is \nbeneficial to monitor the general workload of \nreviewers and to have them review applications they \nare familiar with.\nCode reviews may be performed using either manual \nor automated processes, or a combination of both. \nEntitles that rely solely on manual code review \nshould ensure that reviewers maintain their skills \nthrough regular training as new vulnerabilities are \nfound, and new secure coding methods are \nrecommended.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See the OWASP Code Review Guide."
  },
  {
    "number": "6.2.4",
    "title": "Software engineering techniques or other methods are defined and in use by software development personnel to prevent or mitigate common software attacks and related vulnerabilities in bespoke and cust",
    "level": 3,
    "parentNumber": "6.2",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Software engineering techniques or other methods are defined and in use by software development personnel to prevent or mitigate common software attacks and related vulnerabilities in bespoke and custom software, including but not limited to the following: \u2022 Injection attacks, including SQL, LDAP, XPath, or other command, parameter, object, fault, or injection-type flaws. \u2022 Attacks on data and data structures, including attempts to manipulate buffers, pointers, input data, or shared data. \u2022 Attacks on cryptography usage, including attempts to exploit weak, insecure, or inappropriate cryptographic implementations, algorithms, cipher suites, or modes of operation. \u2022 Attacks on business logic, including attempts to abuse or bypass application features and functionalities through the manipulation of APIs, communication protocols and channels, client\u0002side functionality, or other system/application functions and resources. This includes cross-site scripting (XSS) and cross-site request forgery (CSRF). \u2022 Attacks on access control mechanisms, including attempts to bypass or abuse identification, authentication, or authorization mechanisms, or attempts to exploit weaknesses in the implementation of such mechanisms. \u2022 Attacks via any \u201chigh-risk\u201d vulnerabilities identified in the vulnerability identification process, as defined in Requirement 6.3.1.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "For both bespoke and custom software, the entity \nmust ensure that code is developed focusing on the \nprevention or mitigation of common software attacks, \nincluding:\n\u2022 Attempts to exploit common coding vulnerabilities \n(bugs).\n\u2022 Attempts to exploit software design flaws.\n\u2022 Attempts to exploit implementation/configuration \nflaws.\n\u2022 Enumeration attacks \u2013 automated attacks that are \nactively exploited in payments and abuse \nidentification, authentication, or authorization \nmechanisms. See the PCI Perspectives blog \narticle \u201cBeware of Account Testing Attacks.\u201d\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "Techniques include automated processes and \npractices that scan code early in the development \ncycle when code is checked in to confirm the \nvulnerabilities are not present.\nBespoke and custom software cannot be exploited \nvia common attacks and related vulnerabilities.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.3",
    "title": "Security vulnerabilities are identified and addressed.",
    "level": 2,
    "parentNumber": "6",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.3.1",
    "title": "Security vulnerabilities are identified and managed as follows: \u2022 New security vulnerabilities are identified using industry-recognized sources for security vulnerability information, including alerts",
    "level": 3,
    "parentNumber": "6.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Security vulnerabilities are identified and managed as follows: \u2022 New security vulnerabilities are identified using industry-recognized sources for security vulnerability information, including alerts from international and national computer emergency response teams (CERTs). \u2022 Vulnerabilities are assigned a risk ranking based on industry best practices and consideration of potential impact. \u2022 Risk rankings identify, at a minimum, all vulnerabilities considered to be a high-risk or critical to the environment. \u2022 Vulnerabilities for bespoke and custom, and third-party software (for example operating systems and databases) are covered.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Methods for evaluating vulnerabilities and assigning \nrisk ratings will vary based on an organization\u2019s \nenvironment and risk-assessment strategy.\nWhen an entity is assigning its risk rankings, it should \nconsider using a formal, objective, justifiable \nmethodology that accurately portrays the risks of the \nvulnerabilities pertinent to the organization and \ntranslates to an appropriate entity-assigned priority \nfor resolution.\nRisk rankings should, at a minimum, identify all \nvulnerabilities considered to be a \u201chigh risk\u201d to the \nenvironment. In addition to the risk ranking, \nvulnerabilities may be considered \u201ccritical\u201d if they \npose an imminent threat to the environment, impact \ncritical systems, and/or would result in a potential \ncompromise if not addressed. Examples of critical \nsystems may include security systems, public-facing \ndevices and systems, databases, and other systems \nthat store, process, or transmit cardholder data.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.3.2",
    "title": "An inventory of bespoke and custom software, and third-party software components incorporated into bespoke and custom software is maintained to facilitate vulnerability and patch management.",
    "level": 3,
    "parentNumber": "6.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "An inventory of bespoke and custom software, and third-party software components incorporated into bespoke and custom software is maintained to facilitate vulnerability and patch management.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "An entity\u2019s inventory should cover all payment \nsoftware components and dependencies, including \nsupported execution platforms or environments, third\u0002party libraries, services, and other required \nfunctionalities. \nThere are many different types of solutions that can \nhelp with managing software inventories, such as \nsoftware composition analysis tools, application \ndiscovery tools, and mobile device management.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.3.3",
    "title": "All system components are protected from known vulnerabilities by installing applicable security patches/updates as follows: \u2022 Patches/updates for critical vulnerabilities (identified according to the",
    "level": 3,
    "parentNumber": "6.3",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "All system components are protected from known vulnerabilities by installing applicable security patches/updates as follows: \u2022 Patches/updates for critical vulnerabilities (identified according to the risk ranking process at Requirement 6.3.1) are installed within one month of release. \u2022 All other applicable security patches/updates are installed within an appropriate time frame as determined by the entity\u2019s assessment of the criticality of the risk to the environment as identified according to the risk ranking process at Requirement 6.3.1.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Prioritizing security patches/updates for critical \ninfrastructure ensures that high-priority systems and \ndevices are protected from vulnerabilities as soon as \npossible after a patch is released. \nAn entity\u2019s patching cadence should factor in any re\u0002evaluation of vulnerabilities and subsequent changes \nin the criticality of a vulnerability per Requirement \n6.3.1. For example, a vulnerability initially identified \nas low risk could become a higher risk later. \nAdditionally, vulnerabilities individually considered to \nbe low or medium risk could collectively pose a high \nor critical risk if present on the same system, or if \nexploited on a low-risk system that could result in \naccess to the CDE.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "An example time frame for installation of \npatches/updates could be 60 days for high-risk \nvulnerabilities and 90 days for others, as determined \nby the entity\u2019s assessment of risk.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 150\nRequirements and Testing Procedures Guidance\n6.4 Public-facing web applications are protected against attacks.\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nPublic-facing web applications are those that are \navailable to the public (not only for internal use). \nThese applications are primary targets for attackers, \nand poorly coded web applications provide an easy \npath for attackers to gain access to sensitive data \nand systems.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.4",
    "title": "Public-facing web applications are protected against attacks.",
    "level": 2,
    "parentNumber": "6",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.4.1",
    "title": "For public-facing web applications, new threats and vulnerabilities are addressed on an ongoing basis and these applications are protected against known attacks as follows: \u2022 Reviewing public-facing w",
    "level": 3,
    "parentNumber": "6.4",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "For public-facing web applications, new threats and vulnerabilities are addressed on an ongoing basis and these applications are protected against known attacks as follows: \u2022 Reviewing public-facing web applications via manual or automated application vulnerability security assessment tools or methods as follows: \u2013 At least once every 12 months and after significant changes. \u2013 By an entity that specializes in application security. \u2013 Including, at a minimum, all common software attacks in Requirement 6.2.4. \u2013 All vulnerabilities are ranked in accordance with requirement 6.3.1. \u2013 All vulnerabilities are corrected. \u2013 The application is re-evaluated after the corrections. OR \u2022 Installing an automated technical solution(s) that continually detects and prevents web-based attacks as follows: \u2013 Installed in front of public-facing web applications to detect and prevent web\u0002based attacks. \u2013 Actively running and up to date as applicable. \u2013 Generating audit logs. \u2013 Configured to either block web-based attacks or generate an alert that is immediately investigated.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Manual or automated vulnerability security \nassessment tools or methods review and/or test the \napplication for vulnerabilities. \nCommon assessment tools include specialized web \nscanners that perform automatic analysis of web \napplication protection.\nWhen using automated technical solutions, it is \nimportant to include processes that facilitate timely \nresponses to alerts generated by the solutions so \nthat any detected attacks can be mitigated.",
    "guidanceDefinitions": "",
    "guidanceExamples": "An example time frame for installation of \npatches/updates could be 60 days for high-risk \nvulnerabilities and 90 days for others, as determined \nby the entity\u2019s assessment of risk.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 150\nRequirements and Testing Procedures Guidance\n6.4 Public-facing web applications are protected against attacks.\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nPublic-facing web applications are those that are \navailable to the public (not only for internal use). \nThese applications are primary targets for attackers, \nand poorly coded web applications provide an easy \npath for attackers to gain access to sensitive data \nand systems.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.4.2",
    "title": "For public-facing web applications, an automated technical solution is deployed that continually detects and prevents web-based attacks, with at least the following: \u2022 Is installed in front of public-",
    "level": 3,
    "parentNumber": "6.4",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "For public-facing web applications, an automated technical solution is deployed that continually detects and prevents web-based attacks, with at least the following: \u2022 Is installed in front of public-facing web applications and is configured to detect and prevent web-based attacks. \u2022 Actively running and up to date as applicable. \u2022 Generating audit logs. \u2022 Configured to either block web-based attacks or generate an alert that is immediately investigated.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When using automated technical solutions, it is \nimportant to include processes that facilitate timely \nresponses to alerts generated by the solutions so \nthat any detected attacks can be mitigated. Such \nsolutions may also be used to automate mitigation, \nfor example rate-limiting controls, which can be \nimplemented to mitigate against brute-force attacks \nand enumeration attacks.",
    "guidanceDefinitions": "",
    "guidanceExamples": "A web application firewall (WAF), which can be either \non-premise or cloud-based, installed in front of \npublic-facing web applications to check all traffic, is \nan example of an automated technical solution that \ndetects and prevents web-based attacks (for \nexample, the attacks included in Requirement 6.2.4). \nWAFs filter and block non-essential traffic at the \napplication layer. A properly configured WAF helps to \nprevent application-layer attacks on applications that \nare improperly coded or configured.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.4.3",
    "title": "All payment page scripts that are loaded and executed in the consumer\u2019s browser are managed as follows: \u2022 A method is implemented to confirm that each script is authorized. \u2022 A method is implemented t",
    "level": 3,
    "parentNumber": "6.4",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "All payment page scripts that are loaded and executed in the consumer\u2019s browser are managed as follows: \u2022 A method is implemented to confirm that each script is authorized. \u2022 A method is implemented to assure the integrity of each script. \u2022 An inventory of all scripts is maintained with written business or technical justification as to why each is necessary.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.5",
    "title": "Changes to all system components are managed securely.",
    "level": 2,
    "parentNumber": "6",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.5.1",
    "title": "Changes to all system components in the production environment are made according to established procedures that include: \u2022 Reason for, and description of, the change. \u2022 Documentation of security impa",
    "level": 3,
    "parentNumber": "6.5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Changes to all system components in the production environment are made according to established procedures that include: \u2022 Reason for, and description of, the change. \u2022 Documentation of security impact. \u2022 Documented change approval by authorized parties. \u2022 Testing to verify that the change does not adversely impact system security. \u2022 For bespoke and custom software changes, all updates are tested for compliance with Requirement 6.2.4 before being deployed into production. \u2022 Procedures to address failures and return to a secure state.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Approval by authorized parties confirms that the \nchange is legitimate and that the change is \nsanctioned by the organization. Changes should be \napproved by individuals with the appropriate authority \nand knowledge to understand the impact of the \nchange. \nThorough testing by the entity confirms that the \nsecurity of the environment is not reduced by \nimplementing a change and that all existing security \ncontrols either remain in place or are replaced with \nequal or stronger security controls after the change. \nThe specific testing to be performed will vary \naccording to the type of change and system \ncomponent(s) affected. \nFor each change, it is important to have documented \nprocedures that address any failures and provide \ninstructions on how to return to a secure state in case \nthe change fails or adversely affects the security of \nan application or system. These procedures will allow \nthe application or system to be restored to its \nprevious secure state.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Applicable PCI DSS requirements that could be \nimpacted include, but are not limited to: \n\u2022 Network and data-flow diagrams are updated to \nreflect changes. \n\u2022 Systems are configured per configuration \nstandards, with all default passwords changed \nand unnecessary services disabled. \n\u2022 Systems are protected with required controls\u2014for \nexample, file integrity monitoring (FIM), anti\u0002malware, patches, and audit logging. \n\u2022 Sensitive authentication data is not stored, and all \naccount data storage is documented and \nincorporated into data retention policy and \nprocedures. \n\u2022 New systems are included in the quarterly \nvulnerability scanning process.\n\u2022 Systems are scanned for internal and external \nvulnerabilities after significant changes per \nRequirements 11.3.1.3 and 11.3.2.1.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.5.2",
    "title": "Upon completion of a significant change, all applicable PCI DSS requirements are confirmed to be in place on all new or changed systems and networks, and documentation is updated as applicable.",
    "level": 3,
    "parentNumber": "6.5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Upon completion of a significant change, all applicable PCI DSS requirements are confirmed to be in place on all new or changed systems and networks, and documentation is updated as applicable.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Building this validation into change management \nprocesses helps ensure that device inventories and \nconfiguration standards are kept up to date and \nsecurity controls are applied where needed.",
    "guidanceDefinitions": "Pre-production environments include development, \ntesting, user acceptance testing (UAT), etc. Even \nwhere production infrastructure is used to facilitate \ntesting or development, production environments still \nneed to be separated (logically or physically) from \npre-production functionality such that vulnerabilities \nintroduced as a result of pre-production activities do \nnot adversely affect production systems.",
    "guidanceExamples": "Applicable PCI DSS requirements that could be \nimpacted include, but are not limited to: \n\u2022 Network and data-flow diagrams are updated to \nreflect changes. \n\u2022 Systems are configured per configuration \nstandards, with all default passwords changed \nand unnecessary services disabled. \n\u2022 Systems are protected with required controls\u2014for \nexample, file integrity monitoring (FIM), anti\u0002malware, patches, and audit logging. \n\u2022 Sensitive authentication data is not stored, and all \naccount data storage is documented and \nincorporated into data retention policy and \nprocedures. \n\u2022 New systems are included in the quarterly \nvulnerability scanning process.\n\u2022 Systems are scanned for internal and external \nvulnerabilities after significant changes per \nRequirements 11.3.1.3 and 11.3.2.1.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.5.3",
    "title": "Pre-production environments are separated from production environments and the separation is enforced with access controls.",
    "level": 3,
    "parentNumber": "6.5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Pre-production environments are separated from production environments and the separation is enforced with access controls.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Organizations must clearly understand which \nenvironments are test environments or development \nenvironments and how these environments interact \non the level of networks and applications.",
    "guidanceDefinitions": "Pre-production environments include development, \ntesting, user acceptance testing (UAT), etc. Even \nwhere production infrastructure is used to facilitate \ntesting or development, production environments still \nneed to be separated (logically or physically) from \npre-production functionality such that vulnerabilities \nintroduced as a result of pre-production activities do \nnot adversely affect production systems.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.5.4",
    "title": "Roles and functions are separated between production and pre-production environments to provide accountability such that only reviewed and approved changes are deployed.",
    "level": 3,
    "parentNumber": "6.5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Roles and functions are separated between production and pre-production environments to provide accountability such that only reviewed and approved changes are deployed.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "Live PANs refer to valid PANs (not test PANs) issued \nby, or on behalf of, a payment brand. Additionally, \nwhen payment cards expire, the same PAN is often \nreused with a different expiry date. All PANs must be \nverified as being unable to conduct payment \ntransactions or pose fraud risk to the payment \nsystem before they are excluded from PCI DSS \nscope. It is the responsibility of the entity to confirm \nthat PANs are not live.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.5.5",
    "title": "Live PANs are not used in pre-production environments, except where those environments are included in the CDE and protected in accordance with all applicable PCI DSS requirements.",
    "level": 3,
    "parentNumber": "6.5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Live PANs are not used in pre-production environments, except where those environments are included in the CDE and protected in accordance with all applicable PCI DSS requirements.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "Live PANs refer to valid PANs (not test PANs) issued \nby, or on behalf of, a payment brand. Additionally, \nwhen payment cards expire, the same PAN is often \nreused with a different expiry date. All PANs must be \nverified as being unable to conduct payment \ntransactions or pose fraud risk to the payment \nsystem before they are excluded from PCI DSS \nscope. It is the responsibility of the entity to confirm \nthat PANs are not live.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "6.5.6",
    "title": "Test data and test accounts are removed from system components before the system goes into production.",
    "level": 3,
    "parentNumber": "6.5",
    "domain": "Maintain a Vulnerability Management Program",
    "requirementText": "Test data and test accounts are removed from system components before the system goes into production.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7",
    "title": "Restrict Access to System Components and Cardholder Data by Business Need to Know",
    "level": 1,
    "parentNumber": null,
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.1",
    "title": "Processes and mechanisms for restricting access to system components and cardholder data by business need to know are defined and",
    "level": 2,
    "parentNumber": "7",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 7 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "7.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 7 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures \nas needed to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as \nsoon as possible after a change occurs and not \nonly on a periodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 7 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "7.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 7 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained \nwithin separate documents. \nAs part of communicating roles and \nresponsibilities, entities can consider having \npersonnel acknowledge their acceptance and \nunderstanding of their assigned roles and \nresponsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.2",
    "title": "Access to system components and data is appropriately defined and assigned.",
    "level": 2,
    "parentNumber": "7",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.2.1",
    "title": "An access control model is defined and includes granting access as follows: \u2022 Appropriate access depending on the entity\u2019s business and access needs. \u2022 Access to system components and data resources t",
    "level": 3,
    "parentNumber": "7.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "An access control model is defined and includes granting access as follows: \u2022 Appropriate access depending on the entity\u2019s business and access needs. \u2022 Access to system components and data resources that is based on users\u2019 job classification and functions. \u2022 The least privileges required (for example, user, administrator) to perform a job function.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "A factor to consider when defining access needs \nis the separation of duties principle. This principle \nis intended to prevent fraud and misuse or theft of \nresources. For example, 1) dividing mission\u0002critical functions and information system support \nfunctions among different individuals and/or \nfunctions, 2) establishing roles such that \ninformation system support activities are \nperformed by different functions/individuals (for \nexample, system management, programming, \nconfiguration management, quality assurance and \ntesting, and network security), and 3) ensuring \nsecurity personnel administering access control \nfunctions do not also administer audit functions. \nIn environments where one individual performs \nmultiple functions, such as administration and \nsecurity operations, duties may be assigned so \nthat no single individual has end-to-end control of \na process without an independent checkpoint. For \nexample, responsibility for configuration and \nresponsibility for approving changes could be \nassigned to separate individuals.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "Access control models that entities can consider \ninclude role-based access control (RBAC) and \nattribute-based access control (ABAC). The \naccess control model used by a given entity \ndepends on their business and access needs.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 166\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nAssigning least privileges helps prevent users \nwithout sufficient knowledge about the application\nfrom incorrectly or accidentally changing \napplication configuration or altering its security \nsettings. Enforcing least privilege also helps to \nminimize the scope of damage if an unauthorized \nperson gains access to a user ID.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.2.2",
    "title": "Access is assigned to users, including privileged users, based on: \u2022 Job classification and function. \u2022 Least privileges necessary to perform job responsibilities.",
    "level": 3,
    "parentNumber": "7.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Access is assigned to users, including privileged users, based on: \u2022 Job classification and function. \u2022 Least privileges necessary to perform job responsibilities.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Access rights are granted to a user by \nassignment to one or several functions. Access is \nassigned depending on the specific user functions \nand with the minimum scope required for the job. \nWhen assigning privileged access, it is important \nto assign individuals only the privileges they need \nto perform their job (the \u201cleast privileges\u201d). For \nexample, the database administrator or backup \nadministrator should not be assigned the same \nprivileges as the overall systems administrator. \nOnce needs are defined for user functions (per \nPCI DSS requirement 7.2.1), it is easy to grant \nindividuals access according to their job \nclassification and function by using the already\u0002created roles. \nEntities may wish to consider use of Privileged \nAccess Management (PAM), which is a method to \ngrant access to privileged accounts only when \nthose privileges are required, immediately \nrevoking that access once they are no longer \nneeded.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Access control models that entities can consider \ninclude role-based access control (RBAC) and \nattribute-based access control (ABAC). The \naccess control model used by a given entity \ndepends on their business and access needs.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 166\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nAssigning least privileges helps prevent users \nwithout sufficient knowledge about the application\nfrom incorrectly or accidentally changing \napplication configuration or altering its security \nsettings. Enforcing least privilege also helps to \nminimize the scope of damage if an unauthorized \nperson gains access to a user ID.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.2.3",
    "title": "Required privileges are approved by authorized personnel.",
    "level": 3,
    "parentNumber": "7.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Required privileges are approved by authorized personnel.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When a user transfers into a new role or a new \ndepartment, typically the privileges and access \nassociated with their former role are no longer \nrequired. Continued access to privileges or \nfunctions that are no longer required may \nintroduce the risk of misuse or errors. Therefore, \nwhen responsibilities change, processes that \nrevalidate access help to ensure user access is \nappropriate for the user\u2019s new responsibilities. \nEntities can consider implementing a regular, \nrepeatable process for conducting reviews of \naccess rights, and assigning \u201cdata owners\u201d that \nare responsible for managing and monitoring \naccess to data related to their job function and \nthat also ensure user access remains current and \nappropriate. As an example, a direct manager \ncould review team access monthly, while the \nsenior manager reviews their groups\u2019 access \nquarterly, both making updates to access as \nneeded. The intent of these best practices is to \nsupport and facilitate conducting the reviews at \nleast once every 6 months.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.2.4",
    "title": "All user accounts and related access privileges, including third-party/vendor accounts, are reviewed as follows: \u2022 At least once every six months. \u2022 To ensure user accounts and access remain appropria",
    "level": 3,
    "parentNumber": "7.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All user accounts and related access privileges, including third-party/vendor accounts, are reviewed as follows: \u2022 At least once every six months. \u2022 To ensure user accounts and access remain appropriate based on job function. \u2022 Any inappropriate access is addressed. \u2022 Management acknowledges that access remains appropriate.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When a user transfers into a new role or a new \ndepartment, typically the privileges and access \nassociated with their former role are no longer \nrequired. Continued access to privileges or \nfunctions that are no longer required may \nintroduce the risk of misuse or errors. Therefore, \nwhen responsibilities change, processes that \nrevalidate access help to ensure user access is \nappropriate for the user\u2019s new responsibilities. \nEntities can consider implementing a regular, \nrepeatable process for conducting reviews of \naccess rights, and assigning \u201cdata owners\u201d that \nare responsible for managing and monitoring \naccess to data related to their job function and \nthat also ensure user access remains current and \nappropriate. As an example, a direct manager \ncould review team access monthly, while the \nsenior manager reviews their groups\u2019 access \nquarterly, both making updates to access as \nneeded. The intent of these best practices is to \nsupport and facilitate conducting the reviews at \nleast once every 6 months.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.2.5",
    "title": "All application and system accounts and related access privileges are assigned and managed as follows: \u2022 Based on the least privileges necessary for the operability of the system or application. \u2022 Acc",
    "level": 3,
    "parentNumber": "7.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All application and system accounts and related access privileges are assigned and managed as follows: \u2022 Based on the least privileges necessary for the operability of the system or application. \u2022 Access is limited to the systems, applications, or processes that specifically require their use.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities may want to consider establishing a \nbaseline when setting up these application and \nsystem accounts including the following as \napplicable to the organization: \n\u2022 Making sure that the account is not a member \nof a privileged group such as domain \nadministrators, local administrators, or root. \n\u2022 Restricting which computers the account can \nbe used on. \n\u2022 Restricting hours of use. \n\u2022 Removing any additional settings like VPN \naccess and remote access.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.2.5.1",
    "title": "All access by application and system accounts and related access privileges are reviewed as follows: \u2022 Periodically (at the frequency defined in the entity\u2019s targeted risk analysis, which is performed",
    "level": 4,
    "parentNumber": "7.2.5",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All access by application and system accounts and related access privileges are reviewed as follows: \u2022 Periodically (at the frequency defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1). \u2022 The application/system access remains appropriate for the function being performed. \u2022 Any inappropriate access is addressed. \u2022 Management acknowledges that access remains appropriate.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities may want to consider establishing a \nbaseline when setting up these application and \nsystem accounts including the following as \napplicable to the organization: \n\u2022 Making sure that the account is not a member \nof a privileged group such as domain \nadministrators, local administrators, or root. \n\u2022 Restricting which computers the account can \nbe used on. \n\u2022 Restricting hours of use. \n\u2022 Removing any additional settings like VPN \naccess and remote access.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.2.6",
    "title": "All user access to query repositories of stored cardholder data is restricted as follows: \u2022 Via applications or other programmatic methods, with access and allowed actions based on user roles and leas",
    "level": 3,
    "parentNumber": "7.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All user access to query repositories of stored cardholder data is restricted as follows: \u2022 Via applications or other programmatic methods, with access and allowed actions based on user roles and least privileges. \u2022 Only the responsible administrator(s) can directly access or query repositories of stored CHD.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Typical user actions include moving, copying, and \ndeleting data. Also consider the scope of privilege \nneeded when granting access. For example, \naccess can be granted to specific objects such as \ndata elements, files, tables, indexes, views, and \nstored routines. Granting access to repositories of \ncardholder data should follow the same process \nas all other granted access, meaning that it is \nbased on roles, with only the privileges assigned \nto each user that are needed to perform their job \nfunctions.",
    "guidanceDefinitions": "\u201cProgrammatic methods\u201d means granting access \nthrough means such as database stored \nprocedures that allow users to perform controlled \nactions to data in a table, rather than via direct, \nunfiltered access to the data repository by end \nusers (except for the responsible administrator(s), \nwho need direct access to the database for their \nadministrative duties).",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.3",
    "title": "Access to system components and data is managed via an access control system(s).",
    "level": 2,
    "parentNumber": "7",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.3.1",
    "title": "An access control system(s) is in place that restricts access based on a user\u2019s need to know and covers all system components.",
    "level": 3,
    "parentNumber": "7.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "An access control system(s) is in place that restricts access based on a user\u2019s need to know and covers all system components.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to check the default configuration of \naccess control systems because some are set by \ndefault to \u201callow all,\u201d thereby permitting access \nunless/until a rule is written to specifically deny it.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.3.2",
    "title": "The access control system(s) is configured to enforce permissions assigned to individuals, applications, and systems based on job classification and function.",
    "level": 3,
    "parentNumber": "7.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "The access control system(s) is configured to enforce permissions assigned to individuals, applications, and systems based on job classification and function.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to check the default configuration of \naccess control systems because some are set by \ndefault to \u201callow all,\u201d thereby permitting access \nunless/until a rule is written to specifically deny it.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "7.3.3",
    "title": "The access control system(s) is set to \u201cdeny all\u201d by default.",
    "level": 3,
    "parentNumber": "7.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "The access control system(s) is set to \u201cdeny all\u201d by default.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to check the default configuration of \naccess control systems because some are set by \ndefault to \u201callow all,\u201d thereby permitting access \nunless/until a rule is written to specifically deny it.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8",
    "title": "Identify Users and Authenticate Access to System Components",
    "level": 1,
    "parentNumber": null,
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.1",
    "title": "Processes and mechanisms for identifying users and authenticating access to system components are defined and understood.",
    "level": 2,
    "parentNumber": "8",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 8 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "8.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 8 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures \nas needed to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as \nsoon as possible after a change occurs and not \nonly on a periodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 8 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "8.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 8 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained \nwithin separate documents. \nAs part of communicating roles and \nresponsibilities, entities can consider having \npersonnel acknowledge their acceptance and \nunderstanding of their assigned roles and \nresponsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2",
    "title": "User identification and related accounts for users and administrators are strictly managed throughout an account\u2019s lifecycle.",
    "level": 2,
    "parentNumber": "8",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2.1",
    "title": "All users are assigned a unique ID before access to system components or cardholder data is allowed.",
    "level": 3,
    "parentNumber": "8.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All users are assigned a unique ID before access to system components or cardholder data is allowed.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "If shared IDs are used for any reason, strong \nmanagement controls need to be established to \nmaintain individual accountability and traceability. \n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2.2",
    "title": "Group, shared, or generic IDs, or other shared authentication credentials are only used when necessary on an exception basis, and are managed as follows: \u2022 ID use is prevented unless needed for an exc",
    "level": 3,
    "parentNumber": "8.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Group, shared, or generic IDs, or other shared authentication credentials are only used when necessary on an exception basis, and are managed as follows: \u2022 ID use is prevented unless needed for an exceptional circumstance. \u2022 Use is limited to the time needed for the exceptional circumstance. \u2022 Business justification for use is documented. \u2022 Use is explicitly approved by management. \u2022 Individual user identity is confirmed before access to an account is granted. \u2022 Every action taken is attributable to an individual user.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "If shared IDs are used for any reason, strong \nmanagement controls need to be established to \nmaintain individual accountability and traceability. \n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2.3",
    "title": "Additional requirement for service providers only: Service providers with remote access to customer premises use unique authentication factors for each customer premises.",
    "level": 3,
    "parentNumber": "8.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Additional requirement for service providers only: Service providers with remote access to customer premises use unique authentication factors for each customer premises.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2.4",
    "title": "Addition, deletion, and modification of user IDs, authentication factors, and other identifier objects are managed as follows: \u2022 Authorized with the appropriate approval. \u2022 Implemented with only the p",
    "level": 3,
    "parentNumber": "8.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Addition, deletion, and modification of user IDs, authentication factors, and other identifier objects are managed as follows: \u2022 Authorized with the appropriate approval. \u2022 Implemented with only the privileges specified on the documented approval.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where it may be reasonably anticipated that an \naccount will not be used for an extended period of \ntime, such as an extended leave of absence, the \naccount should be disabled as soon as the leave \nbegins, rather than waiting 90 days.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2.5",
    "title": "Access for terminated users is immediately revoked.",
    "level": 3,
    "parentNumber": "8.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Access for terminated users is immediately revoked.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where it may be reasonably anticipated that an \naccount will not be used for an extended period of \ntime, such as an extended leave of absence, the \naccount should be disabled as soon as the leave \nbegins, rather than waiting 90 days.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2.6",
    "title": "Inactive user accounts are removed or disabled within 90 days of inactivity.",
    "level": 3,
    "parentNumber": "8.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Inactive user accounts are removed or disabled within 90 days of inactivity.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where it may be reasonably anticipated that an \naccount will not be used for an extended period of \ntime, such as an extended leave of absence, the \naccount should be disabled as soon as the leave \nbegins, rather than waiting 90 days.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2.7",
    "title": "Accounts used by third parties to access, support, or maintain system components via remote access are managed as follows: \u2022 Enabled only during the time period needed and disabled when not in use. \u2022 ",
    "level": 3,
    "parentNumber": "8.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Accounts used by third parties to access, support, or maintain system components via remote access are managed as follows: \u2022 Enabled only during the time period needed and disabled when not in use. \u2022 Use is monitored for unexpected activity.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where it may be reasonably anticipated that an \naccount will not be used for an extended period of \ntime, such as an extended leave of absence, the \naccount should be disabled as soon as the leave \nbegins, rather than waiting 90 days.",
    "guidanceDefinitions": "",
    "guidanceExamples": "One way to meet this requirement is to configure \nan automated screensaver to launch whenever \nthe console is idle for 15 minutes and requiring \nthe logged-in user to enter their password to \nunlock the screen.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.2.8",
    "title": "If a user session has been idle for more than 15 minutes, the user is required to re-authenticate to re-activate the terminal or session.",
    "level": 3,
    "parentNumber": "8.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "If a user session has been idle for more than 15 minutes, the user is required to re-authenticate to re-activate the terminal or session.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The re-authentication can be applied either at the \nsystem level to protect all sessions running on \nthat machine or at the application level.\nEntities may also want to consider staging \ncontrols in succession to further restrict the \naccess of an unattended session as time passes. \nFor example, the screensaver may activate after \n15 minutes and log off the user after an hour.\nHowever, timeout controls must balance the risk \nof access and exposure with the impact to the \nuser and purpose of the access. \nIf a user needs to run a program from an \nunattended computer, the user can log in to the \ncomputer to initiate the program, and then \u201clock\u201d \nthe computer so that no one else can use the \nuser\u2019s login while the computer is unattended.",
    "guidanceDefinitions": "",
    "guidanceExamples": "One way to meet this requirement is to configure \nan automated screensaver to launch whenever \nthe console is idle for 15 minutes and requiring \nthe logged-in user to enter their password to \nunlock the screen.",
    "guidanceFurtherInformation": "See fidoalliance.org for more information about \nusing tokens, smart cards, or biometrics as \nauthentication factors."
  },
  {
    "number": "8.3",
    "title": "Strong authentication for users and administrators is established and managed.",
    "level": 2,
    "parentNumber": "8",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.3.1",
    "title": "All user access to system components for users and administrators is authenticated via at least one of the following authentication factors: \u2022 Something you know, such as a password or passphrase. \u2022 S",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All user access to system components for users and administrators is authenticated via at least one of the following authentication factors: \u2022 Something you know, such as a password or passphrase. \u2022 Something you have, such as a token device or smart card. \u2022 Something you are, such as a biometric element.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "A common approach for a malicious individual to \ncompromise a system is to exploit weak or \nnonexistent authentication factors (for example, \npasswords/passphrases). Requiring strong \nauthentication factors helps protect against this \nattack.",
    "guidanceDefinitions": "",
    "guidanceExamples": "One way to meet this requirement is to configure \nan automated screensaver to launch whenever \nthe console is idle for 15 minutes and requiring \nthe logged-in user to enter their password to \nunlock the screen.",
    "guidanceFurtherInformation": "See fidoalliance.org for more information about \nusing tokens, smart cards, or biometrics as \nauthentication factors."
  },
  {
    "number": "8.3.2",
    "title": "Strong cryptography is used to render all authentication factors unreadable during transmission and storage on all system components.",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Strong cryptography is used to render all authentication factors unreadable during transmission and storage on all system components.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Modifications to authentication factors for which \nuser identity should be verified include but are not \nlimited to performing password resets, \nprovisioning new hardware or software tokens, \nand generating new keys.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to verify a user\u2019s identity include a secret \nquestion/answer, knowledge-based information, \nand calling the user back at a known and \npreviously established phone number.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.3.3",
    "title": "User identity is verified before modifying any authentication factor.",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "User identity is verified before modifying any authentication factor.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Modifications to authentication factors for which \nuser identity should be verified include but are not \nlimited to performing password resets, \nprovisioning new hardware or software tokens, \nand generating new keys.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to verify a user\u2019s identity include a secret \nquestion/answer, knowledge-based information, \nand calling the user back at a known and \npreviously established phone number.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.3.4",
    "title": "Invalid authentication attempts are limited by: \u2022 Locking out the user ID after not more than 10 attempts. \u2022 Setting the lockout duration to a minimum of 30 minutes or until the user\u2019s identity is con",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Invalid authentication attempts are limited by: \u2022 Locking out the user ID after not more than 10 attempts. \u2022 Setting the lockout duration to a minimum of 30 minutes or until the user\u2019s identity is confirmed.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Before reactivating a locked account, the user\u2019s \nidentity should be confirmed. For example, the \nadministrator or help desk personnel can validate \nthat the actual account owner is requesting \nreactivation, or there may be password reset self\u0002service mechanisms that the account owner uses \nto verify their identity.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to verify a user\u2019s identity include a secret \nquestion/answer, knowledge-based information, \nand calling the user back at a known and \npreviously established phone number.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.3.5",
    "title": "If passwords/passphrases are used as authentication factors to meet Requirement 8.3.1, they are set and reset for each user as follows: \u2022 Set to a unique value for first-time use and upon reset. \u2022 For",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "If passwords/passphrases are used as authentication factors to meet Requirement 8.3.1, they are set and reset for each user as follows: \u2022 Set to a unique value for first-time use and upon reset. \u2022 Forced to be changed immediately after the first use.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Before reactivating a locked account, the user\u2019s \nidentity should be confirmed. For example, the \nadministrator or help desk personnel can validate \nthat the actual account owner is requesting \nreactivation, or there may be password reset self\u0002service mechanisms that the account owner uses \nto verify their identity.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.3.6",
    "title": "If passwords/passphrases are used as authentication factors to meet Requirement 8.3.1, they meet the following minimum level of complexity: \u2022 A minimum length of 12 characters (or IF the system does n",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "If passwords/passphrases are used as authentication factors to meet Requirement 8.3.1, they meet the following minimum level of complexity: \u2022 A minimum length of 12 characters (or IF the system does not support 12 characters, a minimum length of eight characters). \u2022 Contain both numeric and alphabetic characters.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Password/passphrase strength is dependent on \npassword/passphrase complexity, length, and \nrandomness. Passwords/passphrases should be \nsufficiently complex, so they are impractical for an \nattacker to guess or otherwise discover its value. \nEntities can consider adding increased complexity \nby requiring the use of special characters and \nupper- and lower-case characters, in addition to \nthe minimum standards outlined by this \nrequirement. Additional complexity increases the \ntime required for offline brute force attacks of \nhashed passwords/passphrases. \nAnother option for increasing the resistance of \npasswords to guessing attacks is by comparing \nproposed password/passphrases to a bad \npassword list and having users provide new \npasswords for any passwords found on the list.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.3.7",
    "title": "Individuals are not allowed to submit a new password/passphrase that is the same as any of the last four passwords/passphrases used.",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Individuals are not allowed to submit a new password/passphrase that is the same as any of the last four passwords/passphrases used.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Guidance on selecting strong passwords may \ninclude suggestions to help personnel select \nhard-to-guess passwords that do not contain \ndictionary words or information about the user, \nsuch as the user ID, names of family members, \ndate of birth, etc.\nGuidance for protecting authentication factors \nmay include not writing down passwords or not \nsaving them in insecure files, and being alert to \nmalicious individuals who may try to exploit their \npasswords (for example, by calling an employee \nand asking for their password so the caller can \n\u201ctroubleshoot a problem\u201d). \nAlternatively, entities can implement processes to \nconfirm passwords meet password policy, for \nexample, by comparing password choices to a list \nof unacceptable passwords and having users \nchoose a new password for any that match with \none on the list. Instructing users to change \npasswords if there is a chance the password is no \nlonger secure can prevent malicious users from \nusing a legitimate password to gain unauthorized \naccess.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.3.8",
    "title": "Authentication policies and procedures are documented and communicated to all users including: \u2022 Guidance on selecting strong authentication factors. \u2022 Guidance for how users should protect their auth",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Authentication policies and procedures are documented and communicated to all users including: \u2022 Guidance on selecting strong authentication factors. \u2022 Guidance for how users should protect their authentication factors. \u2022 Instructions not to reuse previously used passwords/passphrases. \u2022 Instructions to change passwords/passphrases if there is any suspicion or knowledge that the password/passphrases have been compromised and how to report the incident.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Guidance on selecting strong passwords may \ninclude suggestions to help personnel select \nhard-to-guess passwords that do not contain \ndictionary words or information about the user, \nsuch as the user ID, names of family members, \ndate of birth, etc.\nGuidance for protecting authentication factors \nmay include not writing down passwords or not \nsaving them in insecure files, and being alert to \nmalicious individuals who may try to exploit their \npasswords (for example, by calling an employee \nand asking for their password so the caller can \n\u201ctroubleshoot a problem\u201d). \nAlternatively, entities can implement processes to \nconfirm passwords meet password policy, for \nexample, by comparing password choices to a list \nof unacceptable passwords and having users \nchoose a new password for any that match with \none on the list. Instructing users to change \npasswords if there is a chance the password is no \nlonger secure can prevent malicious users from \nusing a legitimate password to gain unauthorized \naccess.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.3.9",
    "title": "If passwords/passphrases are used as the only authentication factor for user access (i.e., in any single-factor authentication implementation) then either: \u2022 Passwords/passphrases are changed at least",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "If passwords/passphrases are used as the only authentication factor for user access (i.e., in any single-factor authentication implementation) then either: \u2022 Passwords/passphrases are changed at least once every 90 days, OR \u2022 The security posture of accounts is dynamically analyzed, and real-time access to resources is automatically determined accordingly.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Passwords/passphrases that are valid for a long \ntime without a change provide malicious \nindividuals with more time to break the \npassword/phrase. Periodically changing \npasswords offers less time for a malicious \nindividual to crack a password/passphrase and \nless time to use a compromised password.\nUsing a password/passphrase as the only \nauthentication factor provides a single point of \nfailure if compromised. Therefore, in these \nimplementations, controls are needed to minimize \nhow long malicious activity could occur via a \ncompromised password/passphrase. \n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For information about using dynamic analysis to \nmanage user access to resources, see NIST SP \n800-207 Zero Trust Architecture. \n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 195\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nUsing a password/passphrase as the only \nauthentication factor provides a single point of \nfailure if compromised. Therefore, in these \nimplementations, controls are needed to minimize \nhow long malicious activity could occur via a \ncompromised password/passphrase."
  },
  {
    "number": "8.3.10",
    "title": "Additional requirement for service providers only: If passwords/passphrases are used as the only authentication factor for customer user access to cardholder data (i.e., in any single\u0002factor authentic",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Additional requirement for service providers only: If passwords/passphrases are used as the only authentication factor for customer user access to cardholder data (i.e., in any single\u0002factor authentication implementation), then guidance is provided to customer users including: \u2022 Guidance for customers to change their user passwords/passphrases periodically. \u2022 Guidance as to when, and under what circumstances, passwords/passphrases are to be changed.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Passwords/passphrases that are valid for a long \ntime without a change provide malicious \nindividuals with more time to break the \npassword/phrase. Periodically changing \npasswords offers less time for a malicious \nindividual to crack a password/passphrase and \nless time to use a compromised password.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For information about using dynamic analysis to \nmanage user access to resources, see NIST SP \n800-207 Zero Trust Architecture. \n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 195\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nUsing a password/passphrase as the only \nauthentication factor provides a single point of \nfailure if compromised. Therefore, in these \nimplementations, controls are needed to minimize \nhow long malicious activity could occur via a \ncompromised password/passphrase."
  },
  {
    "number": "8.3.10.1",
    "title": "Additional requirement for service providers only: If passwords/passphrases are used as the only authentication factor for customer user access (i.e., in any single-factor authentication implementatio",
    "level": 4,
    "parentNumber": "8.3.10",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Additional requirement for service providers only: If passwords/passphrases are used as the only authentication factor for customer user access (i.e., in any single-factor authentication implementation) then either: \u2022 Passwords/passphrases are changed at least once every 90 days, OR \u2022 The security posture of accounts is dynamically analyzed, and real-time access to resources is automatically determined accordingly.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Passwords/passphrases that are valid for a long \ntime without a change provide malicious \nindividuals with more time to break the \npassword/phrase. Periodically changing \npasswords offers less time for a malicious \nindividual to crack a password/passphrase and \nless time to use a compromised password.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For information about using dynamic analysis to \nmanage user access to resources, refer to NIST \nSP 800-207 Zero Trust Architecture."
  },
  {
    "number": "8.3.11",
    "title": "Where authentication factors such as physical or logical security tokens, smart cards, or certificates are used: \u2022 Factors are assigned to an individual user and not shared among multiple users. \u2022 Phy",
    "level": 3,
    "parentNumber": "8.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Where authentication factors such as physical or logical security tokens, smart cards, or certificates are used: \u2022 Factors are assigned to an individual user and not shared among multiple users. \u2022 Physical and/or logical controls ensure only the intended user can use that factor to gain access.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Having physical and/or logical controls (for \nexample, a PIN, biometric data, or a password) to \nuniquely authenticate the user of the account will \nprevent unauthorized users from gaining access \nto the user account through use of a shared \nauthentication factor.",
    "guidanceDefinitions": "Using one factor twice (for example, using two \nseparate passwords) is not considered multi\u0002factor authentication.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.4",
    "title": "Multi-factor authentication (MFA) is implemented to secure access into the CDE.",
    "level": 2,
    "parentNumber": "8",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.4.1",
    "title": "MFA is implemented for all non-console access into the CDE for personnel with administrative access.",
    "level": 3,
    "parentNumber": "8.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "MFA is implemented for all non-console access into the CDE for personnel with administrative access.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Implementing MFA for non-console administrative \naccess to in-scope system components that are \nnot part of the CDE will help prevent unauthorized \nusers from using a single factor to gain access \nand compromise in-scope system components.",
    "guidanceDefinitions": "Using one factor twice (for example, using two \nseparate passwords) is not considered multi\u0002factor authentication.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.4.2",
    "title": "MFA is implemented for all non-console access into the CDE.",
    "level": 3,
    "parentNumber": "8.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "MFA is implemented for all non-console access into the CDE.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Implementing MFA for non-console administrative \naccess to in-scope system components that are \nnot part of the CDE will help prevent unauthorized \nusers from using a single factor to gain access \nand compromise in-scope system components.",
    "guidanceDefinitions": "Using one factor twice (for example, using two \nseparate passwords) is not considered multi\u0002factor authentication.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.4.3",
    "title": "MFA is implemented for all remote access originating from outside the entity\u2019s network that could access or impact the CDE.",
    "level": 3,
    "parentNumber": "8.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "MFA is implemented for all remote access originating from outside the entity\u2019s network that could access or impact the CDE.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "Multi-factor authentication (MFA) requires an \nindividual to present a minimum of two of the \nthree authentication factors specified in \nRequirement 8.3.1 before access is granted. \nUsing one factor twice (for example, using two \nseparate passwords) is not considered multi\u0002factor authentication.\n(continued on next page)",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.5",
    "title": "Multi-factor authentication (MFA) systems are configured to prevent misuse.",
    "level": 2,
    "parentNumber": "8",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.5.1",
    "title": "MFA systems are implemented as follows: \u2022 The MFA system is not susceptible to replay attacks. \u2022 MFA systems cannot be bypassed by any users, including administrative users unless specifically documen",
    "level": 3,
    "parentNumber": "8.5",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "MFA systems are implemented as follows: \u2022 The MFA system is not susceptible to replay attacks. \u2022 MFA systems cannot be bypassed by any users, including administrative users unless specifically documented, and authorized by management on an exception basis, for a limited time period. \u2022 At least two different types of authentication factors are used. \u2022 Success of all authentication factors is required before access is granted.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where possible, configure system and application \naccounts to disallow interactive login to prevent \nunauthorized individuals from logging in and using \nthe account with its associated system privileges, \nand to limit the machines and devices on which \nthe account can be used.",
    "guidanceDefinitions": "Using one type of factor twice (for example, using \ntwo separate passwords) is not considered multi\u0002factor authentication.\nA replay attack is when an attacker intercepts a \nvalid transmission of data and then resends or \nredirects this communication for malicious \npurposes. In MFA implementations, replay attacks \nare typically used to gain unauthorized access by \nleveraging legitimate credentials.",
    "guidanceExamples": "Examples of methods to help protect against \nreplay attacks include, but are not limited to: \n\u2022 Unique session identifiers and session keys\n\u2022 Timestamps\n\u2022 Time-based, one-time passwords or \npasscodes\n\u2022 Anti-replay mechanisms that detect and reject \nduplicated authentication attempts. \n(continued on next page)",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.6",
    "title": "Use of application and system accounts and associated authentication factors is strictly managed.",
    "level": 2,
    "parentNumber": "8",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.6.1",
    "title": "If accounts used by systems or applications can be used for interactive login, they are managed as follows: \u2022 Interactive use is prevented unless needed for an exceptional circumstance. \u2022 Interactive ",
    "level": 3,
    "parentNumber": "8.6",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "If accounts used by systems or applications can be used for interactive login, they are managed as follows: \u2022 Interactive use is prevented unless needed for an exceptional circumstance. \u2022 Interactive use is limited to the time needed for the exceptional circumstance. \u2022 Business justification for interactive use is documented. \u2022 Interactive use is explicitly approved by management. \u2022 Individual user identity is confirmed before access to account is granted. \u2022 Every action taken is attributable to an individual user.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where possible, configure system and application \naccounts to disallow interactive login to prevent \nunauthorized individuals from logging in and using \nthe account with its associated system privileges, \nand to limit the machines and devices on which \nthe account can be used.",
    "guidanceDefinitions": "Interactive login is the ability for a person to log \ninto a system or application account in the same \nmanner as a normal user account. Using system \nand application accounts this way means there is \nno accountability and traceability of actions taken \nby the user.\nRefer to Appendix G for the definition of \n\u201capplication and system accounts.\u201d",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.6.2",
    "title": "Passwords/passphrases for any application and system accounts that can be used for interactive login are not hard coded in scripts, configuration/property files, or bespoke and custom source code.",
    "level": 3,
    "parentNumber": "8.6",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Passwords/passphrases for any application and system accounts that can be used for interactive login are not hard coded in scripts, configuration/property files, or bespoke and custom source code.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Changing these values due to suspected or \nconfirmed disclosure can be particularly difficult to \nimplement. \nTools can facilitate both management and \nsecurity of authentication factors for application \nand system accounts. For example, consider \npassword vaults or other system-managed \ncontrols.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "8.6.3",
    "title": "Passwords/passphrases for any application and system accounts are protected against misuse as follows: \u2022 Passwords/passphrases are changed periodically (at the frequency defined in the entity\u2019s target",
    "level": 3,
    "parentNumber": "8.6",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Passwords/passphrases for any application and system accounts are protected against misuse as follows: \u2022 Passwords/passphrases are changed periodically (at the frequency defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1) and upon suspicion or confirmation of compromise. \u2022 Passwords/passphrases are constructed with sufficient complexity appropriate for how frequently the entity changes the passwords/passphrases.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider the following risk factors \nwhen determining how to protect application and \nsystem passwords/passphrases against misuse: \n\u2022 How securely the passwords/passphrases are \nstored (for example, whether they are stored \nin a password vault).\n\u2022 Staff turnover.\n\u2022 The number of people with access to the \nauthentication factor. \n\u2022 Whether the account can be used for \ninteractive login.\n\u2022 Whether the security posture of accounts is \ndynamically analyzed, and real-time access to \nresources is automatically determined \naccordingly (see Requirement 8.3.9).\nAll these elements affect the level of risk for \napplication and system accounts and might \nimpact the security of systems accessed by the \nsystem and application accounts. \n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9",
    "title": "Restrict Physical Access to Cardholder Data",
    "level": 1,
    "parentNumber": null,
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.1",
    "title": "Processes and mechanisms for restricting physical access to cardholder data are defined and understood.",
    "level": 2,
    "parentNumber": "9",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 9 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "9.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 9 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures \nas needed to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as \nsoon as possible after a change occurs and not \nonly on a periodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives. \nPolicies and procedures, including updates, are \nactively communicated to all affected personnel, \nand are supported by operating procedures \ndescribing how to perform activities.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 9 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "9.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 9 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained \nwithin separate documents. \nAs part of communicating roles and \nresponsibilities, entities can consider having \npersonnel acknowledge their acceptance and \nunderstanding of their assigned roles and \nresponsibilities. \nA method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceDefinitions": "",
    "guidanceExamples": "Facility entry controls include physical security \ncontrols at each computer room, data center, and \nother physical areas with systems in the CDE. It \ncan also include badge readers or other devices \nthat manage physical access controls, such as \nlock and key with a current list of all individuals \nholding the keys.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.2",
    "title": "Physical access controls manage entry into facilities and systems containing cardholder data.",
    "level": 2,
    "parentNumber": "9",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.2.1",
    "title": "Appropriate facility entry controls are in place to restrict physical access to systems in the CDE.",
    "level": 3,
    "parentNumber": "9.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Appropriate facility entry controls are in place to restrict physical access to systems in the CDE.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Whichever mechanism meets this requirement, it \nmust be sufficient for the organization to verify \nthat only authorized personnel are granted \naccess.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Facility entry controls include physical security \ncontrols at each computer room, data center, and \nother physical areas with systems in the CDE. It \ncan also include badge readers or other devices \nthat manage physical access controls, such as \nlock and key with a current list of all individuals \nholding the keys.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.2.1.1",
    "title": "Individual physical access to sensitive areas within the CDE is monitored with either video cameras or physical access control mechanisms (or both) as follows: \u2022 Entry and exit points to/from sensitiv",
    "level": 4,
    "parentNumber": "9.2.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Individual physical access to sensitive areas within the CDE is monitored with either video cameras or physical access control mechanisms (or both) as follows: \u2022 Entry and exit points to/from sensitive areas within the CDE are monitored. \u2022 Monitoring devices or mechanisms are protected from tampering or disabling. \u2022 Collected data is reviewed and correlated with other entries. \u2022 Collected data is stored for at least three months, unless otherwise restricted by law.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Whichever mechanism meets this requirement, it \nshould effectively monitor all entry and exit points \nto sensitive areas. \nCriminals attempting to gain physical access to \nsensitive areas will often try to disable or bypass \nthe monitoring controls. To protect these controls \nfrom tampering, video cameras could be \npositioned so they are out of reach and/or be \nmonitored to detect tampering. Similarly, physical \naccess control mechanisms could be monitored \nor have physical protections installed to prevent \nthem from being damaged or disabled by \nmalicious individuals.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Facility entry controls include physical security \ncontrols at each computer room, data center, and \nother physical areas with systems in the CDE. It \ncan also include badge readers or other devices \nthat manage physical access controls, such as \nlock and key with a current list of all individuals \nholding the keys.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.2.2",
    "title": "Physical and/or logical controls are implemented to restrict use of publicly accessible network jacks within the facility.",
    "level": 3,
    "parentNumber": "9.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Physical and/or logical controls are implemented to restrict use of publicly accessible network jacks within the facility.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Whether logical or physical controls, or a \ncombination of both, are used, they should \nprevent an individual or device that is not explicitly \nauthorized from being able to connect to the \nnetwork.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to meet this requirement include network \njacks located in public areas and areas accessible \nto visitors could be disabled and only enabled \nwhen network access is explicitly authorized. \nAlternatively, processes could be implemented to \nensure that visitors are escorted at all times in \nareas with active network jacks.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.2.3",
    "title": "Physical access to wireless access points, gateways, networking/communications hardware, and telecommunication lines within the facility is restricted.",
    "level": 3,
    "parentNumber": "9.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Physical access to wireless access points, gateways, networking/communications hardware, and telecommunication lines within the facility is restricted.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Whether logical or physical controls, or a \ncombination of both, are used, they should \nprevent an individual or device that is not explicitly \nauthorized from being able to connect to the \nnetwork.",
    "guidanceDefinitions": "Refer to Appendix G for the definition of \n\u201cpersonnel.\u201d",
    "guidanceExamples": "Methods to meet this requirement include network \njacks located in public areas and areas accessible \nto visitors could be disabled and only enabled \nwhen network access is explicitly authorized. \nAlternatively, processes could be implemented to \nensure that visitors are escorted at all times in \nareas with active network jacks.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.2.4",
    "title": "Access to consoles in sensitive areas is restricted via locking when not in use.",
    "level": 3,
    "parentNumber": "9.2",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Access to consoles in sensitive areas is restricted via locking when not in use.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to visually identify the personnel \nthat are physically present, and whether the \nindividual is a visitor or an employee.",
    "guidanceDefinitions": "Refer to Appendix G for the definition of \n\u201cpersonnel.\u201d",
    "guidanceExamples": "One way to identify personnel is to assign them \nbadges.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.3",
    "title": "Physical access for personnel and visitors is authorized and managed.",
    "level": 2,
    "parentNumber": "9",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.3.1",
    "title": "Procedures are implemented for authorizing and managing physical access of personnel to the CDE, including: \u2022 Identifying personnel. \u2022 Managing changes to an individual\u2019s physical access requirements.",
    "level": 3,
    "parentNumber": "9.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Procedures are implemented for authorizing and managing physical access of personnel to the CDE, including: \u2022 Identifying personnel. \u2022 Managing changes to an individual\u2019s physical access requirements. \u2022 Revoking or terminating personnel identification. \u2022 Limiting access to the identification process or system to authorized personnel.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to visually identify the personnel \nthat are physically present, and whether the \nindividual is a visitor or an employee.",
    "guidanceDefinitions": "Refer to Appendix G for the definition of \n\u201cpersonnel.\u201d",
    "guidanceExamples": "One way to identify personnel is to assign them \nbadges.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.3.1.1",
    "title": "Physical access to sensitive areas within the CDE for personnel is controlled as follows: \u2022 Access is authorized and based on individual job function. \u2022 Access is revoked immediately upon termination.",
    "level": 4,
    "parentNumber": "9.3.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Physical access to sensitive areas within the CDE for personnel is controlled as follows: \u2022 Access is authorized and based on individual job function. \u2022 Access is revoked immediately upon termination. \u2022 All physical access mechanisms, such as keys, access cards, etc., are returned or disabled upon termination.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Where possible, organizations should have \npolicies and procedures to ensure that before \npersonnel leaving the organization, all physical \naccess mechanisms are returned, or disabled as \nsoon as possible upon their departure. This will \nensure personnel cannot gain physical access to \nsensitive areas once their employment has \nended.",
    "guidanceDefinitions": "Refer to Appendix G for the definition of \n\u201cpersonnel.\u201d",
    "guidanceExamples": "One way to identify personnel is to assign them \nbadges.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.3.2",
    "title": "Procedures are implemented for authorizing and managing visitor access to the CDE, including: \u2022 Visitors are authorized before entering. \u2022 Visitors are escorted at all times. \u2022 Visitors are clearly id",
    "level": 3,
    "parentNumber": "9.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Procedures are implemented for authorizing and managing visitor access to the CDE, including: \u2022 Visitors are authorized before entering. \u2022 Visitors are escorted at all times. \u2022 Visitors are clearly identified and given a badge or other identification that expires. \u2022 Visitor badges or other identification visibly distinguishes visitors from personnel.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "Refer to Appendix G for the definition of \u201cvisitor.\u201d",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.3.3",
    "title": "Visitor badges or identification are surrendered or deactivated before visitors leave the facility or at the date of expiration.",
    "level": 3,
    "parentNumber": "9.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Visitor badges or identification are surrendered or deactivated before visitors leave the facility or at the date of expiration.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When logging the date and time of visit, including \nboth in and out times is considered a best \npractice, since it provides helpful tracking \ninformation and provides assurance that a visitor \nhas left at the end of the day. It is also good to \nverify that a visitor\u2019s ID (driver\u2019s license, etc.) \nmatches the name they put on the visitor log.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.3.4",
    "title": "Visitor logs are used to maintain a physical record of visitor activity both within the facility and within sensitive areas, including: \u2022 The visitor\u2019s name and the organization represented. \u2022 The dat",
    "level": 3,
    "parentNumber": "9.3",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Visitor logs are used to maintain a physical record of visitor activity both within the facility and within sensitive areas, including: \u2022 The visitor\u2019s name and the organization represented. \u2022 The date and time of the visit. \u2022 The name of the personnel authorizing physical access. \u2022 Retaining the log for at least three months, unless otherwise restricted by law.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When logging the date and time of visit, including \nboth in and out times is considered a best \npractice, since it provides helpful tracking \ninformation and provides assurance that a visitor \nhas left at the end of the day. It is also good to \nverify that a visitor\u2019s ID (driver\u2019s license, etc.) \nmatches the name they put on the visitor log.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.4",
    "title": "Media with cardholder data is securely stored, accessed, distributed, and destroyed.",
    "level": 2,
    "parentNumber": "9",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.4.1",
    "title": "All media with cardholder data is physically secured.",
    "level": 3,
    "parentNumber": "9.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All media with cardholder data is physically secured.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "For secure storage of backup media, a good \npractice is to store media in an off-site facility, \nsuch as an alternate or backup site or commercial \nstorage facility.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.4.1.1",
    "title": "Offline media backups with cardholder data are stored in a secure location.",
    "level": 4,
    "parentNumber": "9.4.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Offline media backups with cardholder data are stored in a secure location.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "For secure storage of backup media, a good \npractice is to store media in an off-site facility, \nsuch as an alternate or backup site or commercial \nstorage facility.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.4.1.2",
    "title": "The security of the offline media backup location(s) with cardholder data is reviewed at least once every 12 months.",
    "level": 4,
    "parentNumber": "9.4.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "The security of the offline media backup location(s) with cardholder data is reviewed at least once every 12 months.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "For secure storage of backup media, a good \npractice is to store media in an off-site facility, \nsuch as an alternate or backup site or commercial \nstorage facility.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.4.2",
    "title": "All media with cardholder data is classified in accordance with the sensitivity of the data.",
    "level": 3,
    "parentNumber": "9.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "All media with cardholder data is classified in accordance with the sensitivity of the data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important that media be identified such that \nits classification status is apparent. This does not \nmean however that the media needs to have a \n\u201cconfidential\u201d label.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.4.3",
    "title": "Media with cardholder data sent outside the facility is secured as follows: \u2022 Media sent outside the facility is logged. \u2022 Media is sent by secured courier or other delivery method that can be accurat",
    "level": 3,
    "parentNumber": "9.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Media with cardholder data sent outside the facility is secured as follows: \u2022 Media sent outside the facility is logged. \u2022 Media is sent by secured courier or other delivery method that can be accurately tracked. \u2022 Offsite tracking logs include details about media location.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important that media be identified such that \nits classification status is apparent. This does not \nmean however that the media needs to have a \n\u201cconfidential\u201d label.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.4.4",
    "title": "Management approves all media with cardholder data that is moved outside the facility (including when media is distributed to individuals).",
    "level": 3,
    "parentNumber": "9.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Management approves all media with cardholder data that is moved outside the facility (including when media is distributed to individuals).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.4.5",
    "title": "Inventory logs of all electronic media with cardholder data are maintained.",
    "level": 3,
    "parentNumber": "9.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Inventory logs of all electronic media with cardholder data are maintained.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Consider \u201cto-be-shredded\u201d containers with a lock \nthat prevents access to its contents or that \nphysically prevent access to the inside of the \ncontainer.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See NIST Special Publication 800-88, Revision 1: \nGuidelines for Media Sanitization."
  },
  {
    "number": "9.4.5.1",
    "title": "Inventories of electronic media with cardholder data are conducted at least once every 12 months.",
    "level": 4,
    "parentNumber": "9.4.5",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Inventories of electronic media with cardholder data are conducted at least once every 12 months.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Consider \u201cto-be-shredded\u201d containers with a lock \nthat prevents access to its contents or that \nphysically prevent access to the inside of the \ncontainer.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See NIST Special Publication 800-88, Revision 1: \nGuidelines for Media Sanitization."
  },
  {
    "number": "9.4.6",
    "title": "Hard-copy materials with cardholder data are destroyed when no longer needed for business or legal reasons, as follows: \u2022 Materials are cross-cut shredded, incinerated, or pulped so that cardholder da",
    "level": 3,
    "parentNumber": "9.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Hard-copy materials with cardholder data are destroyed when no longer needed for business or legal reasons, as follows: \u2022 Materials are cross-cut shredded, incinerated, or pulped so that cardholder data cannot be reconstructed. \u2022 Materials are stored in secure storage containers prior to destruction.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Consider \u201cto-be-shredded\u201d containers with a lock \nthat prevents access to its contents or that \nphysically prevent access to the inside of the \ncontainer.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods for securely destroying electronic media \ninclude secure wiping in accordance with \nindustry-accepted standards for secure deletion, \ndegaussing, or physical destruction (such as \ngrinding or shredding hard disks).",
    "guidanceFurtherInformation": "See NIST Special Publication 800-88, Revision 1: \nGuidelines for Media Sanitization."
  },
  {
    "number": "9.4.7",
    "title": "Electronic media with cardholder data is destroyed when no longer needed for business or legal reasons via one of the following: \u2022 The electronic media is destroyed. \u2022 The cardholder data is rendered ",
    "level": 3,
    "parentNumber": "9.4",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Electronic media with cardholder data is destroyed when no longer needed for business or legal reasons via one of the following: \u2022 The electronic media is destroyed. \u2022 The cardholder data is rendered unrecoverable so that it cannot be reconstructed.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The deletion function in most operating systems \nallows deleted data to be recovered, so instead, a \ndedicated secure deletion function or application \nshould be used to make data unrecoverable.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods for securely destroying electronic media \ninclude secure wiping in accordance with \nindustry-accepted standards for secure deletion, \ndegaussing, or physical destruction (such as \ngrinding or shredding hard disks).",
    "guidanceFurtherInformation": "See NIST Special Publication 800-88, Revision 1: \nGuidelines for Media Sanitization"
  },
  {
    "number": "9.5",
    "title": "Point of interaction (POI) devices are protected from tampering and unauthorized substitution.",
    "level": 2,
    "parentNumber": "9",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.5.1",
    "title": "POI devices that capture payment card data via direct physical interaction with the payment card form factor are protected from tampering and unauthorized substitution, including the following: \u2022 Main",
    "level": 3,
    "parentNumber": "9.5",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "POI devices that capture payment card data via direct physical interaction with the payment card form factor are protected from tampering and unauthorized substitution, including the following: \u2022 Maintaining a list of POI devices. \u2022 Periodically inspecting POI devices to look for tampering or unauthorized substitution. \u2022 Training personnel to be aware of suspicious behavior and to report tampering or unauthorized substitution of devices.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities may consider implementing protection \nfrom tampering and unauthorized substitution for: \n\u2022 Components used only for manual PAN key \nentry.\n\u2022 Commercial off-the-shelf (COTS) devices (for \nexample, smartphones or tablets), which are \nmobile merchant-owned devices designed for \nmass-market distribution.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Additional best practices on skimming prevention \nare available on the PCI SSC website.\nThese requirements apply to deployed POI devices \nused in card-present transactions (that is, a \npayment card form factor such as a card that is \nswiped, tapped, or dipped). \nThese requirements do not apply to: \n\u2022 Components used only for manual PAN key\nentry. \n\u2022 Commercial off-the-shelf (COTS) devices (for \nexample, smartphones or tablets), which are \nmobile merchant-owned devices designed for \nmass-market distribution.\nDefined Approach Requirements Defined Approach Testing Procedures Purpose \nKeeping an up-to-date list of POI devices helps \nan organization track where devices are \nsupposed to be and quickly identify if a device is \nmissing or lost.\n(continued on next page)"
  },
  {
    "number": "9.5.1.1",
    "title": "An up-to-date list of POI devices is maintained, including: \u2022 Make and model of the device. \u2022 Location of device. \u2022 Device serial number or other methods of unique identification.",
    "level": 4,
    "parentNumber": "9.5.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "An up-to-date list of POI devices is maintained, including: \u2022 Make and model of the device. \u2022 Location of device. \u2022 Device serial number or other methods of unique identification.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities may consider implementing protection \nfrom tampering and unauthorized substitution for: \n\u2022 Components used only for manual PAN key \nentry.\n\u2022 Commercial off-the-shelf (COTS) devices (for \nexample, smartphones or tablets), which are \nmobile merchant-owned devices designed for \nmass-market distribution.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to maintain device locations include \nidentifying the address of the site or facility where \nthe device is located.\nThe identity and location of POI devices is recorded \nand known at all times.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 231\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose \nRegular inspections of devices will help \norganizations detect tampering more quickly via \nexternal evidence\u2014for example, the addition of a \ncard skimmer\u2014or replacement of a device, \nthereby minimizing the potential impact of using \nfraudulent devices.",
    "guidanceFurtherInformation": "Additional best practices on skimming prevention \nare available on the PCI SSC website.\nThese requirements apply to deployed POI devices \nused in card-present transactions (that is, a \npayment card form factor such as a card that is \nswiped, tapped, or dipped). \nThese requirements do not apply to: \n\u2022 Components used only for manual PAN key\nentry. \n\u2022 Commercial off-the-shelf (COTS) devices (for \nexample, smartphones or tablets), which are \nmobile merchant-owned devices designed for \nmass-market distribution.\nDefined Approach Requirements Defined Approach Testing Procedures Purpose \nKeeping an up-to-date list of POI devices helps \nan organization track where devices are \nsupposed to be and quickly identify if a device is \nmissing or lost.\n(continued on next page)"
  },
  {
    "number": "9.5.1.2",
    "title": "POI device surfaces are periodically inspected to detect tampering and unauthorized substitution.",
    "level": 4,
    "parentNumber": "9.5.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "POI device surfaces are periodically inspected to detect tampering and unauthorized substitution.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The method for maintaining a list of devices may \nbe automated (for example, a device\u0002management system) or manual (for example, \ndocumented in electronic or paper records). For \non-the-road devices, the location may include the \nname of the personnel to whom the device is \nassigned.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to maintain device locations include \nidentifying the address of the site or facility where \nthe device is located.\nThe identity and location of POI devices is recorded \nand known at all times.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 231\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose \nRegular inspections of devices will help \norganizations detect tampering more quickly via \nexternal evidence\u2014for example, the addition of a \ncard skimmer\u2014or replacement of a device, \nthereby minimizing the potential impact of using \nfraudulent devices.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "9.5.1.3",
    "title": "Training is provided for personnel in POI environments to be aware of attempted tampering or replacement of POI devices, and includes: \u2022 Verifying the identity of any third-party persons claiming to b",
    "level": 4,
    "parentNumber": "9.5.1",
    "domain": "Implement Strong Access Control Measures",
    "requirementText": "Training is provided for personnel in POI environments to be aware of attempted tampering or replacement of POI devices, and includes: \u2022 Verifying the identity of any third-party persons claiming to be repair or maintenance personnel, before granting them access to modify or troubleshoot devices. \u2022 Procedures to ensure devices are not installed, replaced, or returned without verification. \u2022 Being aware of suspicious behavior around devices. \u2022 Reporting suspicious behavior and indications of device tampering or substitution to appropriate personnel.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Personnel training should include being alert to \nand questioning anyone who shows up to do POI \nmaintenance to ensure they are authorized and \nhave a valid work order, including any agents, \nmaintenance or repair personnel, technicians, \nservice providers, or other third parties. All third \nparties requesting access to devices should \nalways be verified before being provided \naccess\u2014for example, by checking with \nmanagement or phoning the POI maintenance \ncompany, such as the vendor or acquirer, for \nverification. Many criminals will try to fool \npersonnel by dressing for the part (for example, \ncarrying toolboxes and dressed in work apparel), \nand could also be knowledgeable about locations \nof devices, so personnel should be trained to \nalways follow procedures.\nAnother trick that criminals use is to send a \u201cnew\u201d \nPOI device with instructions for swapping it with a \nlegitimate device and \u201creturning\u201d the legitimate \ndevice. The criminals may even provide return \npostage to their specified address. Therefore, \npersonnel should always verify with their manager \nor supplier that the device is legitimate and came \nfrom a trusted source before installing it or using it \nfor business.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10",
    "title": "Log and Monitor All Access to System Components and Cardholder Data",
    "level": 1,
    "parentNumber": null,
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.1",
    "title": "Processes and mechanisms for logging and monitoring all access to system components and cardholder data are defined and",
    "level": 2,
    "parentNumber": "10",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 10 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "10.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 10 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures \nas needed to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as \nsoon as possible after a change occurs and not \nonly on a periodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 10 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "10.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 10 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained \nwithin separate documents. \nAs part of communicating roles and \nresponsibilities, entities can consider having \npersonnel acknowledge their acceptance and \nunderstanding of their assigned roles and \nresponsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2",
    "title": "Audit logs are implemented to support the detection of anomalies and suspicious activity, and the forensic analysis of events.",
    "level": 2,
    "parentNumber": "10",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2.1",
    "title": "Audit logs are enabled and active for all system components and cardholder data.",
    "level": 3,
    "parentNumber": "10.2",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit logs are enabled and active for all system components and cardholder data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When an entity considers which information to \nrecord in their logs, it is important to remember \nthat information stored in audit logs is sensitive \nand should be protected per requirements in this \nstandard. Care should be taken to only store \nessential information in the audit logs to minimize \nrisk.",
    "guidanceDefinitions": "The functions or activities considered to be \nadministrative are beyond those performed by \nregular users as part of routine business \nfunctions.\nRefer to Appendix G for the definition of \n\u201cadministrative access.\u201d",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2.1.1",
    "title": "Audit logs capture all individual user access to cardholder data.",
    "level": 4,
    "parentNumber": "10.2.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit logs capture all individual user access to cardholder data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "When an entity considers which information to \nrecord in their logs, it is important to remember \nthat information stored in audit logs is sensitive \nand should be protected per requirements in this \nstandard. Care should be taken to only store \nessential information in the audit logs to minimize \nrisk.",
    "guidanceDefinitions": "The functions or activities considered to be \nadministrative are beyond those performed by \nregular users as part of routine business \nfunctions.\nRefer to Appendix G for the definition of \n\u201cadministrative access.\u201d",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2.1.2",
    "title": "Audit logs capture all actions taken by any individual with administrative access, including any interactive use of application or system accounts.",
    "level": 4,
    "parentNumber": "10.2.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit logs capture all actions taken by any individual with administrative access, including any interactive use of application or system accounts.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "A record of all individual access to cardholder \ndata can identify which accounts may have been \ncompromised or misused.",
    "guidanceDefinitions": "The functions or activities considered to be \nadministrative are beyond those performed by \nregular users as part of routine business \nfunctions.\nRefer to Appendix G for the definition of \n\u201cadministrative access.\u201d",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2.1.3",
    "title": "Audit logs capture all access to audit logs. 10.2.1.3 Examine audit log configurations and log data to verify that access to all audit logs is captured.",
    "level": 4,
    "parentNumber": "10.2.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit logs capture all access to audit logs. 10.2.1.3 Examine audit log configurations and log data to verify that access to all audit logs is captured.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "The functions or activities considered to be \nadministrative are beyond those performed by \nregular users as part of routine business \nfunctions.\nRefer to Appendix G for the definition of \n\u201cadministrative access.\u201d",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2.1.5",
    "title": "Audit logs capture all changes to identification and authentication credentials including, but not limited to: \u2022 Creation of new accounts. \u2022 Elevation of privileges. \u2022 All changes, additions, or delet",
    "level": 4,
    "parentNumber": "10.2.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit logs capture all changes to identification and authentication credentials including, but not limited to: \u2022 Creation of new accounts. \u2022 Elevation of privileges. \u2022 All changes, additions, or deletions to accounts with administrative access.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2.1.6",
    "title": "Audit logs capture the following: \u2022 All initialization of new audit logs, and \u2022 All starting, stopping, or pausing of the existing audit logs.",
    "level": 4,
    "parentNumber": "10.2.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit logs capture the following: \u2022 All initialization of new audit logs, and \u2022 All starting, stopping, or pausing of the existing audit logs.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2.1.7",
    "title": "Audit logs capture all creation and deletion of system-level objects.",
    "level": 4,
    "parentNumber": "10.2.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit logs capture all creation and deletion of system-level objects.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Adequate protection of the audit logs includes \nstrong access control that limits access to logs \nbased on \u201cneed to know\u201d only and the use of \nphysical or network segregation to make the logs \nharder to find and modify.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.2.2",
    "title": "Audit logs record the following details for each auditable event: \u2022 User identification. \u2022 Type of event. \u2022 Date and time. \u2022 Success and failure indication. \u2022 Origination of event. \u2022 Identity or name ",
    "level": 3,
    "parentNumber": "10.2",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit logs record the following details for each auditable event: \u2022 User identification. \u2022 Type of event. \u2022 Date and time. \u2022 Success and failure indication. \u2022 Origination of event. \u2022 Identity or name of affected data, system component, resource, or service (for example, name and protocol).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Adequate protection of the audit logs includes \nstrong access control that limits access to logs \nbased on \u201cneed to know\u201d only and the use of \nphysical or network segregation to make the logs \nharder to find and modify.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.3",
    "title": "Audit logs are protected from destruction and unauthorized modifications.",
    "level": 2,
    "parentNumber": "10",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.3.1",
    "title": "Read access to audit logs files is limited to those with a job-related need.",
    "level": 3,
    "parentNumber": "10.3",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Read access to audit logs files is limited to those with a job-related need.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Adequate protection of the audit logs includes \nstrong access control that limits access to logs \nbased on \u201cneed to know\u201d only and the use of \nphysical or network segregation to make the logs \nharder to find and modify.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.3.2",
    "title": "Audit log files are protected to prevent modifications by individuals.",
    "level": 3,
    "parentNumber": "10.3",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit log files are protected to prevent modifications by individuals.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Adequate protection of the audit logs includes \nstrong access control that limits access to logs \nbased on \u201cneed to know\u201d only and the use of \nphysical or network segregation to make the logs \nharder to find and modify.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.3.3",
    "title": "Audit log files, including those for external\u0002facing technologies, are promptly backed up to a secure, central, internal log server(s) or other media that is difficult to modify.",
    "level": 3,
    "parentNumber": "10.3",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Audit log files, including those for external\u0002facing technologies, are promptly backed up to a secure, central, internal log server(s) or other media that is difficult to modify.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should attempt to prevent logs from being \nexposed in public-accessible locations.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.3.4",
    "title": "File integrity monitoring or change-detection mechanisms is used on audit logs to ensure that existing log data cannot be changed without generating alerts.",
    "level": 3,
    "parentNumber": "10.3",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "File integrity monitoring or change-detection mechanisms is used on audit logs to ensure that existing log data cannot be changed without generating alerts.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Each entity determines the best way to back up \nlog files, whether via one or more centralized log \nservers or other secure media. Logs may be \nwritten directly, offloaded, or copied from external \nsystems to the secure internal system or media.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.4",
    "title": "Audit logs are reviewed to identify anomalies or suspicious activity.",
    "level": 2,
    "parentNumber": "10",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.4.1",
    "title": "The following audit logs are reviewed at least once daily: \u2022 All security events. \u2022 Logs of all system components that store, process, or transmit CHD and/or SAD. \u2022 Logs of all critical system compone",
    "level": 3,
    "parentNumber": "10.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "The following audit logs are reviewed at least once daily: \u2022 All security events. \u2022 Logs of all system components that store, process, or transmit CHD and/or SAD. \u2022 Logs of all critical system components. \u2022 Logs of all servers and system components that perform security functions (for example, network security controls, intrusion-detection systems/intrusion-prevention systems (IDS/IPS), authentication servers).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Checking logs daily (7 days a week, 365 days a \nyear, including holidays) minimizes the amount of \ntime and exposure of a potential breach. Log \nharvesting, parsing, and alerting tools, centralized \nlog management systems, event log analyzers, and \nsecurity information and event management (SIEM) \nsolutions are examples of automated tools that can \nbe used to meet this requirement.\nDaily review of security events\u2014for example, \nnotifications or alerts that identify suspicious or \nanomalous activities\u2014as well as logs from critical \nsystem components, and logs from systems that \nperform security functions, such as firewalls, \nIDS/IPS, file integrity monitoring (FIM) systems, etc., \nis necessary to identify potential issues. \nThe determination of \u201csecurity event\u201d will vary for \neach organization and may include consideration for \nthe type of technology, location, and function of the \ndevice. Organizations may also wish to maintain a \nbaseline of \u201cnormal\u201d traffic to help identify anomalous \nbehavior. \nAn entity that uses third-party service providers to \nperform log review services is responsible to provide \ncontext about the entity\u2019s environment to the service \nproviders, so it understands the entity\u2019s environment, \nhas a baseline of \u201cnormal\u201d traffic for the entity, and \ncan detect potential security issues and provide \naccurate exceptions and anomaly notifications.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to the Information Supplement: Effective \nDaily Log Monitoring for additional guidance."
  },
  {
    "number": "10.4.1.1",
    "title": "Automated mechanisms are used to perform audit log reviews.",
    "level": 4,
    "parentNumber": "10.4.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Automated mechanisms are used to perform audit log reviews.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Establishing a baseline of normal audit activity \npatterns is critical to the effectiveness of an \nautomated log review mechanism. The analysis of \nnew audit activity against the established baseline \ncan significantly improve the identification of \nsuspicious or anomalous activities.\nThe entity should keep logging tools aligned with \nany changes in their environment by periodically \nreviewing tool settings and updating settings to \nreflect any changes.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to the Information Supplement: Effective \nDaily Log Monitoring for additional guidance."
  },
  {
    "number": "10.4.2",
    "title": "Logs of all other system components (those not specified in Requirement 10.4.1) are reviewed periodically.",
    "level": 3,
    "parentNumber": "10.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Logs of all other system components (those not specified in Requirement 10.4.1) are reviewed periodically.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Establishing a baseline of normal audit activity \npatterns is critical to the effectiveness of an \nautomated log review mechanism. The analysis of \nnew audit activity against the established baseline \ncan significantly improve the identification of \nsuspicious or anomalous activities.\nThe entity should keep logging tools aligned with \nany changes in their environment by periodically \nreviewing tool settings and updating settings to \nreflect any changes.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to the Information Supplement: Effective \nDaily Log Monitoring for additional guidance."
  },
  {
    "number": "10.4.2.1",
    "title": "The frequency of periodic log reviews for all other system components (not defined in Requirement 10.4.1) is defined in the entity\u2019s targeted risk analysis, which is performed according to all element",
    "level": 4,
    "parentNumber": "10.4.2",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "The frequency of periodic log reviews for all other system components (not defined in Requirement 10.4.1) is defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider how to address the \nfollowing when developing their processes for \ndefining and managing exceptions and \nanomalies: \n\u2022 How log review activities are recorded, \n\u2022 How to rank and prioritize exceptions and \nanomalies, \n\u2022 What procedures should be in place to report \nand escalate exceptions and anomalies, and \n\u2022 Who is responsible for investigating and for \nany remediation tasks.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.4.3",
    "title": "Exceptions and anomalies identified during the review process are addressed.",
    "level": 3,
    "parentNumber": "10.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Exceptions and anomalies identified during the review process are addressed.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider how to address the \nfollowing when developing their processes for \ndefining and managing exceptions and \nanomalies: \n\u2022 How log review activities are recorded, \n\u2022 How to rank and prioritize exceptions and \nanomalies, \n\u2022 What procedures should be in place to report \nand escalate exceptions and anomalies, and \n\u2022 Who is responsible for investigating and for \nany remediation tasks.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods that allow logs to be immediately \navailable include storing logs online, archiving \nlogs, or restoring logs quickly from backups.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.5",
    "title": "Audit log history is retained and available for analysis.",
    "level": 2,
    "parentNumber": "10",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.5.1",
    "title": "Retain audit log history for at least 12 months, with at least the most recent three months immediately available for analysis.",
    "level": 3,
    "parentNumber": "10.5",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Retain audit log history for at least 12 months, with at least the most recent three months immediately available for analysis.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider how to address the \nfollowing when developing their processes for \ndefining and managing exceptions and \nanomalies: \n\u2022 How log review activities are recorded, \n\u2022 How to rank and prioritize exceptions and \nanomalies, \n\u2022 What procedures should be in place to report \nand escalate exceptions and anomalies, and \n\u2022 Who is responsible for investigating and for \nany remediation tasks.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods that allow logs to be immediately \navailable include storing logs online, archiving \nlogs, or restoring logs quickly from backups.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.6",
    "title": "Time-synchronization mechanisms support consistent time settings across all systems.",
    "level": 2,
    "parentNumber": "10",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.6.1",
    "title": "System clocks and time are synchronized using time-synchronization technology.",
    "level": 3,
    "parentNumber": "10.6",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "System clocks and time are synchronized using time-synchronization technology.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Another option to prevent unauthorized use of \ninternal time servers is to encrypt updates with a \nsymmetric key and create access control lists that \nspecify the IP addresses of client machines that \nwill be provided with the time updates.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Network Time Protocol (NTP) is one example of \ntime-synchronization technology.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.6.2",
    "title": "Systems are configured to the correct and consistent time as follows: \u2022 One or more designated time servers are in use. \u2022 Only the designated central time server(s) receives time from external sources",
    "level": 3,
    "parentNumber": "10.6",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Systems are configured to the correct and consistent time as follows: \u2022 One or more designated time servers are in use. \u2022 Only the designated central time server(s) receives time from external sources. \u2022 Time received from external sources is based on International Atomic Time or Coordinated Universal Time (UTC). \u2022 The designated time server(s) accept time updates only from specific industry-accepted external sources. \u2022 Where there is more than one designated time server, the time servers peer with one another to keep accurate time. \u2022 Internal systems receive time information only from designated central time server(s).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Another option to prevent unauthorized use of \ninternal time servers is to encrypt updates with a \nsymmetric key and create access control lists that \nspecify the IP addresses of client machines that \nwill be provided with the time updates.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Network Time Protocol (NTP) is one example of \ntime-synchronization technology.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.6.3",
    "title": "Time synchronization settings and data are protected as follows: \u2022 Access to time data is restricted to only personnel with a business need. \u2022 Any changes to time settings on critical systems are logg",
    "level": 3,
    "parentNumber": "10.6",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Time synchronization settings and data are protected as follows: \u2022 Access to time data is restricted to only personnel with a business need. \u2022 Any changes to time settings on critical systems are logged, monitored, and reviewed.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Another option to prevent unauthorized use of \ninternal time servers is to encrypt updates with a \nsymmetric key and create access control lists that \nspecify the IP addresses of client machines that \nwill be provided with the time updates.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.7",
    "title": "Failures of critical security control systems are detected, reported, and responded to promptly.",
    "level": 2,
    "parentNumber": "10",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.7.1",
    "title": "Additional requirement for service providers only: Failures of critical security control systems are detected, alerted, and addressed promptly, including but not limited to failure of the following cr",
    "level": 3,
    "parentNumber": "10.7",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Additional requirement for service providers only: Failures of critical security control systems are detected, alerted, and addressed promptly, including but not limited to failure of the following critical security control systems: \u2022 Network security controls. \u2022 IDS/IPS. \u2022 FIM. \u2022 Anti-malware solutions. \u2022 Physical access controls. \u2022 Logical access controls. \u2022 Audit logging mechanisms. \u2022 Segmentation controls (if used).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The specific types of failures may vary, depending \non the function of the device system component \nand technology in use. Typical failures include a \nsystem ceasing to perform its security function or \nnot functioning in its intended manner, such as a \nfirewall erasing all its rules or going offline.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.7.2",
    "title": "Failures of critical security control systems are detected, alerted, and addressed promptly, including but not limited to failure of the following critical security control systems: \u2022 Network security",
    "level": 3,
    "parentNumber": "10.7",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Failures of critical security control systems are detected, alerted, and addressed promptly, including but not limited to failure of the following critical security control systems: \u2022 Network security controls. \u2022 IDS/IPS. \u2022 Change-detection mechanisms. \u2022 Anti-malware solutions. \u2022 Physical access controls. \u2022 Logical access controls. \u2022 Audit logging mechanisms. \u2022 Segmentation controls (if used). \u2022 Audit log review mechanisms. \u2022 Automated security testing tools (if used).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The specific types of failures may vary, depending \non the function of the device system component \nand technology in use. Typical failures include a \nsystem ceasing to perform its security function or \nnot functioning in its intended manner, such as a \nfirewall erasing all its rules or going offline.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "10.7.3",
    "title": "Failures of any critical security control systems are responded to promptly, including but not limited to: \u2022 Restoring security functions. \u2022 Identifying and documenting the duration (date and time fro",
    "level": 3,
    "parentNumber": "10.7",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Failures of any critical security control systems are responded to promptly, including but not limited to: \u2022 Restoring security functions. \u2022 Identifying and documenting the duration (date and time from start to end) of the security failure. \u2022 Identifying and documenting the cause(s) of failure and documenting required remediation. \u2022 Identifying and addressing any security issues that arose during the failure. \u2022 Determining whether further actions are required as a result of the security failure. \u2022 Implementing controls to prevent the cause of failure from reoccurring. \u2022 Resuming monitoring of security controls.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Documented evidence (for example, records \nwithin a problem management system) should \nprovide support that processes and procedures \nare in place to respond to security failures. In \naddition, personnel should be aware of their \nresponsibilities in the event of a failure. Actions \nand responses to the failure should be captured in \nthe documented evidence.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11",
    "title": "Test Security of Systems and Networks Regularly",
    "level": 1,
    "parentNumber": null,
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.1",
    "title": "Processes and mechanisms for regularly testing security of systems and networks are defined and understood.",
    "level": 2,
    "parentNumber": "11",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.1.1",
    "title": "All security policies and operational procedures that are identified in Requirement 11 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "level": 3,
    "parentNumber": "11.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "All security policies and operational procedures that are identified in Requirement 11 are: \u2022 Documented. \u2022 Kept up to date. \u2022 In use. \u2022 Known to all affected parties.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important to update policies and procedures \nas needed to address changes in processes, \ntechnologies, and business objectives. For this \nreason, consider updating these documents as \nsoon as possible after a change occurs and not \nonly on a periodic cycle.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.1.2",
    "title": "Roles and responsibilities for performing activities in Requirement 11 are documented, assigned, and understood.",
    "level": 3,
    "parentNumber": "11.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Roles and responsibilities for performing activities in Requirement 11 are documented, assigned, and understood.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Roles and responsibilities may be documented \nwithin policies and procedures or maintained \nwithin separate documents. \nAs part of communicating roles and \nresponsibilities, entities can consider having \npersonnel acknowledge their acceptance and \nunderstanding of their assigned roles and \nresponsibilities.",
    "guidanceDefinitions": "Security policies define the entity\u2019s security \nobjectives and principles. Operational procedures \ndescribe how to perform activities, and define the \ncontrols, methods, and processes that are \nfollowed to achieve the desired result in a \nconsistent manner and in accordance with policy \nobjectives.",
    "guidanceExamples": "A method to document roles and responsibilities \nis a responsibility assignment matrix that includes \nwho is responsible, accountable, consulted, and \ninformed (also called a RACI matrix).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.2",
    "title": "Wireless access points are identified and monitored, and unauthorized wireless access points are addressed.",
    "level": 2,
    "parentNumber": "11",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.2.1",
    "title": "Authorized and unauthorized wireless access points are managed as follows: \u2022 The presence of wireless (Wi-Fi) access points is tested for, \u2022 All authorized and unauthorized wireless access points are ",
    "level": 3,
    "parentNumber": "11.2",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Authorized and unauthorized wireless access points are managed as follows: \u2022 The presence of wireless (Wi-Fi) access points is tested for, \u2022 All authorized and unauthorized wireless access points are detected and identified, \u2022 Testing, detection, and identification occurs at least once every three months. \u2022 If automated monitoring is used, personnel are notified via generated alerts.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "This is also referred to as rogue access point \ndetection.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.2.2",
    "title": "An inventory of authorized wireless access points is maintained, including a documented business justification.",
    "level": 3,
    "parentNumber": "11.2",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "An inventory of authorized wireless access points is maintained, including a documented business justification.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "If using a wireless scanner, it is equally important \nto have a defined list of known access points \nwhich, while not attached to the company\u2019s \nnetwork, will usually be detected during a scan. \nThese non-company devices are often found in \nmulti-tenant buildings or businesses located near \none another. However, it is important to verify that \nthese devices are not connected to the entity\u2019s \nnetwork port or through another network\u0002connected device and given an SSID resembling \na nearby business. Scan results should note such \ndevices and how it was determined that these \ndevices could be \u201cignored.\u201d In addition, detection \nof any unauthorized wireless access points that \nare determined to be a threat to the CDE should \nbe managed following the entity\u2019s incident \nresponse plan per Requirement 12.10.1.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods that may be used include but are not \nlimited to wireless network scans, physical/logical \ninspections of system components and \ninfrastructure, network access control (NAC), or \nwireless IDS/IPS. NAC and wireless IDS/IPS are \nexamples of automated monitoring tools.\nThe requirement applies even when a policy exists \nthat prohibits the use of wireless technology.\nMethods used to meet this requirement must be \nsufficient to detect and identify both authorized and \nunauthorized devices, including unauthorized \ndevices attached to devices that themselves are \nauthorized.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 265\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nAn inventory of authorized wireless access points \ncan help administrators quickly respond when \nunauthorized wireless access points are detected. \nThis helps to proactively minimize the exposure of \nCDE to malicious individuals.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.3",
    "title": "External and internal vulnerabilities are regularly identified, prioritized, and addressed.",
    "level": 2,
    "parentNumber": "11",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.3.1",
    "title": "Internal vulnerability scans are performed as follows: \u2022 At least once every three months. \u2022 Vulnerabilities that are either high-risk or critical (according to the entity\u2019s vulnerability risk ranking",
    "level": 3,
    "parentNumber": "11.3",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Internal vulnerability scans are performed as follows: \u2022 At least once every three months. \u2022 Vulnerabilities that are either high-risk or critical (according to the entity\u2019s vulnerability risk rankings defined at Requirement 6.3.1) are resolved. \u2022 Rescans are performed that confirm all high-risk and all critical vulnerabilities (as noted above) have been resolved. \u2022 Scan tool is kept up to date with latest vulnerability information. \u2022 Scans are performed by qualified personnel and organizational independence of the tester exists.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Vulnerabilities posing the greatest risk to the \nenvironment (for example, ranked high or critical \nper Requirement 6.3.1) should be resolved with \nthe highest priority. Vulnerabilities identified \nduring internal vulnerability scans should be part \nof a vulnerability management process that \nincludes multiple vulnerability sources, as \nspecified in Requirement 6.3.1.\nMultiple scan reports can be combined for the \nquarterly scan process to show that all systems \nwere scanned and all applicable vulnerabilities \nwere resolved as part of the three-month \nvulnerability scan cycle. However, additional \ndocumentation may be required to verify non\u0002remediated vulnerabilities are in the process of \nbeing resolved.\nWhile scans are required at least once every \nthree months, more frequent scans are \nrecommended depending on the network \ncomplexity, frequency of change, and types of \ndevices, software, and operating systems used.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.3.1.1",
    "title": "All other applicable vulnerabilities (those not ranked as high-risk vulnerabilities or critical vulnerabilities according to the entity\u2019s vulnerability risk rankings defined at Requirement 6.3.1) are ",
    "level": 4,
    "parentNumber": "11.3.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "All other applicable vulnerabilities (those not ranked as high-risk vulnerabilities or critical vulnerabilities according to the entity\u2019s vulnerability risk rankings defined at Requirement 6.3.1) are managed as follows: \u2022 Addressed based on the risk defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1. \u2022 Rescans are conducted as needed.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The credentials used for these scans should be \nconsidered highly privileged. They should be \nprotected and controlled as such, following PCI \nDSS Requirements 7 and 8 (except for those \nrequirements for multi-factor authentication and \napplication and system accounts).",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.3.1.2",
    "title": "Internal vulnerability scans are performed via authenticated scanning as follows: \u2022 Systems that are unable to accept credentials for authenticated scanning are documented. \u2022 Sufficient privileges are",
    "level": 4,
    "parentNumber": "11.3.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Internal vulnerability scans are performed via authenticated scanning as follows: \u2022 Systems that are unable to accept credentials for authenticated scanning are documented. \u2022 Sufficient privileges are used for those systems that accept credentials for scanning. \u2022 If accounts used for authenticated scanning can be used for interactive login, they are managed in accordance with Requirement 8.2.2.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The credentials used for these scans should be \nconsidered highly privileged. They should be \nprotected and controlled as such, following PCI \nDSS Requirements 7 and 8 (except for those \nrequirements for multi-factor authentication and \napplication and system accounts).",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.3.1.3",
    "title": "Internal vulnerability scans are performed after any significant change as follows: \u2022 Vulnerabilities that are either high-risk or critical (according to the entity\u2019s vulnerability risk rankings defin",
    "level": 4,
    "parentNumber": "11.3.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Internal vulnerability scans are performed after any significant change as follows: \u2022 Vulnerabilities that are either high-risk or critical (according to the entity\u2019s vulnerability risk rankings defined at Requirement 6.3.1) are resolved. \u2022 Rescans are conducted as needed. \u2022 Scans are performed by qualified personnel and organizational independence of the tester exists (not required to be a QSA or ASV).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should perform scans after significant \nchanges as part of the change process per \nRequirement 6.5.2 and before considering the \nchange complete. All system components \naffected by the change will need to be scanned.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.3.2",
    "title": "External vulnerability scans are performed as follows: \u2022 At least once every three months. \u2022 By a PCI SSC Approved Scanning Vendor (ASV). \u2022 Vulnerabilities are resolved and ASV Program Guide requireme",
    "level": 3,
    "parentNumber": "11.3",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "External vulnerability scans are performed as follows: \u2022 At least once every three months. \u2022 By a PCI SSC Approved Scanning Vendor (ASV). \u2022 Vulnerabilities are resolved and ASV Program Guide requirements for a passing scan are met. \u2022 Rescans are performed as needed to confirm that vulnerabilities are resolved per the ASV Program Guide requirements for a passing scan.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "While scans are required at least once every \nthree months, more frequent scans are \nrecommended depending on the network \ncomplexity, frequency of change, and types of \ndevices, software, and operating systems used. \nVulnerabilities identified during external \nvulnerability scans should be part of a \nvulnerability management process that includes \nmultiple vulnerability sources, as specified in \nRequirement 6.3.1.\nMultiple scan reports can be combined to show \nthat all systems were scanned and that all \napplicable vulnerabilities were resolved as part of \nthe three-month vulnerability scan cycle. \nHowever, additional documentation may be \nrequired to verify non-remediated vulnerabilities \nare in the process of being resolved.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "See the ASV Program Guide on the PCI SSC \nwebsite."
  },
  {
    "number": "11.3.2.1",
    "title": "External vulnerability scans are performed after any significant change as follows: \u2022 Vulnerabilities that are scored 4.0 or higher by the CVSS are resolved. \u2022 Rescans are conducted as needed. \u2022 Scans",
    "level": 4,
    "parentNumber": "11.3.2",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "External vulnerability scans are performed after any significant change as follows: \u2022 Vulnerabilities that are scored 4.0 or higher by the CVSS are resolved. \u2022 Rescans are conducted as needed. \u2022 Scans are performed by qualified personnel and organizational independence of the tester exists (not required to be a QSA or ASV).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should include the need to perform scans \nafter significant changes as part of the change \nprocess and before the change is considered \ncomplete. All system components affected by the \nchange will need to be scanned.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.4",
    "title": "External and internal penetration testing is regularly performed, and exploitable vulnerabilities and security weaknesses are corrected.",
    "level": 2,
    "parentNumber": "11",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.4.1",
    "title": "A penetration testing methodology is defined, documented, and implemented by the entity, and includes: \u2022 Industry-accepted penetration testing approaches. \u2022 Coverage for the entire CDE perimeter and c",
    "level": 3,
    "parentNumber": "11.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "A penetration testing methodology is defined, documented, and implemented by the entity, and includes: \u2022 Industry-accepted penetration testing approaches. \u2022 Coverage for the entire CDE perimeter and critical systems. \u2022 Testing from both inside and outside the network. \u2022 Testing to validate any segmentation and scope\u0002reduction controls. \u2022 Application-layer penetration testing to identify, at a minimum, the vulnerabilities listed in Requirement 6.2.4. \u2022 Network-layer penetration tests that encompass all components that support network functions as well as operating systems. \u2022 Review and consideration of threats and vulnerabilities experienced in the last 12 months. \u2022 Documented approach to assessing and addressing the risk posed by exploitable vulnerabilities and security weaknesses found during penetration testing. \u2022 Retention of penetration testing results and remediation activities results for at least 12 months.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Penetration testing techniques will differ based on \nan organization\u2019s needs and structure and should \nbe suitable for the tested environment\u2014for \nexample, fuzzing, injection, and forgery tests \nmight be appropriate. The type, depth, and \ncomplexity of the testing will depend on the \nspecific environment and the needs of the \norganization.",
    "guidanceDefinitions": "Penetration tests simulate a real-world attack \nsituation intending to identify how far an attacker \ncould penetrate an environment, given differing \namounts of information provided to the tester. \nThis allows an entity to better understand its \npotential exposure and develop a strategy to \ndefend against attacks. A penetration test differs \nfrom a vulnerability scan, as a penetration test is \nan active process that usually includes exploiting \nidentified vulnerabilities. \n(continued on next page)",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.4.2",
    "title": "Internal penetration testing is performed: \u2022 Per the entity\u2019s defined methodology, \u2022 At least once every 12 months \u2022 After any significant infrastructure or application upgrade or change \u2022 By a qualif",
    "level": 3,
    "parentNumber": "11.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Internal penetration testing is performed: \u2022 Per the entity\u2019s defined methodology, \u2022 At least once every 12 months \u2022 After any significant infrastructure or application upgrade or change \u2022 By a qualified internal resource or qualified external third-party \u2022 Organizational independence of the tester exists (not required to be a QSA or ASV).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Some considerations when choosing a qualified \nresource to perform penetration testing include:\n\u2022 Specific penetration testing certifications, \nwhich may be an indication of the tester\u2019s skill \nlevel and competence. \n\u2022 Prior experience conducting penetration \ntesting\u2014for example, the number of years of \nexperience, and the type and scope of prior \nengagements can help confirm whether the \ntester\u2019s experience is appropriate for the \nneeds of the engagement.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to the Information Supplement: Penetration \nTesting Guidance on the PCI SSC website for \nadditional guidance."
  },
  {
    "number": "11.4.3",
    "title": "External penetration testing is performed: \u2022 Per the entity\u2019s defined methodology \u2022 At least once every 12 months \u2022 After any significant infrastructure or application upgrade or change \u2022 By a qualifi",
    "level": 3,
    "parentNumber": "11.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "External penetration testing is performed: \u2022 Per the entity\u2019s defined methodology \u2022 At least once every 12 months \u2022 After any significant infrastructure or application upgrade or change \u2022 By a qualified internal resource or qualified external third party \u2022 Organizational independence of the tester exists (not required to be a QSA or ASV)",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Some considerations when choosing a qualified \nresource to perform penetration testing include:\n\u2022 Specific penetration testing certifications, \nwhich may be an indication of the tester\u2019s skill \nlevel and competence. \n\u2022 Prior experience conducting penetration \ntesting\u2014for example, the number of years of \nexperience, and the type and scope of prior \nengagements can help confirm whether the \ntester\u2019s experience is appropriate for the \nneeds of the engagement.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to the Information Supplement: Penetration \nTesting Guidance on the PCI SSC website for \nadditional guidance."
  },
  {
    "number": "11.4.4",
    "title": "Exploitable vulnerabilities and security weaknesses found during penetration testing are corrected as follows: \u2022 In accordance with the entity\u2019s assessment of the risk posed by the security issue as d",
    "level": 3,
    "parentNumber": "11.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Exploitable vulnerabilities and security weaknesses found during penetration testing are corrected as follows: \u2022 In accordance with the entity\u2019s assessment of the risk posed by the security issue as defined in Requirement 6.3.1. \u2022 Penetration testing is repeated to verify the corrections.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "As part of the entity\u2019s assessment of risk, entities \nshould consider how likely the vulnerability is to \nbe exploited and whether there are other controls \npresent in the environment to reduce the risk.\nAny weaknesses that point to PCI DSS \nrequirements not being met should be addressed.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.4.5",
    "title": "If segmentation is used to isolate the CDE from other networks, penetration tests are performed on segmentation controls as follows: \u2022 At least once every 12 months and after any changes to segmentati",
    "level": 3,
    "parentNumber": "11.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "If segmentation is used to isolate the CDE from other networks, penetration tests are performed on segmentation controls as follows: \u2022 At least once every 12 months and after any changes to segmentation controls/methods \u2022 Covering all segmentation controls/methods in use. \u2022 According to the entity\u2019s defined penetration testing methodology. \u2022 Confirming that the segmentation controls/methods are operational and effective, and isolate the CDE from all out-of-scope systems. \u2022 Confirming effectiveness of any use of isolation to separate systems with differing security levels (see Requirement 2.2.3). \u2022 Performed by a qualified internal resource or qualified external third party. \u2022 Organizational independence of the tester exists (not required to be a QSA or ASV).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "As part of the entity\u2019s assessment of risk, entities \nshould consider how likely the vulnerability is to \nbe exploited and whether there are other controls \npresent in the environment to reduce the risk.\nAny weaknesses that point to PCI DSS \nrequirements not being met should be addressed.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.4.6",
    "title": "Additional requirement for service providers only: If segmentation is used to isolate the CDE from other networks, penetration tests are performed on segmentation controls as follows: \u2022 At least once ",
    "level": 3,
    "parentNumber": "11.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Additional requirement for service providers only: If segmentation is used to isolate the CDE from other networks, penetration tests are performed on segmentation controls as follows: \u2022 At least once every six months and after any changes to segmentation controls/methods. \u2022 Covering all segmentation controls/methods in use. \u2022 According to the entity\u2019s defined penetration testing methodology. \u2022 Confirming that the segmentation controls/methods are operational and effective, and isolate the CDE from all out-of-scope systems. \u2022 Confirming effectiveness of any use of isolation to separate systems with differing security levels (see Requirement 2.2.3). \u2022 Performed by a qualified internal resource or qualified external third party. \u2022 Organizational independence of the tester exists (not required to be a QSA or ASV).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Although the requirement specifies that this scope \nvalidation is carried out at least once every six \nmonths and after significant change, this exercise \nshould be performed as frequently as possible to \nensure it remains effective at isolating the CDE \nfrom other networks.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.4.7",
    "title": "Additional requirement for multi-tenant service providers only: Multi-tenant service providers support their customers for external penetration testing per Requirement 11.4.3 and",
    "level": 3,
    "parentNumber": "11.4",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Additional requirement for multi-tenant service providers only: Multi-tenant service providers support their customers for external penetration testing per Requirement 11.4.3 and",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.5",
    "title": "Network intrusions and unexpected file changes are detected and responded to.",
    "level": 2,
    "parentNumber": "11",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.5.1",
    "title": "Intrusion-detection and/or intrusion\u0002prevention techniques are used to detect and/or prevent intrusions into the network as follows: \u2022 All traffic is monitored at the perimeter of the CDE. \u2022 All traff",
    "level": 3,
    "parentNumber": "11.5",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Intrusion-detection and/or intrusion\u0002prevention techniques are used to detect and/or prevent intrusions into the network as follows: \u2022 All traffic is monitored at the perimeter of the CDE. \u2022 All traffic is monitored at critical points in the CDE. \u2022 Personnel are alerted to suspected compromises. \u2022 All intrusion-detection and prevention engines, baselines, and signatures are kept up to date.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Security alerts generated by these techniques \nshould be continually monitored, so that the \nattempted or actual intrusions can be stopped, \nand potential damage limited.",
    "guidanceDefinitions": "Critical locations could include, but are not limited \nto, network security controls between network \nsegments (for example, between a DMZ and an \ninternal network or between an in-scope and out\u0002of-scope network) and points protecting \nconnections between a less trusted and a more \ntrusted system component.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.5.1.1",
    "title": "Additional requirement for service providers only: Intrusion-detection and/or intrusion-prevention techniques detect, alert on/prevent, and address covert malware communication channels.",
    "level": 4,
    "parentNumber": "11.5.1",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "Additional requirement for service providers only: Intrusion-detection and/or intrusion-prevention techniques detect, alert on/prevent, and address covert malware communication channels.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.5.2",
    "title": "A change-detection mechanism (for example, file integrity monitoring tools) is deployed as follows: \u2022 To alert personnel to unauthorized modification (including changes, additions, and deletions) of c",
    "level": 3,
    "parentNumber": "11.5",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "A change-detection mechanism (for example, file integrity monitoring tools) is deployed as follows: \u2022 To alert personnel to unauthorized modification (including changes, additions, and deletions) of critical files. \u2022 To perform critical file comparisons at least once weekly.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Examples of the types of files that should be \nmonitored include, but are not limited to: \n\u2022 System executables. \n\u2022 Application executables. \n\u2022 Configuration and parameter files. \n\u2022 Centrally stored, historical, or archived audit \nlogs. \n\u2022 Additional critical files determined by entity (for \nexample, through risk assessment or other \nmeans).",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.6",
    "title": "Unauthorized changes on payment pages are detected and responded to.",
    "level": 2,
    "parentNumber": "11",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "11.6.1",
    "title": "A change- and tamper-detection mechanism is deployed as follows: \u2022 To alert personnel to unauthorized modification (including indicators of compromise, changes, additions, and deletions) to the securi",
    "level": 3,
    "parentNumber": "11.6",
    "domain": "Regularly Monitor and Test Networks",
    "requirementText": "A change- and tamper-detection mechanism is deployed as follows: \u2022 To alert personnel to unauthorized modification (including indicators of compromise, changes, additions, and deletions) to the security\u0002impacting HTTP headers and the script contents of payment pages as received by the consumer browser. \u2022 The mechanism is configured to evaluate the received HTTP headers and payment pages. \u2022 The mechanism functions are performed as follows: \u2013 At least weekly OR \u2013 Periodically (at the frequency defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1).",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12",
    "title": "Support Information Security with Organizational Policies and Programs",
    "level": 1,
    "parentNumber": null,
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.1",
    "title": "A comprehensive information security policy that governs and provides direction for protection of the entity\u2019s information assets is known",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.1.1",
    "title": "An overall information security policy is: \u2022 Established. \u2022 Published. \u2022 Maintained. \u2022 Disseminated to all relevant personnel, as well as to relevant vendors and business partners.",
    "level": 3,
    "parentNumber": "12.1",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "An overall information security policy is: \u2022 Established. \u2022 Published. \u2022 Maintained. \u2022 Disseminated to all relevant personnel, as well as to relevant vendors and business partners.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "\u201cRelevant\u201d for this requirement means that the \ninformation security policy is disseminated to \nthose with roles applicable to some or all the \ntopics in the policy, either within the company or \nbecause of services/functions performed by a \nvendor or third party.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 293\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nSecurity threats and associated protection \nmethods evolve rapidly. Without updating the \ninformation security policy to reflect relevant \nchanges, new measures to defend against these \nthreats may not be addressed.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.1.2",
    "title": "The information security policy is: \u2022 Reviewed at least once every 12 months. \u2022 Updated as needed to reflect changes to business objectives or risks to the environment.",
    "level": 3,
    "parentNumber": "12.1",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "The information security policy is: \u2022 Reviewed at least once every 12 months. \u2022 Updated as needed to reflect changes to business objectives or risks to the environment.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "These executive management positions are often \nat the most senior level of management and are \npart of the chief executive level or C-level, \ntypically reporting to the Chief Executive Officer or \nthe Board of Directors. Information security \nknowledge for this executive management role\ncan be indicated by work experience, education, \nand/or relevant professional certifications. The \nexpectation is that this individual can provide \nassurance about the implementation of an \neffective security program and ensure the right \ntechnical experts are employed. \nEntities should also consider transition and/or \nsuccession plans for these key personnel to avoid \npotential gaps in critical security activities.",
    "guidanceDefinitions": "\u201cRelevant\u201d for this requirement means that the \ninformation security policy is disseminated to \nthose with roles applicable to some or all the \ntopics in the policy, either within the company or \nbecause of services/functions performed by a \nvendor or third party.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 293\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nSecurity threats and associated protection \nmethods evolve rapidly. Without updating the \ninformation security policy to reflect relevant \nchanges, new measures to defend against these \nthreats may not be addressed.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.1.3",
    "title": "The security policy clearly defines information security roles and responsibilities for all personnel, and all personnel are aware of and acknowledge their information security responsibilities.",
    "level": 3,
    "parentNumber": "12.1",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "The security policy clearly defines information security roles and responsibilities for all personnel, and all personnel are aware of and acknowledge their information security responsibilities.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "These executive management positions are often \nat the most senior level of management and are \npart of the chief executive level or C-level, \ntypically reporting to the Chief Executive Officer or \nthe Board of Directors. Information security \nknowledge for this executive management role\ncan be indicated by work experience, education, \nand/or relevant professional certifications. The \nexpectation is that this individual can provide \nassurance about the implementation of an \neffective security program and ensure the right \ntechnical experts are employed. \nEntities should also consider transition and/or \nsuccession plans for these key personnel to avoid \npotential gaps in critical security activities.",
    "guidanceDefinitions": "\u201cRelevant\u201d for this requirement means that the \ninformation security policy is disseminated to \nthose with roles applicable to some or all the \ntopics in the policy, either within the company or \nbecause of services/functions performed by a \nvendor or third party.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 293\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nSecurity threats and associated protection \nmethods evolve rapidly. Without updating the \ninformation security policy to reflect relevant \nchanges, new measures to defend against these \nthreats may not be addressed.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.1.4",
    "title": "Responsibility for information security is formally assigned to a Chief Information Security Officer or other information security knowledgeable member of executive management. .",
    "level": 3,
    "parentNumber": "12.1",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Responsibility for information security is formally assigned to a Chief Information Security Officer or other information security knowledgeable member of executive management. .",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "These executive management positions are often \nat the most senior level of management and are \npart of the chief executive level or C-level, \ntypically reporting to the Chief Executive Officer or \nthe Board of Directors. Information security \nknowledge for this executive management role\ncan be indicated by work experience, education, \nand/or relevant professional certifications. The \nexpectation is that this individual can provide \nassurance about the implementation of an \neffective security program and ensure the right \ntechnical experts are employed. \nEntities should also consider transition and/or \nsuccession plans for these key personnel to avoid \npotential gaps in critical security activities.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.2",
    "title": "Acceptable use policies for end-user technologies are defined and implemented.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.2.1",
    "title": "Acceptable use policies for end-user technologies are documented and implemented, including: \u2022 Explicit approval by authorized parties. \u2022 Acceptable uses of the technology. \u2022 List of products approved",
    "level": 3,
    "parentNumber": "12.2",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Acceptable use policies for end-user technologies are documented and implemented, including: \u2022 Explicit approval by authorized parties. \u2022 Acceptable uses of the technology. \u2022 List of products approved by the company for employee use, including hardware and software.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important that usage policies are supported \nby technical controls to manage the enforcement \nof the policies. \nStructuring polices as simple \u201cdo\u201d and \u201cdo not\u201d \nrequirements that are linked to a purpose can \nhelp remove ambiguity and provide personnel \nwith the context for the requirement.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.3",
    "title": "Risks to the cardholder data environment are formally identified, evaluated, and managed.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.3.1",
    "title": "For each PCI DSS requirement that specifies completion of a targeted risk analysis, the analysis is documented and includes: \u2022 Identification of the assets being protected. \u2022 Identification of the thr",
    "level": 3,
    "parentNumber": "12.3",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "For each PCI DSS requirement that specifies completion of a targeted risk analysis, the analysis is documented and includes: \u2022 Identification of the assets being protected. \u2022 Identification of the threat(s) that the requirement is protecting against. \u2022 Identification of factors that contribute to the likelihood and/or impact of a threat being realized. \u2022 Resulting analysis that determines, and includes justification for, how the frequency or processes defined by the entity to meet the requirement minimize the likelihood and/or impact of the threat being realized. \u2022 Review of each targeted risk analysis at least once every 12 months to determine whether the results are still valid or if an updated risk analysis is needed. \u2022 Performance of updated risk analyses when needed, as determined by the annual review.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "An enterprise-wide risk assessment, which is a \npoint-in-time activity that enables entities to \nidentify threats and associated vulnerabilities, is \nrecommended, but is not required, for entities to \ndetermine and understand broader and emerging \nthreats with the potential to negatively impact its \nbusiness. This enterprise-wide risk assessment \ncould be established as part of an overarching \nrisk management program that is used as an \ninput to the annual review of an organization's \noverall information security policy (see \nRequirement 12.1.1).",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.3.2",
    "title": "A targeted risk analysis is performed for each PCI DSS requirement that the entity meets with the customized approach, to include: \u2022 Documented evidence detailing each element specified in Appendix D:",
    "level": 3,
    "parentNumber": "12.3",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "A targeted risk analysis is performed for each PCI DSS requirement that the entity meets with the customized approach, to include: \u2022 Documented evidence detailing each element specified in Appendix D: Customized Approach (including, at a minimum, a controls matrix and risk analysis). \u2022 Approval of documented evidence by senior management. \u2022 Performance of the targeted analysis of risk at least once every 12 months.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "The customized approach to meeting a PCI DSS \nrequirement allows entities to define the controls \nused to meet a given requirement\u2019s stated",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to the following documents on the PCI SSC \nwebsite:\n\u2022 Information Supplement: TRA Guidance \n\u2022 Sample Template: TRA for Activity Frequency. \n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 298\nRequirements and Testing Procedures Guidance\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nA risk analysis following a repeatable and robust \nmethodology enables an entity to meet the \ncustomized approach objective."
  },
  {
    "number": "12.3.3",
    "title": "Cryptographic cipher suites and protocols in use are documented and reviewed at least once every 12 months, including at least the following: \u2022 An up-to-date inventory of all cryptographic cipher suit",
    "level": 3,
    "parentNumber": "12.3",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Cryptographic cipher suites and protocols in use are documented and reviewed at least once every 12 months, including at least the following: \u2022 An up-to-date inventory of all cryptographic cipher suites and protocols in use, including purpose and where used. \u2022 Active monitoring of industry trends regarding continued viability of all cryptographic cipher suites and protocols in use. \u2022 Documentation of a plan, to respond to anticipated changes in cryptographic vulnerabilities.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "\u201cCryptographic agility\u201d refers to the ability to \nmonitor and manage the encryption and related \nverification technologies deployed across an \norganization.",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to NIST SP 800-131a, Transitioning the \nUse of Cryptographic Algorithms and Key \nLengths."
  },
  {
    "number": "12.3.4",
    "title": "Hardware and software technologies in use are reviewed at least once every 12 months, including at least the following: \u2022 Analysis that the technologies continue to receive security fixes from vendors",
    "level": 3,
    "parentNumber": "12.3",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Hardware and software technologies in use are reviewed at least once every 12 months, including at least the following: \u2022 Analysis that the technologies continue to receive security fixes from vendors promptly. \u2022 Analysis that the technologies continue to support (and do not preclude) the entity\u2019s PCI DSS compliance. \u2022 Documentation of any industry announcements or trends related to a technology, such as when a vendor has announced \u201cend of life\u201d plans for a technology. \u2022 Documentation of a plan, approved by senior management, to remediate outdated technologies, including those for which vendors have announced \u201cend of life\u201d plans.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.4",
    "title": "PCI DSS compliance is managed.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.4.1",
    "title": "Additional requirement for service providers only: Responsibility is established by executive management for the protection of cardholder data and a PCI DSS compliance program to include: \u2022 Overall ac",
    "level": 3,
    "parentNumber": "12.4",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Additional requirement for service providers only: Responsibility is established by executive management for the protection of cardholder data and a PCI DSS compliance program to include: \u2022 Overall accountability for maintaining PCI DSS compliance. \u2022 Defining a charter for a PCI DSS compliance program and communication to executive management.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "These reviews can also be used to verify that \nappropriate evidence is being maintained\u2014for \nexample, audit logs, vulnerability scan reports, \nreviews of network security control rulesets\u2014to \nassist in the entity\u2019s preparation for its next PCI \nDSS assessment.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Looking at Requirement 1.2.7 as one example, \nRequirement 12.4.2 is met by confirming, at least \nonce every three months, that reviews of \nconfigurations of network security controls have \noccurred at the required frequency. On the other \nhand, Requirement 1.2.7 is met by reviewing \nthose configurations as specified in the \nrequirement.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.4.2",
    "title": "Additional requirement for service providers only: Reviews are performed at least once every three months to confirm that personnel are performing their tasks in accordance with all security policies ",
    "level": 3,
    "parentNumber": "12.4",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Additional requirement for service providers only: Reviews are performed at least once every three months to confirm that personnel are performing their tasks in accordance with all security policies and operational procedures. Reviews are performed by personnel other than those responsible for performing the given task and include, but are not limited to, the following tasks: \u2022 Daily log reviews. \u2022 Configuration reviews for network security controls. \u2022 Applying configuration standards to new systems. \u2022 Responding to security alerts. \u2022 Change-management processes.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "These reviews can also be used to verify that \nappropriate evidence is being maintained\u2014for \nexample, audit logs, vulnerability scan reports, \nreviews of network security control rulesets\u2014to \nassist in the entity\u2019s preparation for its next PCI \nDSS assessment.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Looking at Requirement 1.2.7 as one example, \nRequirement 12.4.2 is met by confirming, at least \nonce every three months, that reviews of \nconfigurations of network security controls have \noccurred at the required frequency. On the other \nhand, Requirement 1.2.7 is met by reviewing \nthose configurations as specified in the \nrequirement.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.4.2.1",
    "title": "Additional requirement for service providers only: Reviews conducted in accordance with Requirement 12.4.2 are documented to include: \u2022 Results of the reviews. \u2022 Documented remediation actions taken f",
    "level": 4,
    "parentNumber": "12.4.2",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Additional requirement for service providers only: Reviews conducted in accordance with Requirement 12.4.2 are documented to include: \u2022 Results of the reviews. \u2022 Documented remediation actions taken for any tasks that were found to not be performed at Requirement 12.4.2. \u2022 Review and sign-off of results by personnel assigned responsibility for the PCI DSS compliance program.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "If an entity keeps an inventory of all assets, those \nsystem components in scope for PCI DSS should \nbe clearly identifiable among the other assets. \nInventories should include containers or images \nthat may be instantiated.\nAssigning an owner to the inventory helps to \nensure the inventory stays current.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to maintain an inventory include as a \ndatabase, as a series of files, or in an inventory\u0002management tool.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.5",
    "title": "PCI DSS scope is documented and validated.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.5.1",
    "title": "An inventory of system components that are in scope for PCI DSS, including a description of function/use, is maintained and kept current.",
    "level": 3,
    "parentNumber": "12.5",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "An inventory of system components that are in scope for PCI DSS, including a description of function/use, is maintained and kept current.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "If an entity keeps an inventory of all assets, those \nsystem components in scope for PCI DSS should \nbe clearly identifiable among the other assets. \nInventories should include containers or images \nthat may be instantiated.\nAssigning an owner to the inventory helps to \nensure the inventory stays current.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Methods to maintain an inventory include as a \ndatabase, as a series of files, or in an inventory\u0002management tool.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.5.2",
    "title": "PCI DSS scope is documented and confirmed by the entity at least once every 12 months and upon significant change to the in-scope environment. At a minimum, the scoping validation includes: \u2022 Identify",
    "level": 3,
    "parentNumber": "12.5",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "PCI DSS scope is documented and confirmed by the entity at least once every 12 months and upon significant change to the in-scope environment. At a minimum, the scoping validation includes: \u2022 Identifying all data flows for the various payment stages (for example, authorization, capture settlement, chargebacks, and refunds) and acceptance channels (for example, card\u0002present, card-not-present, and e-commerce). \u2022 Updating all data-flow diagrams per Requirement 1.2.4. \u2022 Identifying all locations where account data is stored, processed, and transmitted, including but not limited to: 1) any locations outside of the currently defined CDE, 2) applications that process CHD, 3) transmissions between systems and networks, and 4) file backups. \u2022 Identifying all system components in the CDE, connected to the CDE, or that could impact security of the CDE. \u2022 Identifying all segmentation controls in use and the environment(s) from which the CDE is segmented, including justification for environments being out of scope. \u2022 Identifying all connections from third-party entities with access to the CDE. \u2022 Confirming that all identified data flows, account data, system components, segmentation controls, and connections from third parties with access to the CDE are included in scope.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Accurate scoping involves critically evaluating the \nCDE and all connected system components to \ndetermine the necessary coverage for PCI DSS \nrequirements. Scoping activities, including careful \nanalysis and ongoing monitoring, help to ensure \nthat in-scope systems are appropriately secured. \nWhen documenting account data locations, the \nentity can consider creating a table or \nspreadsheet that includes the following \ninformation:\n\u2022 Data stores (databases, files, cloud, etc.), \nincluding the purpose of data storage and the \nretention period,\n\u2022 Which CHD elements are stored (PAN, expiry \ndate, cardholder name, and/or any elements \nof SAD prior to completion of authorization),\n\u2022 How data is secured (type of encryption and \nstrength, hashing algorithm and strength, \ntruncation, tokenization),\n\u2022 How access to data stores is logged, \nincluding a description of logging \nmechanism(s) in use (enterprise solution, \napplication level, operating system level, \netc.).\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.5.2.1",
    "title": "Additional requirement for service providers only: PCI DSS scope is documented and confirmed by the entity at least once every six months and upon significant change to the in-scope environment. At a ",
    "level": 4,
    "parentNumber": "12.5.2",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Additional requirement for service providers only: PCI DSS scope is documented and confirmed by the entity at least once every six months and upon significant change to the in-scope environment. At a minimum, the scoping validation includes all the elements specified in Requirement",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "Changes to organizational structure include, but \nare not limited to, company mergers or \nacquisitions, and significant changes or \nreassignments of personnel with responsibility for \nsecurity controls.",
    "guidanceFurtherInformation": "For additional guidance, refer to Information \nSupplement: Guidance for PCI DSS Scoping and \nNetwork Segmentation. \nPCI DSS scope is verified periodically, and after \nsignificant changes, by comprehensive analysis and \nappropriate technical measures."
  },
  {
    "number": "12.5.3",
    "title": "Additional requirement for service providers only: Significant changes to organizational structure result in a documented (internal) review of the impact to PCI DSS scope and applicability of controls",
    "level": 3,
    "parentNumber": "12.5",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Additional requirement for service providers only: Significant changes to organizational structure result in a documented (internal) review of the impact to PCI DSS scope and applicability of controls, with results communicated to executive management.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "Changes to organizational structure include, but \nare not limited to, company mergers or \nacquisitions, and significant changes or \nreassignments of personnel with responsibility for \nsecurity controls.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.6",
    "title": "Security awareness education is an ongoing activity.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.6.1",
    "title": "A formal security awareness program is implemented to make all personnel aware of the entity\u2019s information security policy and procedures, and their role in protecting the cardholder data.",
    "level": 3,
    "parentNumber": "12.6",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "A formal security awareness program is implemented to make all personnel aware of the entity\u2019s information security policy and procedures, and their role in protecting the cardholder data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.6.2",
    "title": "The security awareness program is: \u2022 Reviewed at least once every 12 months, and \u2022 Updated as needed to address any new threats and vulnerabilities that may impact the security of the entity\u2019s cardhol",
    "level": 3,
    "parentNumber": "12.6",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "The security awareness program is: \u2022 Reviewed at least once every 12 months, and \u2022 Updated as needed to address any new threats and vulnerabilities that may impact the security of the entity\u2019s cardholder data and/or sensitive authentication data, or the information provided to personnel about their role in protecting cardholder data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities may incorporate new-hire training as part \nof the Human Resources onboarding process. \nTraining should outline the security-related \u201cdos\u201d \nand \u201cdon\u2019ts.\u201d Periodic refresher training reinforces \nkey security processes and procedures that may \nbe forgotten or bypassed. \nEntities should consider requiring security \nawareness training anytime personnel transfer \ninto roles where they can impact the security of \ncardholder data and/or sensitive authentication \ndata from roles where they did not have this \nimpact. \nMethods and training content can vary, depending \non personnel roles.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Different methods that can be used to provide \nsecurity awareness and education include \nposters, letters, web-based training, in-person \ntraining, team meetings, and incentives.\nPersonnel acknowledgments may be recorded in \nwriting or electronically.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.6.3",
    "title": "Personnel receive security awareness training as follows: \u2022 Upon hire and at least once every 12 months. \u2022 Multiple methods of communication are used. \u2022 Personnel acknowledge at least once every 12 mo",
    "level": 3,
    "parentNumber": "12.6",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Personnel receive security awareness training as follows: \u2022 Upon hire and at least once every 12 months. \u2022 Multiple methods of communication are used. \u2022 Personnel acknowledge at least once every 12 months that they have read and understood the information security policy and procedures.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities may incorporate new-hire training as part \nof the Human Resources onboarding process. \nTraining should outline the security-related \u201cdos\u201d \nand \u201cdon\u2019ts.\u201d Periodic refresher training reinforces \nkey security processes and procedures that may \nbe forgotten or bypassed. \nEntities should consider requiring security \nawareness training anytime personnel transfer \ninto roles where they can impact the security of \ncardholder data and/or sensitive authentication \ndata from roles where they did not have this \nimpact. \nMethods and training content can vary, depending \non personnel roles.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Different methods that can be used to provide \nsecurity awareness and education include \nposters, letters, web-based training, in-person \ntraining, team meetings, and incentives.\nPersonnel acknowledgments may be recorded in \nwriting or electronically.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.6.3.1",
    "title": "Security awareness training includes awareness of threats and vulnerabilities that could impact the security of cardholder data and/or sensitive authentication data, including but not limited to: \u2022 Ph",
    "level": 4,
    "parentNumber": "12.6.3",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Security awareness training includes awareness of threats and vulnerabilities that could impact the security of cardholder data and/or sensitive authentication data, including but not limited to: \u2022 Phishing and related attacks. \u2022 Social engineering.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "An effective security awareness program should \ninclude examples of phishing emails and periodic \ntesting to determine the prevalence of personnel \nreporting such attacks. Training material an entity \ncan consider for this topic include: \n\u2022 How to identify phishing and other social \nengineering attacks.\n\u2022 How to react to suspected phishing and social \nengineering.\n\u2022 Where and how to report suspected phishing \nand social engineering activity.\nAn emphasis on reporting allows the organization \nto reward positive behavior, to optimize technical \ndefenses (see Requirement 5.4.1), and to take \nimmediate action to remove similar phishing \nemails that evaded technical defenses from \nrecipient inboxes.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.6.3.2",
    "title": "Security awareness training includes awareness about the acceptable use of end-user technologies in accordance with Requirement",
    "level": 4,
    "parentNumber": "12.6.3",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Security awareness training includes awareness about the acceptable use of end-user technologies in accordance with Requirement",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider screening for existing \npersonnel anytime they transfer into roles where \nthey have access to the CDE from roles where \nthey did not have this access. \nTo be effective, the level of screening should be \nappropriate for the position. For example, \npositions requiring greater responsibility or that \nhave administrative access to critical data or \nsystems may warrant more detailed or more \nfrequent screening than positions with less \nresponsibility and access.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Screening options can include, as appropriate for \nthe entity\u2019s region, previous employment history, \nreview of public information/social media \nresources, criminal record, credit history, and \nreference checks.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.7",
    "title": "Personnel are screened to reduce risks from insider threats.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.7.1",
    "title": "Potential personnel who will have access to the CDE are screened, within the constraints of local laws, prior to hire to minimize the risk of attacks from internal sources.",
    "level": 3,
    "parentNumber": "12.7",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Potential personnel who will have access to the CDE are screened, within the constraints of local laws, prior to hire to minimize the risk of attacks from internal sources.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities should consider screening for existing \npersonnel anytime they transfer into roles where \nthey have access to the CDE from roles where \nthey did not have this access. \nTo be effective, the level of screening should be \nappropriate for the position. For example, \npositions requiring greater responsibility or that \nhave administrative access to critical data or \nsystems may warrant more detailed or more \nfrequent screening than positions with less \nresponsibility and access.",
    "guidanceDefinitions": "",
    "guidanceExamples": "Screening options can include, as appropriate for \nthe entity\u2019s region, previous employment history, \nreview of public information/social media \nresources, criminal record, credit history, and \nreference checks.",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.8",
    "title": "Risk to information assets associated with third-party service provider (TPSP) relationships is managed.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.8.1",
    "title": "A list of all third-party service providers (TPSPs) with which account data is shared or that could affect the security of account data is maintained, including a description for each of the services ",
    "level": 3,
    "parentNumber": "12.8",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "A list of all third-party service providers (TPSPs) with which account data is shared or that could affect the security of account data is maintained, including a description for each of the services provided.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "Different types of TPSPs include those that:\n\u2022 Store, process, or transmit account data on \nthe entity\u2019s behalf (such as payment \ngateways, payment processors, payment \nservice providers (PSPs), and off-site storage\nproviders). \n\u2022 Manage system components included in the \nentity\u2019s PCI DSS assessment (such as\nproviders of network security control services, \nanti-malware services, and security incident \nand event management (SIEM); contact and \ncall centers; web-hosting companies; and \nIaaS, PaaS, SaaS, and FaaS cloud \nproviders).\n\u2022 Could impact the security of the entity\u2019s \ncardholder data and/or sensitive \nauthentication data (such as vendors \nproviding support via remote access, and \nbespoke software developers).",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.8.2",
    "title": "Written agreements with TPSPs are maintained as follows: \u2022 Written agreements are maintained with all TPSPs with which account data is shared or that could affect the security of the CDE. \u2022 Written ag",
    "level": 3,
    "parentNumber": "12.8",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Written agreements with TPSPs are maintained as follows: \u2022 Written agreements are maintained with all TPSPs with which account data is shared or that could affect the security of the CDE. \u2022 Written agreements include acknowledgments from TPSPs that TPSPs are responsible for the security of account data the TPSPs possess or otherwise store, process, or transmit on behalf of the entity, or to the extent that the TPSP could impact the security of the entity\u2019s cardholder data and/or sensitive authentication data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.8.3",
    "title": "An established process is implemented for engaging TPSPs, including proper due diligence prior to engagement.",
    "level": 3,
    "parentNumber": "12.8",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "An established process is implemented for engaging TPSPs, including proper due diligence prior to engagement.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Specific due-diligence processes and goals will \nvary for each organization. Elements that should \nbe considered include the provider\u2019s reporting \npractices, breach-notification and incident \nresponse procedures, details of how PCI DSS \nresponsibilities are assigned between each party, \nhow the TPSP validates their PCI DSS \ncompliance and what evidence they provide.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.8.4",
    "title": "A program is implemented to monitor TPSPs\u2019 PCI DSS compliance status at least once every 12 months.",
    "level": 3,
    "parentNumber": "12.8",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "A program is implemented to monitor TPSPs\u2019 PCI DSS compliance status at least once every 12 months.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Specific due-diligence processes and goals will \nvary for each organization. Elements that should \nbe considered include the provider\u2019s reporting \npractices, breach-notification and incident \nresponse procedures, details of how PCI DSS \nresponsibilities are assigned between each party, \nhow the TPSP validates their PCI DSS \ncompliance and what evidence they provide.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.8.5",
    "title": "Information is maintained about which PCI DSS requirements are managed by each TPSP, which are managed by the entity, and any that are shared between the TPSP and the entity.",
    "level": 3,
    "parentNumber": "12.8",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Information is maintained about which PCI DSS requirements are managed by each TPSP, which are managed by the entity, and any that are shared between the TPSP and the entity.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Entities can document these responsibilities via a \nmatrix that identifies all applicable PCI DSS \nrequirements and indicates for each requirement \nwhether the entity or TPSP is responsible for \nmeeting that requirement or whether it is a shared \nresponsibility. This type of document is often \nreferred to as a responsibility matrix. \n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to Information Supplement: Third-Party \nSecurity Assurance for a sample responsibility \nmatrix template.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 323\nRequirements and Testing Procedures Guidance\n12.9 Third-party service providers (TPSPs) support their customers\u2019 PCI DSS compliance.\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nIn conjunction with Requirement 12.8.2, this \nrequirement is intended to promote a consistent \nlevel of understanding between TPSPs and their \ncustomers about their applicable PCI DSS \nresponsibilities. The acknowledgment from the \nTPSP evidences the TPSP\u2019s commitment to \nmaintaining proper security of the account data \nthat it obtains from its customers.\nThe TPSP\u2019s internal policies and procedures \nrelated to their customer engagement process \nand any templates used for written agreements \nshould include provision of an applicable PCI \nDSS acknowledgement to its customers. The \nmethod by which the TPSP provides written \nacknowledgment should be agreed between the \nprovider and its customers."
  },
  {
    "number": "12.9",
    "title": "Third-party service providers (TPSPs) support their customers\u2019 PCI DSS compliance.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.9.1",
    "title": "Additional requirement for service providers only: TPSPs provide written agreements to customers that include acknowledgments that TPSPs are responsible for the security of account data the TPSP posse",
    "level": 3,
    "parentNumber": "12.9",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Additional requirement for service providers only: TPSPs provide written agreements to customers that include acknowledgments that TPSPs are responsible for the security of account data the TPSP possesses or otherwise stores, processes, or transmits on behalf of the customer, or to the extent that the TPSP could impact the security of the customer\u2019s cardholder data and/or sensitive authentication data.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "Refer to Information Supplement: Third-Party \nSecurity Assurance for a sample responsibility \nmatrix template.\n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 323\nRequirements and Testing Procedures Guidance\n12.9 Third-party service providers (TPSPs) support their customers\u2019 PCI DSS compliance.\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nIn conjunction with Requirement 12.8.2, this \nrequirement is intended to promote a consistent \nlevel of understanding between TPSPs and their \ncustomers about their applicable PCI DSS \nresponsibilities. The acknowledgment from the \nTPSP evidences the TPSP\u2019s commitment to \nmaintaining proper security of the account data \nthat it obtains from its customers.\nThe TPSP\u2019s internal policies and procedures \nrelated to their customer engagement process \nand any templates used for written agreements \nshould include provision of an applicable PCI \nDSS acknowledgement to its customers. The \nmethod by which the TPSP provides written \nacknowledgment should be agreed between the \nprovider and its customers."
  },
  {
    "number": "12.9.2",
    "title": "Additional requirement for service providers only: TPSPs support their customers\u2019 requests for information to meet Requirements",
    "level": 3,
    "parentNumber": "12.9",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Additional requirement for service providers only: TPSPs support their customers\u2019 requests for information to meet Requirements",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "If a TPSP has a PCI DSS Attestation of \nCompliance (AOC), the expectation is that the \nTPSP should provide that to customers upon \nrequest to demonstrate their PCI DSS compliance \nstatus. \nIf the TPSP did not undergo a PCI DSS \nassessment, they may be able to provide other \nsufficient evidence to demonstrate that it has met \nthe applicable requirements without undergoing a \nformal compliance validation. For example, the \nTPSP can provide specific evidence to the entity\u2019s \nassessor so the assessor can confirm applicable \nrequirements are met. Alternatively, the TPSP \ncan elect to undergo multiple on-demand \nassessments by each of its customers\u2019 assessors, \nwith each assessment targeted to confirm that \napplicable requirements are met.\nTPSPs should provide sufficient evidence to their \ncustomers to verify that the scope of the TPSP\u2019s \nPCI DSS assessment covered the services \napplicable to the customer and that the relevant \nPCI DSS requirements were examined and \ndetermined to be in place. \n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.10",
    "title": "Suspected and confirmed security incidents that could impact the CDE are responded to immediately.",
    "level": 2,
    "parentNumber": "12",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.10.1",
    "title": "An incident response plan exists and is ready to be activated in the event of a suspected or confirmed security incident. The plan includes, but is not limited to: \u2022 Roles, responsibilities, and commu",
    "level": 3,
    "parentNumber": "12.10",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "An incident response plan exists and is ready to be activated in the event of a suspected or confirmed security incident. The plan includes, but is not limited to: \u2022 Roles, responsibilities, and communication and contact strategies in the event of a suspected or confirmed security incident, including notification of payment brands and acquirers, at a minimum. \u2022 Incident response procedures with specific containment and mitigation activities for different types of incidents. \u2022 Business recovery and continuity procedures. \u2022 Data backup processes. \u2022 Analysis of legal requirements for reporting compromises. \u2022 Coverage and responses of all critical system components. \u2022 Reference or inclusion of incident response procedures from the payment brands.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The incident response plan should be thorough \nand contain all the key elements for stakeholders \n(for example, legal, communications) to allow the \nentity to respond effectively in the event of a \nbreach that could impact account data. It is \nimportant to keep the plan up to date with current \ncontact information of all individuals designated \nas having a role in incident response. Other \nrelevant parties for notifications may include \ncustomers, financial institutions (acquirers and \nissuers), and business partners. \nEntities should consider how to address all \ncompromises of data within the CDE in their \nincident response plans, including compromises \nto account data, wireless encryption keys, \nencryption keys used for transmission and \nstorage or account data or cardholder data, etc.\n(continued on next page)",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For further guidance, refer to: \n\u2022 PCI DSS section: Use of Third-Party Service \nProviders. \n\u2022 Information Supplement: Third-Party Security \nAssurance (includes a sample responsibility \nmatrix template). \n\nPayment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024\n\u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 327\nRequirements and Testing Procedures Guidance\n12.10 Suspected and confirmed security incidents that could impact the CDE are responded to immediately.\nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nWithout a comprehensive incident response plan \nthat is properly disseminated, read, and \nunderstood by the parties responsible, confusion \nand lack of a unified response could create further \ndowntime for the business, unnecessary public \nmedia exposure, as well as risk of financial and/or \nreputational loss and legal liabilities."
  },
  {
    "number": "12.10.2",
    "title": "At least once every 12 months, the security incident response plan is: \u2022 Reviewed and the content is updated as needed. \u2022 Tested, including all elements listed in Requirement 12.10.1.",
    "level": 3,
    "parentNumber": "12.10",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "At least once every 12 months, the security incident response plan is: \u2022 Reviewed and the content is updated as needed. \u2022 Tested, including all elements listed in Requirement 12.10.1.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The test of the incident response plan can include \nsimulated incidents and the corresponding \nresponses in the form of a \u201ctable-top exercise\u201d \nthat includes participation by relevant personnel. \nA review of the incident and the quality of the \nresponse can provide entities with the assurance \nthat all required elements are included in the plan.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": "For more information, refer to the NIST SP 800-\n61 Rev. 2, Computer Security Incident Handling \nGuide. \nDefined Approach Requirements Defined Approach Testing Procedures Purpose\nProper testing of the security incident response \nplan can identify broken business processes and \nensure key steps are not missed, which could \nresult in increased exposure during an incident. \nPeriodic testing of the plan ensures that the \nprocesses remain viable, as well as ensuring that \nall relevant personnel in the organization are \nfamiliar with the plan."
  },
  {
    "number": "12.10.3",
    "title": "Specific personnel are designated to be available on a 24/7 basis to respond to suspected or confirmed security incidents.",
    "level": 3,
    "parentNumber": "12.10",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Specific personnel are designated to be available on a 24/7 basis to respond to suspected or confirmed security incidents.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "Often, specific personnel are designated to be \npart of a security incident response team, with the \nteam having overall responsibility for responding \nto incidents (perhaps on a rotating schedule \nbasis) and managing those incidents in \naccordance with the plan. The incident response \nteam can consist of core members who are \npermanently assigned or \u201con-demand\u201d personnel \nwho may be called up as necessary, depending \non their expertise and the specifics of the incident. \nHaving available resources to respond quickly to \nincidents minimizes disruption to the organization.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.10.4",
    "title": "Personnel responsible for responding to suspected and confirmed security incidents are appropriately and periodically trained on their incident response responsibilities.",
    "level": 3,
    "parentNumber": "12.10",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Personnel responsible for responding to suspected and confirmed security incidents are appropriately and periodically trained on their incident response responsibilities.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important that all personnel involved in \nincident response are trained and knowledgeable \nabout managing evidence for forensics and \ninvestigations.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.10.4.1",
    "title": "The frequency of periodic training for incident response personnel is defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement",
    "level": 4,
    "parentNumber": "12.10.4",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "The frequency of periodic training for incident response personnel is defined in the entity\u2019s targeted risk analysis, which is performed according to all elements specified in Requirement",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "It is important that all personnel involved in \nincident response are trained and knowledgeable \nabout managing evidence for forensics and \ninvestigations.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.10.5",
    "title": "The security incident response plan includes monitoring and responding to alerts from security monitoring systems, including but not limited to: \u2022 Intrusion-detection and intrusion-prevention systems.",
    "level": 3,
    "parentNumber": "12.10",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "The security incident response plan includes monitoring and responding to alerts from security monitoring systems, including but not limited to: \u2022 Intrusion-detection and intrusion-prevention systems. \u2022 Network security controls. \u2022 Change-detection mechanisms for critical files. \u2022 The change-and tamper-detection mechanism for payment pages. This bullet is a best practice until its effective date; refer to Applicability Notes below for details. \u2022 Detection of unauthorized wireless access points.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The lessons-learned exercise should include all \nlevels of personnel. Although it is often included \nas part of the review of the entire incident, it \nshould focus on how the entity\u2019s response to the \nincident could be improved.\nIt is important to not just consider elements of the \nresponse that did not have the planned outcomes \nbut also to understand what worked well and \nwhether lessons from those elements that worked \nwell can be applied to areas of the plan that did\nnot.\nAnother way to optimize an entity\u2019s incident \nresponse plan is to understand the attacks made \nagainst other organizations and use that \ninformation to fine-tune the entity\u2019s detection, \ncontainment, mitigation, or recovery procedures.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.10.6",
    "title": "The security incident response plan is modified and evolved according to lessons learned and to incorporate industry developments.",
    "level": 3,
    "parentNumber": "12.10",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "The security incident response plan is modified and evolved according to lessons learned and to incorporate industry developments.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "The lessons-learned exercise should include all \nlevels of personnel. Although it is often included \nas part of the review of the entire incident, it \nshould focus on how the entity\u2019s response to the \nincident could be improved.\nIt is important to not just consider elements of the \nresponse that did not have the planned outcomes \nbut also to understand what worked well and \nwhether lessons from those elements that worked \nwell can be applied to areas of the plan that did\nnot.\nAnother way to optimize an entity\u2019s incident \nresponse plan is to understand the attacks made \nagainst other organizations and use that \ninformation to fine-tune the entity\u2019s detection, \ncontainment, mitigation, or recovery procedures.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  },
  {
    "number": "12.10.7",
    "title": "Incident response procedures are in place, to be initiated upon the detection of stored PAN anywhere it is not expected, and include: \u2022 Determining what to do if PAN is discovered outside the CDE, inc",
    "level": 3,
    "parentNumber": "12.10",
    "domain": "Maintain an Information Security Policy",
    "requirementText": "Incident response procedures are in place, to be initiated upon the detection of stored PAN anywhere it is not expected, and include: \u2022 Determining what to do if PAN is discovered outside the CDE, including its retrieval, secure deletion, and/or migration into the currently defined CDE, as applicable. \u2022 Identifying whether sensitive authentication data is stored with PAN. \u2022 Determining where the account data came from and how it ended up where it was not expected. \u2022 Remediating data leaks or process gaps that resulted in the account data being where it was not expected.",
    "applicabilityNotes": "",
    "guidancePurpose": "",
    "guidanceGoodPractice": "If PAN was found outside the CDE, analysis \nshould be performed to 1) determine whether it \nwas saved independently of other data or with \nsensitive authentication data, 2) identify the \nsource of the data, and 3) identify the control \ngaps that resulted in the data being outside the \nCDE. \nEntities should consider whether there are \ncontributory factors, such as business processes, \nuser behavior, improper system configurations, \netc. that caused the PAN to be stored in an \nunexpected location. If such contributory factors \nare present, they should be addressed per this \nRequirement to prevent recurrence.",
    "guidanceDefinitions": "",
    "guidanceExamples": "",
    "guidanceFurtherInformation": ""
  }
]

export const testingProcedures: PciTestingProcedure[] = [
  {
    "id": "1.1.1",
    "requirementNumber": "1.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 1 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.1.2.a",
    "requirementNumber": "1.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 1 are documented and assigned."
  },
  {
    "id": "1.1.2.b",
    "requirementNumber": "1.1.2",
    "text": "Interview personnel responsible for performing activities in Requirement 1 to verify that roles and responsibilities are assigned as documented and are understood."
  },
  {
    "id": "1.2.1.a",
    "requirementNumber": "1.2.1",
    "text": "Examine the configuration standards for NSC rulesets to verify the standards are in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.2.1.b",
    "requirementNumber": "1.2.1",
    "text": "Examine configuration settings for NSC rulesets to verify that rulesets are implemented"
  },
  {
    "id": "1.2.2.a",
    "requirementNumber": "1.2.2",
    "text": "Examine documented procedures to verify that changes to network connections and configurations of NSCs are included in the formal change control process in accordance with Requirement 6.5.1."
  },
  {
    "id": "1.2.2.b",
    "requirementNumber": "1.2.2",
    "text": "Examine network configuration settings to identify changes made to network connections. Interview responsible personnel and examine change control records to verify that identified changes to network connections were approved and managed in accordance with Requirement"
  },
  {
    "id": "1.2.2.c",
    "requirementNumber": "1.2.2",
    "text": "Examine network configuration settings to identify changes made to configurations of NSCs. Interview responsible personnel and examine change control records to verify that identified changes to configurations of NSCs were approved and managed in accordance with Requirement"
  },
  {
    "id": "1.2.3.a",
    "requirementNumber": "1.2.3",
    "text": "Examine diagram(s) and network configurations to verify that an accurate network diagram(s) exists in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.2.3.b",
    "requirementNumber": "1.2.3",
    "text": "Examine documentation and interview responsible personnel to verify that the network diagram(s) is accurate and updated when there are changes to the environment."
  },
  {
    "id": "1.2.4.a",
    "requirementNumber": "1.2.4",
    "text": "Examine data-flow diagram(s) and interview personnel to verify the diagram(s) show all account data flows in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.2.4.b",
    "requirementNumber": "1.2.4",
    "text": "Examine documentation and interview responsible personnel to verify that the data-flow diagram(s) is accurate and updated when there are changes to the environment. Customized Approach Objective A representation of all transmissions of account data between system components and across network segments is maintained and available."
  },
  {
    "id": "1.2.5.a",
    "requirementNumber": "1.2.5",
    "text": "Examine documentation to verify that a list exists of all allowed services, protocols, and ports, including business justification and approval for each."
  },
  {
    "id": "1.2.5.b",
    "requirementNumber": "1.2.5",
    "text": "Examine configuration settings for NSCs to verify that only approved services, protocols, and"
  },
  {
    "id": "1.2.6.a",
    "requirementNumber": "1.2.6",
    "text": "Examine documentation that identifies all insecure services, protocols, and ports in use to verify that for each, security features are defined to mitigate the risk."
  },
  {
    "id": "1.2.6.b",
    "requirementNumber": "1.2.6",
    "text": "Examine configuration settings for NSCs to verify that the defined security features are implemented for each identified insecure service, protocol, and port."
  },
  {
    "id": "1.2.7.a",
    "requirementNumber": "1.2.7",
    "text": "Examine documentation to verify procedures are defined for reviewing configurations of NSCs at least once every six months."
  },
  {
    "id": "1.2.7.b",
    "requirementNumber": "1.2.7",
    "text": "Examine documentation of reviews of configurations for NSCs and interview responsible personnel to verify that reviews occur at least once every six months."
  },
  {
    "id": "1.2.7.c",
    "requirementNumber": "1.2.7",
    "text": "Examine configurations for NSCs to verify that configurations identified as no longer being supported by a business justification are removed or updated."
  },
  {
    "id": "1.2.8",
    "requirementNumber": "1.2.8",
    "text": "Examine configuration files for NSCs to verify they are in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.3.1.a",
    "requirementNumber": "1.3.1",
    "text": "Examine configuration standards for NSCs to verify that they define restricting inbound traffic to the CDE is in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.3.1.b",
    "requirementNumber": "1.3.1",
    "text": "Examine configurations of NSCs to verify that inbound traffic to the CDE is restricted in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.3.2.a",
    "requirementNumber": "1.3.2",
    "text": "Examine configuration standards for NSCs to verify that they define restricting outbound traffic from the CDE in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.3.2.b",
    "requirementNumber": "1.3.2",
    "text": "Examine configurations of NSCs to verify that outbound traffic from the CDE is restricted in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.3.3",
    "requirementNumber": "1.3.3",
    "text": "Examine configuration settings and network diagrams to verify that NSCs are implemented between all wireless networks and the CDE, in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.4.1.a",
    "requirementNumber": "1.4.1",
    "text": "Examine configuration standards and network diagrams to verify that NSCs are defined between trusted and untrusted networks."
  },
  {
    "id": "1.4.1.b",
    "requirementNumber": "1.4.1",
    "text": "Examine network configurations to verify that NSCs are in place between trusted and untrusted networks, in accordance with the documented configuration standards and network diagrams."
  },
  {
    "id": "1.4.2",
    "requirementNumber": "1.4.2",
    "text": "Examine vendor documentation and configurations of NSCs to verify that inbound traffic from untrusted networks to trusted networks is restricted in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.4.3",
    "requirementNumber": "1.4.3",
    "text": "Examine vendor documentation and configurations for NSCs to verify that anti-spoofing measures are implemented to detect and block forged source IP addresses from entering the"
  },
  {
    "id": "1.4.4.a",
    "requirementNumber": "1.4.4",
    "text": "Examine the data-flow diagram and network diagram to verify that it is documented that system components storing cardholder data are not directly accessible from the untrusted networks."
  },
  {
    "id": "1.4.4.b",
    "requirementNumber": "1.4.4",
    "text": "Examine configurations of NSCs to verify that controls are implemented such that system components storing cardholder data are not directly accessible from untrusted networks."
  },
  {
    "id": "1.4.5.a",
    "requirementNumber": "1.4.5",
    "text": "Examine configurations of NSCs to verify that the disclosure of internal IP addresses and routing information is limited to only authorized parties."
  },
  {
    "id": "1.4.5.b",
    "requirementNumber": "1.4.5",
    "text": "Interview personnel and examine documentation to verify that controls are implemented such that any disclosure of internal IP addresses and routing information is limited to only authorized parties."
  },
  {
    "id": "1.5.1.a",
    "requirementNumber": "1.5.1",
    "text": "Examine policies and configuration standards and interview personnel to verify security controls for computing devices that connect to both untrusted networks, and the CDE, are implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "1.5.1.b",
    "requirementNumber": "1.5.1",
    "text": "Examine configuration settings on computing devices that connect to both untrusted networks and the CDE to verify settings are implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "2.1.1",
    "requirementNumber": "2.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 2 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "2.1.2.a",
    "requirementNumber": "2.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 2 are documented and assigned."
  },
  {
    "id": "2.1.2.b",
    "requirementNumber": "2.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 2 to verify that roles and responsibilities are assigned as documented and are understood."
  },
  {
    "id": "2.2.1.a",
    "requirementNumber": "2.2.1",
    "text": "Examine system configuration standards to verify they define processes that include all elements specified in this requirement."
  },
  {
    "id": "2.2.1.b",
    "requirementNumber": "2.2.1",
    "text": "Examine policies and procedures and interview personnel to verify that system configuration standards are updated as new vulnerability issues are identified, as defined in Requirement 6.3.1."
  },
  {
    "id": "2.2.1.c",
    "requirementNumber": "2.2.1",
    "text": "Examine configuration settings and interview personnel to verify that system configuration standards are applied when new systems are configured and verified as being in place before or immediately after a system component is connected to a production"
  },
  {
    "id": "2.2.2.a",
    "requirementNumber": "2.2.2",
    "text": "Examine system configuration standards to verify they include managing vendor default accounts in accordance with all elements specified in this requirement."
  },
  {
    "id": "2.2.2.b",
    "requirementNumber": "2.2.2",
    "text": "Examine vendor documentation and observe a system administrator logging on using vendor default accounts to verify accounts are implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "2.2.2.c",
    "requirementNumber": "2.2.2",
    "text": "Examine configuration files and interview personnel to verify that all vendor default accounts"
  },
  {
    "id": "2.2.3.a",
    "requirementNumber": "2.2.3",
    "text": "Examine system configuration standards to verify they include managing primary functions requiring different security levels as specified in this requirement."
  },
  {
    "id": "2.2.3.b",
    "requirementNumber": "2.2.3",
    "text": "Examine system configurations to verify that primary functions requiring different security levels are managed per one of the ways specified in this requirement."
  },
  {
    "id": "2.2.3.c",
    "requirementNumber": "2.2.3",
    "text": "Where virtualization technologies are used, examine the system configurations to verify that system functions requiring different security levels are managed in one of the following ways: \u2022 Functions with differing security needs do not co-exist on the same system component. \u2022 Functions with differing security needs that exist on the same system component are isolated from each other. \u2022 Functions with differing security needs on the same system component are all secured to the level required by the function with the highest security need."
  },
  {
    "id": "2.2.4.a",
    "requirementNumber": "2.2.4",
    "text": "Examine system configuration standards to verify necessary services, protocols, daemons, and functions are identified and documented."
  },
  {
    "id": "2.2.4.b",
    "requirementNumber": "2.2.4",
    "text": "Examine system configurations to verify the following: \u2022 All unnecessary functionality is removed or disabled. \u2022 Only required functionality, as documented in the configuration standards, is enabled."
  },
  {
    "id": "2.2.5.a",
    "requirementNumber": "2.2.5",
    "text": "If any insecure services, protocols, or daemons are present, examine system configuration standards and interview personnel to verify they are managed and implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "2.2.5.b",
    "requirementNumber": "2.2.5",
    "text": "If any insecure services, protocols, or daemons, are present, examine configuration settings to verify that additional security features are implemented to reduce the risk of using insecure services, daemons, and protocols."
  },
  {
    "id": "2.2.6.a",
    "requirementNumber": "2.2.6",
    "text": "Examine system configuration standards to verify they include configuring system security parameters to prevent misuse."
  },
  {
    "id": "2.2.6.b",
    "requirementNumber": "2.2.6",
    "text": "Interview system administrators and/or security managers to verify they have knowledge of common security parameter settings for system components."
  },
  {
    "id": "2.2.6.c",
    "requirementNumber": "2.2.6",
    "text": "Examine system configurations to verify that common security parameters are set appropriately and in accordance with the system configuration standards."
  },
  {
    "id": "2.2.7.a",
    "requirementNumber": "2.2.7",
    "text": "Examine system configuration standards to verify they include encrypting all non-console administrative access using strong cryptography."
  },
  {
    "id": "2.2.7.b",
    "requirementNumber": "2.2.7",
    "text": "Observe an administrator log on to system components and examine system configurations to verify that non-console administrative access is managed in accordance with this requirement."
  },
  {
    "id": "2.2.7.c",
    "requirementNumber": "2.2.7",
    "text": "Examine settings for system components and authentication services to verify that insecure remote login services are not available for non\u0002console administrative access."
  },
  {
    "id": "2.2.7.d",
    "requirementNumber": "2.2.7",
    "text": "Examine vendor documentation and interview personnel to verify that strong cryptography for the technology in use is implemented according to industry best practices and/or vendor recommendations."
  },
  {
    "id": "2.3.1.a",
    "requirementNumber": "2.3.1",
    "text": "Examine policies and procedures and interview responsible personnel to verify that processes are defined for wireless vendor defaults to either change them upon installation or to confirm them to be secure in accordance with all elements of this requirement."
  },
  {
    "id": "2.3.1.b",
    "requirementNumber": "2.3.1",
    "text": "Examine vendor documentation and observe a system administrator logging into wireless devices to verify: \u2022 SNMP defaults are not used. \u2022 Default passwords/passphrases on wireless access points are not used."
  },
  {
    "id": "2.3.1.c",
    "requirementNumber": "2.3.1",
    "text": "Examine vendor documentation and wireless configuration settings to verify other security-related wireless vendor defaults were changed, if applicable."
  },
  {
    "id": "2.3.2",
    "requirementNumber": "2.3.2",
    "text": "Interview responsible personnel and examine key-management documentation to verify that wireless encryption keys are changed in accordance with all elements specified in this requirement."
  },
  {
    "id": "3.1.1",
    "requirementNumber": "3.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 3 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "3.1.2.a",
    "requirementNumber": "3.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities performing activities in Requirement 3 are documented and assigned."
  },
  {
    "id": "3.1.2.b",
    "requirementNumber": "3.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 3 to verify that roles and responsibilities are assigned as documented and are understood."
  },
  {
    "id": "3.2.1.a",
    "requirementNumber": "3.2.1",
    "text": "Examine the data retention and disposal policies, procedures, and processes and interview personnel to verify processes are defined to include all elements specified in this requirement."
  },
  {
    "id": "3.2.1.b",
    "requirementNumber": "3.2.1",
    "text": "Examine files and system records on system components where account data is stored to verify that the data storage amount and retention time does not exceed the requirements defined in the data retention policy."
  },
  {
    "id": "3.2.1.c",
    "requirementNumber": "3.2.1",
    "text": "Observe the mechanisms used to render account data unrecoverable to verify data cannot be recovered."
  },
  {
    "id": "3.3.1.a",
    "requirementNumber": "3.3.1",
    "text": "If SAD is received, examine documented policies, procedures, and system configurations to verify the data is not stored after authorization."
  },
  {
    "id": "3.3.1.b",
    "requirementNumber": "3.3.1",
    "text": "If SAD is received, examine the documented procedures and observe the secure data deletion processes to verify the data is rendered unrecoverable upon completion of the authorization process."
  },
  {
    "id": "3.3.1.1",
    "requirementNumber": "3.3.1.1",
    "text": "Examine data sources to verify that the full contents of any track are not stored upon completion of the authorization process."
  },
  {
    "id": "3.3.1.2",
    "requirementNumber": "3.3.1.2",
    "text": "Examine data sources, to verify that the card verification code is not stored upon completion of the authorization process."
  },
  {
    "id": "3.3.1.3",
    "requirementNumber": "3.3.1.3",
    "text": "Examine data sources, to verify that PINs and PIN blocks are not stored upon completion of the authorization process."
  },
  {
    "id": "3.3.2",
    "requirementNumber": "3.3.2",
    "text": "Examine data stores, system configurations, and/or vendor documentation to verify that all SAD that is stored electronically prior to completion of authorization is encrypted using strong cryptography."
  },
  {
    "id": "3.3.3.a",
    "requirementNumber": "3.3.3",
    "text": "Additional testing procedure for issuers and companies that support issuing services and store sensitive authentication data: Examine documented policies and interview personnel to verify there is a documented business justification for the storage of sensitive authentication data."
  },
  {
    "id": "3.3.3.b",
    "requirementNumber": "3.3.3",
    "text": "Additional testing procedure for issuers and companies that support issuing services and store sensitive authentication data: Examine data stores and system configurations to verify that the sensitive authentication data is stored securely."
  },
  {
    "id": "3.4.1.a",
    "requirementNumber": "3.4.1",
    "text": "Examine documented policies and procedures for masking the display of PANs to verify: \u2022 A list of roles that need access to more than the BIN and last four digits of the PAN (includes full PAN) is documented, together with a legitimate business need for each role to have such access. \u2022 PAN is masked when displayed such that only personnel with a legitimate business need can see more than the BIN and last four digits of the PAN. \u2022 All roles not specifically authorized to see the full PAN must only see masked PANs."
  },
  {
    "id": "3.4.1.b",
    "requirementNumber": "3.4.1",
    "text": "Examine system configurations to verify that full PAN is only displayed for roles with a documented business need, and that PAN is masked for all other requests."
  },
  {
    "id": "3.4.1.c",
    "requirementNumber": "3.4.1",
    "text": "Examine displays of PAN (for example, on screen, on paper receipts) to verify that PANs are masked when displayed, and that only those with a legitimate business need are able to see more than the BIN and/or last four digits of the PAN. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 88"
  },
  {
    "id": "3.4.2.a",
    "requirementNumber": "3.4.2",
    "text": "Examine documented policies and procedures and documented evidence for technical controls that prevent copy and/or relocation of PAN when using remote-access technologies onto local hard drives or removable electronic media to verify the following: \u2022 Technical controls prevent all personnel not specifically authorized from copying and/or relocating PAN. \u2022 A list of personnel with permission to copy and/or relocate PAN is maintained, together with the documented, explicit authorization and legitimate, defined business need."
  },
  {
    "id": "3.4.2.c",
    "requirementNumber": "3.4.2",
    "text": "Observe processes and interview personnel to verify that only personnel with documented, explicit authorization and a legitimate, defined business need have permission to copy and/or relocate PAN when using remote\u0002access technologies. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 90"
  },
  {
    "id": "3.5.1.a",
    "requirementNumber": "3.5.1",
    "text": "Examine documentation about the system used to render PAN unreadable, including the vendor, type of system/process, and the encryption algorithms (if applicable) to verify that the PAN is rendered unreadable using any of the methods specified in this requirement."
  },
  {
    "id": "3.5.1.b",
    "requirementNumber": "3.5.1",
    "text": "Examine data repositories and audit logs, including payment application logs, to verify the PAN is rendered unreadable using any of the methods specified in this requirement."
  },
  {
    "id": "3.5.1.c",
    "requirementNumber": "3.5.1",
    "text": "If hashed and truncated versions of the same PAN are present in the environment, examine implemented controls to verify that the hashed and truncated versions cannot be correlated to reconstruct the original PAN."
  },
  {
    "id": "3.5.1.1.a",
    "requirementNumber": "3.5.1.1",
    "text": "Examine documentation about the hashing method used to render PAN unreadable, including the vendor, type of system/process, and the encryption algorithms (as applicable) to verify that the hashing method results in keyed cryptographic hashes of the entire PAN, with associated key management processes and"
  },
  {
    "id": "3.5.1.1.b",
    "requirementNumber": "3.5.1.1",
    "text": "Examine documentation about the key management procedures and processes associated with the keyed cryptographic hashes to verify keys are managed in accordance with Requirements 3.6 and 3.7."
  },
  {
    "id": "3.5.1.1.c",
    "requirementNumber": "3.5.1.1",
    "text": "Examine data repositories to verify the PAN is rendered unreadable."
  },
  {
    "id": "3.5.1.1.d",
    "requirementNumber": "3.5.1.1",
    "text": "Examine audit logs, including payment application logs, to verify the PAN is rendered unreadable."
  },
  {
    "id": "3.5.1.2.a",
    "requirementNumber": "3.5.1.2",
    "text": "Examine encryption processes to verify that, if disk-level or partition-level encryption is used to render PAN unreadable, it is implemented only as follows: \u2022 On removable electronic media, OR \u2022 If used for non-removable electronic media, examine encryption processes used to verify that PAN is also rendered unreadable via another method that meets Requirement 3.5.1."
  },
  {
    "id": "3.5.1.2.b",
    "requirementNumber": "3.5.1.2",
    "text": "Examine configurations and/or vendor documentation and observe encryption processes to verify the system is configured according to vendor documentation the result is that the disk or the partition is rendered unreadable."
  },
  {
    "id": "3.5.1.3.a",
    "requirementNumber": "3.5.1.3",
    "text": "If disk-level or partition-level encryption is used to render PAN unreadable, examine the system configuration and observe the authentication process to verify that logical access is implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "3.5.1.3.b",
    "requirementNumber": "3.5.1.3",
    "text": "Examine files containing authentication factors (passwords, passphrases, or cryptographic keys) and interview personnel to verify that authentication factors that allow access to unencrypted data are stored securely and are independent from the native operating system\u2019s authentication and access control methods."
  },
  {
    "id": "3.6.1",
    "requirementNumber": "3.6.1",
    "text": "Examine documented key-management policies and procedures to verify that processes to protect cryptographic keys used to protect stored account data against disclosure and misuse are defined to include all elements specified in this requirement."
  },
  {
    "id": "3.6.1.1",
    "requirementNumber": "3.6.1.1",
    "text": "Additional testing procedure for service provider assessments only: Interview responsible personnel and examine documentation to verify that a document exists to describe the cryptographic architecture that includes all elements specified in this requirement."
  },
  {
    "id": "3.6.1.2.a",
    "requirementNumber": "3.6.1.2",
    "text": "Examine documented procedures to verify it is defined that cryptographic keys used to encrypt/decrypt stored account data must exist only in one (or more) of the forms specified in this requirement."
  },
  {
    "id": "3.6.1.2.b",
    "requirementNumber": "3.6.1.2",
    "text": "Examine system configurations and key storage locations to verify that cryptographic keys used to encrypt/decrypt stored account data exist in one (or more) of the forms specified in this requirement."
  },
  {
    "id": "3.6.1.2.c",
    "requirementNumber": "3.6.1.2",
    "text": "Wherever key-encrypting keys are used, examine system configurations and key storage locations to verify: \u2022 Key-encrypting keys are at least as strong as the data-encrypting keys they protect. \u2022 Key-encrypting keys are stored separately from data-encrypting keys."
  },
  {
    "id": "3.6.1.3",
    "requirementNumber": "3.6.1.3",
    "text": "Examine user access lists to verify that access to cleartext cryptographic key components is restricted to the fewest number of custodians necessary."
  },
  {
    "id": "3.6.1.4",
    "requirementNumber": "3.6.1.4",
    "text": "Examine key storage locations and observe processes to verify that keys are stored in the fewest possible locations."
  },
  {
    "id": "3.7.1.a",
    "requirementNumber": "3.7.1",
    "text": "Examine the documented key-management policies and procedures for keys used for protection of stored account data to verify that they define generation of strong cryptographic keys."
  },
  {
    "id": "3.7.1.b",
    "requirementNumber": "3.7.1",
    "text": "Observe the method for generating keys to verify that strong keys are generated."
  },
  {
    "id": "3.7.2.a",
    "requirementNumber": "3.7.2",
    "text": "Examine the documented key-management policies and procedures for keys used for protection of stored account data to verify that they define secure distribution of cryptographic keys."
  },
  {
    "id": "3.7.2.b",
    "requirementNumber": "3.7.2",
    "text": "Observe the method for distributing keys to verify that keys are distributed securely."
  },
  {
    "id": "3.7.3.a",
    "requirementNumber": "3.7.3",
    "text": "Examine the documented key-management policies and procedures for keys used for protection of stored account data to verify that they define secure storage of cryptographic keys."
  },
  {
    "id": "3.7.3.b",
    "requirementNumber": "3.7.3",
    "text": "Observe the method for storing keys to verify that keys are stored securely."
  },
  {
    "id": "3.7.4.a",
    "requirementNumber": "3.7.4",
    "text": "Examine the documented key-management policies and procedures for keys used for protection of stored account data to verify that they define changes to cryptographic keys that have reached the end of their cryptoperiod and include all elements specified in this requirement."
  },
  {
    "id": "3.7.4.b",
    "requirementNumber": "3.7.4",
    "text": "Interview personnel, examine documentation, and observe key storage locations to verify that keys are changed at the end of the defined cryptoperiod(s). Customized Approach Objective Cryptographic keys are not used beyond their defined cryptoperiod. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 105"
  },
  {
    "id": "3.7.5.a",
    "requirementNumber": "3.7.5",
    "text": "Examine the documented key-management policies and procedures for keys used for protection of stored account data and verify that they define retirement, replacement, or destruction of keys in accordance with all elements specified in this requirement."
  },
  {
    "id": "3.7.5.b",
    "requirementNumber": "3.7.5",
    "text": "Interview personnel to verify that processes are implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "3.7.6.a",
    "requirementNumber": "3.7.6",
    "text": "Examine the documented key-management policies and procedures for keys used for protection of stored account data and verify that they define using split knowledge and dual control."
  },
  {
    "id": "3.7.6.b",
    "requirementNumber": "3.7.6",
    "text": "Interview personnel and/or observe processes to verify that manual cleartext keys are"
  },
  {
    "id": "3.7.7.a",
    "requirementNumber": "3.7.7",
    "text": "Examine the documented key-management policies and procedures for keys used for protection of stored account data and verify that they define prevention of unauthorized substitution of cryptographic keys."
  },
  {
    "id": "3.7.7.b",
    "requirementNumber": "3.7.7",
    "text": "Interview personnel and/or observe processes to verify that unauthorized substitution of keys is prevented."
  },
  {
    "id": "3.7.8.a",
    "requirementNumber": "3.7.8",
    "text": "Examine the documented key-management policies and procedures for keys used for protection of stored account data and verify that they define acknowledgments for key custodians in accordance with all elements specified in this requirement."
  },
  {
    "id": "3.7.8.b",
    "requirementNumber": "3.7.8",
    "text": "Examine documentation or other evidence showing that key custodians have provided acknowledgments in accordance with all elements specified in this requirement."
  },
  {
    "id": "3.7.9",
    "requirementNumber": "3.7.9",
    "text": "Additional testing procedure for service provider assessments only: If the service provider shares cryptographic keys with its customers for transmission or storage of account data, examine the documentation that the service provider provides to its customers to verify it includes guidance on how to securely transmit, store, and update customers\u2019 keys in accordance with all elements specified in Requirements 3.7.1 through 3.7.8 above."
  },
  {
    "id": "4.1.1",
    "requirementNumber": "4.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 4 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "4.1.2.a",
    "requirementNumber": "4.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 4 are documented and assigned."
  },
  {
    "id": "4.1.2.b",
    "requirementNumber": "4.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 4 to verify that roles and responsibilities are assigned as documented and are understood."
  },
  {
    "id": "4.2.1.a",
    "requirementNumber": "4.2.1",
    "text": "Examine documented policies and procedures and interview personnel to verify processes are defined to include all elements specified in this requirement."
  },
  {
    "id": "4.2.1.b",
    "requirementNumber": "4.2.1",
    "text": "Examine system configurations to verify that strong cryptography and security protocols are implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "4.2.1.c",
    "requirementNumber": "4.2.1",
    "text": "Examine cardholder data transmissions to verify that all PAN is encrypted with strong cryptography when it is transmitted over open, public networks."
  },
  {
    "id": "4.2.1.d",
    "requirementNumber": "4.2.1",
    "text": "Examine system configurations to verify that keys and/or certificates that cannot be verified as trusted are rejected."
  },
  {
    "id": "4.2.1.1.a",
    "requirementNumber": "4.2.1.1",
    "text": "Examine documented policies and procedures to verify processes are defined for the entity to maintain an inventory of its trusted keys and certificates."
  },
  {
    "id": "4.2.1.1.b",
    "requirementNumber": "4.2.1.1",
    "text": "Examine the inventory of trusted keys and certificates to verify it is kept up to date."
  },
  {
    "id": "4.2.1.2",
    "requirementNumber": "4.2.1.2",
    "text": "Examine system configurations to verify that wireless networks transmitting PAN or connected to the CDE use industry best practices to implement strong cryptography for authentication and transmission."
  },
  {
    "id": "4.2.2.a",
    "requirementNumber": "4.2.2",
    "text": "Examine documented policies and procedures to verify that processes are defined to secure PAN with strong cryptography whenever sent over end-user messaging technologies."
  },
  {
    "id": "4.2.2.b",
    "requirementNumber": "4.2.2",
    "text": "Examine system configurations and vendor documentation to verify that PAN is secured with strong cryptography whenever it is sent via end\u0002user messaging technologies."
  },
  {
    "id": "5.1.1",
    "requirementNumber": "5.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 5 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "5.1.2.a",
    "requirementNumber": "5.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 5 are documented and assigned."
  },
  {
    "id": "5.1.2.b",
    "requirementNumber": "5.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 5 to verify that roles and responsibilities are assigned as"
  },
  {
    "id": "5.2.1.a",
    "requirementNumber": "5.2.1",
    "text": "Examine system components to verify that an anti-malware solution(s) is deployed on all system components, except for those determined to not be at risk from malware based on periodic evaluations per Requirement 5.2.3."
  },
  {
    "id": "5.2.1.b",
    "requirementNumber": "5.2.1",
    "text": "For any system components without an anti-malware solution, examine the periodic evaluations to verify the component was evaluated and the evaluation concludes that the component is not at risk from malware."
  },
  {
    "id": "5.2.2",
    "requirementNumber": "5.2.2",
    "text": "Examine vendor documentation and configurations of the anti-malware solution(s) to verify that the solution: \u2022 Detects all known types of malware. \u2022 Removes, blocks, or contains all known types of malware."
  },
  {
    "id": "5.2.3.a",
    "requirementNumber": "5.2.3",
    "text": "Examine documented policies and procedures to verify that a process is defined for periodic evaluations of any system components that are not at risk for malware that includes all elements specified in this requirement."
  },
  {
    "id": "5.2.3.b",
    "requirementNumber": "5.2.3",
    "text": "Interview personnel to verify that the evaluations include all elements specified in this requirement."
  },
  {
    "id": "5.2.3.c",
    "requirementNumber": "5.2.3",
    "text": "Examine the list of system components identified as not at risk of malware and compare to the system components without an anti-malware solution deployed per Requirement 5.2.1 to verify that the system components match for both requirements."
  },
  {
    "id": "5.2.3.1.a",
    "requirementNumber": "5.2.3.1",
    "text": "Examine the entity\u2019s targeted risk analysis for the frequency of periodic evaluations of system components identified as not at risk for malware to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1."
  },
  {
    "id": "5.2.3.1.b",
    "requirementNumber": "5.2.3.1",
    "text": "Examine documented results of periodic evaluations of system components identified as not at risk for malware and interview personnel to verify that evaluations are performed at the frequency defined in the entity\u2019s targeted risk analysis performed for this requirement."
  },
  {
    "id": "5.3.1.a",
    "requirementNumber": "5.3.1",
    "text": "Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution is configured to perform automatic updates."
  },
  {
    "id": "5.3.1.b",
    "requirementNumber": "5.3.1",
    "text": "Examine system components and logs, to verify that the anti-malware solution(s) and definitions are current and have been promptly deployed"
  },
  {
    "id": "5.3.2.a",
    "requirementNumber": "5.3.2",
    "text": "Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution(s) is configured to perform at least one of the elements specified in this requirement."
  },
  {
    "id": "5.3.2.b",
    "requirementNumber": "5.3.2",
    "text": "Examine system components, including all operating system types identified as at risk for malware, to verify the solution(s) is enabled in accordance with at least one of the elements specified in this requirement."
  },
  {
    "id": "5.3.2.c",
    "requirementNumber": "5.3.2",
    "text": "Examine logs and scan results to verify that the solution(s) is enabled in accordance with at least one of the elements specified in this requirement."
  },
  {
    "id": "5.3.2.1.a",
    "requirementNumber": "5.3.2.1",
    "text": "Examine the entity\u2019s targeted risk analysis for the frequency of periodic malware scans to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1."
  },
  {
    "id": "5.3.2.1.b",
    "requirementNumber": "5.3.2.1",
    "text": "Examine documented results of periodic malware scans and interview personnel to verify scans are performed at the frequency defined in the entity\u2019s targeted risk analysis performed for this requirement. Customized Approach Objective Scans by the malware solution are performed at a frequency that addresses the entity\u2019s risk."
  },
  {
    "id": "5.3.3.a",
    "requirementNumber": "5.3.3",
    "text": "Examine anti-malware solution(s) configurations to verify that, for removable electronic media, the solution is configured to perform at least one of the elements specified in this requirement."
  },
  {
    "id": "5.3.3.b",
    "requirementNumber": "5.3.3",
    "text": "Examine system components with removable electronic media connected to verify that the solution(s) is enabled in accordance with at least one of the elements as specified in this requirement."
  },
  {
    "id": "5.3.3.c",
    "requirementNumber": "5.3.3",
    "text": "Examine logs and scan results to verify that the solution(s) is enabled in accordance with at least one of the elements specified in this requirement."
  },
  {
    "id": "5.3.4",
    "requirementNumber": "5.3.4",
    "text": "Examine anti-malware solution(s) configurations to verify logs are enabled and retained in accordance with Requirement 10.5.1."
  },
  {
    "id": "5.3.5.a",
    "requirementNumber": "5.3.5",
    "text": "Examine anti-malware configurations, to verify that the anti-malware mechanisms cannot be disabled or altered by users."
  },
  {
    "id": "5.4.1",
    "requirementNumber": "5.4.1",
    "text": "Observe implemented processes and examine mechanisms to verify controls are in place to detect and protect personnel against phishing attacks."
  },
  {
    "id": "6.1.1",
    "requirementNumber": "6.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 6 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.1.2.a",
    "requirementNumber": "6.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 6 are documented and assigned."
  },
  {
    "id": "6.1.2.b",
    "requirementNumber": "6.1.2",
    "text": "Interview personnel responsible for performing activities in Requirement 6 to verify that roles and responsibilities are assigned as documented and are understood."
  },
  {
    "id": "6.2.1",
    "requirementNumber": "6.2.1",
    "text": "Examine documented software development procedures to verify that processes are defined that include all elements specified in this requirement."
  },
  {
    "id": "6.2.2.a",
    "requirementNumber": "6.2.2",
    "text": "Examine software development procedures to verify that processes are defined for training of software development personnel developing bespoke and custom software that includes all elements specified in this requirement."
  },
  {
    "id": "6.2.2.b",
    "requirementNumber": "6.2.2",
    "text": "Examine training records and interview personnel to verify that software development personnel working on bespoke and custom software received software security training that is relevant to their job function and development languages in accordance with all elements"
  },
  {
    "id": "6.2.3.a",
    "requirementNumber": "6.2.3",
    "text": "Examine documented software development procedures and interview responsible personnel to verify that processes are defined that require all bespoke and custom software to be reviewed in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.2.3.b",
    "requirementNumber": "6.2.3",
    "text": "Examine evidence of changes to bespoke and custom software to verify that the code changes were reviewed in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.2.3.1.a",
    "requirementNumber": "6.2.3.1",
    "text": "If manual code reviews are performed for bespoke and custom software prior to release to production, examine documented software development procedures and interview responsible personnel to verify that processes are defined for manual code reviews to be conducted in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.2.3.1.b",
    "requirementNumber": "6.2.3.1",
    "text": "Examine evidence of changes to bespoke and custom software and interview personnel to verify that manual code reviews were conducted in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.2.4",
    "requirementNumber": "6.2.4",
    "text": "Examine documented procedures and interview responsible software development personnel to verify that software engineering techniques or other methods are defined and in use by developers of bespoke and custom software to prevent or mitigate all common software attacks as specified in this requirement. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 142"
  },
  {
    "id": "6.3.1.a",
    "requirementNumber": "6.3.1",
    "text": "Examine policies and procedures for identifying and managing security vulnerabilities to verify that processes are defined in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.3.1.b",
    "requirementNumber": "6.3.1",
    "text": "Interview responsible personnel, examine documentation, and observe processes to verify that security vulnerabilities are identified and managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.3.2.a",
    "requirementNumber": "6.3.2",
    "text": "Examine documentation and interview personnel to verify that an inventory of bespoke and custom software and third-party software components incorporated into bespoke and custom software is maintained, and that the inventory is used to identify and address vulnerabilities."
  },
  {
    "id": "6.3.2.b",
    "requirementNumber": "6.3.2",
    "text": "Examine software documentation, including for bespoke and custom software that integrates third-party software components, and compare it to the inventory to verify that the inventory includes the bespoke and custom software and third-party software components."
  },
  {
    "id": "6.3.3.a",
    "requirementNumber": "6.3.3",
    "text": "Examine policies and procedures to verify processes are defined for addressing vulnerabilities by installing applicable security patches/updates in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.3.3.b",
    "requirementNumber": "6.3.3",
    "text": "Examine system components and related software and compare the list of installed security patches/updates to the most recent security patch/update information to verify vulnerabilities are addressed in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.4.3.a",
    "requirementNumber": "6.4.3",
    "text": "Examine policies and procedures to verify that processes are defined for managing all payment page scripts that are loaded and executed in the consumer\u2019s browser, in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.4.3.b",
    "requirementNumber": "6.4.3",
    "text": "Interview responsible personnel and examine inventory records and system configurations to verify that all payment page scripts that are loaded and executed in the consumer\u2019s browser are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.5.1.a",
    "requirementNumber": "6.5.1",
    "text": "Examine documented change control procedures to verify procedures are defined for changes to all system components in the production environment to include all elements specified in this requirement."
  },
  {
    "id": "6.5.1.b",
    "requirementNumber": "6.5.1",
    "text": "Examine recent changes to system components and trace those changes back to related change control documentation. For each change examined, verify the change is implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "6.5.2",
    "requirementNumber": "6.5.2",
    "text": "Examine documentation for significant changes, interview personnel, and observe the affected systems/networks to verify that the entity confirmed applicable PCI DSS requirements were in place on all new or changed systems and networks and that documentation was updated as"
  },
  {
    "id": "6.5.3.a",
    "requirementNumber": "6.5.3",
    "text": "Examine policies and procedures to verify that processes are defined for separating the pre\u0002production environment from the production environment via access controls that enforce the separation."
  },
  {
    "id": "6.5.3.b",
    "requirementNumber": "6.5.3",
    "text": "Examine network documentation and configurations of network security controls to verify that the pre-production environment is separate from the production environment(s)."
  },
  {
    "id": "6.5.3.c",
    "requirementNumber": "6.5.3",
    "text": "Examine access control settings to verify that access controls are in place to enforce separation between the pre-production and production environment(s)."
  },
  {
    "id": "6.5.4.a",
    "requirementNumber": "6.5.4",
    "text": "Examine policies and procedures to verify that processes are defined for separating roles and functions to provide accountability such that only reviewed and approved changes are deployed."
  },
  {
    "id": "6.5.4.b",
    "requirementNumber": "6.5.4",
    "text": "Observe processes and interview personnel to verify implemented controls separate roles and functions and provide accountability such that only reviewed and approved changes are deployed."
  },
  {
    "id": "6.5.5.a",
    "requirementNumber": "6.5.5",
    "text": "Examine policies and procedures to verify that processes are defined for not using live PANs in pre-production environments, except where those environments are in a CDE and protected in accordance with all applicable PCI DSS requirements."
  },
  {
    "id": "6.5.5.b",
    "requirementNumber": "6.5.5",
    "text": "Observe testing processes and interview personnel to verify procedures are in place to ensure live PANs are not used in pre-production environments, except where those environments are in a CDE and protected in accordance with all applicable PCI DSS requirements."
  },
  {
    "id": "6.5.5.c",
    "requirementNumber": "6.5.5",
    "text": "Examine pre-production test data to verify live PANs are not used in pre-production environments, except where those environments are in a CDE and protected in accordance with all applicable PCI DSS requirements."
  },
  {
    "id": "6.5.6.a",
    "requirementNumber": "6.5.6",
    "text": "Examine policies and procedures to verify that processes are defined for removal of test data and test accounts from system components before the system goes into production."
  },
  {
    "id": "6.5.6.b",
    "requirementNumber": "6.5.6",
    "text": "Observe testing processes for both off-the\u0002shelf software and in-house applications, and interview personnel to verify test data and test accounts are removed before a system goes into production."
  },
  {
    "id": "6.5.6.c",
    "requirementNumber": "6.5.6",
    "text": "Examine data and accounts for recently installed or updated off-the-shelf software and in\u0002house applications to verify there is no test data or test accounts on systems in production."
  },
  {
    "id": "7.1.1",
    "requirementNumber": "7.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 7 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.1.2.a",
    "requirementNumber": "7.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 7 are documented and assigned."
  },
  {
    "id": "7.1.2.b",
    "requirementNumber": "7.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 7 to verify that roles and responsibilities are assigned as and are"
  },
  {
    "id": "7.2.1.a",
    "requirementNumber": "7.2.1",
    "text": "Examine documented policies and procedures and interview personnel to verify the access control model is defined in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.1.b",
    "requirementNumber": "7.2.1",
    "text": "Examine access control model settings and verify that access needs are appropriately defined in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.2.a",
    "requirementNumber": "7.2.2",
    "text": "Examine policies and procedures to verify they cover assigning access to users in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.2.b",
    "requirementNumber": "7.2.2",
    "text": "Examine user access settings, including for privileged users, and interview responsible management personnel to verify that privileges assigned are in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.2.c",
    "requirementNumber": "7.2.2",
    "text": "Interview personnel responsible for assigning access to verify that privileged user access is assigned in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.3.a",
    "requirementNumber": "7.2.3",
    "text": "Examine policies and procedures to verify they define processes for approval of all privileges by authorized personnel."
  },
  {
    "id": "7.2.3.b",
    "requirementNumber": "7.2.3",
    "text": "Examine user IDs and assigned privileges, and compare with documented approvals to verify that: \u2022 Documented approval exists for the assigned privileges. \u2022 The approval was by authorized personnel. \u2022 Specified privileges match the roles assigned to the individual."
  },
  {
    "id": "7.2.4.a",
    "requirementNumber": "7.2.4",
    "text": "Examine policies and procedures to verify they define processes to review all user accounts and related access privileges, including third\u0002party/vendor accounts, in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.4.b",
    "requirementNumber": "7.2.4",
    "text": "Interview responsible personnel and examine documented results of periodic reviews of user accounts to verify that all the results are in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.5.a",
    "requirementNumber": "7.2.5",
    "text": "Examine policies and procedures to verify they define processes to manage and assign application and system accounts and related access privileges in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.5.b",
    "requirementNumber": "7.2.5",
    "text": "Examine privileges associated with system and application accounts and interview responsible personnel to verify that application and system accounts and related access privileges are assigned and managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.5.1.a",
    "requirementNumber": "7.2.5.1",
    "text": "Examine policies and procedures to verify they define processes to review all application and system accounts and related access privileges in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.5.1.b",
    "requirementNumber": "7.2.5.1",
    "text": "Examine the entity\u2019s targeted risk analysis for the frequency of periodic reviews of application and system accounts and related access privileges to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1."
  },
  {
    "id": "7.2.5.1.c",
    "requirementNumber": "7.2.5.1",
    "text": "Interview responsible personnel and examine documented results of periodic reviews of system and application accounts and related privileges to verify that the reviews occur in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.6.a",
    "requirementNumber": "7.2.6",
    "text": "Examine policies and procedures and interview personnel to verify processes are defined for granting user access to query repositories of stored cardholder data, in accordance with all elements specified in this requirement."
  },
  {
    "id": "7.2.6.b",
    "requirementNumber": "7.2.6",
    "text": "Examine configuration settings for querying repositories of stored cardholder data to verify they are in accordance with all elements specified in this requirement. Customized Approach Objective Direct unfiltered (ad hoc) query access to cardholder data repositories is prohibited, unless performed by an authorized administrator."
  },
  {
    "id": "7.3.1",
    "requirementNumber": "7.3.1",
    "text": "Examine vendor documentation and system settings to verify that access is managed for each system component via an access control system(s) that restricts access based on a user\u2019s need to"
  },
  {
    "id": "7.3.2",
    "requirementNumber": "7.3.2",
    "text": "Examine vendor documentation and system settings to verify that the access control system(s) is configured to enforce permissions assigned to individuals, applications, and systems based on job classification and function."
  },
  {
    "id": "7.3.3",
    "requirementNumber": "7.3.3",
    "text": "Examine vendor documentation and system settings to verify that the access control system(s) is set to \u201cdeny all\u201d by default."
  },
  {
    "id": "8.1.1",
    "requirementNumber": "8.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures that are identified in Requirement 8 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.1.2.a",
    "requirementNumber": "8.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 8 are documented and assigned."
  },
  {
    "id": "8.1.2.b",
    "requirementNumber": "8.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 8 to verify that roles and responsibilities are assigned as documented and are understood. Customized Approach Objective Day-to-day responsibilities for performing all the activities in Requirement 8 are allocated. Personnel are accountable for successful, continuous operation of these requirements. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 178"
  },
  {
    "id": "8.2.1.a",
    "requirementNumber": "8.2.1",
    "text": "Interview responsible personnel to verify that all users are assigned a unique ID for access to system components and cardholder data."
  },
  {
    "id": "8.2.1.b",
    "requirementNumber": "8.2.1",
    "text": "Examine audit logs and other evidence to verify that access to system components and cardholder data can be uniquely identified and associated with individuals."
  },
  {
    "id": "8.2.2.a",
    "requirementNumber": "8.2.2",
    "text": "Examine user account lists on system components and applicable documentation to verify that shared authentication credentials are only used when necessary, on an exception basis, and are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.2.2.b",
    "requirementNumber": "8.2.2",
    "text": "Examine authentication policies and procedures to verify processes are defined for shared authentication credentials such that they are only used when necessary, on an exception basis, and are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.2.2.c",
    "requirementNumber": "8.2.2",
    "text": "Interview system administrators to verify that shared authentication credentials are only used when necessary, on an exception basis, and are managed in accordance with all elements"
  },
  {
    "id": "8.2.3",
    "requirementNumber": "8.2.3",
    "text": "Additional testing procedure for service provider assessments only: Examine authentication policies and procedures and interview personnel to verify that service providers with remote access to customer premises use unique authentication factors for remote access to each customer premises."
  },
  {
    "id": "8.2.4",
    "requirementNumber": "8.2.4",
    "text": "Examine documented authorizations across various phases of the account lifecycle (additions, modifications, and deletions) and examine system settings to verify the activity has been managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.2.5.a",
    "requirementNumber": "8.2.5",
    "text": "Examine information sources for terminated users and review current user access lists\u2014for both local and remote access\u2014to verify that terminated user IDs have been deactivated or removed from the access lists."
  },
  {
    "id": "8.2.5.b",
    "requirementNumber": "8.2.5",
    "text": "Interview responsible personnel to verify that all physical authentication factors\u2014such as, smart cards, tokens, etc.\u2014have been returned or deactivated for terminated users."
  },
  {
    "id": "8.2.6",
    "requirementNumber": "8.2.6",
    "text": "Examine user accounts and last logon information, and interview personnel to verify that any inactive user accounts are removed or disabled within 90 days of inactivity. Customized Approach Objective Inactive user accounts cannot be used."
  },
  {
    "id": "8.2.7",
    "requirementNumber": "8.2.7",
    "text": "Interview personnel, examine documentation for managing accounts, and examine evidence to verify that accounts used by third parties for remote access are managed according to all elements specified in this requirement. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 184"
  },
  {
    "id": "8.2.8",
    "requirementNumber": "8.2.8",
    "text": "Examine system configuration settings to verify that system/session idle timeout features for user sessions have been set to 15 minutes or less."
  },
  {
    "id": "8.3.1.a",
    "requirementNumber": "8.3.1",
    "text": "Examine documentation describing the authentication factor(s) used to verify that user access to system components is authenticated via at least one authentication factor specified in this requirement."
  },
  {
    "id": "8.3.1.b",
    "requirementNumber": "8.3.1",
    "text": "For each type of authentication factor used with each type of system component, observe an authentication to verify that authentication is functioning consistently with documented authentication factor(s). Customized Approach Objective An account cannot be accessed except with a combination of user identity and an authentication factor."
  },
  {
    "id": "8.3.2.a",
    "requirementNumber": "8.3.2",
    "text": "Examine vendor documentation and system configuration settings to verify that authentication factors are rendered unreadable with strong cryptography during transmission and storage."
  },
  {
    "id": "8.3.2.b",
    "requirementNumber": "8.3.2",
    "text": "Examine repositories of authentication factors to verify that they are unreadable during storage."
  },
  {
    "id": "8.3.2.c",
    "requirementNumber": "8.3.2",
    "text": "Examine data transmissions to verify that authentication factors are unreadable during"
  },
  {
    "id": "8.3.3",
    "requirementNumber": "8.3.3",
    "text": "Examine procedures for modifying authentication factors and observe security personnel to verify that when a user requests a modification of an authentication factor, the user\u2019s identity is verified before the authentication factor is modified."
  },
  {
    "id": "8.3.4.a",
    "requirementNumber": "8.3.4",
    "text": "Examine system configuration settings to verify that authentication parameters are set to require that user accounts be locked out after not more than 10 invalid logon attempts."
  },
  {
    "id": "8.3.4.b",
    "requirementNumber": "8.3.4",
    "text": "Examine system configuration settings to verify that password parameters are set to require that once a user account is locked out, it remains locked for a minimum of 30 minutes or until the user\u2019s identity is confirmed."
  },
  {
    "id": "8.3.5",
    "requirementNumber": "8.3.5",
    "text": "Examine procedures for setting and resetting passwords/passphrases (if used as authentication factors to meet Requirement 8.3.1) and observe security personnel to verify that passwords/passphrases are set and reset in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.3.6",
    "requirementNumber": "8.3.6",
    "text": "Examine system configuration settings to verify that user password/passphrase complexity parameters are set in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.3.7",
    "requirementNumber": "8.3.7",
    "text": "Examine system configuration settings to verify that password parameters are set to require that new passwords/passphrases cannot be the same as the four previously used"
  },
  {
    "id": "8.3.8.a",
    "requirementNumber": "8.3.8",
    "text": "Examine procedures and interview personnel to verify that authentication policies and procedures are distributed to all users."
  },
  {
    "id": "8.3.8.b",
    "requirementNumber": "8.3.8",
    "text": "Review authentication policies and procedures that are distributed to users and verify they include the elements specified in this requirement."
  },
  {
    "id": "8.3.8.c",
    "requirementNumber": "8.3.8",
    "text": "Interview users to verify that they are familiar with authentication policies and procedures."
  },
  {
    "id": "8.3.10",
    "requirementNumber": "8.3.10",
    "text": "Additional testing procedure for service provider assessments only: If passwords/passphrases are used as the only authentication factor for customer user access to cardholder data, examine guidance provided to customer users to verify that the guidance includes all elements specified in this requirement."
  },
  {
    "id": "8.3.10.1",
    "requirementNumber": "8.3.10.1",
    "text": "Additional testing procedure for service provider assessments only: If passwords/passphrases are used as the only authentication factor for customer user access, inspect system configuration settings to verify that passwords/passphrases are managed in accordance with ONE of the elements specified in this requirement."
  },
  {
    "id": "8.3.11.a",
    "requirementNumber": "8.3.11",
    "text": "Examine authentication policies and procedures to verify that procedures for using authentication factors such as physical security tokens, smart cards, and certificates are defined and include all elements specified in this requirement."
  },
  {
    "id": "8.3.11.b",
    "requirementNumber": "8.3.11",
    "text": "Interview security personnel to verify authentication factors are assigned to an individual user and not shared among multiple users."
  },
  {
    "id": "8.3.11.c",
    "requirementNumber": "8.3.11",
    "text": "Examine system configuration settings and/or observe physical controls, as applicable, to verify that controls are implemented to ensure only the intended user can use that factor to gain access."
  },
  {
    "id": "8.4.1.a",
    "requirementNumber": "8.4.1",
    "text": "Examine network and/or system configurations to verify MFA is required for all non\u0002console into the CDE for personnel with administrative access."
  },
  {
    "id": "8.4.1.b",
    "requirementNumber": "8.4.1",
    "text": "Observe administrator personnel logging into the CDE and verify that MFA is required."
  },
  {
    "id": "8.4.2.a",
    "requirementNumber": "8.4.2",
    "text": "Examine network and/or system configurations to verify MFA is implemented for all non-console access into the CDE."
  },
  {
    "id": "8.4.2.b",
    "requirementNumber": "8.4.2",
    "text": "Observe personnel logging in to the CDE and examine evidence to verify that MFA is"
  },
  {
    "id": "8.4.3.a",
    "requirementNumber": "8.4.3",
    "text": "Examine network and/or system configurations for remote access servers and systems to verify MFA is required in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.4.3.b",
    "requirementNumber": "8.4.3",
    "text": "Observe personnel (for example, users and administrators) and third parties connecting remotely to the network and verify that multi-factor authentication is required."
  },
  {
    "id": "8.5.1.a",
    "requirementNumber": "8.5.1",
    "text": "Examine vendor system documentation to verify that the MFA system is not susceptible to replay attacks."
  },
  {
    "id": "8.5.1.b",
    "requirementNumber": "8.5.1",
    "text": "Examine system configurations for the MFA implementation to verify it is configured in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.5.1.c",
    "requirementNumber": "8.5.1",
    "text": "Interview responsible personnel and observe processes to verify that any requests to bypass MFA are specifically documented and authorized by management on an exception basis, for a limited time period."
  },
  {
    "id": "8.5.1.d",
    "requirementNumber": "8.5.1",
    "text": "Observe personnel logging into system components in the CDE to verify that access is granted only after all authentication factors are successful."
  },
  {
    "id": "8.5.1.e",
    "requirementNumber": "8.5.1",
    "text": "Observe personnel connecting remotely from outside the entity\u2019s network to verify that access is granted only after all authentication factors are successful."
  },
  {
    "id": "8.6.1",
    "requirementNumber": "8.6.1",
    "text": "Examine application and system accounts that can be used interactively and interview administrative personnel to verify that application and system accounts are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.6.2.a",
    "requirementNumber": "8.6.2",
    "text": "Interview personnel and examine system development procedures to verify that processes are defined for application and system accounts that can be used for interactive login, specifying that passwords/passphrases are not hard coded in scripts, configuration/property files, or bespoke and custom source code."
  },
  {
    "id": "8.6.2.b",
    "requirementNumber": "8.6.2",
    "text": "Examine scripts, configuration/property files, and bespoke and custom source code for application and system accounts that can be used for interactive login, to verify passwords/passphrases for those accounts are not present."
  },
  {
    "id": "8.6.3.a",
    "requirementNumber": "8.6.3",
    "text": "Examine policies and procedures to verify that procedures are defined to protect passwords/passphrases for application or system accounts against misuse in accordance with all elements specified in this requirement."
  },
  {
    "id": "8.6.3.b",
    "requirementNumber": "8.6.3",
    "text": "Examine the entity\u2019s targeted risk analysis for the change frequency and complexity for passwords/passphrases for application and system accounts to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1 and addresses: \u2022 The frequency defined for periodic changes to application and system passwords/passphrases. \u2022 The complexity defined for passwords/passphrases and appropriateness of the complexity relative to the frequency of changes."
  },
  {
    "id": "9.1.1",
    "requirementNumber": "9.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 9 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "9.1.2.a",
    "requirementNumber": "9.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 9 are documented and assigned."
  },
  {
    "id": "9.1.2.b",
    "requirementNumber": "9.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 9 to verify that roles and responsibilities are assigned as documented and are understood."
  },
  {
    "id": "9.2.1",
    "requirementNumber": "9.2.1",
    "text": "Observe entry controls and interview responsible personnel to verify that physical security controls are in place to restrict access to systems in the CDE."
  },
  {
    "id": "9.2.1.1.a",
    "requirementNumber": "9.2.1.1",
    "text": "Observe locations where individual physical access to sensitive areas within the CDE occurs to verify that either video cameras or physical access control mechanisms (or both) are in place to monitor the entry and exit points."
  },
  {
    "id": "9.2.1.1.b",
    "requirementNumber": "9.2.1.1",
    "text": "Observe locations where individual physical access to sensitive areas within the CDE occurs to verify that either video cameras or physical access control mechanisms (or both) are protected from tampering or disabling."
  },
  {
    "id": "9.2.1.1.c",
    "requirementNumber": "9.2.1.1",
    "text": "Observe the physical access control mechanisms and/or examine video cameras and interview responsible personnel to verify that: \u2022 Collected data from video cameras and/or physical access control mechanisms is reviewed and correlated with other entries. \u2022 Collected data is stored for at least three months."
  },
  {
    "id": "9.2.2",
    "requirementNumber": "9.2.2",
    "text": "Interview responsible personnel and observe locations of publicly accessible network jacks to verify that physical and/or logical controls are in place to restrict access to publicly accessible"
  },
  {
    "id": "9.2.3",
    "requirementNumber": "9.2.3",
    "text": "Interview responsible personnel and observe locations of hardware and lines to verify that physical access to wireless access points, gateways, networking/communications hardware, and telecommunication lines within the facility is"
  },
  {
    "id": "9.2.4",
    "requirementNumber": "9.2.4",
    "text": "Observe a system administrator\u2019s attempt to log into consoles in sensitive areas and verify that they are \u201clocked\u201d to prevent unauthorized use."
  },
  {
    "id": "9.3.1.a",
    "requirementNumber": "9.3.1",
    "text": "Examine documented procedures to verify that procedures to authorize and manage physical access of personnel to the CDE are defined in accordance with all elements specified in this requirement."
  },
  {
    "id": "9.3.1.b",
    "requirementNumber": "9.3.1",
    "text": "Observe identification methods, such as ID badges, and processes to verify that personnel in the CDE are clearly identified."
  },
  {
    "id": "9.3.1.c",
    "requirementNumber": "9.3.1",
    "text": "Observe processes to verify that access to the identification process, such as a badge system,"
  },
  {
    "id": "9.3.1.1.a",
    "requirementNumber": "9.3.1.1",
    "text": "Observe personnel in sensitive areas within the CDE, interview responsible personnel, and examine physical access control lists to verify that: \u2022 Access to the sensitive area is authorized. \u2022 Access is required for the individual\u2019s job function."
  },
  {
    "id": "9.3.1.1.b",
    "requirementNumber": "9.3.1.1",
    "text": "Observe processes and interview personnel to verify that access of all personnel is revoked immediately upon termination."
  },
  {
    "id": "9.3.1.1.c",
    "requirementNumber": "9.3.1.1",
    "text": "For terminated personnel, examine physical access controls lists and interview responsible personnel to verify that all physical access mechanisms (such as keys, access cards, etc.) were returned or disabled."
  },
  {
    "id": "9.3.2.a",
    "requirementNumber": "9.3.2",
    "text": "Examine documented procedures and interview personnel to verify procedures are defined for authorizing and managing visitor access to the CDE in accordance with all elements specified in this requirement."
  },
  {
    "id": "9.3.2.b",
    "requirementNumber": "9.3.2",
    "text": "Observe processes when visitors are present in the CDE and interview personnel to verify that visitors are: \u2022 Authorized before entering the CDE. \u2022 Escorted at all times within the CDE."
  },
  {
    "id": "9.3.2.c",
    "requirementNumber": "9.3.2",
    "text": "Observe the use of visitor badges or other identification to verify that the badge or other identification does not permit unescorted access to the CDE."
  },
  {
    "id": "9.3.2.d",
    "requirementNumber": "9.3.2",
    "text": "Observe visitors in the CDE to verify that: \u2022 Visitor badges or other identification are being used for all visitors. \u2022 Visitor badges or identification easily distinguish visitors from personnel."
  },
  {
    "id": "9.3.2.e",
    "requirementNumber": "9.3.2",
    "text": "Examine visitor badges or other identification and observe evidence in the badging system to verify visitor badges or other identification expires."
  },
  {
    "id": "9.3.3",
    "requirementNumber": "9.3.3",
    "text": "Observe visitors leaving the facility and interview personnel to verify visitor badges or other identification are surrendered or deactivated before visitors leave the facility or at the date of expiration."
  },
  {
    "id": "9.3.4.a",
    "requirementNumber": "9.3.4",
    "text": "Examine the visitor logs and interview responsible personnel to verify that visitor logs are used to record physical access to both the facility and sensitive areas."
  },
  {
    "id": "9.3.4.b",
    "requirementNumber": "9.3.4",
    "text": "Examine the visitor logs and verify that the logs contain: \u2022 The visitor\u2019s name and the organization represented. \u2022 The personnel authorizing physical access. \u2022 Date and time of visit."
  },
  {
    "id": "9.3.4.c",
    "requirementNumber": "9.3.4",
    "text": "Examine visitor log storage locations and interview responsible personnel to verify that the log is retained for at least three months, unless otherwise restricted by law."
  },
  {
    "id": "9.4.1.1.a",
    "requirementNumber": "9.4.1.1",
    "text": "Examine documentation to verify that procedures are defined for physically securing offline media backups with cardholder data in a secure location."
  },
  {
    "id": "9.4.1.1.b",
    "requirementNumber": "9.4.1.1",
    "text": "Examine logs or other documentation and interview responsible personnel at the storage location to verify that offline media backups are stored in a secure location."
  },
  {
    "id": "9.4.1.2.a",
    "requirementNumber": "9.4.1.2",
    "text": "Examine documentation to verify that procedures are defined for reviewing the security of the offline media backup location(s) with cardholder data at least once every 12 months."
  },
  {
    "id": "9.4.1.2.b",
    "requirementNumber": "9.4.1.2",
    "text": "Examine documented procedures, logs, or other documentation, and interview responsible personnel at the storage location(s) to verify that the storage location\u2019s security is reviewed at least once every 12 months."
  },
  {
    "id": "9.4.2.a",
    "requirementNumber": "9.4.2",
    "text": "Examine documentation to verify that procedures are defined for classifying media with cardholder data in accordance with the sensitivity of the data."
  },
  {
    "id": "9.4.2.b",
    "requirementNumber": "9.4.2",
    "text": "Examine media logs or other documentation to verify that all media is classified"
  },
  {
    "id": "9.4.3.a",
    "requirementNumber": "9.4.3",
    "text": "Examine documentation to verify that procedures are defined for securing media sent outside the facility in accordance with all elements specified in this requirement."
  },
  {
    "id": "9.4.3.b",
    "requirementNumber": "9.4.3",
    "text": "Interview personnel and examine records to verify that all media sent outside the facility is logged and sent via secured courier or other delivery method that can be tracked."
  },
  {
    "id": "9.4.3.c",
    "requirementNumber": "9.4.3",
    "text": "Examine offsite tracking logs for all media to verify tracking details are documented."
  },
  {
    "id": "9.4.4.a",
    "requirementNumber": "9.4.4",
    "text": "Examine documentation to verify that procedures are defined to ensure that media moved outside the facility is approved by management."
  },
  {
    "id": "9.4.4.b",
    "requirementNumber": "9.4.4",
    "text": "Examine offsite media tracking logs and interview responsible personnel to verify that proper management authorization is obtained for all media moved outside the facility (including media distributed to individuals)."
  },
  {
    "id": "9.4.5.a",
    "requirementNumber": "9.4.5",
    "text": "Examine documentation to verify that procedures are defined to maintain electronic media inventory logs."
  },
  {
    "id": "9.4.5.b",
    "requirementNumber": "9.4.5",
    "text": "Examine electronic media inventory logs and interview responsible personnel to verify that"
  },
  {
    "id": "9.4.5.1.a",
    "requirementNumber": "9.4.5.1",
    "text": "Examine documentation to verify that procedures are defined to conduct inventories of electronic media with cardholder data at least once every 12 months."
  },
  {
    "id": "9.4.5.1.b",
    "requirementNumber": "9.4.5.1",
    "text": "Examine electronic media inventory logs and interview personnel to verify that electronic media inventories are performed at least once every 12 months."
  },
  {
    "id": "9.4.6.a",
    "requirementNumber": "9.4.6",
    "text": "Examine the media destruction policy to verify that procedures are defined to destroy hard\u0002copy media with cardholder data when no longer needed for business or legal reasons in accordance with all elements specified in this requirement."
  },
  {
    "id": "9.4.6.b",
    "requirementNumber": "9.4.6",
    "text": "Observe processes and interview personnel to verify that hard-copy materials are cross-cut shredded, incinerated, or pulped such that cardholder data cannot be reconstructed."
  },
  {
    "id": "9.4.6.c",
    "requirementNumber": "9.4.6",
    "text": "Observe storage containers used for materials that contain information to be destroyed to verify that the containers are secure. Customized Approach Objective Cardholder data cannot be recovered from media that has been destroyed or which is pending destruction."
  },
  {
    "id": "9.4.7.a",
    "requirementNumber": "9.4.7",
    "text": "Examine the media destruction policy to verify that procedures are defined to destroy electronic media when no longer needed for business or legal reasons in accordance with all elements specified in this requirement."
  },
  {
    "id": "9.4.7.b",
    "requirementNumber": "9.4.7",
    "text": "Observe the media destruction process and interview responsible personnel to verify that electronic media with cardholder data is destroyed via one of the methods specified in this requirement."
  },
  {
    "id": "9.5.1",
    "requirementNumber": "9.5.1",
    "text": "Examine documented policies and procedures to verify that processes are defined that include all elements specified in this requirement."
  },
  {
    "id": "9.5.1.1.a",
    "requirementNumber": "9.5.1.1",
    "text": "Examine the list of POI devices to verify it includes all elements specified in this requirement."
  },
  {
    "id": "9.5.1.1.b",
    "requirementNumber": "9.5.1.1",
    "text": "Observe POI devices and device locations and compare to devices in the list to verify that the list is accurate and up to date. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 230"
  },
  {
    "id": "9.5.1.2.a",
    "requirementNumber": "9.5.1.2",
    "text": "Examine documented procedures to verify processes are defined for periodic inspections of POI device surfaces to detect tampering and unauthorized substitution."
  },
  {
    "id": "9.5.1.2.b",
    "requirementNumber": "9.5.1.2",
    "text": "Interview responsible personnel and observe inspection processes to verify: \u2022 Personnel are aware of procedures for inspecting devices. \u2022 All devices are periodically inspected for evidence of tampering and unauthorized substitution."
  },
  {
    "id": "9.5.1.3.a",
    "requirementNumber": "9.5.1.3",
    "text": "Review training materials for personnel in POI environments to verify they include all elements specified in this requirement."
  },
  {
    "id": "9.5.1.3.b",
    "requirementNumber": "9.5.1.3",
    "text": "Interview personnel in POI environments to verify they have received training and know the procedures for all elements specified in this requirement."
  },
  {
    "id": "10.1.1",
    "requirementNumber": "10.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 10 are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "10.1.2.a",
    "requirementNumber": "10.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 10 are documented and assigned."
  },
  {
    "id": "10.1.2.b",
    "requirementNumber": "10.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 10 to verify that roles and responsibilities are assigned as defined and are understood."
  },
  {
    "id": "10.2.1",
    "requirementNumber": "10.2.1",
    "text": "Interview the system administrator and examine system configurations to verify that audit logs are enabled and active for all system components."
  },
  {
    "id": "10.2.1.1",
    "requirementNumber": "10.2.1.1",
    "text": "Examine audit log configurations and log data to verify that all individual user access to cardholder data is logged."
  },
  {
    "id": "10.2.1.2",
    "requirementNumber": "10.2.1.2",
    "text": "Examine audit log configurations and log data to verify that all actions taken by any individual with administrative access, including any interactive use of application or system accounts,"
  },
  {
    "id": "10.2.1.5",
    "requirementNumber": "10.2.1.5",
    "text": "Examine audit log configurations and log data to verify that changes to identification and authentication credentials are captured in accordance with all elements specified in this requirement."
  },
  {
    "id": "10.2.1.6",
    "requirementNumber": "10.2.1.6",
    "text": "Examine audit log configurations and log data to verify that all elements specified in this requirement are captured."
  },
  {
    "id": "10.2.1.7",
    "requirementNumber": "10.2.1.7",
    "text": "Examine audit log configurations and log data to verify that creation and deletion of system level objects is captured."
  },
  {
    "id": "10.2.2",
    "requirementNumber": "10.2.2",
    "text": "Interview personnel and examine audit log configurations and log data to verify that all elements specified in this requirement are included in log entries for each auditable event (from"
  },
  {
    "id": "10.3.1",
    "requirementNumber": "10.3.1",
    "text": "Interview system administrators and examine system configurations and privileges to verify that only individuals with a job-related need have read access to audit log files."
  },
  {
    "id": "10.3.2",
    "requirementNumber": "10.3.2",
    "text": "Examine system configurations and privileges and interview system administrators to verify that current audit log files are protected from modifications by individuals via access control mechanisms, physical segregation, and/or network segregation. Customized Approach Objective Stored activity records cannot be modified by personnel."
  },
  {
    "id": "10.3.3",
    "requirementNumber": "10.3.3",
    "text": "Examine backup configurations or log files to verify that current audit log files, including those for external-facing technologies, are promptly backed up to a secure, central, internal log server(s) or other media that is difficult to modify."
  },
  {
    "id": "10.3.4",
    "requirementNumber": "10.3.4",
    "text": "Examine system settings, monitored files, and results from monitoring activities to verify the use of file integrity monitoring or change-detection software on audit logs."
  },
  {
    "id": "10.4.1.a",
    "requirementNumber": "10.4.1",
    "text": "Examine security policies and procedures to verify that processes are defined for reviewing all elements specified in this requirement at least once daily."
  },
  {
    "id": "10.4.1.b",
    "requirementNumber": "10.4.1",
    "text": "Observe processes and interview personnel to verify that all elements specified in this requirement are reviewed at least once daily"
  },
  {
    "id": "10.4.1.1",
    "requirementNumber": "10.4.1.1",
    "text": "Examine log review mechanisms and interview personnel to verify that automated mechanisms are used to perform log reviews."
  },
  {
    "id": "10.4.2.a",
    "requirementNumber": "10.4.2",
    "text": "Examine security policies and procedures to verify that processes are defined for reviewing logs of all other system components periodically."
  },
  {
    "id": "10.4.2.b",
    "requirementNumber": "10.4.2",
    "text": "Examine documented results of log reviews and interview personnel to verify that log"
  },
  {
    "id": "10.4.2.1.a",
    "requirementNumber": "10.4.2.1",
    "text": "Examine the entity\u2019s targeted risk analysis for the frequency of periodic log reviews for all other system components (not defined in Requirement 10.4.1) to verify the risk analysis was performed in accordance with all elements specified at Requirement 12.3.1."
  },
  {
    "id": "10.4.2.1.b",
    "requirementNumber": "10.4.2.1",
    "text": "Examine documented results of periodic log reviews of all other system components (not defined in Requirement 10.4.1) and interview personnel to verify log reviews are performed at the frequency specified in the entity\u2019s targeted risk analysis performed for this requirement."
  },
  {
    "id": "10.4.3.a",
    "requirementNumber": "10.4.3",
    "text": "Examine security policies and procedures to verify that processes are defined for addressing exceptions and anomalies identified during the review process."
  },
  {
    "id": "10.4.3.b",
    "requirementNumber": "10.4.3",
    "text": "Observe processes and interview personnel to verify that, when exceptions and"
  },
  {
    "id": "10.5.1.a",
    "requirementNumber": "10.5.1",
    "text": "Examine documentation to verify that the following is defined: \u2022 Audit log retention policies. \u2022 Procedures for retaining audit log history for at least 12 months, with at least the most recent three months immediately available online."
  },
  {
    "id": "10.5.1.b",
    "requirementNumber": "10.5.1",
    "text": "Examine configurations of audit log history, interview personnel and examine audit logs to verify that audit logs history is retained for at least 12 months."
  },
  {
    "id": "10.5.1.c",
    "requirementNumber": "10.5.1",
    "text": "Interview personnel and observe processes to verify that at least the most recent three months\u2019 audit log history is immediately available for analysis."
  },
  {
    "id": "10.6.1",
    "requirementNumber": "10.6.1",
    "text": "Examine system configuration settings to verify that time-synchronization technology is implemented and kept current."
  },
  {
    "id": "10.6.2",
    "requirementNumber": "10.6.2",
    "text": "Examine system configuration settings for acquiring, distributing, and storing the correct time to verify the settings are configured in accordance with all elements specified in this requirement."
  },
  {
    "id": "10.6.3.a",
    "requirementNumber": "10.6.3",
    "text": "Examine system configurations and time\u0002synchronization settings to verify that access to time data is restricted to only personnel with a business need."
  },
  {
    "id": "10.6.3.b",
    "requirementNumber": "10.6.3",
    "text": "Examine system configurations and time synchronization settings and logs and observe processes to verify that any changes to time settings on critical systems are logged, monitored, and reviewed. Customized Approach Objective System time settings cannot be modified by unauthorized personnel. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 256"
  },
  {
    "id": "10.7.1.a",
    "requirementNumber": "10.7.1",
    "text": "Additional testing procedure for service provider assessments only: Examine documentation to verify that processes are defined for the prompt detection and addressing of failures of critical security control systems, including but not limited to failure of all elements specified in this requirement."
  },
  {
    "id": "10.7.1.b",
    "requirementNumber": "10.7.1",
    "text": "Additional testing procedure for service provider assessments only: Observe detection and alerting processes and interview personnel to verify that failures of critical security control systems are detected and reported, and that failure of a critical security control results in the generation of an alert."
  },
  {
    "id": "10.7.2.a",
    "requirementNumber": "10.7.2",
    "text": "Examine documentation to verify that processes are defined for the prompt detection and addressing of failures of critical security control systems, including but not limited to failure of all elements specified in this requirement."
  },
  {
    "id": "10.7.2.b",
    "requirementNumber": "10.7.2",
    "text": "Observe detection and alerting processes and interview personnel to verify that failures of critical security control systems are detected and reported, and that failure of a critical security control results in the generation of an alert."
  },
  {
    "id": "10.7.3.a",
    "requirementNumber": "10.7.3",
    "text": "Examine documentation and interview personnel to verify that processes are defined and implemented to respond to a failure of any critical security control system and include at least all elements specified in this requirement."
  },
  {
    "id": "10.7.3.b",
    "requirementNumber": "10.7.3",
    "text": "Examine records to verify that failures of critical security control systems are documented to include: \u2022 Identification of cause(s) of the failure. \u2022 Duration (date and time start and end) of the security failure. \u2022 Details of the remediation required to address the root cause."
  },
  {
    "id": "11.1.1",
    "requirementNumber": "11.1.1",
    "text": "Examine documentation and interview personnel to verify that security policies and operational procedures are managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "11.1.2.a",
    "requirementNumber": "11.1.2",
    "text": "Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 11 are documented and assigned."
  },
  {
    "id": "11.1.2.b",
    "requirementNumber": "11.1.2",
    "text": "Interview personnel with responsibility for performing activities in Requirement 11 to verify that roles and responsibilities are assigned as documented and are understood."
  },
  {
    "id": "11.2.1.a",
    "requirementNumber": "11.2.1",
    "text": "Examine policies and procedures to verify processes are defined for managing both authorized and unauthorized wireless access points with all elements specified in this requirement."
  },
  {
    "id": "11.2.1.b",
    "requirementNumber": "11.2.1",
    "text": "Examine the methodology(ies) in use and the resulting documentation, and interview personnel to verify processes are defined to detect and identify both authorized and unauthorized wireless access points in accordance with all elements specified in this requirement."
  },
  {
    "id": "11.2.1.c",
    "requirementNumber": "11.2.1",
    "text": "Examine wireless assessment results and interview personnel to verify that wireless assessments were conducted in accordance with all elements specified in this requirement."
  },
  {
    "id": "11.2.1.d",
    "requirementNumber": "11.2.1",
    "text": "If automated monitoring is used, examine configuration settings to verify the configuration will"
  },
  {
    "id": "11.2.2",
    "requirementNumber": "11.2.2",
    "text": "Examine documentation to verify that an inventory of authorized wireless access points is maintained, and a business justification is documented for all authorized wireless access points."
  },
  {
    "id": "11.3.1.a",
    "requirementNumber": "11.3.1",
    "text": "Examine internal scan report results from the last 12 months to verify that internal scans occurred at least once every three months in the most recent 12-month period."
  },
  {
    "id": "11.3.1.b",
    "requirementNumber": "11.3.1",
    "text": "Examine internal scan report results from each scan and rescan run in the last 12 months to verify that all high-risk vulnerabilities and all critical vulnerabilities (defined in PCI DSS Requirement"
  },
  {
    "id": "11.3.1.c",
    "requirementNumber": "11.3.1",
    "text": "Examine scan tool configurations and interview personnel to verify that the scan tool is kept up to date with the latest vulnerability information."
  },
  {
    "id": "11.3.1.d",
    "requirementNumber": "11.3.1",
    "text": "Interview responsible personnel to verify that the scan was performed by a qualified internal resource(s) or qualified external third party and that organizational independence of the tester exists."
  },
  {
    "id": "11.3.1.1.a",
    "requirementNumber": "11.3.1.1",
    "text": "Examine the entity\u2019s targeted risk analysis that defines the risk for addressing all other applicable vulnerabilities (those not ranked as high-risk vulnerabilities or critical vulnerabilities according to the entity\u2019s vulnerability risk rankings at Requirement 6.3.1) to verify the risk analysis was performed in accordance with all elements specified at Requirement 12.3.1."
  },
  {
    "id": "11.3.1.1.b",
    "requirementNumber": "11.3.1.1",
    "text": "Interview responsible personnel and examine internal scan report results or other documentation to verify that all other applicable vulnerabilities (those not ranked as high-risk vulnerabilities or critical vulnerabilities according to the entity\u2019s vulnerability risk rankings at Requirement 6.3.1) are addressed based on the risk defined in the entity\u2019s targeted risk analysis, and that the scan process includes rescans as needed to confirm the vulnerabilities have been addressed."
  },
  {
    "id": "11.3.1.2.a",
    "requirementNumber": "11.3.1.2",
    "text": "Examine scan tool configurations to verify that authenticated scanning is used for internal scans, with sufficient privileges, for those systems that accept credentials for scanning."
  },
  {
    "id": "11.3.1.2.b",
    "requirementNumber": "11.3.1.2",
    "text": "Examine scan report results and interview personnel to verify that authenticated scans are performed."
  },
  {
    "id": "11.3.1.2.c",
    "requirementNumber": "11.3.1.2",
    "text": "If accounts used for authenticated scanning can be used for interactive login, examine the accounts and interview personnel to verify the accounts are managed following all elements specified in Requirement 8.2.2."
  },
  {
    "id": "11.3.1.3.a",
    "requirementNumber": "11.3.1.3",
    "text": "Examine change control documentation and internal scan reports to verify that system components were scanned after any significant changes."
  },
  {
    "id": "11.3.1.3.b",
    "requirementNumber": "11.3.1.3",
    "text": "Interview personnel and examine internal scan and rescan reports to verify that internal scans were performed after significant changes and that all high-risk vulnerabilities and all critical vulnerabilities (defined in PCI DSS Requirement 6.3.1) were resolved."
  },
  {
    "id": "11.3.1.3.c",
    "requirementNumber": "11.3.1.3",
    "text": "Interview personnel to verify that internal scans are performed by a qualified internal resource(s) or qualified external third party and that organizational independence of the tester exists."
  },
  {
    "id": "11.3.2.a",
    "requirementNumber": "11.3.2",
    "text": "Examine ASV scan reports from the last 12 months to verify that external vulnerability scans occurred at least once every three months in the most recent 12-month period."
  },
  {
    "id": "11.3.2.b",
    "requirementNumber": "11.3.2",
    "text": "Examine the ASV scan report from each scan and rescan run in the last 12 months to verify that vulnerabilities are resolved and the ASV Program Guide requirements for a passing scan are met."
  },
  {
    "id": "11.3.2.c",
    "requirementNumber": "11.3.2",
    "text": "Examine the ASV scan reports to verify that the scans were completed by a PCI SSC"
  },
  {
    "id": "11.3.2.1.a",
    "requirementNumber": "11.3.2.1",
    "text": "Examine change control documentation and external scan reports to verify that system components were scanned after any significant changes."
  },
  {
    "id": "11.3.2.1.b",
    "requirementNumber": "11.3.2.1",
    "text": "Interview personnel and examine external scan and rescan reports to verify that external scans were performed after significant changes and that vulnerabilities scored 4.0 or higher by the CVSS were resolved."
  },
  {
    "id": "11.3.2.1.c",
    "requirementNumber": "11.3.2.1",
    "text": "Interview personnel to verify that external scans are performed by a qualified internal resource(s) or qualified external third party and that organizational independence of the tester exists."
  },
  {
    "id": "11.4.1",
    "requirementNumber": "11.4.1",
    "text": "Examine documentation and interview personnel to verify that the penetration-testing methodology defined, documented, and implemented by the entity includes all elements specified in this requirement. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 275"
  },
  {
    "id": "11.4.2.a",
    "requirementNumber": "11.4.2",
    "text": "Examine the scope of work and results from the most recent internal penetration test to verify that penetration testing is performed in accordance with all elements specified in this requirement."
  },
  {
    "id": "11.4.2.b",
    "requirementNumber": "11.4.2",
    "text": "Interview personnel to verify that the internal penetration test was performed by a qualified internal resource or qualified external third-party and that organizational independence of the tester exists (not required to be a QSA or ASV)."
  },
  {
    "id": "11.4.3.a",
    "requirementNumber": "11.4.3",
    "text": "Examine the scope of work and results from the most recent external penetration test to verify that penetration testing is performed according to all elements specified in this requirement."
  },
  {
    "id": "11.4.3.b",
    "requirementNumber": "11.4.3",
    "text": "Interview personnel to verify that the external penetration test was performed by a qualified internal resource or qualified external third party and that organizational independence of the tester exists (not required to be a QSA or ASV)."
  },
  {
    "id": "11.4.4",
    "requirementNumber": "11.4.4",
    "text": "Examine penetration testing results to verify that noted exploitable vulnerabilities and security weaknesses were corrected in accordance with all elements specified in this requirement."
  },
  {
    "id": "11.4.5.a",
    "requirementNumber": "11.4.5",
    "text": "Examine segmentation controls and review penetration-testing methodology to verify that penetration-testing procedures are defined to test all segmentation methods in accordance with all elements specified in this requirement."
  },
  {
    "id": "11.4.5.b",
    "requirementNumber": "11.4.5",
    "text": "Examine the results from the most recent penetration test to verify the penetration test covers and addresses all elements specified in this requirement."
  },
  {
    "id": "11.4.5.c",
    "requirementNumber": "11.4.5",
    "text": "Interview personnel to verify that the test was performed by a qualified internal resource or qualified external third party and that organizational independence of the tester exists (not required to be a QSA or ASV)."
  },
  {
    "id": "11.4.6.a",
    "requirementNumber": "11.4.6",
    "text": "Additional testing procedure for service provider assessments only: Examine the results from the most recent penetration test to verify that the penetration covers and addressed all elements specified in this requirement."
  },
  {
    "id": "11.4.6.b",
    "requirementNumber": "11.4.6",
    "text": "Additional testing procedure for service provider assessments only: Interview personnel to verify that the test was performed by a qualified internal resource or qualified external third party and that organizational independence of the tester exists (not required to be a QSA or ASV)."
  },
  {
    "id": "11.4.7",
    "requirementNumber": "11.4.7",
    "text": "Additional testing procedure for multi\u0002tenant service providers only: Examine evidence to verify that multi-tenant service providers support their customers for external penetration testing per Requirement 11.4.3 and 11.4.4."
  },
  {
    "id": "11.5.1.a",
    "requirementNumber": "11.5.1",
    "text": "Examine system configurations and network diagrams to verify that intrusion-detection and/or intrusion-prevention techniques are in place to monitor all traffic: \u2022 At the perimeter of the CDE. \u2022 At critical points in the CDE."
  },
  {
    "id": "11.5.1.b",
    "requirementNumber": "11.5.1",
    "text": "Examine system configurations and interview responsible personnel to verify intrusion\u0002detection and/or intrusion-prevention techniques alert personnel of suspected compromises."
  },
  {
    "id": "11.5.1.c",
    "requirementNumber": "11.5.1",
    "text": "Examine system configurations and vendor documentation to verify intrusion-detection and/or intrusion-prevention techniques are configured to keep all engines, baselines, and signatures up to date."
  },
  {
    "id": "11.5.1.1.a",
    "requirementNumber": "11.5.1.1",
    "text": "Additional testing procedure for service provider assessments only: Examine documentation and configuration settings to verify that methods to detect and alert on/prevent covert malware communication channels are in place and operating."
  },
  {
    "id": "11.5.1.1.b",
    "requirementNumber": "11.5.1.1",
    "text": "Additional testing procedure for service provider assessments only: Examine the entity\u2019s incident-response plan (Requirement"
  },
  {
    "id": "11.5.1.1.c",
    "requirementNumber": "11.5.1.1",
    "text": "Additional testing procedure for service provider assessments only: Interview responsible personnel and observe processes to verify that personnel maintain knowledge of covert malware communication and control techniques and are knowledgeable about how to respond when malware is suspected."
  },
  {
    "id": "11.5.2.a",
    "requirementNumber": "11.5.2",
    "text": "Examine system settings, monitored files, and results from monitoring activities to verify the use of a change-detection mechanism."
  },
  {
    "id": "11.5.2.b",
    "requirementNumber": "11.5.2",
    "text": "Examine settings for the change-detection mechanism to verify it is configured in accordance with all elements specified in this requirement."
  },
  {
    "id": "11.6.1.a",
    "requirementNumber": "11.6.1",
    "text": "Examine system settings, monitored payment pages, and results from monitoring activities to verify the use of a change- and tamper\u0002detection mechanism."
  },
  {
    "id": "11.6.1.b",
    "requirementNumber": "11.6.1",
    "text": "Examine configuration settings to verify the mechanism is configured in accordance with all elements specified in this requirement."
  },
  {
    "id": "11.6.1.c",
    "requirementNumber": "11.6.1",
    "text": "If the mechanism functions are performed at an entity-defined frequency, examine the entity\u2019s targeted risk analysis for determining the frequency to verify the risk analysis was performed in accordance with all elements specified at Requirement 12.3.1."
  },
  {
    "id": "11.6.1.d",
    "requirementNumber": "11.6.1",
    "text": "Examine configuration settings and interview personnel to verify the mechanism functions are performed either: \u2022 At least weekly OR \u2022 At the frequency defined in the entity\u2019s targeted risk analysis performed for this requirement."
  },
  {
    "id": "12.1.1",
    "requirementNumber": "12.1.1",
    "text": "Examine the information security policy and interview personnel to verify that the overall information security policy is managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.1.2",
    "requirementNumber": "12.1.2",
    "text": "Examine the information security policy and interview responsible personnel to verify the policy is managed in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.1.3.a",
    "requirementNumber": "12.1.3",
    "text": "Examine the information security policy to verify that they clearly define information security roles and responsibilities for all personnel."
  },
  {
    "id": "12.1.3.b",
    "requirementNumber": "12.1.3",
    "text": "Interview personnel in various roles to verify they understand their information security responsibilities."
  },
  {
    "id": "12.1.3.c",
    "requirementNumber": "12.1.3",
    "text": "Examine documented evidence to verify personnel acknowledge their information security"
  },
  {
    "id": "12.1.4",
    "requirementNumber": "12.1.4",
    "text": "Examine the information security policy to verify that information security is formally assigned to a Chief Information Security Officer or other information security-knowledgeable member of executive management."
  },
  {
    "id": "12.2.1",
    "requirementNumber": "12.2.1",
    "text": "Examine the acceptable use policies for end-user technologies and interview responsible personnel to verify processes are documented and implemented in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.3.1",
    "requirementNumber": "12.3.1",
    "text": "Examine documented policies and procedures to verify a process is defined for performing targeted risk analyses for each PCI DSS requirement that specifies completion of a targeted risk analysis, and that the process includes all elements specified in this requirement."
  },
  {
    "id": "12.3.2",
    "requirementNumber": "12.3.2",
    "text": "Examine the documented targeted risk\u0002analysis for each PCI DSS requirement that the entity meets with the customized approach to verify that documentation for each requirement exists and is in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.3.3",
    "requirementNumber": "12.3.3",
    "text": "Examine documentation for cryptographic suites and protocols in use and interview personnel to verify the documentation and review is in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.3.4",
    "requirementNumber": "12.3.4",
    "text": "Examine documentation for the review of hardware and software technologies in use and interview personnel to verify that the review is in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.4.1",
    "requirementNumber": "12.4.1",
    "text": "Additional testing procedure for service provider assessments only: Examine documentation to verify that executive management has established responsibility for the protection of cardholder data and a PCI DSS compliance program in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.4.2.a",
    "requirementNumber": "12.4.2",
    "text": "Additional testing procedure for service provider assessments only: Examine policies and procedures to verify that processes are defined for conducting reviews to confirm that personnel are performing their tasks in accordance with all security policies and all operational procedures, including but not limited to the tasks specified in this requirement."
  },
  {
    "id": "12.4.2.b",
    "requirementNumber": "12.4.2",
    "text": "Additional testing procedure for service provider assessments only: Interview responsible personnel and examine records of reviews to verify that reviews are performed: \u2022 At least once every three months. \u2022 By personnel other than those responsible for performing the given task."
  },
  {
    "id": "12.4.2.1",
    "requirementNumber": "12.4.2.1",
    "text": "Additional testing procedure for service provider assessments only: Examine documentation from the reviews conducted in accordance with PCI DSS Requirement 12.4.2 to verify the documentation includes all elements specified in this requirement."
  },
  {
    "id": "12.5.1.a",
    "requirementNumber": "12.5.1",
    "text": "Examine the inventory to verify it includes all in-scope system components and a description of function/use for each."
  },
  {
    "id": "12.5.1.b",
    "requirementNumber": "12.5.1",
    "text": "Interview personnel to verify the inventory is kept current."
  },
  {
    "id": "12.5.2.a",
    "requirementNumber": "12.5.2",
    "text": "Examine documented results of scope reviews and interview personnel to verify that the reviews are performed: \u2022 At least once every 12 months. \u2022 After significant changes to the in-scope environment."
  },
  {
    "id": "12.5.2.b",
    "requirementNumber": "12.5.2",
    "text": "Examine documented results of scope reviews performed by the entity to verify that PCI DSS scoping confirmation activity includes all elements specified in this requirement. Payment Card Industry Data Security Standard: Requirements and Testing Procedures, v4.0.1 June 2024 \u00a92006 - 2024 PCI Security Standards Council, LLC. All Rights Reserved. Page 306"
  },
  {
    "id": "12.5.2.1.a",
    "requirementNumber": "12.5.2.1",
    "text": "Additional testing procedure for service provider assessments only: Examine documented results of scope reviews and interview personnel to verify that reviews per Requirement"
  },
  {
    "id": "12.5.2.1.b",
    "requirementNumber": "12.5.2.1",
    "text": "Additional testing procedure for service provider assessments only: Examine documented results of scope reviews to verify that scoping validation includes all elements specified in Requirement 12.5.2."
  },
  {
    "id": "12.5.3.a",
    "requirementNumber": "12.5.3",
    "text": "Additional testing procedure for service provider assessments only: Examine policies and procedures to verify that processes are defined such that a significant change to organizational structure results in documented review of the impact to PCI DSS scope and applicability of controls."
  },
  {
    "id": "12.5.3.b",
    "requirementNumber": "12.5.3",
    "text": "Additional testing procedure for service provider assessments only: Examine documentation (for example, meeting minutes) and interview responsible personnel to verify that significant changes to organizational structure resulted in documented reviews that included all elements specified in this requirement, with results communicated to executive management."
  },
  {
    "id": "12.6.1",
    "requirementNumber": "12.6.1",
    "text": "Examine the security awareness program to verify it provides awareness to all personnel about the entity\u2019s information security policy and procedures, and personnel\u2019s role in protecting the cardholder data."
  },
  {
    "id": "12.6.2",
    "requirementNumber": "12.6.2",
    "text": "Examine security awareness program content, evidence of reviews, and interview personnel to verify that the security awareness program is in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.6.3.a",
    "requirementNumber": "12.6.3",
    "text": "Examine security awareness program records to verify that personnel attend security awareness training upon hire and at least once every 12 months."
  },
  {
    "id": "12.6.3.b",
    "requirementNumber": "12.6.3",
    "text": "Examine security awareness program materials to verify the program includes multiple methods of communicating awareness and educating personnel."
  },
  {
    "id": "12.6.3.c",
    "requirementNumber": "12.6.3",
    "text": "Interview personnel to verify they have completed awareness training and are aware of their role in protecting cardholder data."
  },
  {
    "id": "12.6.3.d",
    "requirementNumber": "12.6.3",
    "text": "Examine security awareness program materials and personnel acknowledgments to verify that personnel acknowledge at least once every 12 months that they have read and understand the information security policy and procedures."
  },
  {
    "id": "12.6.3.1",
    "requirementNumber": "12.6.3.1",
    "text": "Examine security awareness training content to verify it includes all elements specified in this requirement."
  },
  {
    "id": "12.6.3.2",
    "requirementNumber": "12.6.3.2",
    "text": "Examine security awareness training content to verify it includes awareness about acceptable use of end-user technologies in accordance with Requirement 12.2.1."
  },
  {
    "id": "12.7.1",
    "requirementNumber": "12.7.1",
    "text": "Interview responsible Human Resource department management to verify that screening is conducted, within the constraints of local laws, prior to hiring potential personnel who will have access to the CDE."
  },
  {
    "id": "12.8.1.a",
    "requirementNumber": "12.8.1",
    "text": "Examine policies and procedures to verify that processes are defined to maintain a list of TPSPs, including a description for each of the services provided, for all TPSPs with whom account data is shared or that could affect the security of account data."
  },
  {
    "id": "12.8.1.b",
    "requirementNumber": "12.8.1",
    "text": "Examine documentation to verify that a list of all TPSPs is maintained that includes a"
  },
  {
    "id": "12.8.2.a",
    "requirementNumber": "12.8.2",
    "text": "Examine policies and procedures to verify that processes are defined to maintain written agreements with all TPSPs in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.8.2.b",
    "requirementNumber": "12.8.2",
    "text": "Examine written agreements with TPSPs to verify they are maintained in accordance with all elements as specified in this requirement."
  },
  {
    "id": "12.8.3.a",
    "requirementNumber": "12.8.3",
    "text": "Examine policies and procedures to verify that processes are defined for engaging TPSPs, including proper due diligence prior to engagement."
  },
  {
    "id": "12.8.3.b",
    "requirementNumber": "12.8.3",
    "text": "Examine evidence and interview responsible personnel to verify the process for engaging TPSPs includes proper due diligence prior to engagement."
  },
  {
    "id": "12.8.4.a",
    "requirementNumber": "12.8.4",
    "text": "Examine policies and procedures to verify that processes are defined to monitor TPSPs\u2019 PCI DSS compliance status at least once every 12 months."
  },
  {
    "id": "12.8.4.b",
    "requirementNumber": "12.8.4",
    "text": "Examine documentation and interview responsible personnel to verify that the PCI DSS compliance status of each TPSP is monitored at least once every 12 months."
  },
  {
    "id": "12.8.5.a",
    "requirementNumber": "12.8.5",
    "text": "Examine policies and procedures to verify that processes are defined to maintain information about which PCI DSS requirements are managed by each TPSP, which are managed by the entity, and any that are shared between both the TPSP and the entity."
  },
  {
    "id": "12.8.5.b",
    "requirementNumber": "12.8.5",
    "text": "Examine documentation and interview personnel to verify the entity maintains information about which PCI DSS requirements are managed by each TPSP, which are managed by the entity, and any that are shared between both entities."
  },
  {
    "id": "12.9.1",
    "requirementNumber": "12.9.1",
    "text": "Additional testing procedure for service provider assessments only: Examine TPSP policies, procedures, and templates used for written agreements to verify processes are defined for the TPSP to provide written acknowledgments to customers in accordance with all elements specified in this requirement."
  },
  {
    "id": "12.9.2",
    "requirementNumber": "12.9.2",
    "text": "Additional testing procedure for service provider assessments only: Examine policies and procedures to verify processes are defined for the TPSPs to support customers\u2019 request for information to meet Requirements 12.8.4 and"
  },
  {
    "id": "12.10.1.a",
    "requirementNumber": "12.10.1",
    "text": "Examine the incident response plan to verify that the plan exists and includes at least the elements specified in this requirement."
  },
  {
    "id": "12.10.1.b",
    "requirementNumber": "12.10.1",
    "text": "Interview personnel and examine documentation from previously reported incidents or alerts to verify that the documented incident response plan and procedures were followed."
  },
  {
    "id": "12.10.2",
    "requirementNumber": "12.10.2",
    "text": "Interview personnel and review documentation to verify that, at least once every 12 months, the security incident response plan is: \u2022 Reviewed and updated as needed. \u2022 Tested, including all elements listed in Requirement 12.10.1."
  },
  {
    "id": "12.10.3",
    "requirementNumber": "12.10.3",
    "text": "Examine documentation and interview responsible personnel occupying designated roles to verify that specific personnel are designated to be available on a 24/7 basis to respond to security"
  },
  {
    "id": "12.10.4",
    "requirementNumber": "12.10.4",
    "text": "Examine training documentation and interview incident response personnel to verify that personnel are appropriately and periodically trained on their incident response responsibilities."
  },
  {
    "id": "12.10.4.1.a",
    "requirementNumber": "12.10.4.1",
    "text": "Examine the entity\u2019s targeted risk analysis for the frequency of training for incident response personnel to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1."
  },
  {
    "id": "12.10.4.1.b",
    "requirementNumber": "12.10.4.1",
    "text": "Examine documented results of periodic training of incident response personnel and interview personnel to verify training is performed at the frequency defined in the entity\u2019s targeted risk analysis performed for this requirement."
  },
  {
    "id": "12.10.5",
    "requirementNumber": "12.10.5",
    "text": "Examine documentation and observe incident response processes to verify that monitoring and responding to alerts from security monitoring systems are covered in the security incident response plan, including but not limited to the systems specified in this requirement."
  },
  {
    "id": "12.10.6.a",
    "requirementNumber": "12.10.6",
    "text": "Examine policies and procedures to verify that processes are defined to modify and evolve the security incident response plan according to lessons learned and to incorporate industry developments."
  },
  {
    "id": "12.10.6.b",
    "requirementNumber": "12.10.6",
    "text": "Examine the security incident response plan and interview responsible personnel to verify that the incident response plan is modified and evolved according to lessons learned and to incorporate industry developments."
  },
  {
    "id": "12.10.7.a",
    "requirementNumber": "12.10.7",
    "text": "Examine documented incident response procedures to verify that procedures for responding to the detection of stored PAN anywhere it is not expected to exist, ready to be initiated, and include all elements specified in this requirement."
  },
  {
    "id": "12.10.7.b",
    "requirementNumber": "12.10.7",
    "text": "Interview personnel and examine records of response actions to verify that incident response procedures are performed upon detection of stored PAN anywhere it is not expected."
  }
]
