import Image from "next/image";
import Link from "next/link";
import type { WorkPhoto } from "@/lib/work-photos";

export default function WorkGallery({
  photos,
  title = "Real work. Real machinery.",
  intro = "A selection of genuine McAteer Agricultural Services jobs and field work.",
  limit,
  showAllLink = false,
}: {
  photos: WorkPhoto[];
  title?: string;
  intro?: string;
  limit?: number;
  showAllLink?: boolean;
}) {
  const visible = typeof limit === "number" ? photos.slice(0, limit) : photos;
  return (
    <section className="realWorkSection">
      <div className="container">
        <div className="sectionHeadingRow realWorkHeading">
          <div className="sectionTitle">
            <div className="eyebrow">From the field</div>
            <h2>{title}</h2>
          </div>
          <div>
            <p className="sectionIntro">{intro}</p>
            {showAllLink ? <Link className="textLink workAllLink" href="/our-work">See more recent work →</Link> : null}
          </div>
        </div>
        <div className="workGallery">
          {visible.map((photo, index) => (
            <figure className={`workPhoto ${index === 0 ? "workPhotoFeatured" : ""}`} key={`${photo.src}-${index}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 48vw" : "(max-width: 760px) 50vw, 25vw"} style={{objectPosition: photo.position || "center"}}/>
              <figcaption><span>{photo.category}</span><strong>{photo.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
