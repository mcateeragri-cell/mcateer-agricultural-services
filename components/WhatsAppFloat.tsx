import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsappFloat"
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${site.phoneName} at McAteer Agricultural Services`}
    >
      <MessageCircle size={22}/>
      <span>WhatsApp</span>
    </a>
  );
}
