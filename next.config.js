/** @type {import('next').NextConfig} */

const withPWA = require( 'next-pwa' )( {
  disable: process.env.NODE_ENV === 'development',
  dest: 'public'
} )

const nextConfig = withPWA( {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true
  },
  images: {
    domains: [ 'images.unsplash.com', 'plus.unsplash.com' ]
  },
  trailingSlash: false,
  poweredByHeader: false,
  webpack: ( config ) => {
    config.module.rules.push( {
      test: /\.svg$/,
      use: [ '@svgr/webpack' ]
    } )
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  // async redirects() {
  //   return []
  // },
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' }
        ]
      },
      {
        source: '/images/:slug*',
        headers: [ { key: 'Cache-Control', value: 's-maxage=2592000, stale-while-revalidate=59' } ]
      },
      {
        source: '/lib/:slug*',
        headers: [ { key: 'Cache-Control', value: 's-maxage=2592000, stale-while-revalidate=59' } ]
      },
      {
        source: '/fonts/:slug*',
        headers: [ { key: 'Cache-Control', value: 's-maxage=2592000, stale-while-revalidate=59' } ]
      }
    ]
  }
} )

// eslint-disable-next-line no-undef
module.exports = nextConfig
