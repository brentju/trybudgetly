/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async rewrites() {
    return [
      {
        source: '/app',
        destination: 'https://budgetly.up.railway.app',
      },
    ]
  },
}

module.exports = nextConfig 