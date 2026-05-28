import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: {
    default: "Glow in Wellness | Remedial Massage & Bowen Therapy Caboolture",
    template: "%s | Glow in Wellness",
  },
  description:
    "Remedial massage and Bowen therapy in Caboolture, QLD. HICAPS on-the-spot health fund rebates available. Book with Gloria Mullaly today.",
  keywords: [
    "remedial massage Caboolture",
    "Bowen therapy Caboolture",
    "massage therapist Caboolture",
    "HICAPS massage",
    "health fund massage Queensland",
    "remedial massage QLD",
  ],
  openGraph: {
    siteName: "Glow in Wellness",
    locale: "en_AU",
    type: "website",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Glow in Wellness",
  url: "https://glowinwellness.com.au",
  description:
    "Remedial massage and Bowen therapy in Caboolture, QLD. HICAPS health fund rebates on the spot.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MassageTherapist"],
  name: "Glow in Wellness Massage and Bowen Therapy",
  description:
    "Remedial massage and Bowen therapy in Caboolture, Queensland. On-the-spot HICAPS health fund rebates available.",
  url: "https://glowinwellness.com.au",
  telephone: "+61415020877",
  email: "info@glowinwellness.com.au",
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, HICAPS",
  currenciesAccepted: "AUD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 1 R1, 20 King Street",
    addressLocality: "Caboolture",
    addressRegion: "QLD",
    postalCode: "4510",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.0659,
    longitude: 152.9522,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -27.0659,
      longitude: 152.9522,
    },
    geoRadius: "30000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Massage & Therapy Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remedial Massage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bowen Therapy",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/glowinwellness",
    "https://www.instagram.com/glowinwellness",
    "https://www.linkedin.com/company/glowinwellness",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-cream pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
