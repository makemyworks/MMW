# Alpha Zeta World

Full-service digital agency website. Built with React, TypeScript, Vite, Material UI and Framer Motion.

## Run locally
```bash
npm install
npm run dev        # development at http://localhost:5173
npm run build      # type-check + production build into /dist
npm run preview    # test the production build locally
```

## Deploy
- **Vercel / Netlify:** import the GitHub repo. Build command `npm run build`, output folder `dist`. `vercel.json` and `public/_redirects` already handle page refreshes.

## Where things live
- `src/data/services.ts` - all service categories, FAQs, team groups and page titles/descriptions. Edit text here.
- `src/pages/` - one file per page.
- `public/Images/` - site images. `public/images/testimonial-*.png` are placeholder avatars; replace with real photos using the same names.
- `public/sitemap.xml` and `public/robots.txt` - replace `alphazetaworld.com` if your domain differs.
- Contact form sends to `alphazetaworld@gmail.com` via formsubmit.co (confirm the first email once).
