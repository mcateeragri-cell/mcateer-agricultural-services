import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CalendarClock, CheckCircle2, ClipboardCheck, HardHat, MapPinned, Users, Wrench } from "lucide-react";
import ContactActions from "@/components/ContactActions";
import FAQ from "@/components/FAQ";
import WorkGallery from "@/components/WorkGallery";
import { photosFor } from "@/lib/work-photos";

export const metadata: Metadata = {
  title: "Agricultural & Plant Technician Cover",
  description: "Flexible agricultural and plant technician cover for dealership holidays, sickness, staffing gaps, busy periods and subcontract engineering support.",
};

const useCases=[
  ["Holiday cover","Keep booked workshop and field-service work moving while a technician is away."],
  ["Sickness / absence","Add temporary capacity when an unexpected absence puts pressure on the service department."],
  ["Busy periods","Bring in engineering support when seasonal workload exceeds the capacity of the permanent team."],
  ["Recruitment gaps","Bridge a short-term gap while a permanent technician role is being filled."],
];

const faqs=[
  {question:"Who is technician cover aimed at?",answer:"Dealerships, plant and hire businesses, contractors, fleets and engineering companies that need temporary agricultural or plant engineering capacity."},
  {question:"Can cover be workshop based or mobile?",answer:"Yes. Enquiries can be for workshop work, field service, site support or a mixture. Include the expected setting and workload when you enquire."},
  {question:"Can we request specific dates?",answer:"Yes. Send the dates or expected duration, location and type of work required. Availability is confirmed separately after the requirement has been reviewed."},
  {question:"Does an online enquiry confirm cover?",answer:"No. The form starts the conversation. Dates, commercial terms, location and scope are agreed before any cover is confirmed."},
];

export default function Page(){return <>
  <section className="pageHero technicianHero"><div className="container pageHeroGrid"><div><div className="eyebrow">Dealer & business support</div><h1>Agricultural & plant technician cover.</h1><p>Flexible engineering support when holidays, sickness, staffing gaps or workload peaks leave your workshop or field-service team short.</p><ContactActions compact/></div><div className="pageHeroBadge"><CalendarClock size={38}/><span>Temporary engineering capacity</span><strong>Workshop • field service<br/>planned dates • short-term gaps</strong></div></div></section>

  <section><div className="container"><div className="sectionHeadingRow"><div className="sectionTitle"><div className="eyebrow">When extra capacity is needed</div><h2>Cover the gap without pretending the workload can wait.</h2></div><p className="sectionIntro">The service is designed around temporary, defined engineering requirements — not permanent recruitment. Tell us where the pressure is and what type of work needs covered.</p></div><div className="coverUseGrid">{useCases.map(([title,text],i)=><div className="coverUse" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

  <section className="band"><div className="container split techDetailSplit"><div><div className="eyebrow">What cover can include</div><div className="sectionTitle"><h2>Workshop, field service or fleet support.</h2><p>The exact arrangement depends on the dates, location, machinery and work expected.</p></div><div className="checklist twoColChecks">{["Workshop-based repair work","Mobile field-service support","Agricultural machinery","Plant machinery","Planned service workloads","Fault finding and repair work","Busy-season assistance","Defined short-term subcontract support"].map(x=><div className="check" key={x}><CheckCircle2 size={19}/><span>{x}</span></div>)}</div></div><div className="coverCard"><div className="coverHeader"><div><span className="eyebrow">Useful enquiry details</span><h3>Send the information a service manager would want.</h3></div><ClipboardCheck size={34}/></div><div className="coverRows"><div><span>01</span><p><strong>Dates & location</strong>When the cover is required and where the work is based.</p></div><div><span>02</span><p><strong>Machinery & brands</strong>The type of agricultural or plant equipment likely to be worked on.</p></div><div><span>03</span><p><strong>Expected workload</strong>Workshop, field service, planned servicing, breakdown work or a mixture.</p></div></div><Link href="/contact?service=technician-cover" className="btn coverBtn">Send technician-cover enquiry <ArrowRight size={17}/></Link></div></div></section>

  <section className="sectorsSection"><div className="container"><div className="sectionTitle"><div className="eyebrow">Commercial support</div><h2>Useful across more than one type of operation.</h2></div><div className="sectorGrid"><div className="sector"><Building2 size={25}/><h3>Dealerships</h3><p>Extra workshop or field-service capacity around planned or unexpected staff gaps.</p></div><div className="sector"><HardHat size={25}/><h3>Plant & hire fleets</h3><p>Temporary engineering support when fleet maintenance and repair demand increases.</p></div><div className="sector"><Users size={25}/><h3>Engineering businesses</h3><p>Subcontract support when your own technicians are committed elsewhere.</p></div><div className="sector"><MapPinned size={25}/><h3>Wider contract work</h3><p>Northern Ireland base with wider Ireland and Great Britain contract enquiries considered.</p></div></div></div></section>

  <WorkGallery photos={photosFor("Workshop","Agricultural","Plant")} limit={6} title="Hands-on support, not agency staffing." intro="Real field and workshop work from McAteer Agricultural Services — the same practical engineering approach brought into temporary technician cover." showAllLink/>

  <FAQ title="Technician-cover questions" intro="The important point is that an enquiry is a request for availability and scope — not an automatic booking." items={faqs} structuredData/>

  <section className="finalCta"><div className="container"><div className="cta"><div><div className="eyebrow">Have dates in mind?</div><h2>Send the cover requirement.</h2><p>Dates, location, machinery and expected work are enough to start the conversation.</p></div><Link href="/contact?service=technician-cover" className="btn">Request technician cover <ArrowRight size={18}/></Link></div></div></section>
</>}
