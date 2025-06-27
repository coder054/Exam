import { getApplicationsByKyThiSlug } from "~/server/actions/khoahoc.actions";

import DanhSachDuThi from "~/components/DanhSachDuThi";

export default async function PageKhoaHocDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const applications = await getApplicationsByKyThiSlug(slug);
  return (
    <DanhSachDuThi
      applications={applications}
      caption={"Danh sach du thi khoa hoc VB2 tuyen moi."}
    />
  );
}
