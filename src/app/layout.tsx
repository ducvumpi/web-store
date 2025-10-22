import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Link from "next/link";
import Image from "next/image";
import { Handbag, HomeIcon, InfoIcon, StoreIcon } from "lucide-react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiệm Mùa Chậm - Thời trang cho mọi người",
  description: "Thời trang bền vững cho mọi người",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
          </div>
          <div className="nav-actions">
            <a href="/search.html">
              <i data-feather="search"></i>
            </a>
            <div className="auth-buttons">
              <a href="/login" className="auth-btn login-btn">
                Đăng nhập
              </a>
              <a href="/signup" className="auth-btn signup-btn">
                Đăng ký
              </a>
            </div>
            <a href="/account.html">
              <i data-feather="user"></i>
            </a>
            <a href="/cart.html">
              <i data-feather="shopping-bag"></i>
            </a>
            <button className="mobile-menu-btn">
              <i data-feather="menu"></i>
            </button>
          </div>
        </nav>
        <div className="mobile-menu">
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
        </div>
        <div className="overlay"></div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
