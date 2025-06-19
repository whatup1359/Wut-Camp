import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    serverActions:{
      bodySizeLimit: "5mb"
    },
    useCache: true
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hlbiyablvkmsbwqctlzk.supabase.co"
      },
      {
        protocol: "https",
        hostname: "sayitwithapin.com"
      }
    ]
  }
};

export default nextConfig;
