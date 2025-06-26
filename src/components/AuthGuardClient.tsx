"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "./../lib/auth-client";
import type { ReactNode } from "react";

export default function AuthGuardClient({ children }: { children: ReactNode }) {
  const router = useRouter();
  const sessionResponse = authClient.useSession();
  const { data: session, isPending } = sessionResponse;

  // Wait until we know the auth status before rendering
  const loading = isPending === true;

  useEffect(() => {
    if (!loading && !session?.user) {
      router.push("/login");
    }
  }, [loading, session, router]);

  if (loading) {
    return <div>Loading auth status...</div>;
  }

  // Don't show anything (not even 'unauthorized') while redirecting
  if (!session?.user) {
    return null;
  }

  return <>{children}</>;
}
