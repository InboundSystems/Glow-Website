import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for hydration; JSON-LD uses inline scripts
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com",
      // Google Maps embed + myappointments.app booking iframe
      "frame-src 'self' https://maps.google.com https://www.google.com https://www.myappointments.app",
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net",
      // Fonts served from node_modules (local)
      "font-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Add external image domains here if needed, e.g.:
      // { protocol: "https", hostname: "images.unsplash.com" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    return [
      // Former Pulsetherapy URLs: the one-day pop-up (18 Sept 2026), and the
      // brief "Rhythmic Compression Therapy" rename (11–16 Oct 2026). Keep these
      // permanent redirects: both URLs were advertised or indexed.
      // When the Wellness Services merge lands, repoint these destinations at
      // the new page rather than chaining a second redirect behind them.
      {
        source: "/pulsetherapy-pop-up-caboolture",
        destination: "/pulsetherapy-caboolture",
        permanent: true,
      },
      {
        source: "/rhythmic-compression-therapy-caboolture",
        destination: "/pulsetherapy-caboolture",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
