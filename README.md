# Rajwana & Rajwana website

Next.js 15 + Tailwind CSS 4 site for rajwanaandrajwana.com.
Section layouts follow Watermelon UI blocks; animation uses Motion Primitives (MIT, see `src/components/motion-primitives/LICENCE.md`).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Edit the content

All text lives in **`src/content/site.ts`**: firm details, practice areas, stats, team, FAQ, articles.
Search that file for `TODO` and replace every placeholder with verified information before launch:

- [ ] Founding year and office hours
- [ ] Stats (or delete the `stats` array and remove `<Stats />` from `src/app/page.tsx`)
- [ ] Team: Asif Rajwana's full name, enrolment and bio; confirm Sohail's and Saleem's qualifications (marked `confirm`)
- [ ] Portraits in `public/team/<slug>.jpg`, then set `photo` for each lawyer
- [ ] Clients have agreed to be named (`clients` in `site.ts`)
- [ ] Whether the senior clerk's mobile should be public (Lahore office)
- [ ] Insights articles (or remove `<Insights />` until real articles exist)
- [ ] Courts list in `forums` covers all four offices
- [ ] Partners approve the privacy notice, disclaimer and terms (`src/content/legal.ts`), including the 12-month retention period

## Pages

| Route | Source |
|---|---|
| `/` | `src/app/page.tsx` (sections in `src/components/sections/`) |
| `/practice/[slug]` | one page per practice area, generated from `practiceAreas` |
| `/team/[slug]` | profile page for each lawyer who has a `bio` |
| `/api/contact` | consultation form handler |
| `/privacy`, `/disclaimer`, `/terms` | legal pages, text in `src/content/legal.ts` |
| `/opengraph-image` | link preview card for WhatsApp and LinkedIn |
| `/sitemap.xml`, `/robots.txt` | generated |

## Contact form

The form sends email through [Resend](https://resend.com). In Vercel → Project → Settings → Environment Variables, add:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | API key from Resend |
| `CONTACT_TO` | inbox that receives requests |
| `CONTACT_FROM` | verified sender, e.g. `Website <website@rajwanaandrajwana.com>` |

Until these are set, the form tells visitors it is not connected and shows the firm email instead.

## Deploy

Push to GitHub, import the repo in Vercel, then point the `rajwanaandrajwana.com` domain at the Vercel project (Vercel shows the DNS records to add at the domain registrar).
