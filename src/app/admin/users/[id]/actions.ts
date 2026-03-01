"use server";

import { prisma } from "@/lib/prisma";
import { PlatformRole } from "@prisma/client";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

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

export async function createLocalAdmin(formData: FormData) {
  const email = formData.get("email") as string;
  const name = (formData.get("name") as string) || "Local Admin";
  const password = formData.get("password") as string;

  if (!email || !password) return;
  if (password.length < 8) return;

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.upsert({
    where: { email },
    create: {
      email,
      name,
      passwordHash,
      platformRoles: [PlatformRole.ADMIN],
      isActive: true,
    },
    update: {
      name,
      passwordHash,
      platformRoles: [PlatformRole.ADMIN],
      isActive: true,
    },
  });
  revalidatePath("/admin/users");
}

export async function setLocalPassword(userId: string, formData: FormData) {
  const password = formData.get("password") as string;
  if (!password || password.length < 8) return;

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash },
  });
  revalidatePath(`/admin/users/${userId}`);
}

export async function removeLocalPassword(userId: string) {
  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash: null },
  });
  revalidatePath(`/admin/users/${userId}`);
}
