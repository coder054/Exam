import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardAction,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { ROUTES } from "~/constants";
import { db } from "~/server/db";

export default async function PageKhoaHoc() {
  const listKhoaHoc = await db.kyThi.findMany();
  return (
    <Card className=" ">
      <CardHeader>
        <CardTitle>Cac khoa hoc</CardTitle>
        <CardAction>
          <Link className=" " href={ROUTES.admin.addKhoaHoc}>
            <Button>Tao khoa hoc moi</Button>
          </Link>
        </CardAction>
      </CardHeader>

      <CardContent className=" ">
        <ul>
          {listKhoaHoc.map((o) => {
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
