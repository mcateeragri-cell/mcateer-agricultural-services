"use client";
import { useEffect, useState } from "react";
import { Building2, CalendarClock, MapPinned, Tractor, Wrench } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

type Attribution = {
  sourcePage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

const technicianTypes = new Set(["Technician cover", "Subcontract engineering support"]);

export default function Contact(){
  const [status,setStatus]=useState<Status>("idle");
  const [error,setError]=useState("");
  const [reference,setReference]=useState("");
  const [type,setType]=useState("Machinery repair / breakdown");
  const [breakdownTiming,setBreakdownTiming]=useState("ASAP");
  const [breakdownDate,setBreakdownDate]=useState("");
  const [preferredDate,setPreferredDate]=useState("");
  const [daypart,setDaypart]=useState("Any time");
  const [coverStart,setCoverStart]=useState("");
  const [coverEnd,setCoverEnd]=useState("");
  const [coverHours,setCoverHours]=useState("");
  const [attribution,setAttribution]=useState<Attribution>({sourcePage:"",referrer:"",utmSource:"",utmMedium:"",utmCampaign:""});
  const isTechnician = technicianTypes.has(type);
  const isBreakdown = type === "Machinery repair / breakdown";
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;

  const requestedDates = isTechnician
    ? [coverStart ? `Start: ${coverStart}` : "", coverEnd ? `End: ${coverEnd}` : "", coverHours ? `Hours/shift: ${coverHours}` : ""].filter(Boolean).join(" | ")
    : isBreakdown
      ? breakdownTiming === "Choose date"
        ? (breakdownDate ? `Requested attendance: ${breakdownDate}` : "")
        : `Requested attendance: ${breakdownTiming}`
      : preferredDate
        ? `Preferred date: ${preferredDate} | Time: ${daypart}`
        : "";

  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    if(params.get("service") === "technician-cover") setType("Technician cover");
    setAttribution({
      sourcePage:window.location.pathname,
      referrer:document.referrer,
      utmSource:params.get("utm_source") || "",
      utmMedium:params.get("utm_medium") || "",
      utmCampaign:params.get("utm_campaign") || "",
    });
  },[]);

  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setStatus("sending"); setError(""); setReference("");
    const form=e.currentTarget; const f=new FormData(form);
    try{
      const response=await fetch("/api/enquiries",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object.fromEntries(f.entries()))});
      const data=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(data.error || "Unable to send enquiry.");
      setReference(data.reference || "");
      setStatus("sent"); form.reset(); setType("Machinery repair / breakdown");
      setBreakdownTiming("ASAP"); setBreakdownDate(""); setPreferredDate(""); setDaypart("Any time"); setCoverStart(""); setCoverEnd(""); setCoverHours("");
    }catch(err){setStatus("error");setError(err instanceof Error ? err.message : "Unable to send enquiry.");}
  }

  return <>
    <section className="pageHero"><div className="container pageHeroGrid"><div><div className="eyebrow">Request engineering support</div><h1>Tell us what is down — or where you are short.</h1><p>Use one form for machinery repairs, servicing, diagnostics, subcontract work or temporary technician cover.</p></div><div className="pageHeroBadge"><Wrench size={38}/><span>Useful details = faster assessment</span><strong>Machine • location • fault<br/>or dates • workload • cover</strong></div></div></section>
    <section><div className="container split serviceSplit">
      <form className="form" onSubmit={submit}>
        <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
        <input type="hidden" name="sourcePage" value={attribution.sourcePage}/>
        <input type="hidden" name="referrer" value={attribution.referrer}/>
        <input type="hidden" name="utmSource" value={attribution.utmSource}/>
        <input type="hidden" name="utmMedium" value={attribution.utmMedium}/>
        <input type="hidden" name="utmCampaign" value={attribution.utmCampaign}/>
        <input type="hidden" name="dates" value={requestedDates}/>

        <div className="row2"><label><span className="label">Your name *</span><input className="input" name="name" required autoComplete="name"/></label><label><span className="label">Company / Farm</span><input className="input" name="company" autoComplete="organization"/></label></div>
        <div className="row2"><label><span className="label">Phone *</span><input className="input" name="phone" required type="tel" autoComplete="tel"/></label><label><span className="label">Email</span><input className="input" name="email" type="email" autoComplete="email"/></label></div>
        <div className="row2"><label><span className="label">What do you need?</span><select className="select" name="type" value={type} onChange={(e)=>setType(e.target.value)}><option>Machinery repair / breakdown</option><option>Routine servicing / maintenance</option><option>Diagnostics / electrical</option><option>Air conditioning</option><option>Technician cover</option><option>Subcontract engineering support</option><option>Other</option></select></label><label><span className="label">Location *</span><input className="input" name="location" required placeholder="Town / area" autoComplete="address-level2"/></label></div>

        {isTechnician ? <>
          <div className="formModeBanner"><CalendarClock size={18}/><span><strong>Technician-cover enquiry</strong> Choose the dates you need cover for. These are requested dates only and are confirmed after we review availability.</span></div>
          <div className="row2">
            <label><span className="label">Cover start date *</span><input className="input" type="date" min={today} value={coverStart} onChange={(e)=>{setCoverStart(e.target.value); if(coverEnd && e.target.value > coverEnd) setCoverEnd(e.target.value);}} required/></label>
            <label><span className="label">Cover end date *</span><input className="input" type="date" min={coverStart || today} value={coverEnd} onChange={(e)=>setCoverEnd(e.target.value)} required/></label>
          </div>
          <div className="row2"><label><span className="label">Work setting</span><select className="select" name="environment" defaultValue="Workshop & field service"><option>Workshop & field service</option><option>Workshop based</option><option>Field service</option><option>Site / fleet support</option><option>Not sure yet</option></select></label><label><span className="label">Expected hours / shift pattern</span><input className="input" value={coverHours} onChange={(e)=>setCoverHours(e.target.value)} placeholder="e.g. 8am–5pm / 5 days / overtime possible"/></label></div>
          <label><span className="label">Machinery brands / type of work</span><input className="input" name="brands" placeholder="e.g. New Holland, JCB, mixed agri & plant / workshop and field jobs"/></label>
        </> : <>
          <div className="formModeBanner"><Tractor size={18}/><span><strong>Machinery-support enquiry</strong> Add the machine, symptoms and urgency. Fault codes or useful observations can go in the details box.</span></div>
          <div className="row2"><label><span className="label">Machine / fleet *</span><input className="input" name="machine" required placeholder="e.g. New Holland T7.200 / JCB telehandler"/></label><label><span className="label">Urgency</span><select className="select" name="urgency" defaultValue="Machine down / urgent"><option>Machine down / urgent</option><option>Working but fault present</option><option>Planned repair</option><option>Routine service</option><option>Quote / advice required</option></select></label></div>

          {isBreakdown ? <div className="bookingPanel">
            <div className="bookingPanelTitle"><CalendarClock size={18}/><div><strong>When do you need us?</strong><span>Requested attendance only — we will confirm availability.</span></div></div>
            <div className="row2">
              <label><span className="label">Attendance preference *</span><select className="select" value={breakdownTiming} onChange={(e)=>setBreakdownTiming(e.target.value)}><option>ASAP</option><option>Today</option><option>Choose date</option></select></label>
              {breakdownTiming === "Choose date" ? <label><span className="label">Preferred date *</span><input className="input" type="date" min={today} value={breakdownDate} onChange={(e)=>setBreakdownDate(e.target.value)} required/></label> : <div className="dateHint"><strong>{breakdownTiming}</strong><span>We’ll contact you to confirm attendance.</span></div>}
            </div>
          </div> : <div className="bookingPanel">
            <div className="bookingPanelTitle"><CalendarClock size={18}/><div><strong>Preferred date</strong><span>Choose when would suit you best. This does not confirm a booked slot.</span></div></div>
            <div className="row2">
              <label><span className="label">Preferred date</span><input className="input" type="date" min={today} value={preferredDate} onChange={(e)=>setPreferredDate(e.target.value)}/></label>
              <label><span className="label">Preferred time</span><select className="select" value={daypart} onChange={(e)=>setDaypart(e.target.value)}><option>Any time</option><option>Morning</option><option>Afternoon</option></select></label>
            </div>
          </div>}
        </>}

        <label><span className="label">Job / cover details *</span><textarea className="textarea" name="message" required placeholder={isTechnician ? "Expected workload, workshop or field-service requirement, machinery type and anything else useful." : "Symptoms, fault codes, what happened before the fault and any checks already carried out."}/></label>
        <div className="row2"><label><span className="label">Preferred contact</span><select className="select" name="preferredContact" defaultValue="Phone call"><option>Phone call</option><option>WhatsApp</option><option>Email</option><option>No preference</option></select></label><div className="formSubmitNote">Submitting an enquiry does not confirm attendance or technician availability. We will respond to agree the next step.</div></div>
        <button className="btn" type="submit" disabled={status==="sending"}>{status==="sending" ? "Sending…" : "Send support request"}</button>
        {status==="sent"&&<div className="success enquirySuccess"><div><strong>Enquiry received.</strong>{reference ? <span> Reference: {reference}</span> : null}<br/>We will use the contact details supplied to respond.</div><a className="successWhatsapp" target="_blank" rel="noreferrer" href={`${site.whatsappHref}?text=${encodeURIComponent(`Hi McAteer Agricultural Services, I’ve just submitted enquiry ${reference || ""} and would like to send photos or more information.`)}`}>Send photos on WhatsApp</a></div>}
        {status==="error"&&<p className="error">{error}</p>}
        <p className="notice">By submitting this form you agree that McAteer Agricultural Services Ltd may use these details to respond to your enquiry. See the Privacy Policy for more information.</p>
      </form>
      <div className="featurePanel commercialPanel">
        <div className="eyebrow">What to include</div><h3>Give us enough detail to understand the requirement.</h3><p>For a breakdown, machine identity and fault symptoms matter. For technician cover, dates, location and expected work are the fastest way to assess fit.</p>
        <div className="contactPanelList">
          <div><span><Tractor size={13}/> Machinery work</span><strong>Machine • fault • location • urgency</strong></div>
          <div><span><CalendarClock size={13}/> Technician cover</span><strong>Dates • location • brands • type of work</strong></div>
          <div><span><Building2 size={13}/> Commercial work</span><strong>Company • contact • scope • expected duration</strong></div>
          <div><span><MapPinned size={13}/> Coverage</span><strong>{site.serviceArea}</strong></div>
        </div>
        <p><strong>Website:</strong> {site.domain}</p>
      </div>
    </div></section>
  </>;
}
