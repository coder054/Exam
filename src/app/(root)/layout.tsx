import type { Metadata } from "next";

import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "~/constants";
// import Header from "~/components/header";
// import Footer from "~/components/footer";
import Link from "next/link";
import Image from "next/image";
import UserButton from "~/components/user-button";

export const metadata: Metadata = {
  title: {
    template: `%s | Shopzy`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // return (
  //   <div className="flex h-screen flex-col">
  //     <Header />
  //     <div className="wrapper flex-1">{children}</div>
  //     <Footer />
  //   </div>
  // );
  return (
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

          <div className="ml-auto">
            <UserButton />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex-1 space-y-4 p-8 pt-6">
        {children}
      </div>
    </div>
  );
}
