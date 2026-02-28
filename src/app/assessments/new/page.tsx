import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { createAssessment } from "./actions";

export const metadata = { title: "New Assessment" };

export default async function NewAssessmentPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/signin");

  const userId = session.user.id;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link
        href="/assessments"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Assessments
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <ClipboardList className="h-6 w-6" /> New Assessment
        </h1>
        <p className="text-slate-500 mt-1">
          Create a new PCI DSS compliance assessment. All level-3 requirements
          will be automatically seeded as assessment items.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold text-slate-700">
            Assessment Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData: FormData) => {
              "use server";
              await createAssessment(formData, userId);
            }}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-700 mb-1.5 block"
              >
                Assessment Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                placeholder="e.g. Q1 2026 PCI DSS Assessment"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="text-sm font-medium text-slate-700 mb-1.5 block"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Optional description of this assessment's purpose or context…"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              />
            </div>

            {/* Scope */}
            <div>
              <label
                htmlFor="scope"
                className="text-sm font-medium text-slate-700 mb-1.5 block"
              >
                Scope
              </label>
              <textarea
                id="scope"
                name="scope"
                rows={3}
                placeholder="Describe which systems, environments, or business units are in scope…"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              />
            </div>

            {/* Target Date */}
            <div>
              <label
                htmlFor="targetDate"
                className="text-sm font-medium text-slate-700 mb-1.5 block"
              >
                Target Completion Date
              </label>
              <Input
                id="targetDate"
                name="targetDate"
                type="date"
                className="max-w-[200px]"
              />
            </div>

            <div className="pt-2 flex gap-3">
              <Button type="submit">Create Assessment</Button>
              <Link href="/assessments">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
