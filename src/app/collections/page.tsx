"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Collection, fetchCollections } from "../api/collections";
function formatImageUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  useEffect(() => {
    async function LoadCollections() {
      const data: Collection[] = await fetchCollections();
      setCollections(data);
      console.log("data", data);
    }
    LoadCollections();
  }, []);

  return (
    <div className="bg-[#F8F5EF]">
      <main className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated fashion collections for every season
            and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition h-96"
            >
              <Image
                width={1200}
                height={630}
                unoptimized
                src={formatImageUrl(collection.image)}
                alt="Summer Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{collection.name}</h3>
                <p className="text-gray-200">{collection.name}</p>
                <a
                  href={`/collections/${collection.slug}`}
                  className="mt-4 inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition"
                >
                  View Collection
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">
            {"Can't find what you're looking for?"}
          </h2>
          <a
            href="/contact.html"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
          >
            Contact Our Stylists
          </a>
        </div>
      </main>
    </div>
  );
}
