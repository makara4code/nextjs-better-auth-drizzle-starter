import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth-utils";
import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function HomeContent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Next.js Auth
          </h1>
          <p className="text-muted-foreground text-lg">
            A complete authentication system with Better-Auth
          </p>
        </div>

        {session ? (
          <div className="space-y-4">
            <p className="text-lg">
              You&apos;re logged in as{" "}
              <span className="font-semibold">{session.user.email}</span>
            </p>
            <Button asChild size="lg" className="w-full">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="w-full">
              <Link href="/signup">Create an account</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md text-center space-y-6">
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
