import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CalendarClock, CheckCircle2, Clock3, Gauge, HardHat,
  MapPinned, ShieldCheck, Snowflake, Tractor, Wrench, Zap, Building2,
  Users, ClipboardCheck
} from "lucide-react";
import ContactActions from "@/components/ContactActions";
import WorkGallery from "@/components/WorkGallery";
import { workPhotos } from "@/lib/work-photos";

const services=[
 {icon:Tractor,title:"Agricultural Machinery",tag:"Farms & contractors",text:"Mobile repair and servicing for tractors, telehandlers, implements and agricultural machinery.",href:"/agricultural-repairs"},
 {icon:HardHat,title:"Plant Machinery",tag:"Plant & hire fleets",text:"Diagnostics, breakdown repair and planned maintenance for construction and plant equipment.",href:"/plant-repairs"},
 {icon:CalendarClock,title:"Technician Cover",tag:"Dealers & businesses",text:"Experienced engineering support for holidays, sickness, workload peaks and staff shortages.",href:"/technician-cover"},
 {icon:Wrench,title:"Servicing & Maintenance",tag:"Planned uptime",text:"Routine servicing and preventative maintenance designed to reduce avoidable downtime.",href:"/servicing-diagnostics"},
 {icon:Gauge,title:"Diagnostics & Electrical",tag:"Fault finding",text:"Structured diagnosis of electrical, electronic, hydraulic and mechanical machine faults.",href:"/servicing-diagnostics"},
 {icon:Snowflake,title:"Air Conditioning",tag:"Cab comfort",text:"Agricultural and plant air-conditioning diagnosis, service and repair support.",href:"/servicing-diagnostics"},
];

const sectors=[
  {icon:Tractor,title:"Farms & contractors",text:"Breakdowns, servicing and diagnostics where the machine is working."},
  {icon:Building2,title:"Dealerships",text:"Temporary technician capacity for workshop and field-service workloads."},
  {icon:HardHat,title:"Plant & hire",text:"Repair and maintenance support for working fleets and site machinery."},
  {icon:Users,title:"Engineering businesses",text:"Subcontract support when your own team is stretched."},
];

export default function Home(){return <>
<section className="hero">
  <div className="heroTexture" aria-hidden="true"><span/><span/><span/></div>
  <div className="container heroGrid">
    <div className="heroCopy">
      <div className="eyebrow"><span className="eyebrowLine"/> Agricultural & Plant Engineering</div>
      <h1>Machinery down?<br/><span>We get it moving.</span></h1>
      <p className="heroLead">Mobile repairs, servicing, diagnostics and flexible technician cover for agricultural and plant machinery — from urgent field breakdowns to dealer staffing support.</p>
      <ContactActions/>
      <div className="heroProof">
        <div><ShieldCheck size={19}/><span>Mobile engineering support</span></div>
        <div><Zap size={19}/><span>Breakdown & diagnostic focused</span></div>
        <div><CalendarClock size={19}/><span>Flexible technician cover</span></div>
      </div>
    </div>
    <div className="machinePanel brandedMachinePanel" aria-label="McAteer agricultural and plant engineering">
      <div className="machinePanelTop">
        <span className="panelKicker">AGRICULTURAL / PLANT ENGINEERING</span>
        <span className="statusDot">MOBILE FIELD SUPPORT</span>
      </div>
      <div className="machinePhoto">
        <Image src="/brand/machinery-hero.jpg" alt="Agricultural tractor and plant machinery" fill priority sizes="(max-width: 860px) 100vw, 44vw"/>
        <div className="machinePhotoShade"/>
        <div className="machinePhotoBrand"><Image src="/brand/mcateer-logo.png" alt="" width={482} height={223}/></div>
      </div>
      <div className="panelStats">
        <div><strong>01</strong><span>Mobile repair</span></div>
        <div><strong>02</strong><span>Diagnostics</span></div>
        <div><strong>03</strong><span>Tech cover</span></div>
      </div>
    </div>
  </div>
</section>

<section className="trustStrip"><div className="container trustGrid">
  <div><ShieldCheck size={22}/><span><strong>Commercial-minded support</strong><small>Clear communication and practical repair decisions.</small></span></div>
  <div><Clock3 size={22}/><span><strong>Downtime focused</strong><small>Work structured around getting machinery productive again.</small></span></div>
  <div><MapPinned size={22}/><span><strong>Mobile engineering</strong><small>Northern Ireland field service with wider contract support available.</small></span></div>
</div></section>

<section className="servicesSection"><div className="container">
  <div className="sectionHeadingRow"><div className="sectionTitle"><div className="eyebrow">Engineering services</div><h2>One point of contact when machinery or manpower becomes the problem.</h2></div><p className="sectionIntro">From a single breakdown to several weeks of dealership technician cover, McAteer Agricultural Services is built around useful, hands-on engineering support.</p></div>
  <div className="grid3">{services.map(({icon:Icon,...s},i)=><Link className="card serviceCard" href={s.href} key={s.title}><div className="serviceTop"><span className="serviceNumber">0{i+1}</span><Icon size={29}/></div><span className="cardTag">{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p><span className="more">Explore service <ArrowRight size={16}/></span></Link>)}</div>
</div></section>

<WorkGallery photos={workPhotos} limit={8} showAllLink title="Engineering work you can actually see." intro="These are genuine McAteer Agricultural Services jobs — field breakdowns, servicing, engine work, diagnostics and plant repairs."/>

<section className="band technicianBand"><div className="container split techSplit">
  <div>
    <div className="eyebrow">Technician cover</div>
    <div className="sectionTitle"><h2>When your workshop is a technician short, the workload does not disappear.</h2><p>Flexible agricultural and plant engineering cover for dealerships, hire companies, contractors and engineering businesses during holidays, sickness, recruitment gaps and busy periods.</p></div>
    <div className="checklist twoColChecks">{["Holiday and sickness cover","Busy-season workload support","Short-term subcontract engineering","Workshop-based support","Mobile field-service support","Defined dates or rolling requirements"].map(x=><div className="check" key={x}><CheckCircle2 size={19}/><span>{x}</span></div>)}</div>
    <div className="inlineActions"><Link href="/technician-cover" className="btn">Technician cover details <ArrowRight size={17}/></Link><Link href="/contact" className="textLink">Send dates & requirement →</Link></div>
  </div>
  <div className="coverCard">
    <div className="coverHeader"><div><span className="eyebrow">For service managers</span><h3>Temporary engineering capacity.</h3></div><CalendarClock size={34}/></div>
    <div className="coverRows">
      <div><span>01</span><p><strong>Tell us the dates</strong>Holiday, sickness, peak workload or a known staffing gap.</p></div>
      <div><span>02</span><p><strong>Tell us the work</strong>Brands, workshop/field service and the type of jobs expected.</p></div>
      <div><span>03</span><p><strong>Agree the cover</strong>A defined commercial requirement without adding permanent headcount.</p></div>
    </div>
  </div>
</div></section>

<section className="sectorsSection"><div className="container"><div className="sectionTitle"><div className="eyebrow">Who we support</div><h2>Built for businesses that cannot afford machinery sitting idle.</h2></div><div className="sectorGrid">{sectors.map(({icon:Icon,...s})=><div className="sector" key={s.title}><Icon size={25}/><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div></section>

<section className="processSection"><div className="container split processSplit"><div><div className="eyebrow">Simple enquiry process</div><div className="sectionTitle"><h2>Give us the useful information first.</h2><p>Machine details, location and symptoms for a repair — or dates, location and expected workload for technician cover.</p></div></div><div className="processSteps"><div><span>1</span><ClipboardCheck size={22}/><p><strong>Send the requirement</strong>Use the dedicated support form.</p></div><div><span>2</span><Gauge size={22}/><p><strong>Assess the job</strong>We review the machine, fault or staffing requirement.</p></div><div><span>3</span><Wrench size={22}/><p><strong>Arrange support</strong>Confirm the practical next step.</p></div></div></div></section>

<section className="finalCta"><div className="container"><div className="cta"><div><div className="eyebrow">Need engineering support?</div><h2>Tell us what is down — or where you are short.</h2><p>Machinery repairs, servicing, diagnostics, subcontract work or technician cover.</p></div><Link href="/contact" className="btn">Request Support <ArrowRight size={18}/></Link></div></div></section>
</>}
