"use client";
import Image from "next/image";
import feather from "feather-icons";
import { useEffect } from "react";
export default function WomenPage() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{"Thời trang Nữ"}</h1>
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-xl text-gray-600">
            Phong cách thanh lịch dành cho mọi phụ nữ
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <button className="bg-gray-100 px-4 py-2 rounded-lg">Lọc</button>
            <button className="bg-gray-100 px-4 py-2 rounded-lg">
              Sắp xếp
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="relative h-64 overflow-hidden">
            <Image
              width={1200}
              height={630}
              src="http://static.photos/fashion/640x360/31"
              alt="Women's Dress"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute top-4 right-4">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                <i data-feather="heart" className="text-gray-600"></i>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Summer Floral Dress</h3>
            <p className="text-gray-600 mb-2">Dresses</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">$59.99</span>
              <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                <i data-feather="shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="relative h-64 overflow-hidden">
            <Image
              width={1200}
              height={630}
              src="http://static.photos/fashion/640x360/32"
              alt="Women's Blouse"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
            <div className="absolute top-4 right-4">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                <i data-feather="heart" className="text-gray-600"></i>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Silk Blouse</h3>
            <p className="text-gray-600 mb-2">Tops</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">$39.99</span>
              <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                <i data-feather="shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Bạn đang tìm cảm hứng cho trang phục?
        </h2>
        <a
          href="/women-lookbook.html"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
        >
          Xem Lookbook
        </a>
      </div>
    </main>
  );
}
