import AuthGuardClient from "~/components/AuthGuardClient";

import FormUpload from "./form-upload";
import { db } from "~/server/db";

export default async function PageAdminUpload() {
  const listKyThi = await db.kyThi.findMany();
  return (
    <AuthGuardClient>
      <FormUpload listKyThi={listKyThi} />
    </AuthGuardClient>
  );
}
