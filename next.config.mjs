/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/web";
  nextConfig.assetPrefix = "/web";
  nextConfig.output = "export";
} else {
}

export default nextConfig;
