import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  ShieldCheck,
  Tractor,
  Wrench,
} from "lucide-react";
import ContactActions from "@/components/ContactActions";

export const metadata = {
  title: "About McAteer Agricultural Services | Agricultural & Plant Engineering",
  description:
    "Learn about McAteer Agricultural Services Ltd — hands-on agricultural engineering experience, dealer background and mobile machinery support from Northern Ireland.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="aboutHero">
        <div className="container aboutHeroGrid">
          <div>
            <div className="eyebrow">ABOUT MCATEER AGRICULTURAL SERVICES</div>
            <h1>Built from hands-on experience.</h1>
            <p className="aboutLead">
              McAteer Agricultural Services was built around practical agricultural
              engineering experience, dealer-level standards and the need for
              dependable mobile support when machinery has to keep working.
            </p>
            <ContactActions compact />
          </div>

          <div className="aboutHeroImage">
            <Image
              src="/work/field-service-new-holland.jpg"
              alt="New Holland tractor receiving field support from McAteer Agricultural Services"
              width={1200}
              height={1600}
              priority
            />
            <div className="aboutImageCaption">
              <span>FROM THE FIELD</span>
              Agricultural engineering where the work actually happens.
            </div>
          </div>
        </div>
      </section>

      <section className="aboutStory section">
        <div className="container aboutStoryGrid">
          <div className="aboutSectionIntro">
            <div className="eyebrow">WHERE IT STARTED</div>
            <h2>Experience before the business.</h2>
          </div>
          <div className="aboutStoryCopy">
            <p>
              Before McAteer Agricultural Services, the experience was built the
              traditional way — working on agricultural and plant machinery,
              diagnosing faults, carrying out repairs and learning what it takes
              to get equipment back to work properly.
            </p>
            <p>
              That included working within JCB and New Holland dealership
              environments in England, gaining experience around manufacturer
              machinery, workshop standards, field service, diagnostics and the
              demands placed on dealer technicians.
            </p>
            <p>
              It created the foundation for the business today: practical
              engineering backed by professional standards, without losing the
              flexibility and direct contact of an independent service.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutFeature section">
        <div className="container aboutFeatureGrid">
          <div className="aboutFeatureImage">
            <Image
              src="/work/john-deere-workshop-repair.jpg"
              alt="Agricultural tractor undergoing workshop repair"
              width={1200}
              height={1600}
            />
          </div>
          <div className="aboutFeatureCopy">
            <div className="eyebrow">DEALER EXPERIENCE</div>
            <h2>Standards that came from working in the trade.</h2>
            <p>
              Dealer experience shaped the way jobs are approached: diagnose the
              fault properly, understand the machine as a complete system and
              carry out a repair that is intended to last — rather than simply
              changing parts until the problem disappears.
            </p>
            <div className="aboutMiniGrid">
              <div><ShieldCheck size={22}/><strong>Professional standards</strong><span>Structured fault finding and repair.</span></div>
              <div><Wrench size={22}/><strong>Hands-on capability</strong><span>Mechanical, hydraulic and electrical work.</span></div>
              <div><Tractor size={22}/><strong>Multi-brand experience</strong><span>Agricultural and plant machinery.</span></div>
              <div><BriefcaseBusiness size={22}/><strong>Dealer support</strong><span>Flexible technician cover when required.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutMove section">
        <div className="container aboutMoveGrid">
          <div>
            <div className="eyebrow">BACK IN NORTHERN IRELAND</div>
            <h2>Taking that experience home.</h2>
            <p>
              After years working in England, the next stage was bringing that
              experience back to Northern Ireland and developing McAteer
              Agricultural Services as a dedicated agricultural and plant
              engineering business.
            </p>
            <p>
              Today the work ranges from routine servicing and diagnostics to
              major mechanical repairs, breakdown support and specialist field
              work — alongside technician support for businesses that need extra
              engineering capacity.
            </p>
            <div className="aboutLocation">
              <MapPin size={21}/>
              <div>
                <strong>Based in Northern Ireland</strong>
                <span>Northern Ireland • Ireland • Great Britain for selected contract support</span>
              </div>
            </div>
          </div>
          <div className="aboutFeatureImage">
            <Image
              src="/work/mobile-service-van.jpg"
              alt="McAteer Agricultural Services mobile service van on an agricultural job"
              width={1200}
              height={1600}
            />
          </div>
        </div>
      </section>

      <section className="aboutToday section">
        <div className="container">
          <div className="aboutTodayHead">
            <div>
              <div className="eyebrow">THE BUSINESS TODAY</div>
              <h2>Independent service. Serious capability.</h2>
            </div>
            <p>
              The aim is straightforward: give farmers, contractors, machinery
              owners and dealerships access to dependable engineering support
              from people who understand the pressure of keeping machinery moving.
            </p>
          </div>

          <div className="aboutPhotoStrip">
            <div>
              <Image src="/work/night-breakdown-support.jpg" alt="Night breakdown support" width={900} height={1200}/>
              <span>BREAKDOWNS</span><strong>Support when the job cannot wait.</strong>
            </div>
            <div>
              <Image src="/work/engine-repair-plant-02.jpg" alt="Major engine repair" width={900} height={1200}/>
              <span>REPAIRS</span><strong>From diagnosis through to major repair.</strong>
            </div>
            <div>
              <Image src="/work/specialist-machinery-workshop.jpg" alt="Specialist agricultural machinery support" width={900} height={1200}/>
              <span>SUPPORT</span><strong>Field, workshop and contract capability.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutFuture section">
        <div className="container aboutFutureInner">
          <div>
            <div className="eyebrow">LOOKING FORWARD</div>
            <h2>Building capacity without losing the personal service.</h2>
            <p>
              As McAteer Agricultural Services grows, the focus remains on the
              same things the business was built around: quality workmanship,
              good communication and being useful when a customer genuinely
              needs support.
            </p>
          </div>
          <Link href="/our-work" className="btn secondary">
            See our recent work <ArrowRight size={17}/>
          </Link>
        </div>
      </section>

      <section className="aboutCta">
        <div className="container aboutCtaInner">
          <div>
            <div className="eyebrow">NEED ENGINEERING SUPPORT?</div>
            <h2>Talk directly to McAteer Agricultural Services.</h2>
            <p>Tell us the machine, the fault and where you are. We’ll take it from there.</p>
          </div>
          <ContactActions compact />
        </div>
      </section>
    </main>
  );
}
