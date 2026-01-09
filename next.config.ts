import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // Next.js 16 features
  experimental: {
    // Server Actions configuration
    serverActions: {
      bodySizeLimit: "20mb", // Increase limit for image uploads
    },
  },

  // React Compiler support (moved to top level in Next.js 16)
  reactCompiler: false, // Disable for now since babel-plugin-react-compiler is not installed

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // Handle build errors more gracefully
  typescript: {
    // Don't fail build on TypeScript errors during development
    ignoreBuildErrors: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
