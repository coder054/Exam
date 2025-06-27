import Link from "next/link";
import AuthGuardClient from "~/components/AuthGuardClient";

import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { ROUTES } from "~/constants";

export default function PageAdmin() {
  return (
    <AuthGuardClient>
      <Card className=" ">
        <CardHeader>Admin</CardHeader>
        <CardContent className=" ">
          <ul className="list-disc">
            <li className=" ">
              <Link className=" " href={ROUTES.admin.upload}>
                Upload data
              </Link>
            </li>
            <li className=" ">
              <Link className=" " href={"/admin/khoa-hoc"}>
                Cac ky thi
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </AuthGuardClient>
  );
}
