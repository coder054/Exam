import Image from "next/image";
import Link from "next/link";
import UserButton from "~/components/user-button";
import { APP_NAME } from "~/constants";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="container mx-auto border-b">
          <div className="flex h-16 items-center px-4">
            <Link href="/" className="w-22">
              <Image
                src="/images/logo.png"
                width={48}
                height={48}
                alt={`${APP_NAME} logo`}
              />
            </Link>
            <div className="font-bold">Admin</div>
            <div className="ml-auto">
              <UserButton />
            </div>
          </div>
        </div>
        <div className="container mx-auto flex-1 space-y-4 p-8 pt-6">
          {children}
        </div>
      </div>
    </>
  );
}
