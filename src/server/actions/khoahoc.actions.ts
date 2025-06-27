"use server";

import { db } from "../db";

export type TDanhSachDuThi = Awaited<
  ReturnType<typeof getListApplicationKhoaHocVBTuyenMoi>
>;

async function getApplications(kyThiId: number) {
  const applications = await db.application.findMany({
    where: {
      kyThiId,
    },
    include: {
      candidate: true, // ThiSinh
      kyThi: true, // KyThi
    },
  });

  return applications;
}

export async function getListApplicationKhoaHocVBTuyenMoi() {
  return getApplications(1);
}

export async function getListApplicationKhoaHocD57TuyenHSTHPT() {
  return getApplications(2);
}
