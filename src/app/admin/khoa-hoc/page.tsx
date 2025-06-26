import Link from "next/link";
import { Card, CardHeader, CardContent } from "~/components/ui/card";

export default function PageKhoaHoc() {
  return (
    <Card className=" ">
      <CardHeader>Cac Khoa hoc</CardHeader>
      <CardContent className=" ">
        <ul>
          <li className=" ">
            <Link className=" " href={"/admin/khoa-hoc/khoa-vb2-tuyen-moi"}>
              Khoa VB2 tuyen moi
            </Link>
          </li>
          <li className=" ">
            <Link className=" " href={"/admin/khoa-hoc/khoa-d57-tuyen-hs-thpt"}>
              Khoa D57 tuyen hoc sinh THPT
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
