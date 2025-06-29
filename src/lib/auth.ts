// better-auth server
import { betterAuth } from "better-auth";
// import {  type BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "~/server/db";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false, // chi can false thi useSession van nhan duoc role field
        // neu truong nay la true thi khi sign-up better auth se bat ta truyen
        // vao role (mac du prisma da co default), nen chi can false la ok
        fieldName: "role",
      },
    },
  },

  plugins: [nextCookies()], // make sure this is the last plugin in the array
});
// xxxx https://github.com/better-auth/better-auth/issues/2410
// const _a: BetterAuthOptions = {
//   user: {
//     additionalFields: {
//       role: {
//         type: "string",
//         required: true,
//         fieldName: "role",
//       },
//     },
//   },
// };
