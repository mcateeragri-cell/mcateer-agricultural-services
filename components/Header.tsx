import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="nav">
      <div className="container navin">
        <Link href="/" className="brand brandLogo" aria-label={`${site.name} home`}>
          <Image
            src="/brand/mcateer-logo-header.png"
            alt="McAteer Agricultural Services"
            width={1200}
            height={432}
            priority
            className="brandLogoImage"
          />
        </Link>

        <nav className="links" aria-label="Main navigation">
          <Link href="/agricultural-repairs">Agricultural</Link>
          <Link href="/plant-repairs">Plant</Link>
          <Link href="/technician-cover">Technician Cover</Link>
          <Link href="/servicing-diagnostics">Servicing & Diagnostics</Link>
          <Link href="/our-work">Our Work</Link>
          <Link href="/about">About</Link>

          <a
            href={site.phoneHref}
            className="navPhone"
            aria-label={`Call ${site.phoneName} on ${site.phoneDisplay}`}
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="navWhatsapp"
            aria-label={`WhatsApp ${site.phoneName} at McAteer Agricultural Services`}
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <Link href="/contact" className="btn navCta">
            <Send size={16} />
            Request Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
