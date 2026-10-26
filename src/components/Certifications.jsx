import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications } from "../lib/data";

export default function Certifications() {
  if (!certifications.length) return null;

  return (
    <section id="certifications" className="bg-biscuit px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Always learning"
            title="Certifications &"
            highlight="Training"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="card-hover flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-card">
                {c.year && (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {c.year}
                  </p>
                )}
                <h3 className="mt-3 font-heading text-base font-semibold text-zinc-900">
                  {c.title}
                </h3>
                {c.issuer && <p className="mt-1 text-sm text-zinc-500">{c.issuer}</p>}
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-accent transition hover:gap-2"
                  >
                    View credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}