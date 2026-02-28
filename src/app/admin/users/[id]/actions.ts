"use server";

import { prisma } from "@/lib/prisma";
import { PlatformRole } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addDomainAssignment(
  userId: string,
  domain: string,
  role: PlatformRole,
  adminId: string
) {
  await prisma.domainAssignment.create({
    data: {
      userId,
      domain,
      role,
      assignedBy: adminId,
    },
  });
  revalidatePath(`/admin/users/${userId}`);
  revalidatePath("/admin/users");
}

export async function removeDomainAssignment(
  assignmentId: string,
  userId: string
) {
  await prisma.domainAssignment.delete({
    where: { id: assignmentId },
  });
  revalidatePath(`/admin/users/${userId}`);
  revalidatePath("/admin/users");
}

export async function toggleUserActive(userId: string, isActive: boolean) {
  await prisma.user.update({
    where: { id: userId },
    data: { isActive },
  });
  revalidatePath(`/admin/users/${userId}`);
  revalidatePath("/admin/users");
}
