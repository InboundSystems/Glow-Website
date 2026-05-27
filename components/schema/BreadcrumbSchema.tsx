const BASE_URL = "https://glowinwellness.com.au";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export default function BreadcrumbSchema({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
