# Zaynab Ragab — AI-Powered QA Consulting (Next.js)

Setup:
1. `npm install`
2. `cp .env.example .env.local` and fill in values:
   - NEXT_PUBLIC_SITE_URL (your real domain)
   - NEXT_PUBLIC_BOOKING_URL (Calendly / Cal.com link; all "Book" buttons use it. Empty = they scroll to the contact form)
   - NEXT_PUBLIC_PAYMENT_URL (Paymob / Fawry hosted payment link for the 300 EGP consultation; empty = normal booking button)
   - NEXT_PUBLIC_WHATSAPP_NUMBER (e.g. 201001234567; empty = no WhatsApp buttons)
   - CONTACT_WEBHOOK_URL **or** RESEND_API_KEY + CONTACT_TO_EMAIL + CONTACT_FROM_EMAIL (where form leads go)
3. `npm run dev` → http://localhost:3000
4. Deploy: push to GitHub and import into Vercel (add the same env vars).

Edit content in `lib/site.ts` (services, copy, consultation price).
