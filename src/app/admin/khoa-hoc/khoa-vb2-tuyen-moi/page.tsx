import { getListApplicationKhoaHocVBTuyenMoi } from "~/server/actions/khoahoc.actions";

import DanhSachDuThi from "~/components/DanhSachDuThi";

export default async function PageKhoaHocVB2TuyenMoi() {
  return <DanhSachDuThi fetchFn={getListApplicationKhoaHocVBTuyenMoi} />;
}
