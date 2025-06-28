"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "./../lib/auth-client";
import type { ReactNode } from "react";
import { ROUTES } from "~/constants";

export default function AuthGuardClient({ children }: { children: ReactNode }) {
  const router = useRouter();
  const sessionResponse = authClient.useSession();
  const { data: session, isPending } = sessionResponse;
  const role = (session?.user as any)?.role;
  console.log("aaa roleeee", role);

  // Wait until we know the auth status before rendering
  const loading = isPending === true;

  useEffect(() => {
    if (!loading && !session?.user) {
      router.push(ROUTES.signIn);
    }
    if (!loading && role !== "ADMIN") {
      router.push(ROUTES.home);
    }
  }, [loading, session, router, role]);

  if (loading) {
    return null;
  }

  // Don't show anything (not even 'unauthorized') while redirecting
  if (!session?.user) {
    return null;
  }

  if (role !== "ADMIN") {
    return null;
  }

  return <>{children}</>;
}
