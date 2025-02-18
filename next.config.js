/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/projects/:id",
        destination: "/projects/:id/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
