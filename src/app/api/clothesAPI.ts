import axios from "axios";

export interface Clothes {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images?: string[];
}

export async function fetchClothes() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu quần áo:", error);
    return [];
  }
}
// export async function fetchClothesByCategory(categoryId: number) {
//     try{
//         const response = await axios.get(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}`);
//         return response.data;
//     }catch(error){
//         console.error("Lỗi khi lấy dữ liệu quần áo theo danh mục:",error);
//         return [];
//     }
// }
