"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { loginUser, LoginData } from "../api/loginAPI";
import { useRouter } from "next/navigation";

type AuthContextType = {
  logout: () => void;
  onSubmit: (data: LoginData) => Promise<void>;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    if (stored === "true") {
      setIsLoggedIn(true);
    }
  }, []);
  const onSubmit = async (data: LoginData) => {
    const result = await loginUser(data.email, data.password);

    if (result.access_token) {
      sessionStorage.setItem("access_token", result.access_token);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      router.push("/account");
      alert("Đăng nhập thành công");
    }
  };
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("access_token");
    router.push("/");
  };
  return (
    <AuthContext.Provider
      value={{ logout, onSubmit, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error();
  return context;
}
