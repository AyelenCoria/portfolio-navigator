/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
        pathname: '/scl/fi/**',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https:",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
             "frame-ancestors 'self' https://framer.com https://*.framer.com https://framer.app https://*.framer.app https://*.framer.website https://framerusercontent.com https://*.framerusercontent.com https://framerstatic.com https://*.framerstatic.com;",
              "upgrade-insecure-requests"
            ].join('; ')            
          }
        ]
      }
    ];
  }
}

const protectedRoutes = {
  '/src/app/casestudydirectexpress/page': true
};

module.exports = nextConfig