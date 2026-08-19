function cleanWhatsAppBase(value: string) {
  return value.trim().split("?")[0].replace(/\/+$/, "");
}

function withWhatsAppMessage(base: string, message: string) {
  return `${cleanWhatsAppBase(base)}?text=${encodeURIComponent(message)}`;
}

const primaryWhatsAppBase = cleanWhatsAppBase(
  process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "https://wa.me/447928744939",
);

const officeWhatsAppBase = cleanWhatsAppBase(
  process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP_2 || "https://wa.me/447517359358",
);

export const site = {
  name: "McAteer Agricultural Services Ltd",
  shortName: "McAteer Agricultural",
  domain: "mcateeragservices.co.uk",
  url: "https://mcateeragservices.co.uk",

  phoneName: "James",
  phoneDisplay:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY || "07928 744939",
  phoneHref:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_HREF || "tel:+447928744939",
  whatsappBase: primaryWhatsAppBase,
  whatsappHref: withWhatsAppMessage(
    primaryWhatsAppBase,
    "Hi McAteer Agricultural Services, I need engineering support.",
  ),

  secondaryPhoneName: "Office",
  secondaryPhoneDisplay:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_2_DISPLAY || "07517 359358",
  secondaryPhoneHref:
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_2_HREF || "tel:+447517359358",
  secondaryWhatsappBase: officeWhatsAppBase,
  secondaryWhatsappHref: withWhatsAppMessage(
    officeWhatsAppBase,
    "Hi McAteer Agricultural Services, I would like to contact the office.",
  ),

  email:
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "mcateeragri@gmail.com",

  location: "Northern Ireland",
  serviceArea:
    "Northern Ireland • Ireland • Great Britain for selected contract support",
};

export function jamesWhatsApp(message?: string) {
  return message
    ? withWhatsAppMessage(site.whatsappBase, message)
    : site.whatsappHref;
}

export function officeWhatsApp(message?: string) {
  return message
    ? withWhatsAppMessage(site.secondaryWhatsappBase, message)
    : site.secondaryWhatsappHref;
}
