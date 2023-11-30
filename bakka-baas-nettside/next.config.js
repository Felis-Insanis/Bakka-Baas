/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mui/x-charts"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
