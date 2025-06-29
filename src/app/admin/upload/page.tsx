import { requireAdmin } from "~/lib/requireAdmin";
import FormUpload from "./form-upload";
import { db } from "~/server/db";

export default async function PageAdminUpload() {
  await requireAdmin();
  const listKyThi = await db.kyThi.findMany();
  return (
    <>
      <FormUpload listKyThi={listKyThi} />
    </>
  );
}
