"use server";

import { prisma } from "@/lib/prisma";
import { ComplianceStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateItemStatus(
  itemId: string,
  status: ComplianceStatus,
  notes: string,
  userId: string
) {
  // Fetch current item to get old values and assessmentId
  const item = await prisma.assessmentItem.findUnique({
    where: { id: itemId },
    select: {
      status: true,
      assessmentId: true,
      serviceNow: { select: { id: true } },
    },
  });

  if (!item) throw new Error("Assessment item not found");

  const oldStatus = item.status;

  // Update the item
  await prisma.assessmentItem.update({
    where: { id: itemId },
    data: {
      status,
      notes,
      lastReviewed: new Date(),
    },
  });

  // Create audit log
  await prisma.auditLog.create({
    data: {
      assessmentItemId: itemId,
      action: "STATUS_CHANGE",
      oldValue: oldStatus,
      newValue: status,
      userId,
      sourceSystem: "platform",
    },
  });

  if (notes) {
    await prisma.auditLog.create({
      data: {
        assessmentItemId: itemId,
        action: "NOTES_UPDATED",
        newValue: notes,
        userId,
        sourceSystem: "platform",
      },
    });
  }

  revalidatePath(`/assessments/${item.assessmentId}/items/${itemId}`);
  revalidatePath(`/assessments/${item.assessmentId}`);
}

export async function updateItemAssignees(
  itemId: string,
  controlOwnerId: string | null,
  operatorId: string | null,
  userId: string
) {
  const item = await prisma.assessmentItem.findUnique({
    where: { id: itemId },
    select: {
      assessmentId: true,
      controlOwnerId: true,
      operatorId: true,
    },
  });

  if (!item) throw new Error("Assessment item not found");

  await prisma.assessmentItem.update({
    where: { id: itemId },
    data: {
      controlOwnerId: controlOwnerId || null,
      operatorId: operatorId || null,
    },
  });

  // Log control owner change
  if (item.controlOwnerId !== controlOwnerId) {
    await prisma.auditLog.create({
      data: {
        assessmentItemId: itemId,
        action: "CONTROL_OWNER_CHANGED",
        oldValue: item.controlOwnerId ?? undefined,
        newValue: controlOwnerId ?? undefined,
        userId,
        sourceSystem: "platform",
      },
    });
  }

  // Log operator change
  if (item.operatorId !== operatorId) {
    await prisma.auditLog.create({
      data: {
        assessmentItemId: itemId,
        action: "OPERATOR_CHANGED",
        oldValue: item.operatorId ?? undefined,
        newValue: operatorId ?? undefined,
        userId,
        sourceSystem: "platform",
      },
    });
  }

  revalidatePath(`/assessments/${item.assessmentId}/items/${itemId}`);
}
