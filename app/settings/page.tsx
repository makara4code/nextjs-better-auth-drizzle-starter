import { Suspense } from "react";
import { SettingsContent } from "./components/settings-content";
import { SettingsContentSkeleton } from "./components/settings-content-skeleton";

export default async function SettingsPage() {
  return (
    <Suspense fallback={<SettingsContentSkeleton />}>
      <SettingsContent />
    </Suspense>
  );
}
