import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 만약 repository 이름이 'portfolio'라면 아래 주석을 해제하고 '/portfolio'로 설정하세요.
  // basePath: '/portfolio',
};

export default nextConfig;
