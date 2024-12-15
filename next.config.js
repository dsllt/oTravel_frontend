/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'onnerevista.com.br',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/explore',
        permanent: true,
      },
    ];
  },
  basePath: '',
  assetPrefix: '/',
  output: 'export',
  distDir: 'dist',
};

module.exports = nextConfig;
