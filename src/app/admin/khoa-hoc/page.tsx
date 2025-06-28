import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardAction,
  CardTitle,
} from "~/components/ui/card";
import { ROUTES } from "~/constants";
import { deleteKythi } from "~/server/actions/khoahoc.actions";
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
              <li
                key={o.id}
                className="mb-2 flex items-center justify-between border pl-4"
              >
                <Link className=" " href={ROUTES.admin.khoaHocDetail(o.slug)}>
                  {o.ten}
                </Link>
                <form action={deleteKythi}>
                  <input type="hidden" name="id" value={o.id} />
                  <Button variant={"destructive"} type="submit">
                    Xoa
                  </Button>
                </form>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
