/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",       // makes static files
    images: { unoptimized: true }, // required for GitHub Pages
  };
  
  module.exports = nextConfig;
  