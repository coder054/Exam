// types/better-auth.d.ts or anywhere in your global declarations
import "better-auth"; // adjust to the actual package name if needed
import "better-auth/react"; // adjust to the actual package name if needed

declare module "better-auth" {
  interface SessionUser {
    id: string;
    email: string;
    name?: string;
    role: "ADMIN" | "USER"; // or string if not enum
  }

  interface Session {
    user: SessionUser;
  }
}
declare module "better-auth/react" {
  interface SessionUser {
    id: string;
    email: string;
    name?: string;
    role: "ADMIN" | "USER"; // or string if not enum
  }

  interface Session {
    user: SessionUser;
  }
}
