/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC for better performance
  eslint: {
    ignoreDuringBuilds: true, // Ignore lint errors during build
  },
};

module.exports = nextConfig;


  