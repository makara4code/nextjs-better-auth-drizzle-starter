import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth-utils";

export default async function Page() {
  const session = await getSession();

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
