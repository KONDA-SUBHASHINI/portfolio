import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { about } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="bg-stone-50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Who I am"
            title="About"
            highlight="Me"
            subtitle="A short version of a journey that started with a diploma and led to building products people use."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-justify leading-relaxed text-zinc-600">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {about.education.map((e) => (
              <div
                key={e.degree}
                className="card-hover rounded-2xl border border-zinc-200 bg-white p-6 shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {e.period}
                </p>
                <h3 className="mt-3 font-heading text-lg font-semibold text-zinc-900">
                  {e.degree}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{e.school}</p>
                <span className="mt-4 inline-block rounded-full bg-accent-tint px-3 py-1 text-sm font-semibold text-accent">
                  {e.score}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}