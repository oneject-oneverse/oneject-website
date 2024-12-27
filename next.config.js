/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oji.beehive.web.id',
      },
      {
        protocol: 'https',
        hostname: 'oneject.co.id',
      },
    ],
  },
}

module.exports = nextConfig 