/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: 'c893b4651ba646589ea144522230709',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.weatherapi.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
