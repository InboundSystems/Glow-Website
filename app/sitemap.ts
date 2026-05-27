import type { MetadataRoute } from "next";

const BASE_URL = "https://glowinwellness.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Category hub
    {
      url: `${BASE_URL}/massage-caboolture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    // Primary money keyword
    {
      url: `${BASE_URL}/remedial-massage-caboolture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    // Uncontested pages
    {
      url: `${BASE_URL}/bowen-therapy-caboolture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/scar-tissue-therapy-caboolture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Remaining service pages
    {
      url: `${BASE_URL}/pregnancy-massage-caboolture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/sports-massage-caboolture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/lymphatic-drainage-caboolture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Supporting pages
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/what-to-expect`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
