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

interface GetKetQuaThiFormState {
  errors: {
    message?: string;
  };
  data: any[];
}

export async function getKetQuaThi(
  _formState: GetKetQuaThiFormState,
  _formData: FormData,
): Promise<GetKetQuaThiFormState> {
  await new Promise((res) => setTimeout(res, 2000));

  return {
    errors: { message: "aaa test message" },
    data: [],
  };

  // const kyThiId = _formData.get("kyThiId") as string;
  // const sbd = _formData.get("sbd") as string;
  // const thiSinh = await db.thiSinh.findFirst({
  //   where: {
  //     soBaoDanh: String(sbd),
  //   },
  // });
  // if (!thiSinh) {
  //   return {
  //     errors: { message: "khong tim thay thi sinh" },
  //     data: [],
  //   };
  // }

  // const app = await db.application.findMany({
  //   where: {
  //     thiSinhId: thiSinh.id,
  //     kyThiId: parseInt(String(kyThiId)),
  //   },

  //   include: {
  //     candidate: true, // ThiSinh
  //     kyThi: true, // KyThi
  //   },
  // });

  // return {
  //   errors: {},
  //   data: app || [],
  // };
}
