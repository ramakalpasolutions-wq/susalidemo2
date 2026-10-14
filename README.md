# SUSALI — Ombre Glass Healthcare Website

A **premium, responsive, static advertising website** with a soft Ombre Blue / lavender / dusty-pink palette, original CSS-based medical artwork, frosted-glass UI, subtle ambient animation, and interactive healthcare journey. Built using **Next.js App Router**, **JavaScript**, **Tailwind CSS 4**, **React Compiler**, and **Lucide React**. No login, admin panel, backend, or database.

## Quick start (Mac / VS Code)

```bash
cd susali-ombre-glass
npm install
npm run dev
```

Open http://localhost:3000. Requires Node.js 20.9+ (Node 22 recommended).

## Static production build

```bash
npm run build
```

The Next.js config uses `output: 'export'`; compiled static files appear in `out/`. Deploy to Vercel or another static hosting service.

## Pages

- `/` — Homepage, animated frosted-glass hero, service cards, and interactive care journey
- `/about` — Organization, mission and vision
- `/services` — Six service areas
- `/healthcare-network` — Network vision and collaboration
- `/faqs` — Filterable accordion FAQs
- `/contact` — Contact links and an enquiry message composer

## Files to customize

- `src/app/page.js` — Homepage content and sections
- `src/app/globals.css` — Original styling plus appended Ombre Blue glass design system
- `src/components/OmbreExperience.jsx` — Glass hero visual and interactive journey
- `src/components/Header.jsx` — Responsive sticky navigation
- `src/data/site.js` — Content, FAQ, actual contact details

## Important pre-launch checklist

1. Replace draft service descriptions and organizational claims with formally approved SUSALI wording.
2. Fill out real email, phone, address, WhatsApp and location in `src/data/site.js` (they are deliberately blank).
3. Replace draft logo treatment with the official logo and set your canonical domain if available.
4. Verify network partner information before using logos, counts or hospital names.
5. The contact form **does not send data**: until an email is configured, it copies the enquiry text; with an email configured it opens the visitor's email application. For actual automatic form delivery use a trusted hosted form endpoint.
6. Test `npm run build` and run accessibility/performance QA before production deployment.

## Build verification limitation

The project was prepared in an environment where npm registry DNS resolution was unavailable (`EAI_AGAIN`). Therefore dependency installation and the Next.js production build could **not** be completed there. Run `npm install && npm run build` in your development environment to verify compatibility.
