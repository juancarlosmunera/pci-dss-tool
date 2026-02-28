"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createAssessment(formData: FormData, userId: string) {
  const name = (formData.get("name") as string)?.trim();
  const description = (formData.get("description") as string)?.trim() ?? "";
  const scope = (formData.get("scope") as string)?.trim() ?? "";
  const targetDateStr = formData.get("targetDate") as string | null;

  if (!name) throw new Error("Assessment name is required");

  const targetDate = targetDateStr ? new Date(targetDateStr) : null;

  // Create the assessment
  const assessment = await prisma.assessment.create({
    data: {
      name,
      description,
      scope,
      targetDate,
      createdById: userId,
      status: "NOT_STARTED",
    },
  });

  // Fetch all level-3 requirements
  const requirements = await prisma.requirement.findMany({
    where: { level: 3 },
    select: { number: true },
  });

  // Bulk create AssessmentItems for each level-3 requirement
  if (requirements.length > 0) {
    await prisma.assessmentItem.createMany({
      data: requirements.map((req) => ({
        assessmentId: assessment.id,
        requirementNumber: req.number,
        status: "NOT_STARTED",
      })),
      skipDuplicates: true,
    });
  }

  redirect(`/assessments/${assessment.id}`);
}
