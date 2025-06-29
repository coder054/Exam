import Link from "next/link";

import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { ROUTES } from "~/constants";
import { requireAdmin } from "~/lib/requireAdmin";

export default async function PageAdmin() {
  await requireAdmin();
  return (
    <>
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
              <Link className=" " href={ROUTES.admin.listKhoaHoc}>
                Cac ky thi
              </Link>
            </li>
            <li className=" ">
              <Link className=" " href={ROUTES.admin.users.list}>
                Quan ly nguoi dung
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
