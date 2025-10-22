import axios from "axios";

export interface Collection {
  id: number;
  name: string;
  slug: string;
  image: string;
}

// Lấy tất cả collections
export async function fetchCollections(): Promise<Collection[]> {
  try {
    const response = await axios.get<Collection[]>(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu bộ sưu tập:", error);
    return [];
  }
}

// Lấy 1 collection theo slug
export async function fetchCollectionBySlug(
  slug: string
): Promise<Collection | null> {
  try {
    const collections = await fetchCollections(); // tái sử dụng function phía trên
    const found = collections.find((c) => c.slug === slug);
    return found ?? null;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu bộ sưu tập:", error);
    return null;
  }
}
