import { getListApplicationKhoaHocVBTuyenMoi } from "~/server/actions/khoahoc.actions";

import DanhSachDuThi from "~/components/DanhSachDuThi";

export default async function PageKhoaHocVB2TuyenMoi() {
  const applications = await getListApplicationKhoaHocVBTuyenMoi();
  return (
    <DanhSachDuThi
      applications={applications}
      caption={"Danh sach du thi khoa hoc VB2 tuyen moi."}
    />
  );
}
