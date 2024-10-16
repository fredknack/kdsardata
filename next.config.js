/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC for better performance

  // New additions:
  output: 'standalone', // This ensures Next.js outputs the necessary files for standalone server use.
  
  eslint: {
    ignoreDuringBuilds: true, // Ignore lint errors during build
  },

  typescript: {
    ignoreBuildErrors: true, // Prevent build failures due to TypeScript errors
  },

  // Optional: Enhance performance for larger apps
  experimental: {
    scrollRestoration: true, // Improves user experience by preserving scroll position on navigation
  },

  // Azure-specific environment variable handling
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://your-default-api-url.com',
  },
};

module.exports = nextConfig;
