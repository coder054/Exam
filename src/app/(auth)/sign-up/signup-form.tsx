"use client";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { signUpDefaultValues } from "~/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { authClient } from "~/lib/auth-client";

const SignUpForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Submitting..." : "Sign Up"}
      </Button>
    );
  };

  console.log("aaa session", session);

  return (
    <form
      onSubmit={async (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = String(formData.get("name")) || "";
        const email = String(formData.get("email")) || "";
        const password = String(formData.get("password")) || "";

        const { data, error } = await authClient.signUp.email(
          {
            email, // user email address
            password, // user password -> min 8 characters by default
            name, // user display name
            callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
          },
          {
            onRequest: (ctx) => {
              //show loading
            },
            onSuccess: (ctx) => {
              //redirect to the dashboard or sign in page
              console.log("aaa onsuccess", ctx);
            },
            onError: (ctx) => {
              // display the error message
              alert(ctx.error.message);
            },
          },
        );
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
