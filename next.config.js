/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig