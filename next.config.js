// // @ts-check

// /**
//  * @type {import('next').NextConfig}
//  **/
// const nextConfig = {
//   basePath: '',
// }

// module.exports = nextConfig


const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
})
 
module.exports = withNextra()
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })