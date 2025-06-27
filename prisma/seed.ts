import { db } from "~/server/db";

async function main() {
  await db.application.deleteMany();
  await db.thiSinh.deleteMany();
  await db.kyThi.deleteMany();

  // ... then seed data like in previous script

  // Tạo kỳ thi
  const kyThiVB2TuyenMoi = await db.kyThi.create({
    data: {
      ten: "Khoa van bang 2 tuyen moi",
      mota: "Khoa van bang 2 tuyen moi",
      namTuyenSinh: 2025,
      khoaTuyenSinh: "Khóa 2025",
    },
  });

  const kyThiD57TuyenHSTHPT = await db.kyThi.create({
    data: {
      ten: "Khoa D57 tuyen hoc sinh THPT",
      mota: "Khoa D57 tuyen hoc sinh THPT",
      namTuyenSinh: 2025,
      khoaTuyenSinh: "Khóa 2025",
    },
  });

  // Tạo thí sinh
  const thiSinhKyThiVB2_1 = await db.thiSinh.create({
    data: {
      hoTen: "Nguyễn Văn A",
      soBaoDanh: "ANHVB012",
      CCCD: "212121212121",
    },
  });

  const thiSinhKyThiVB2_2 = await db.thiSinh.create({
    data: {
      hoTen: "Nguyễn Văn B",
      soBaoDanh: "ANHVB037",
      CCCD: "212121212133",
    },
  });
  const thiSinhKyThiVB2_3 = await db.thiSinh.create({
    data: {
      hoTen: "Nguyễn Văn C",
      soBaoDanh: "ANHVB050",
      CCCD: "444121212133",
    },
  });

  await db.application.create({
    data: {
      soThuTu: 1,
      thiSinhId: thiSinhKyThiVB2_1.id,
      kyThiId: kyThiVB2TuyenMoi.id,
      nganh: 7860100,
      vung: 1,
      phuongThuc: "METHOD_1",
      diemCong: null,
      diemBaiThiTuLuan1: null,
      diemBaiThiTuLuan2: null,
      maBaiThi: null,
      tongDiemXetTuyen: null,
      ketQua: "NOT_PASSED",
    },
  });
  await db.application.create({
    data: {
      soThuTu: 2,
      thiSinhId: thiSinhKyThiVB2_1.id,
      kyThiId: kyThiVB2TuyenMoi.id,
      nganh: 7860100,
      vung: 1,
      phuongThuc: "METHOD_2",
      diemCong: 2,
      diemBaiThiTuLuan1: 25,
      diemBaiThiTuLuan2: 55,
      maBaiThi: "CA1",
      tongDiemXetTuyen: 26.0,
      ketQua: "PASSED",
    },
  });
  await db.application.create({
    data: {
      soThuTu: 3,
      thiSinhId: thiSinhKyThiVB2_2.id,
      kyThiId: kyThiVB2TuyenMoi.id,
      nganh: 7480202,
      vung: 9,
      phuongThuc: "METHOD_2",
      diemCong: null,
      diemBaiThiTuLuan1: 25,
      diemBaiThiTuLuan2: 55,
      maBaiThi: "CA1",
      tongDiemXetTuyen: 25.0,
      ketQua: "NOT_PASSED",
    },
  });
  await db.application.create({
    data: {
      soThuTu: 4,
      thiSinhId: thiSinhKyThiVB2_3.id,
      kyThiId: kyThiVB2TuyenMoi.id,
      nganh: 7860100,
      vung: 1,
      phuongThuc: "METHOD_1",
      diemCong: null,
      diemBaiThiTuLuan1: null,
      diemBaiThiTuLuan2: null,
      maBaiThi: null,
      tongDiemXetTuyen: null,
      ketQua: "PASSED",
    },
  });

  console.log("✅ Seed dữ liệu thành công!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
