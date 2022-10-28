/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ["kirillzhosul.site"],
  },
};

module.exports = nextConfig;
