/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.redbull.com',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/explore',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
