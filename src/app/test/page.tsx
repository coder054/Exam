import { env } from "~/env";

export default function PageTest() {
  return (
    <>
      <div className=" ">
        aaa3 NEXT_PUBLIC_SERVER_URL: {env.NEXT_PUBLIC_SERVER_URL}
      </div>
      <div className=" ">NODE_ENV: {env.NODE_ENV}</div>
      <div className=" ">BETTER_AUTH_SECRET: {env.BETTER_AUTH_SECRET}</div>
      <div className=" ">BETTER_AUTH_URL: {env.BETTER_AUTH_URL}</div>
      <div className=" ">DATABASE_URL: {env.DATABASE_URL}</div>
    </>
  );
}
