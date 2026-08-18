import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, Wrench } from "lucide-react";
import ContactActions from "@/components/ContactActions";
import WorkGallery from "@/components/WorkGallery";
import type { WorkPhoto } from "@/lib/work-photos";

export default function ServicePage({eyebrow,title,intro,items,asideTitle,asideText,photos}:{eyebrow:string,title:string,intro:string,items:string[],asideTitle:string,asideText:string,photos?:WorkPhoto[]}){
  return <>
    <section className="pageHero"><div className="container pageHeroGrid"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{intro}</p><ContactActions compact/></div><div className="pageHeroBadge"><Wrench size={38}/><span>McAteer Agricultural Services Ltd</span><strong>Mobile engineering support</strong></div></div></section>
    <section><div className="container split serviceSplit"><div><div className="sectionTitle"><div className="eyebrow">What we can help with</div><h2>Practical engineering support built around uptime.</h2></div><div className="checklist serviceChecklist">{items.map(x=><div className="check" key={x}><CheckCircle2 size={20}/><span>{x}</span></div>)}</div></div><div className="featurePanel commercialPanel"><ClipboardCheck size={30}/><div className="eyebrow">Send the requirement</div><h3>{asideTitle}</h3><p>{asideText}</p><Link className="btn" href="/contact">Request support <ArrowRight size={17}/></Link></div></div></section>
    {photos?.length ? <WorkGallery photos={photos} limit={6} title="Recent work in this area." intro="Genuine McAteer Agricultural Services field and workshop photographs." showAllLink/> : null}
  </>;
}
