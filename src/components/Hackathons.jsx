import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { hackathons } from "../lib/data";

// Auto-hides until you add hackathons in src/lib/data.js
// Every card opens its own detail page at /hackathons/:slug
export default function Hackathons() {
  if (!hackathons.length) return null;

  const cardClass =
    "card-hover flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-card transition hover:border-accent";

  return (
    <section id="hackathons" className="bg-stone-50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Under pressure"
            title="Hackathons &"
            highlight="Competitions"
            subtitle="What I've built in 24–48 hours with a team and a deadline. Click any card for the full story."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((h, i) => {
            const body = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold text-accent">
                    {h.period}
                  </span>
                  {h.role && <span className="text-xs text-zinc-500">{h.role}</span>}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-zinc-900">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{h.build}</p>
                <p className="mt-auto border-t border-zinc-100 pt-4 text-sm font-medium text-accent">
                  {h.outcome}
                </p>
                {h.slug && (
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    Open full story →
                  </span>
                )}
              </>
            );

            return (
              <Reveal key={h.title} delay={i * 80}>
                {h.slug ? (
                  <Link to={`/hackathons/${h.slug}`} className="block h-full">
                    <div className={cardClass}>{body}</div>
                  </Link>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}