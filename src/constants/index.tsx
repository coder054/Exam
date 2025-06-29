export const APP_NAME = "Diemthi";
export const APP_DESCRIPTION = "Tra cuu diem thi";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "";

export const signInDefaultValues = {
  email: "",
  password: "",
};
export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const ROUTES = {
  signIn: "/sign-in",
  signUp: "/sign-up",
  home: "/",
  admin: {
    overview: "/admin",
    upload: "/admin/upload",
    khoaHocDetail: (slug: string) => `/admin/khoa-hoc/${slug}`,
    listKhoaHoc: "/admin/khoa-hoc",
    addKhoaHoc: "/admin/khoa-hoc/new",
    users: {
      list: "/admin/quan-ly-nguoi-dung",
      edit: (id: string) => `/admin/quan-ly-nguoi-dung/${id}/edit`,
    },
  },
};
