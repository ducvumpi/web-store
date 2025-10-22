/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.imgur.com",
      "pravatar.cc",
      "static.photos",
      "placeimg.com",
      "cdn.brvn.vn",
      "placehold.co",
      "www.string.com",
    ], // ✅ thêm domain ở đây
  },
};

module.exports = nextConfig;
