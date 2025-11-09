import { requireAuth } from "@/lib/auth-utils";

export async function SettingsContent() {
  await requireAuth();
  return <h1>Settings</h1>;
}
