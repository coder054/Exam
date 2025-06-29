import { getUserById } from "~/server/actions/user.actions";

export default async function PageEditUser({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserById(id);
  return <>{user?.email}</>;
}
