/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/frontend";
  nextConfig.assetPrefix = "/frontend";
  nextConfig.output = "export";
} else {
}

export default nextConfig;
