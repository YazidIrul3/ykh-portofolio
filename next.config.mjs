/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.pinimg.com",
      },
      {
        hostname: "icons.veryicon.com",
      },
      {
        hostname: "upload.wikimedia.org",
      },
      {
        hostname: "static-00.iconduck.com",
      },
      {
        hostname: "iconape.com",
      },
    ],
  },
};

export default nextConfig;
