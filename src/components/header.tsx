import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "~/constants";
import UserButton from "./user-button";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-[1000px] justify-between">
        <div className="flex-start">
          <Link href="/" className="flex-start ml-4">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="ml-3 hidden text-2xl font-bold lg:block">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <UserButton />
      </div>
    </header>
  );
}
