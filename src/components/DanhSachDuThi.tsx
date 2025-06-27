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
            <TableHead className="border text-right">STT</TableHead>
            <TableHead className="border text-right">So Bao Danh</TableHead>
            <TableHead className="border text-right">CCCD</TableHead>
            <TableHead className="border text-right">
              Nam <br /> tuyen
              <br />
              sinh{" "}
            </TableHead>
            <TableHead className="border text-right">
              Khoa tuyen
              <br />
              sinh{" "}
            </TableHead>
            <TableHead className="border text-right">Nganh</TableHead>
            <TableHead className="border text-right">Vung</TableHead>
            <TableHead className="border text-center">
              Phuong <br />
              Thuc 1
            </TableHead>
            <TableHead className="border text-center">
              Phuong <br />
              Thuc 2
            </TableHead>
            <TableHead className="border text-center">
              Phuong <br />
              Thuc 3
            </TableHead>
            <TableHead className="border text-right">Diem Cong</TableHead>
            <TableHead className="border text-right">
              Diem bai <br /> thi tu
              <br /> luan 1
            </TableHead>
            <TableHead className="border text-right">
              Diem bai <br />
              thi tu <br /> luan 2
            </TableHead>
            <TableHead className="border text-right">
              ma to <br /> hop
            </TableHead>
            <TableHead className="border text-right">
              ma bai <br /> thi
            </TableHead>
            <TableHead className="w-[100px] border text-right">
              tong diem <br /> xet tuyen
            </TableHead>
            <TableHead className="border text-right">ket qua</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(applications || []).map((item) => (
            <TableRow key={item.id}>
              <TableCell className="border text-right">
                {item.soThuTu}
              </TableCell>
              <TableCell className="border text-right">
                {item.candidate.soBaoDanh}
              </TableCell>
              <TableCell className="border text-right">
                {item.candidate.CCCD}
              </TableCell>
              <TableCell className="border text-right">
                {item.kyThi.namTuyenSinh}
              </TableCell>
              <TableCell className="border text-right">
                {item.kyThi.khoaTuyenSinh}
              </TableCell>
              <TableCell className="border text-right">{item.nganh}</TableCell>
              <TableCell className="border text-right">{item.vung}</TableCell>
              <TableCell className="border text-center">
                {item.phuongThuc === "METHOD_1" ? "x" : ""}
              </TableCell>
              <TableCell className="border text-center">
                {item.phuongThuc === "METHOD_2" ? "x" : ""}
              </TableCell>
              <TableCell className="border text-center">
                {item.phuongThuc === "METHOD_3" ? "x" : ""}
              </TableCell>
              <TableCell className="border text-right">
                {item.diemCong}
              </TableCell>
              <TableCell className="border text-right">
                {item.diemBaiThiTuLuan1}
              </TableCell>
              <TableCell className="border text-right">
                {item.diemBaiThiTuLuan2}
              </TableCell>
              <TableCell className="border text-right">
                {item.maToHop}
              </TableCell>
              <TableCell className="border text-right">
                {item.maBaiThi}
              </TableCell>
              <TableCell className="border text-right">
                {item.tongDiemXetTuyen}
              </TableCell>
              <TableCell className="border text-right">
                {item.ketQua === "PASSED" ? "TT" : "KTT"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>{" "}
    </>
  );
}
