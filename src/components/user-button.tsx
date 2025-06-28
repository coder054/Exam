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
              <p className="text-muted-foreground text-xs leading-none">
                Role: {(session?.user as any)?.role}
              </p>
            </div>
          </DropdownMenuLabel>

          {(session?.user as any)?.role === "ADMIN" && (
            <DropdownMenuItem className="my-2 p-0">
              <Link className="h-full w-full p-2" href={ROUTES.admin.overview}>
                Vao Trang Admin
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem className="mb-1 p-0">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                console.log("aaa click sign out");
                try {
                  const { error, data } = await authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        router.push(ROUTES.signIn); // redirect to login page
                        console.log("aaa on success");
                      },
                      onError(context) {
                        console.log("aaa onError", context);
                      },
                      onResponse(context) {
                        console.log("aaa on response", context);
                      },
                    },
                  });
                  console.log("aaa data ", data);
                  console.log("aaa error", error);
                } catch (err) {
                  console.log("aaa err", err);
                }
              }}
              className="w-full"
            >
              <Button
                type="submit"
                className="h-4 w-full cursor-pointer justify-start px-2 py-4"
                variant="outline"
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
