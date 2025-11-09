import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function getCurrentSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireAuth() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}

export async function getSession() {
  return await getCurrentSession();
}

export async function redirectIfAuthenticated(
  redirectTo: string = "/dashboard"
) {
  const session = await getCurrentSession();

  if (session) {
    redirect(redirectTo);
  }
}
