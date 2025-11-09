"use client";
// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
import { loginUser, LoginData } from "../api/loginAPI";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { persist } from "zustand/middleware";
import { create } from "zustand";

interface AuthContextType {
  logout: () => void;
  onSubmit: (data: LoginData) => Promise<void>;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}
export const useAuthStore = create<AuthContextType>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (value) => set({ isLoggedIn: value }),
      onSubmit: async ({ email, password }: LoginData) => {
        const result = await loginUser({ email, password });
        if (result.access_token) {
          sessionStorage.setItem("access_token", result.access_token);
          set({ isLoggedIn: true });
          toast.success("Đăng nhập thành công");
        } else {
          toast.error("Tài khoản hoặc mật khẩu không đúng");
        }
      },
      logout() {
        set({ isLoggedIn: false });
        toast.error("Tài khoản đã đăng xuất");
      },
    }),
    {
      name: "auth_context",
    }
  )
);
// const AuthContext = createContext<AuthContextType | null>(null);
// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const router = useRouter();

//   useEffect(() => {
//     const stored = localStorage.getItem("isLoggedIn");
//     if (stored === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);
//   const onSubmit = async (data: LoginData) => {
//     const result = await loginUser(data.email, data.password);
//     if (result.access_token) {
//       sessionStorage.setItem("access_token", result.access_token);
//       localStorage.setItem("isLoggedIn", "true");
//       setIsLoggedIn(true);
//       router.push("/account");
//       toast.success("Đăng nhập thành công");
//     } else {
//       toast.error("Tài Khoản hoặc mật khẩu không đúng");
//     }
//   };
//   const logout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     sessionStorage.removeItem("access_token");
//     router.push("/");
//     toast.error("Đã đăng xuất tài khoản");
//   };
//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn, setIsLoggedIn, onSubmit, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error();
//   return context;
// }
