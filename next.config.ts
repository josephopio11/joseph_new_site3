import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ allowedDevOrigins: [
    "http://localhost:3000",
    "https://dev.josephopio.com",
    "https://dev2.josephopio.com",
    "https://dev3.josephopio.com",
  ],
};

export default nextConfig;
