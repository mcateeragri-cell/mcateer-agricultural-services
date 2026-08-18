import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className="actions">
      <Link href="/contact" className="btn"><Send size={17}/>Request Support</Link>
      <a href={site.phoneHref} className="btn secondary"><Phone size={17}/>Call {site.phoneDisplay}</a>
      <a href={site.whatsappHref} className="btn secondary" target="_blank" rel="noreferrer"><MessageCircle size={17}/>WhatsApp</a>
      {!compact ? <Link href="/technician-cover" className="textLink">Dealer technician cover <span>→</span></Link> : null}
    </div>
  );
}
