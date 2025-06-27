"use client";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { signUpDefaultValues } from "~/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { authClient } from "~/lib/auth-client";
import { useState } from "react";

const SignUpForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ message: "" });

  const { data: session } = authClient.useSession();

  const SignUpButton = () => {
    return (
      <Button disabled={loading} className="w-full" variant="default">
        {loading ? "Submitting..." : "Sign Up"}
      </Button>
    );
  };

  console.log("aaa session", session);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = (formData.get("name") as string) || "";
        const email = (formData.get("email") as string) || "";
        const password = (formData.get("password") as string) || "";

        setLoading(true);
        const { error } = await authClient.signUp.email(
          {
            email, // user email address
            password, // user password -> min 8 characters by default
            name, // user display name
            callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
          },
          {
            onResponse() {
              setLoading(false);
            },
          },
        );

        setError({ message: error?.message || "" });
      }}
    >
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            type="text"
            defaultValue={signUpDefaultValues.name}
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            defaultValue={signUpDefaultValues.email}
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
            defaultValue={signUpDefaultValues.password}
            autoComplete="current-password"
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            required
            type="password"
            defaultValue={signUpDefaultValues.confirmPassword}
            autoComplete="current-password"
          />
        </div>

        <div className=" ">
          {error.message && <div className="text-red-400">{error.message}</div>}
        </div>
        <div>
          <SignUpButton />
        </div>

        <div className="text-muted-foreground text-center text-sm">
          Already have an account?{" "}
          <Link
            target="_self"
            className="link"
            href={`/sign-in?callbackUrl=${callbackUrl}`}
          >
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
