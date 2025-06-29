"use server";

import { db } from "../db";

export async function getUserById(id: string) {
  console.log("aaa getUserById", id);
  const user = await db.user.findFirst({
    where: { id: id },
  });
  console.log("aaa user", user);
  return user;
}
