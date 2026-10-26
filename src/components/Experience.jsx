import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-stone-50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Where I've worked"
            title="Experience &"
            highlight="Internships"
            subtitle="A startup I co-founded and four internships across full-stack, ML, and web — each one shipped real work."
          />
        </Reveal>

        <div className="relative mt-12 space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-zinc-200 sm:before:left-[9px]">
          {experience.map((job, i) => (
            <Reveal key={job.slug || job.company} delay={i * 80}>
              <div className="relative pl-8 sm:pl-12">
                <span
                  className={`absolute left-0 top-2 h-4 w-4 rounded-full border-2 ${
                    job.current ? "border-accent bg-accent" : "border-accent bg-white"
                  }`}
                />
                <div className="card-hover rounded-2xl border border-zinc-200 bg-white p-6 shadow-card">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-zinc-900">
                      {job.role}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        job.current
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-accent-tint text-accent"
                      }`}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2.5 text-sm leading-relaxed text-zinc-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {job.slug && (
                    <Link
                      to={`/experience/${job.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all hover:gap-2"
                    >
                      Read the full story <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
            >
              See every role in detail <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}