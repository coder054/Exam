import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";
import { APP_NAME, ROUTES } from "~/constants";
import CredentialsSignInForm from "./credentials-signin-form";
import GuestGuardClient from "~/components/GuestGuardClient";

export const metadata: Metadata = {
  title: "Sign in",
};

const SignIn = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  return (
    <GuestGuardClient>
      <div className="mx-auto w-full max-w-md">
        <Card className=" ">
          <CardHeader className="space-y-4">
            <Link lang="" href={ROUTES.home} className="flex-center">
              <Image
                priority={true}
                src="/images/logo.svg"
                width={100}
                height={100}
                alt={`${APP_NAME} logo`}
              />{" "}
            </Link>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Select a method to sign in to your account
            </CardDescription>{" "}
          </CardHeader>
          <CardContent className="space-y-4">
            <CredentialsSignInForm></CredentialsSignInForm>
          </CardContent>{" "}
        </Card>
      </div>
    </GuestGuardClient>
  );
};

export default SignIn;
