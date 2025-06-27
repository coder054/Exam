import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "~/constants";
import UserButton from "./user-button";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-[1000px] justify-between">
        <div className="flex items-center">
          <Link href="/" className="ml-4 flex">
            <Image
              src="/images/logo.png"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="ml-3 hidden text-2xl font-bold lg:flex lg:items-center lg:justify-center">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="hidden">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
