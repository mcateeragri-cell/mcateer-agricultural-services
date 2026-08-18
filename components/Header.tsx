import Image from "next/image";
import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

export default function Header(){
  return <header className="nav"><div className="container navin">
    <Link href="/" className="brand brandLogo" aria-label={`${site.name} home`}>
      <Image src="/brand/mcateer-logo.png" alt="McAteer Agricultural Services" width={482} height={223} priority className="brandLogoImage"/>
    </Link>
    <nav className="links" aria-label="Main navigation">
      <Link href="/agricultural-repairs">Agricultural</Link>
      <Link href="/plant-repairs">Plant</Link>
      <Link href="/technician-cover">Technician Cover</Link>
      <Link href="/servicing-diagnostics">Servicing & Diagnostics</Link>
      <Link href="/about">About</Link>
      {site.phoneHref ? <a href={site.phoneHref} className="navPhone"><Phone size={16}/> Call</a> : null}
      <Link href="/contact" className="btn navCta"><Send size={16}/> Request Support</Link>
    </nav>
  </div></header>;
}
