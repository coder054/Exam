import type { Metadata } from "next";

import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "~/constants";
import Header from "~/components/header";
import Footer from "~/components/footer";

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
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="wrapper flex-1">{children}</div>
      <Footer />
    </div>
  );
}
