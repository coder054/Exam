import { requireAdmin } from "~/lib/requireAdmin";
import FormAddKhoaHoc from "./form-add-khoa-hoc";

export default async function PageAddKhoaHoc() {
  await requireAdmin();
  return <FormAddKhoaHoc />;
}
