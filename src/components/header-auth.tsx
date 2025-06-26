"use client";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { ReactNode } from "react";
import {
  signIn,
  // signOut
} from "@/actions";
import { authClient } from "@/lib/auth-client";

export default function HeaderAuth() {
  const dataSession = authClient.useSession();
  const session = dataSession.data;

  let authContent: ReactNode;

  if (dataSession.isPending) {
    authContent = null;
  } else if (session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger className=" ">
          <button>
            <Avatar src={session?.user?.image || ""} />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form
              // action={signOut}
              onSubmit={async (e) => {
                e.preventDefault();
                // sign in client thi UI se update luon khi dung useSession
                await authClient.signOut();
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem className=" ">
          <form className=" " action={signIn}>
            <Button
              className=" "
              type="submit"
              color="secondary"
              variant="bordered"
            >
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem className=" ">
          <form className=" ">
            <Button className=" " type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
