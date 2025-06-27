import { getListApplicationKhoaHocD57TuyenHSTHPT } from "~/server/actions/khoahoc.actions";

import DanhSachDuThi from "~/components/DanhSachDuThi";

export default async function PageKhoaD57TuyenHSTHPT() {
  return (
    <DanhSachDuThi
      fetchFn={getListApplicationKhoaHocD57TuyenHSTHPT}
      caption={"Danh sach du thi khoa hoc D57 tuyen HS THPT."}
    />
  );
}
