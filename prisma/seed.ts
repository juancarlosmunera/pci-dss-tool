import { PrismaClient } from "@prisma/client";
import {
  requirements,
  testingProcedures,
} from "./data/pci-dss-v4.0.1-seed";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding PCI DSS v4.0.1 requirements...");

  // Upsert requirements in order — seed data is ordered parents-before-children
  let reqCount = 0;
  for (const req of requirements) {
    await prisma.requirement.upsert({
      where: { number: req.number },
      update: {
        title: req.title,
        level: req.level,
        domain: req.domain,
        parentNumber: req.parentNumber,
        requirementText: req.requirementText,
        applicabilityNotes: req.applicabilityNotes,
        guidancePurpose: req.guidancePurpose,
        guidanceGoodPractice: req.guidanceGoodPractice,
        guidanceDefinitions: req.guidanceDefinitions,
        guidanceExamples: req.guidanceExamples,
        guidanceFurtherInformation: req.guidanceFurtherInformation,
      },
      create: {
        number: req.number,
        title: req.title,
        level: req.level,
        domain: req.domain,
        parentNumber: req.parentNumber,
        requirementText: req.requirementText,
        applicabilityNotes: req.applicabilityNotes,
        guidancePurpose: req.guidancePurpose,
        guidanceGoodPractice: req.guidanceGoodPractice,
        guidanceDefinitions: req.guidanceDefinitions,
        guidanceExamples: req.guidanceExamples,
        guidanceFurtherInformation: req.guidanceFurtherInformation,
      },
    });
    reqCount++;
    if (reqCount % 50 === 0) {
      console.log(`  ✓ ${reqCount}/${requirements.length} requirements`);
    }
  }
  console.log(`✅ Seeded ${requirements.length} requirements`);

  // Upsert testing procedures
  let tpCount = 0;
  for (const tp of testingProcedures) {
    await prisma.testingProcedure.upsert({
      where: { procedureId: tp.id },
      update: {
        requirementNumber: tp.requirementNumber,
        text: tp.text,
      },
      create: {
        procedureId: tp.id,
        requirementNumber: tp.requirementNumber,
        text: tp.text,
      },
    });
    tpCount++;
    if (tpCount % 100 === 0) {
      console.log(
        `  ✓ ${tpCount}/${testingProcedures.length} testing procedures`
      );
    }
  }
  console.log(`✅ Seeded ${testingProcedures.length} testing procedures`);
  console.log("🎉 Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
