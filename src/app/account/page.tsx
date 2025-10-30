"use client";
import { useEffect, useState } from "react";
import { getProfile } from "../api/loginAPI";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("access_token"); // 👈 lấy token từ session
    if (!token) return;

    getProfile(token).then((data) => setProfile(data));
  }, []);

  return (
    <div>
      <h1>Trang Dashboard</h1>
      {profile ? <pre>{JSON.stringify(profile, null, 2)}</pre> : "Đang tải..."}
    </div>
  );
}
