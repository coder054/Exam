import { redirect } from "next/navigation";
import { auth } from "./auth";
import { headers } from "next/headers";
import type { User } from "~/types";
import { ROUTES } from "~/constants";

type Role = User["role"];

const requireRole = (role: Role) => async () => {
  console.log("aaa requireRole", role);
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (!session?.user) {
    redirect(ROUTES.signIn);
  }

  if (session?.user?.role !== role) {
    redirect("/unauthorized");
  }
  return session;
};

export const requireAdmin = requireRole("ADMIN");
