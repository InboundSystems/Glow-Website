# Google Search Console — Setup Checklist

Follow these steps **after the site is deployed to glowinwellness.com.au**.

---

## Step 1 — Add the Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Choose **Domain** (not URL prefix) — enter `glowinwellness.com.au`
4. Google will show you a TXT record to add to your DNS

### Add the DNS TXT record (via your domain registrar)

- Log in to wherever your domain is registered (e.g. Crazy Domains, GoDaddy, Namecheap)
- Go to **DNS settings** for `glowinwellness.com.au`
- Add a new **TXT record**:
  - **Host/Name:** `@` (or leave blank — depends on registrar)
  - **Value:** the long string Google gives you (starts with `google-site-verification=...`)
  - **TTL:** 3600 (or default)
- Click Save. DNS propagation takes 5–60 minutes.
- Return to Search Console and click **Verify**

---

## Step 2 — Submit the Sitemap

Once verified:

1. In Search Console, click **Sitemaps** in the left sidebar
2. Enter `sitemap.xml` in the input field
3. Click **Submit**

Your sitemap URL is: `https://glowinwellness.com.au/sitemap.xml`

It covers these pages:
- `/` — Homepage (priority 1.0)
- `/services` — Services (priority 0.9)
- `/about` — About (priority 0.8)
- `/book` — Book (priority 0.8)
- `/what-to-expect` — What to Expect (priority 0.7)
- `/contact` — Contact (priority 0.6)

---

## Step 3 — Request Indexing for Key Pages

Don't wait for Google to crawl on its own — request indexing manually for the most important pages.

1. In Search Console, use the **URL Inspection** tool (top search bar)
2. Enter each URL below and click **Request Indexing**:
   - `https://glowinwellness.com.au`
   - `https://glowinwellness.com.au/services`
   - `https://glowinwellness.com.au/about`
   - `https://glowinwellness.com.au/book`

Do the homepage first — Google will follow internal links from there.

---

## Step 4 — Connect Google Analytics (Recommended)

1. Go to [Google Analytics](https://analytics.google.com) and create a **GA4 property** for `glowinwellness.com.au`
2. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
3. Add it to your site — options:
   - Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to your Vercel environment variables
   - Install `@next/third-parties` and use `<GoogleAnalytics gaId={...} />` in `app/layout.tsx`
4. Link GA4 to Search Console: in GA4 → Admin → Search Console Links

---

## Step 5 — Set Up Google Business Profile

This is **separate from Search Console** but equally important for local search rankings.

1. Go to [Google Business Profile](https://business.google.com)
2. Search for "Glow in Wellness" — claim the listing if it exists, or create one
3. Verify ownership (usually by postcard or phone)
4. Complete the profile:
   - Business name: **Glow in Wellness**
   - Category: **Massage Therapist** (primary), **Bowen Therapy** (additional)
   - Address: your exact street address in Caboolture
   - Phone: your business number
   - Website: `https://glowinwellness.com.au`
   - Hours: set your exact opening hours
   - Services: add Remedial Massage, Bowen Therapy, Relaxation Massage, etc.
   - Description: mention HICAPS, Caboolture location, Gloria Mullaly by name
5. Add photos — exterior, treatment room, Gloria's headshot
6. Enable messaging so clients can contact you via Google Maps

---

## Step 6 — Monitor Rich Results

After indexing, check whether your structured data is being picked up:

1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter `https://glowinwellness.com.au` — verify FAQ rich results are detected
3. Enter `https://glowinwellness.com.au/what-to-expect` — verify FAQ schema
4. In Search Console → **Search Appearance** → **Rich Results** — monitor for errors

---

## Step 7 — Watch for Crawl Errors

In the first 2–4 weeks after launch:

- Check **Coverage** in Search Console for any 404 or 5xx errors
- Check **Core Web Vitals** — aim for all green (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Check **Mobile Usability** — all pages should be mobile-friendly

---

## Checklist Summary

| Task | Done |
|------|------|
| Domain property added to Search Console | ☐ |
| DNS TXT record added and verified | ☐ |
| Sitemap submitted | ☐ |
| Homepage indexing requested | ☐ |
| /services indexing requested | ☐ |
| /about indexing requested | ☐ |
| /book indexing requested | ☐ |
| Google Analytics GA4 connected | ☐ |
| GA4 linked to Search Console | ☐ |
| Google Business Profile claimed & completed | ☐ |
| Business photos uploaded | ☐ |
| Rich results test passed | ☐ |
