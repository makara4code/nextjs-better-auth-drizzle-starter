import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function ProtectedRouteContent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}

export default async function ProtectedRoute() {
  return (
    <section className="max-w-7xl mx-auto bg-accent p-8 mt-10">
      <h1 className="text-2xl font-bold">Protected Route</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRouteContent />
      </Suspense>
    </section>
  );
}
