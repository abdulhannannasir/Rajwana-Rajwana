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

- [ ] Office hours
- [ ] Founding year: the site now says 1975 (the firm's Aug 2024 profile and Asif Rajwana's CV), shown in the stats card, the About section and the site description. The founder's own bio says he joined the judiciary in 1987 and founded the firm after resigning, which reads as later, so confirm with the partners.
- [x] Stats (years since `founded`, 100+ clients, 20 lawyers) and the About section, from the firm's profiles
- [ ] Older profiles (Aug 2024, Aug 2026) list lawyers the Oct 2026 profile drops: Ahtesham Ud Din Khan, Nouman Sawar Ghuman, Barrister Muhammad Ibtasam Ahmad, Rana Ahsan Rehman, Rana Shehriyar and Ashar Raza. They are not on the site; add them to `team` if they are still with the firm.
- [x] Team, from the profile and CVs. Still to confirm: Saleem's qualifications (marked `confirm`)
- [ ] Rustam Khan Padhiar, Hamza Khakwani, Malik M. Saleem Rajwana and M. Shakeeb Arshad have no CV, so they appear as name and enrolment only. Add a `bio` to give them a profile page.
- [ ] Portraits in `public/team/<slug>.jpg`, then set `photo` for each lawyer
- [ ] Clients have agreed to be named on the website, not just in the profile (`clients` in `site.ts`)
- [ ] Practice areas "Procurement" and "Insurance & regulatory" are not in the Oct 2026 profile; keep or drop them
- [ ] Whether the senior clerk's mobile should be public (Lahore office)
- [ ] Insights articles (or remove `<Insights />` until real articles exist)
- [x] Courts list in `forums`, from the profile and CVs
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

The Vercel project `rajwana-site` is connected to this repository. Every push to `main`
builds and deploys automatically to https://rajwana-site.vercel.app (about two minutes).

### Going live on rajwanaandrajwana.com

1. Vercel → rajwana-site → Settings → Domains → add `rajwanaandrajwana.com` and `www.rajwanaandrajwana.com`.
2. At the domain registrar, add the DNS records Vercel shows (usually an `A` record and a `CNAME` for `www`).
3. Vercel → Settings → Environment Variables → add `SITE_LIVE` = `true` (Production), then redeploy.
   Until this is set, the site tells search engines not to index it.
