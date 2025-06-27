"use server";

import { db } from "../db";

export type TDanhSachDuThi = Awaited<
  ReturnType<typeof getListApplicationKhoaHocVBTuyenMoi>
>;

export async function getListApplicationKhoaHocVBTuyenMoi() {
  const applications = await db.application.findMany({
    where: {
      kyThiId: 1,
    },
    include: {
      candidate: true, // ThiSinh
      kyThi: true, // KyThi
    },
  });

  return applications;
}
