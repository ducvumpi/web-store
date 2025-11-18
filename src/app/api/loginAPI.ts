import axios from "axios";

import * as yup from "yup";

export type UserData = {
  name: string;
  role: string;
  avatar: string;
};
export type LoginData = {
  email: string;
  password: string;
  role?: "user" | "admin";
};
export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không đúng định dạng")
    .required("Vui lòng nhập email"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});
const URL = "https://api.escuelajs.co/api/v1/auth";
const GetAPI = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export async function loginUser({ email, password }: LoginData) {
  try {
    await LoginSchema.validate({ email, password }, { abortEarly: false });
    const response = await GetAPI.post("/login", { email, password });
    console.log("loginUser", response)

    return response.data.access_token;
  } catch { }
}
export async function getProfile(token: string) {
  const response = await GetAPI.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
