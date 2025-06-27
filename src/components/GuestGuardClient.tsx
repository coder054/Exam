"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "./../lib/auth-client";
import type { ReactNode } from "react";
import LoadingPage from "~/app/loading";

export default function GuestGuardClient({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const sessionResponse = authClient.useSession();
  const { data: session, isPending } = sessionResponse;

  // Wait until we know the auth status before rendering
  const loading = isPending === true;

  useEffect(() => {
    if (!loading && !!session?.user) {
      router.push("/");
    }
  }, [loading, session, router]);

  if (loading) {
    return <LoadingPage />;
  }

  // Don't show anything (not even 'unauthorized') while redirecting
  if (session?.user) {
    return null;
  }

  return <>{children}</>;
}
