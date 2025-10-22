"use client";
import Image from "next/image";
import { Clothes, fetchClothes } from "./../api/clothesAPI";
import { useEffect, useState } from "react";
import feather from "feather-icons";
function formatImageUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}

export default function MenPage() {
  const [clothes, setClothes] = useState<Clothes[]>([]);
  useEffect(() => {
    async function LoadClothes() {
      const data = await fetchClothes();
      setClothes(data);
    }
    LoadClothes();
  }, []);
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className="bg-[#F8F5EF]">
      <main className="container mr-auto ml-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{"Men's Fashion"}</h1>
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-xl text-gray-600">
              Stylish looks for every occasion
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button className="bg-gray-100 px-4 py-2 rounded-lg">
                Filter
              </button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg">Sort</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clothes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  width={1200}
                  height={630}
                  src={formatImageUrl(item.category.image)}
                  alt={item.category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    <i data-feather="heart" className="text-gray-600"></i>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${item.price}</span>
                  <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                    <i data-feather="shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Need help finding your style?
          </h2>
          <a
            href="/men-style-guide.html"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
          >
            View Style Guide
          </a>
        </div>
      </main>
    </div>
  );
}
