import { db } from "~/server/db";

async function main() {
  // await db.user.deleteMany();
  // await db.account.deleteMany();
  // await db.post.deleteMany();
  // await db.session.deleteMany();
  // await db.verification.deleteMany();
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
      slug: "van-bang-2-tuyen-moi",
    },
  });

  const kyThiD57TuyenHSTHPT = await db.kyThi.create({
    data: {
      ten: "Khoa D57 tuyen hoc sinh THPT",
      mota: "Khoa D57 tuyen hoc sinh THPT",
      namTuyenSinh: 2025,
      khoaTuyenSinh: "Khóa 2025",

      slug: "d57-tuyen-hs-thpt",
    },
  });

  // Tạo thí sinh
  const anhvb012 = await db.thiSinh.create({
    data: {
      hoTen: "Nguyễn Văn A",
      soBaoDanh: "ANHVB012",
      CCCD: "212121212121",
    },
  });

  const anhvb037 = await db.thiSinh.create({
    data: {
      hoTen: "Nguyễn Văn B",
      soBaoDanh: "ANHVB037",
      CCCD: "212121212133",
    },
  });
  const anhvb050 = await db.thiSinh.create({
    data: {
      hoTen: "Nguyễn Văn C",
      soBaoDanh: "ANHVB050",
      CCCD: "444121212133",
    },
  });

  await db.application.create({
    data: {
      soThuTu: 1,
      thiSinhId: anhvb012.id,
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
      thiSinhId: anhvb012.id,
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
      thiSinhId: anhvb037.id,
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
      thiSinhId: anhvb050.id,
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

  await db.application.create({
    data: {
      soThuTu: 1,
      thiSinhId: anhvb012.id,
      kyThiId: kyThiD57TuyenHSTHPT.id,
      nganh: 7860100,
      vung: 1,
      phuongThuc: "METHOD_1",
      diemCong: null,
      diemBaiThiTuLuan1: null,
      diemBaiThiTuLuan2: null,
      maToHop: "A00",
      maBaiThi: null,
      tongDiemXetTuyen: null,
      ketQua: "NOT_PASSED",
    },
  });
  await db.application.create({
    data: {
      soThuTu: 2,
      thiSinhId: anhvb012.id,
      kyThiId: kyThiD57TuyenHSTHPT.id,
      nganh: 7860100,
      vung: 1,
      phuongThuc: "METHOD_2",
      diemCong: 2,
      diemBaiThiTuLuan1: 25,
      diemBaiThiTuLuan2: 55,
      maToHop: "A01",
      maBaiThi: "CA1",
      tongDiemXetTuyen: 26.0,
      ketQua: "PASSED",
    },
  });
  await db.application.create({
    data: {
      soThuTu: 3,
      thiSinhId: anhvb037.id,
      kyThiId: kyThiD57TuyenHSTHPT.id,
      nganh: 7480202,
      vung: 9,
      phuongThuc: "METHOD_2",
      diemCong: null,
      diemBaiThiTuLuan1: 25,
      diemBaiThiTuLuan2: 55,
      maToHop: "D01",
      maBaiThi: "CA1",
      tongDiemXetTuyen: 25.0,
      ketQua: "NOT_PASSED",
    },
  });
  await db.application.create({
    data: {
      soThuTu: 4,
      thiSinhId: anhvb050.id,
      kyThiId: kyThiD57TuyenHSTHPT.id,
      nganh: 7860100,
      vung: 1,
      phuongThuc: "METHOD_1",
      diemCong: null,
      diemBaiThiTuLuan1: null,
      diemBaiThiTuLuan2: null,
      maToHop: "C03",
      maBaiThi: null,
      tongDiemXetTuyen: null,
      ketQua: "PASSED",
    },
  });
  await db.application.create({
    data: {
      soThuTu: 5,
      thiSinhId: anhvb050.id,
      kyThiId: kyThiD57TuyenHSTHPT.id,
      nganh: 7860100,
      vung: 1,
      phuongThuc: "METHOD_3",
      diemCong: null,
      diemBaiThiTuLuan1: 25,
      diemBaiThiTuLuan2: 55,
      maToHop: "C03",
      maBaiThi: "CA4",
      tongDiemXetTuyen: 27.0,
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
