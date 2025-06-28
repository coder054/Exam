"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { ROUTES } from "~/constants";
import { UserIcon } from "lucide-react";
import { authClient } from "~/lib/auth-client";
import { useRouter } from "next/navigation";

export default function UserButton() {
  const { data: session, isPending } = authClient.useSession();

  const router = useRouter();

  const firstInitial = session?.user?.name?.charAt(0).toUpperCase() ?? "";

  if (isPending) {
    return null;
  }

  if (!session) {
    return (
      <Link href={ROUTES.signIn}>
        <Button>
          <UserIcon />
          Sign In
        </Button>
      </Link>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm leading-none font-medium">
                {session.user?.name}
              </p>
              <p className="text-muted-foreground text-xs leading-none">
                {session.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>

          {(session?.user as any).role === "ADMIN" && (
            <DropdownMenuItem>
              <Link className="w-full" href={ROUTES.admin.overview}>
                Adminnnn
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem className="mb-1 p-0">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                console.log("aaa click sign out");
                await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push(ROUTES.signIn); // redirect to login page
                    },
                  },
                });
              }}
              className="w-full"
            >
              <Button
                type="submit"
                className="h-4 w-full justify-start px-2 py-4"
                variant="ghost"
              >
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
