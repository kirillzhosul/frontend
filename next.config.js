/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["kirillzhosul.site"],
  },
};

module.exports = nextConfig;
