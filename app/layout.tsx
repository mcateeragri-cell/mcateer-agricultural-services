import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "McAteer Agricultural Services Ltd | Agricultural & Plant Engineering", template: "%s | McAteer Agricultural Services Ltd" },
  description: "Mobile agricultural and plant machinery repairs, servicing, diagnostics and flexible technician cover for farms, contractors, dealerships, hire fleets and plant operators.",
  alternates: { canonical: "/" },
  icons: { icon: "/brand/mcateer-icon.png", apple: "/brand/mcateer-icon.png" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "McAteer Agricultural Services Ltd",
    description: "Agricultural & plant machinery repairs, servicing, diagnostics and technician support.",
    images: [{ url: "/brand/machinery-hero.jpg", width: 1254, height: 665, alt: "McAteer Agricultural Services - agricultural and plant engineering" }],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    areaServed: ["Northern Ireland", "Ireland", "Great Britain"],
    serviceType: [
      "Agricultural machinery repair",
      "Plant machinery repair",
      "Machinery servicing and diagnostics",
      "Agricultural and plant technician cover",
    ],
    telephone: site.phoneDisplay,
    email: site.email,
    contactPoint: [
      { "@type": "ContactPoint", telephone: site.phoneDisplay, contactType: "customer service" },
      { "@type": "ContactPoint", telephone: site.secondaryPhoneDisplay, contactType: "customer service" },
    ],
  };

  return <html lang="en-GB"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(businessSchema)}}/>
    <Header/><main>{children}</main><Footer/><MobileBar/>
  </body></html>;
}
