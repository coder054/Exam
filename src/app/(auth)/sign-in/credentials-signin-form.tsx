"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ROUTES, signInDefaultValues } from "~/constants";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { authClient } from "~/lib/auth-client";
import { useState } from "react";
const CredentialsSignInForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || ROUTES.home;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ message: "" });

  const SignInButton = () => {
    return (
      <Button className="w-full" variant={"default"} disabled={loading}>
        {loading ? "Signing in ..." : "Sign in with credentials"}
      </Button>
    );
  };
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError({ message: "" });
        const form = e.currentTarget; // This is correctly typed as HTMLFormElement
        const formData = new FormData(form);
        const email = (formData.get("email") as string) || "";
        const password = (formData.get("password") as string) || "";
        setLoading(true);
        const { data, error } = await authClient.signIn.email(
          {
            /**
             * The user email
             */
            email,
            /**
             * The user password
             */
            password,
            /**
             * A URL to redirect to after the user verifies their email (optional)
             */
            callbackURL: ROUTES.home,
            /**
             * remember the user session after the browser is closed.
             * @default true
             */
            rememberMe: false,
          },
          {
            onResponse() {
              setLoading(false);
            },
            onError(error) {
              console.log("aaa on error", error);
            },
          },
        );
        setError({ message: error?.message || "" });
        console.log(data, error);
      }}
    >
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            defaultValue={signInDefaultValues.email}
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            defaultValue={signInDefaultValues.password}
            autoComplete="current-password"
          />
        </div>
        <div className=" ">
          {error.message && <div className="text-red-400">{error.message}</div>}
        </div>
        <div>
          <SignInButton></SignInButton>
        </div>

        <div className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link target="_self" className="link" href="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
