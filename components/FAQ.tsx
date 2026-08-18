export type FAQItem = { question: string; answer: string };

export default function FAQ({
  title = "Common questions",
  intro,
  items,
  structuredData = false,
}: {
  title?: string;
  intro?: string;
  items: FAQItem[];
  structuredData?: boolean;
}) {
  const schema = structuredData
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <section className="faqSection">
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
      <div className="container faqGrid">
        <div className="sectionTitle faqIntro">
          <div className="eyebrow">Questions & answers</div>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        <div className="faqList">
          {items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span>+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
