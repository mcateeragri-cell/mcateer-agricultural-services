import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Image
            src="/brand/mcateer-logo-footer.png"
            alt="McAteer Agricultural Services"
            width={1500}
            height={539}
            className="footerLogo"
          />
          <p>Mobile agricultural and plant machinery repair, servicing, diagnostics and flexible technician support.</p>
          <p className="smallText">{site.serviceArea}</p>
        </div>

        <div>
          <strong className="footerTitle">Engineering</strong>
          <p>
            <Link href="/agricultural-repairs">Agricultural repairs</Link><br />
            <Link href="/plant-repairs">Plant repairs</Link><br />
            <Link href="/servicing-diagnostics">Servicing & diagnostics</Link><br />
            <Link href="/technician-cover">Technician cover</Link><br />
            <Link href="/our-work">Recent work</Link>
          </p>
        </div>

        <div>
          <strong className="footerTitle">Contact</strong>
          <div className="footerContacts">
            <a href={site.phoneHref}><Phone size={15} />{site.phoneDisplay}</a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={15} />WhatsApp {site.phoneDisplay}</a>
            <a href={site.secondaryPhoneHref}><Phone size={15} />{site.secondaryPhoneDisplay}</a>
            <a href={site.secondaryWhatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={15} />WhatsApp {site.secondaryPhoneDisplay}</a>
            <a href={`mailto:${site.email}`}><Mail size={15} />{site.email}</a>
          </div>
          <p className="smallText">{site.location}</p>
          <p className="smallText"><Link href="/contact">Request support</Link><br /><Link href="/privacy">Privacy</Link> · <Link href="/cookies">Cookies</Link></p>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} {site.name}. {site.domain} · All rights reserved.</div>
    </footer>
  );
}
