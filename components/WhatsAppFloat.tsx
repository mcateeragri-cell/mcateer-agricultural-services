import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  const message = encodeURIComponent("Hi McAteer Agricultural Services, I’m looking for help with agricultural or plant machinery.");
  return <a className="whatsappFloat" href={`${site.whatsappHref}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Message McAteer Agricultural Services on WhatsApp"><MessageCircle size={22}/><span>WhatsApp</span></a>;
}
