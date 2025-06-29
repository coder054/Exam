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

export default async function PageQuanLyNguoiDung() {
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {(users || []).map((item) => (
            <TableRow key={item.id}>
              <TableCell className="border text-right">{item.name}</TableCell>
              <TableCell className="border text-right">{item.email}</TableCell>
              <TableCell className="border text-right">{item.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>{" "}
    </>
  );
}
