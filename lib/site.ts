export const site = {
  name: "McAteer Agricultural Services Ltd",
  shortName: "McAteer Agricultural",
  domain: "mcateeragservices.co.uk",
  url: "https://mcateeragservices.co.uk",

  // Primary public contact - James.
  phoneName: "James",
  phoneDisplay:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY || "07928 744939",
  phoneHref:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_HREF || "tel:+447928744939",
  whatsappHref:
    process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP ||
    "https://wa.me/447928744939?text=Hi%20McAteer%20Agricultural%20Services%2C%20I%20need%20engineering%20support.",

  // Office contact - also available on WhatsApp.
  secondaryPhoneName: "Office",
  secondaryPhoneDisplay:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_2_DISPLAY || "07517 359358",
  secondaryPhoneHref:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_2_HREF || "tel:+447517359358",
  secondaryWhatsappHref:
    process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP_2 ||
    "https://wa.me/447517359358?text=Hi%20McAteer%20Agricultural%20Services%2C%20I%20need%20engineering%20support.",

  email:
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "mcateeragri@gmail.com",

  location: "Northern Ireland",
  serviceArea:
    "Northern Ireland • Ireland • Great Britain for selected contract support",
};