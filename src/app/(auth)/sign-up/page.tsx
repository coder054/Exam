import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { APP_NAME } from "~/constants";
import SignUpForm from "./signup-form";
import GuestGuardClient from "~/components/GuestGuardClient";

export default async function PageSignUp() {
  return (
    <GuestGuardClient>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader className="space-y-4">
            <Link href="/" className="flex-center">
              <Image
                priority={true}
                src="/images/logo.svg"
                width={100}
                height={100}
                alt={`${APP_NAME} logo`}
              />
            </Link>
            <CardTitle className="text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Enter your information below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </GuestGuardClient>
  );
}
