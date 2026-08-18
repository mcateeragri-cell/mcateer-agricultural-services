# McAteer Agricultural Services Website — v4

Production website for **mcateeragservices.co.uk**.

This is a standalone Next.js application. It does not depend on AgriCore to run. The optional AgriCore enquiry webhook is a server-side integration only.

## v4 changes

- Dedicated commercial technician-cover page rather than a generic service template
- Technician-cover FAQs with structured FAQ data
- Smarter enquiry form that changes fields for machinery work vs technician cover
- Enquiry reference numbers
- UTM campaign, referrer and landing-page attribution captured for ad leads
- Additional enquiry fields for urgency, dates, work setting, brands and preferred contact method
- Improved form guidance and no false promise of availability
- ProfessionalService structured data added to the site
- Mobile and responsive styling extended for the new sections
- Existing v3 industrial/agricultural design retained
- Existing standalone AgriCore webhook architecture retained

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Production check:

```powershell
npm.cmd run build
```

## Before launch

Copy `.env.example` to `.env.local` and add the real McAteer phone, WhatsApp and email values.

The current header mark is intentionally a temporary **MA** engineering mark until the final McAteer logo artwork is supplied.

## AgriCore connection

When ready, set:

- `AGRICORE_ENQUIRY_WEBHOOK_URL`
- `AGRICORE_ENQUIRY_WEBHOOK_TOKEN`

The website will send the richer v4 enquiry payload, including a reference number and marketing attribution. If the webhook is absent, the website still runs independently.

## Phase 2 date requests
The public support form now captures requested attendance dates without presenting them as confirmed bookings. Breakdown requests support ASAP/today/specific-date preferences, planned work supports a preferred date and daypart, and technician-cover enquiries support start/end dates plus expected shift hours. These are sent through the existing `dates` field to AgriCore.
