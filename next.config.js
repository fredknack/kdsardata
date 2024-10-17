/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ensures strict mode for React

  swcMinify: true, // Enables SWC for faster and more optimized builds

  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },

  typescript: {
    ignoreBuildErrors: true, // Prevents TypeScript errors from breaking builds
  },

  // Optional: Enhance performance for larger apps
  experimental: {
    scrollRestoration: true, // Improves user experience by preserving scroll position during navigation
  },

  // Azure-specific environment variable handling
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://kdsar-cms.scm.azurewebsites.net', // Replace with your actual API URL
  },
};

module.exports = nextConfig;
