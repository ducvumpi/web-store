"use client";

import { useState } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { PostProductAPI, ProductType } from "../api/postproductAPI"
import toast from "react-hot-toast";
import { Button, TextField } from "@mui/material";

export default function CreateProduct() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const { control, handleSubmit, formState: { errors }, } = useForm<ProductType>()
    const handlePostAPI = async (data: ProductType) => {
        try {
            setLoading(true);   // bật loading trước khi gọi API
            setError("");       // reset lỗi trước khi gửi

            // Chuẩn hóa payload
            const payload: ProductType = {
                ...data,
                price: Number(data.price),           // convert price sang number
                categoryId: Number(data.categoryId), // convert categoryId sang number
                images: Array.isArray(data.images) && data.images.length
                    ? data.images
                    : ["https://placeimg.com/640/480/any"], // đảm bảo là array string
            };

            const res = await PostProductAPI(payload);  // gọi API
            console.log("API response:", res);

            toast.success("Gửi dữ liệu thành công");  // thông báo khi API thành công

            // Nếu dùng react-hook-form, reset form ở đây
            // reset();

        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || "Có lỗi xảy ra");
            toast.error("Gửi dữ liệu thất bại");  // thông báo lỗi
        } finally {
            setLoading(false); // tắt loading dù thành công hay thất bại
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit(handlePostAPI)}>
                <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Vui lòng nhập tên sản phẩm" }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            label="Nhập món đồ"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name="price"
                    control={control}
                    defaultValue={0}
                    rules={{ required: "Vui lòng nhập tên sản phẩm" }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            label="Giá"
                            error={!!fieldState.error}

                            helperText={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Vui lòng nhập tên sản phẩm" }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            label="Nhập mô tả"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name="categoryId"
                    control={control}
                    defaultValue={0}
                    rules={{ required: "Vui lòng nhập tên sản phẩm" }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            label="Nhập ID"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name="images"
                    control={control}
                    defaultValue={[]}
                    rules={{ required: "Vui lòng nhập tên sản phẩm" }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            label="Nhập ảnh"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />

                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Đang gửi..." : "Create"}
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {result && (
                <pre style={{ background: "#eee", padding: 10, marginTop: 16 }}>
                    {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </div>
    );
}
