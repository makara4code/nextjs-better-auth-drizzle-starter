import { requireAuth } from "@/lib/auth-utils";
import { Suspense } from "react";
import { LogoutButton } from "@/components/logout-button";

async function DashboardContent() {
  const session = await requireAuth();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
          <p className="text-lg">
            Welcome,{" "}
            <span className="font-semibold">
              {session.user.name || session.user.email}
            </span>
            !
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
          <h2 className="font-semibold mb-3 text-lg">Session Information</h2>
          <pre className="text-sm overflow-auto bg-white dark:bg-gray-800 p-3 rounded border">
            {JSON.stringify(session.user, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
            <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
