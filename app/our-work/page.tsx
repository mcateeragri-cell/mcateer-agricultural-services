import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import WorkGallery from "@/components/WorkGallery";
import { workPhotos } from "@/lib/work-photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {title:"Recent Agricultural & Plant Engineering Work",description:"Genuine McAteer Agricultural Services field, workshop, servicing, breakdown and machinery repair photographs."};

export default function Page(){
  const message = encodeURIComponent("Hi McAteer Agricultural Services, I’ve seen your recent work and would like to discuss a job.");
  return <>
    <section className="pageHero"><div className="container pageHeroGrid"><div><div className="eyebrow">Genuine job photography</div><h1>Recent work.</h1><p>Field breakdowns, engine repairs, servicing, diagnostics, plant work and mobile engineering support — photographed on real jobs.</p></div><div className="pageHeroBadge"><MessageCircle size={38}/><span>Need something similar?</span><strong>Send the job details<br/>or message us on WhatsApp</strong></div></div></section>
    <WorkGallery photos={workPhotos} title="Real work. Real machinery." intro="Every photograph on this page is from McAteer Agricultural Services work — no stock photography and no AI-generated machinery."/>
    <section className="finalCta"><div className="container"><div className="cta"><div><div className="eyebrow">Need engineering support?</div><h2>Send us the machine and the problem.</h2><p>For a quick first contact, use the support form or WhatsApp us directly.</p></div><div className="inlineActions"><Link href="/contact" className="btn">Request support <ArrowRight size={18}/></Link><a href={`${site.whatsappHref}?text=${message}`} target="_blank" rel="noreferrer" className="btn secondary"><MessageCircle size={18}/>WhatsApp</a></div></div></div></section>
  </>;
}
