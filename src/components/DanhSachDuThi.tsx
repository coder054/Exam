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
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">STT</div>
                <div className=" "></div>
                <div className=" "></div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">So bao danh</div>
                <div className=" "></div>
                <div className=" "></div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">CCCD</div>
                <div className=" "></div>
                <div className=" "></div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Nam</div>
                <div className=" ">tuyen</div>
                <div className=" ">sinh</div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Khoa</div>
                <div className=" ">tuyen</div>
                <div className=" ">sinh</div>
              </div>
            </TableHead>

            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Nganh</div>
                <div className=" "></div>
                <div className=" "></div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Vung</div>
                <div className=" "></div>
                <div className=" "></div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Phuong</div>
                <div className=" ">Thuc</div>
                <div className=" ">1</div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Phuong</div>
                <div className=" ">Thuc</div>
                <div className=" ">2</div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Phuong</div>
                <div className=" ">Thuc</div>
                <div className=" ">3</div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Diem</div>
                <div className=" ">cong</div>
                <div className=" "></div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Diem bai</div>
                <div className=" ">thi tu</div>
                <div className=" ">luan 1</div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Diem bai</div>
                <div className=" ">thi tu</div>
                <div className=" ">luan 2</div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Ma</div>
                <div className=" ">to</div>
                <div className=" ">hop</div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Ma</div>
                <div className=" ">bai</div>
                <div className=" ">thi</div>
              </div>
            </TableHead>
            <TableHead className="w-[100px] border">
              <div className="grid grid-rows-3">
                <div className=" ">Tong</div>
                <div className=" ">diem xet</div>
                <div className=" ">tuyen</div>
              </div>
            </TableHead>
            <TableHead className="border">
              <div className="grid grid-rows-3">
                <div className=" ">Ket</div>
                <div className=" ">qua</div>
                <div className=" "></div>
              </div>
            </TableHead>
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
