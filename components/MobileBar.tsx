import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

export default function MobileBar() {
  return (
    <div className="mobileBar" aria-label="Quick contact">
      <a href={site.phoneHref} aria-label={`Call ${site.phoneName}`}>
        <Phone size={17}/>
        <span>Call</span>
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${site.phoneName}`}
      >
        <MessageCircle size={17}/>
        <span>WhatsApp</span>
      </a>
      <Link href="/contact">
        <Send size={17}/>
        <span>Request support</span>
      </Link>
    </div>
  );
}
