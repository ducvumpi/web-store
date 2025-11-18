"use client";
import Link from "next/link";
import Image from "next/image";
import { Handbag, HomeIcon, InfoIcon, StoreIcon } from "lucide-react";
import { useAuthStore } from "../context/isLoggedIn";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuthStore();
  if (isLoggedIn === null) return null;
  const handleLogOut = () => {
    logout();
    router.push("/collections");
  };
  return (
    <>
      {" "}
      <nav>
        <Image width={150} height={200} src="/logo.png" alt="logo" />

        <div className="nav-links">
          <Link href="/">
            {" "}
            <HomeIcon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
            Trang chủ
          </Link>
          <Link href="/collections">
            {" "}
            <StoreIcon className="w-5 h-5 text-gray-600" />
            Bộ sưu tập
          </Link>
          <Link href="/men">
            {" "}
            <Handbag className="w-5 h-5 text-gray-600" />
            Thời trang Nam
          </Link>
          <Link href="/women">
            {" "}
            <Handbag className="w-5 h-5 text-gray-600" />
            Thời trang Nữ
          </Link>
          <Link href="/about">
            {" "}
            <InfoIcon className="w-5 h-5 text-gray-600" />
            Giới thiệu
          </Link>
          <Link href="/search.html">
            <i data-feather="search"></i>
          </Link>
          <Link href="/cart">
            <i data-feather="shopping-bag"></i>
          </Link>
        </div>
        {!isLoggedIn ? (
          <div className="nav-actions">
            <div className="auth-buttons">
              <a href="/login" className="auth-btn login-btn">
                Đăng nhập
              </a>
              <a href="/signup" className="auth-btn signup-btn">
                Đăng ký
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-gap">

              <a href="/account">
                <i data-feather="user"></i>
              </a>

              <button className="mobile-menu-btn">
                <i data-feather="menu"></i>
              </button>
            </div>
            <button
              onClick={handleLogOut}
              className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded"
            >
              Đăng xuất
            </button>
          </>
        )}
      </nav>
      {/* <div className="mobile-menu">
        <div className="mobile-menu-header">
          <Link href="/" className="logo">
            FashionFiesta
          </Link>
          <button className="close-menu-btn">
            <i data-feather="x"></i>
          </button>
        </div>
        <div className="mobile-menu-links">
          <Link href="/home">Trang chủ</Link>
          <Link href="/collections">Bộ sưu tập</Link>
          <Link href="/men">Nam</Link>
          <Link href="/women">Nữ</Link>
          <Link href="/about">Giới thiệu</Link>
          <Link href="/account">Tài khoản</Link>
          <Link href="/cart">Giỏ hàng</Link>
        </div>
      </div> */}
    </>
  );
}
