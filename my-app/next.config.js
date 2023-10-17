// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'https://paisaflowbaa.onrender.com/api/:path*', 
//       },
//     ];
//   },
//   async serverMiddleware({ app }) {
//     app.use(
//       '/api',
//       createProxyMiddleware({
//         target: 'https://paisaflowbaa.onrender.com',
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' },
//       })
//     );
//   },
// };


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://paisaflowbaa.onrender.com/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://paisaflowbaa.onrender.com/api/:path*',
        permanent: false,
      },
    ];
  },
};



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// }
 
// module.exports = nextConfig
