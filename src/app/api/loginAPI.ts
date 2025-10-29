import axios from "axios";
import * as yup from "yup";

export type LoginData = {
  email: string;
  password: string;
};
export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(5, "Số lượng ký tự không quá 5")
    .required("Vui lòng nhập mật khẩu"),
});

const URL = "https://api.escuelajs.co/api/v1/auth";
const GetAPI = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export async function loginUser(email: string, password: string) {
  await LoginSchema.validate({ email, password }, { abortEarly: false });
  const response = await GetAPI.post("/login", { email, password });
  return response.data;
}
export async function getProfile(token: string) {
  const response = await GetAPI.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
