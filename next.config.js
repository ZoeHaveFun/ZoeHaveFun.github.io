/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images')
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withExportImages(nextConfig)
