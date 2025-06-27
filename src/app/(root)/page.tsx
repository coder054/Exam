import { db } from "~/server/db";
import FormTraCuuDiemThi from "../form-tra-cuu-diem-thi";

export default async function HomePage() {
  const listKyThi = await db.kyThi.findMany();
  return <FormTraCuuDiemThi listKyThi={listKyThi} />;
}
