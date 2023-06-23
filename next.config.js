/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = nextConfig, {
  images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
}

// module.exports = {
//   images: {
//     loader: 'custom',
//     loaderFile: './my/image/loader.js',
//   },
// }