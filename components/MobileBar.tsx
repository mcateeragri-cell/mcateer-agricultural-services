import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

export default function MobileBar() {
  return (
    <div className="mobileBar" aria-label="Quick contact">
      {site.phoneHref ? <a href={site.phoneHref}><Phone size={17}/><span>Call</span></a> : null}
      {site.whatsappHref ? <a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17}/><span>WhatsApp</span></a> : null}
      <Link href="/contact"><Send size={17}/><span>Request support</span></Link>
    </div>
  );
}
