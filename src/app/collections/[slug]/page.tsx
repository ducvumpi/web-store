import { fetchCollectionBySlug } from "@/app/api/collections";
import ProductCard from "@/app/ui/product-card";
import Image from "next/image";
function formatImageUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}

export default async function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = await fetchCollectionBySlug(params.slug);

  if (!collection) {
    return <h1>Không tìm thấy bộ sưu tập</h1>;
  }

  return (
    <div className="flex pb-16 px-8 bg-background min-h-screen">
      <main className="container mx-auto ">
        <Image
          width={1200}
          height={630}
          src={formatImageUrl(collection.image)}
          alt={collection.name}
          className="mt-6 w-full max-w-3xl"
        />
      </main>
      <ProductCard />
    </div>
  );
}
