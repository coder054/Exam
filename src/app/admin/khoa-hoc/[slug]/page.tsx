import { getApplicationsByKyThiId } from "~/server/actions/khoahoc.actions";

import DanhSachDuThi from "~/components/DanhSachDuThi";
import { db } from "~/server/db";
import { redirect } from "next/navigation";
import { ROUTES } from "~/constants";
import { requireAdmin } from "~/lib/requireAdmin";

export default async function PageKhoaHocDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requireAdmin();
  const { slug } = await params;
  const khoaHoc = await db.kyThi.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!khoaHoc) {
    redirect(ROUTES.admin.listKhoaHoc);
  }

  const applications = await getApplicationsByKyThiId(khoaHoc.id);
  return <DanhSachDuThi applications={applications} caption={khoaHoc.ten} />;
}
