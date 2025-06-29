import { db } from "~/server/db";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ROUTES } from "~/constants";
import { requireAdmin } from "~/lib/requireAdmin";

export default async function PageQuanLyNguoiDung() {
  await requireAdmin();
  const users = await db.user.findMany();

  return (
    <>
      <Table>
        <TableCaption>{"Danh sach nguoi dung"}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="border text-right">Ten</TableHead>
            <TableHead className="border text-right">Email</TableHead>
            <TableHead className="border text-right">Role</TableHead>
            <TableHead className="border text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(users || []).map((item) => (
            <TableRow key={item.id}>
              <TableCell className="border text-right">{item.name}</TableCell>
              <TableCell className="border text-right">{item.email}</TableCell>
              <TableCell className="border text-right">{item.role}</TableCell>
              <TableCell className="border text-right">
                <div className="flex gap-x-2">
                  <Button asChild className=" ">
                    <Link className=" " href={ROUTES.admin.users.edit(item.id)}>
                      Edit
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>{" "}
    </>
  );
}
