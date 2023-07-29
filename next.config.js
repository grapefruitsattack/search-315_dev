/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        scrollRestoration: true,
        swcMinify: false,
        appDir:true
    },
    trailingSlash: true,
    assetPrefix: process.env.BASE_PATH || '',
    basePath: process.env.BASE_PATH || '',
    output: 'export',
}

module.exports = nextConfig
