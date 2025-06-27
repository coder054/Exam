import { getListApplicationKhoaHocD57TuyenHSTHPT } from "~/server/actions/khoahoc.actions";

import DanhSachDuThi from "~/components/DanhSachDuThi";

export default async function PageKhoaD57TuyenHSTHPT() {
  const applications = await getListApplicationKhoaHocD57TuyenHSTHPT();
  return (
    <DanhSachDuThi
      applications={applications}
      caption={"Danh sach du thi khoa hoc D57 tuyen HS THPT."}
    />
  );
}
