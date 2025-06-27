import Link from "next/link";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { ROUTES } from "~/constants";
import { db } from "~/server/db";

export default async function PageKhoaHoc() {
  const a = await db.kyThi.findMany();
  return (
    <Card className=" ">
      <CardHeader>Cac Khoa hoc</CardHeader>
      <CardContent className=" ">
        <ul>
          {a.map((o) => {
            return (
              <li key={o.id} className=" ">
                <Link className=" " href={ROUTES.admin.khoaHocDetail(o.slug)}>
                  {o.ten}
                </Link>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
