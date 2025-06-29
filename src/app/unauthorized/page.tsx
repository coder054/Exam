import { Button } from "~/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "~/constants";

export const metadata: Metadata = {
  title: "Unauthorized Access",
};

export default function UnauthorizedPage() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-200px)] flex-col items-center justify-center space-y-4">
      <h1 className="h1-bold text-4xl">Unauthorized Access</h1>
      <p className="text-muted-foreground">
        Ban khong co quyen truy cap vao trang web nay.
      </p>
      <Button asChild>
        <Link href={ROUTES.home}>Tro ve trang chu</Link>
      </Button>
    </div>
  );
}
