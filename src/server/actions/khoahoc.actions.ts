"use server";

import { read, utils } from "xlsx";
import { db } from "../db";
import { formatError } from "~/lib/utils";
import type z from "zod";
import type { formSchemaAddKhoaHoc } from "~/app/admin/khoa-hoc/new/form-add-khoa-hoc";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import type { User } from "@prisma/client";
import { ROUTES } from "~/constants";
import { revalidatePath } from "next/cache";

export type TDanhSachDuThi = Awaited<
  ReturnType<typeof getApplicationsByKyThiId>
>;

export async function getApplicationsByKyThiId(id: number) {
  const applications = await db.application.findMany({
    where: {
      kyThiId: id,
    },
    include: {
      candidate: true, // ThiSinh
      kyThi: true, // KyThi
    },
  });

  return applications;
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
  // await new Promise((res) => setTimeout(res, 2000));

  // return {
  //   errors: { message: "aaa test message" },
  //   data: [],
  // };
  try {
    const kyThiId = _formData.get("kyThiId") as string;
    const sbd = _formData.get("sbd") as string;
    const thiSinh = await db.thiSinh.findFirst({
      where: {
        soBaoDanh: String(sbd),
      },
    });
    if (!thiSinh) {
      return {
        errors: { message: "khong tim thay thi sinh" },
        data: [],
      };
    }

    const app = await db.application.findMany({
      where: {
        thiSinhId: thiSinh.id,
        kyThiId: parseInt(String(kyThiId)),
      },

      include: {
        candidate: true, // ThiSinh
        kyThi: true, // KyThi
      },
    });

    return {
      errors: {
        message: "",
      },
      data: app || [],
    };
  } catch (error) {
    return {
      errors: {
        message: formatError(error),
      },
      data: [],
    };
  }
}

interface UploadExcelFormState {
  errors: {
    message?: string;
  };
  data: any[];
  success?: string;
}

export async function uploadExcel(
  _formState: GetKetQuaThiFormState,
  _formData: FormData,
): Promise<UploadExcelFormState> {
  try {
    const file = _formData.get("file") as File;
    const kyThiId = _formData.get("kyThiId") as string;
    // console.log("aaa file", file.size === 0 ? "no" : "yes");
    // console.log("aaa kythiid", kyThiId);

    if (file.size === 0) throw new Error("No file uploaded");
    if (!kyThiId) throw new Error("Chua chon ky thi");

    const arrayBuffer = await file.arrayBuffer();
    const workbook = read(arrayBuffer, { type: "array" });
    const sheet = workbook.Sheets;
    const sheetnames = workbook.SheetNames;

    const keys = {
      stt: "STT",
      sbd: "Số báo danh",
      cccd: "CCCD",
      nganh: "Ngành",
      vung: "Vùng",
      phuongThuc1: "Phương thức 1",
      phuongThuc2: "Phương thức 2",
      phuongThuc3: "Phương thức 3",
      diemBaiThiTuLuan1: "Điểm bài thi Tự luận 1",
      diemBaiThiTuLuan2: "Điểm bài thi Tự luận 2",
      maToHop: "Mã tổ hợp",
      maBaiThi: "Mã bài thi",
      tongDiemXetTuyen: "Tổng điểm xét tuyển",
      ketQua: "Kết quả (Trúng tuyển hay không)",
      diemCong: "Điểm cộng của thí sinh",
    };
    const sheetNameFirst = sheetnames[0];
    const sheetData = sheet[sheetNameFirst!];
    const data: any = utils.sheet_to_json(sheetData!);
    // console.log("aaa data", data);
    // return {
    //   data: [],
    //   errors: { message: "aaa" },
    // };

    for (const item of data) {
      let thiSinhId: number;
      const thiSinh = await db.thiSinh.findFirst({
        where: {
          soBaoDanh: item[keys.sbd],
          // soBaoDanh: "abc",
        },
      });
      const isThiSinhExisted = thiSinh !== null;
      if (!isThiSinhExisted) {
        const newThiSinh = await db.thiSinh.create({
          data: {
            CCCD: item[keys.cccd],
            hoTen: "",
            soBaoDanh: item[keys.sbd],
          },
        });
        thiSinhId = newThiSinh.id;
      } else {
        thiSinhId = thiSinh.id;
      }
      const phuongThuc = item[keys.phuongThuc1]
        ? "METHOD_1"
        : item[keys.phuongThuc2]
          ? "METHOD_2"
          : item[keys.phuongThuc3]
            ? "METHOD_3"
            : "METHOD_1";

      const app = await db.application.findFirst({
        where: {
          thiSinhId: thiSinhId,
          kyThiId: parseInt(kyThiId),
          phuongThuc: phuongThuc,
        },
      });

      const isAppExisted = app !== null;
      if (isAppExisted) {
      } else {
        const getValueOrNull = (value: any, isNumber: boolean) => {
          if (!value) {
            return null;
          }
          if (isNumber) {
            return parseInt(value);
          }
          return value;
        };
        await db.application.create({
          data: {
            nganh: getValueOrNull(item[keys.nganh], true),
            phuongThuc: phuongThuc,
            soThuTu: getValueOrNull(item[keys.stt], true),
            vung: getValueOrNull(item[keys.vung], true),
            thiSinhId: getValueOrNull(thiSinhId, true),
            kyThiId: getValueOrNull(kyThiId, true),
            diemCong: getValueOrNull(item[keys.diemCong], true),
            diemBaiThiTuLuan1: getValueOrNull(
              item[keys.diemBaiThiTuLuan1],
              true,
            ),
            diemBaiThiTuLuan2: getValueOrNull(
              item[keys.diemBaiThiTuLuan2],
              true,
            ),
            maToHop: getValueOrNull(item[keys.maToHop], false),
            maBaiThi: getValueOrNull(item[keys.maBaiThi], false),
            tongDiemXetTuyen: getValueOrNull(item[keys.tongDiemXetTuyen], true),
            ketQua: item[keys.ketQua] === "TT" ? "PASSED" : "NOT_PASSED",
          },
        });
      }
    }

    return {
      errors: { message: "" },
      data: [],
      success: "upload thanh cong",
    };
  } catch (error) {
    return {
      errors: {
        message: formatError(error),
      },
      data: [],
    };
  }
}

export async function createKhoaHoc(
  data: z.infer<typeof formSchemaAddKhoaHoc>,
) {
  console.log("aaa data", data);
  try {
    await new Promise((res) => setTimeout(res, 5000));
    await requiredAdmin();

    await db.kyThi.create({
      data: {
        khoaTuyenSinh: data.khoaTuyenSinh,
        mota: data.mota,
        namTuyenSinh: parseInt(data.namTuyenSinh),
        slug: data.slug,
        ten: data.ten,
      },
    });

    revalidatePath(ROUTES.admin.listKhoaHoc);

    return {
      success: true,
      message: "tao khoa hoc thanh cong",
      redirectTo: ROUTES.admin.listKhoaHoc,
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export const requiredAdmin = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  // xxxx
  const adminRole: User["role"] = "ADMIN";

  if (session?.user?.role !== adminRole) {
    throw new Error("You need to be an Admin");
  }
};

export const deleteKythi = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await db.kyThi.delete({
    where: {
      id: parseInt(id),
    },
  });
  revalidatePath(ROUTES.admin.listKhoaHoc);
};
