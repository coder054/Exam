import type { TDanhSachDuThi } from "~/server/actions/khoahoc.actions";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function DanhSachDuThi({
  caption,
  applications,
}: {
  caption: string;
  applications: TDanhSachDuThi;
}) {
  return (
    <>
      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="border">STT</TableHead>
            <TableHead className="border">So Bao Danh</TableHead>
            <TableHead className="border">CCCD</TableHead>
            <TableHead className="border">
              Nam <br /> tuyen
              <br />
              sinh{" "}
            </TableHead>
            <TableHead className="border">
              Khoa tuyen
              <br />
              sinh{" "}
            </TableHead>
            <TableHead className="border">Nganh</TableHead>
            <TableHead className="border">Vung</TableHead>
            <TableHead className="border">
              Phuong <br />
              Thuc 1
            </TableHead>
            <TableHead className="border">
              Phuong <br />
              Thuc 2
            </TableHead>
            <TableHead className="border">
              Phuong <br />
              Thuc 3
            </TableHead>
            <TableHead className="border">Diem Cong</TableHead>
            <TableHead className="border">
              Diem bai <br /> thi tu
              <br /> luan 1
            </TableHead>
            <TableHead className="border">
              Diem bai <br />
              thi tu <br /> luan 2
            </TableHead>
            <TableHead className="border">
              ma to <br /> hop
            </TableHead>
            <TableHead className="border">
              ma bai <br /> thi
            </TableHead>
            <TableHead className="w-[100px] border">
              tong diem <br /> xet tuyen
            </TableHead>
            <TableHead className="border">ket qua</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(applications || []).map((item) => (
            <TableRow key={item.id}>
              <TableCell className="border">{item.soThuTu}</TableCell>
              <TableCell className="border">
                {item.candidate.soBaoDanh}
              </TableCell>
              <TableCell className="border">{item.candidate.CCCD}</TableCell>
              <TableCell className="border">
                {item.kyThi.namTuyenSinh}
              </TableCell>
              <TableCell className="border">
                {item.kyThi.khoaTuyenSinh}
              </TableCell>
              <TableCell className="border">{item.nganh}</TableCell>
              <TableCell className="border">{item.vung}</TableCell>
              <TableCell className="border">
                {item.phuongThuc === "METHOD_1" ? "x" : ""}
              </TableCell>
              <TableCell className="border">
                {item.phuongThuc === "METHOD_2" ? "x" : ""}
              </TableCell>
              <TableCell className="border">
                {item.phuongThuc === "METHOD_3" ? "x" : ""}
              </TableCell>
              <TableCell className="border">{item.diemCong}</TableCell>
              <TableCell className="border">{item.diemBaiThiTuLuan1}</TableCell>
              <TableCell className="border">{item.diemBaiThiTuLuan2}</TableCell>
              <TableCell className="border">{item.maToHop}</TableCell>
              <TableCell className="border">{item.maBaiThi}</TableCell>
              <TableCell className="border">{item.tongDiemXetTuyen}</TableCell>
              <TableCell className="border">
                {item.ketQua === "PASSED" ? "TT" : "KTT"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>{" "}
    </>
  );
}
