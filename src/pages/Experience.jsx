import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react";
import { experience } from "../lib/data";
import Reveal from "../components/Reveal";

const ongoing = experience.filter((j) => j.current).length;

export default function Experience() {
  return (
    <main>
      {/* Header — biscuit */}
      <section className="bg-biscuit px-4 pb-14 pt-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Where I've worked
            </span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-zinc-900 sm:text-5xl">
              Experience & <span className="text-accent">Internships</span>
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
              A startup I co-founded and four internships across full-stack, AI/ML, and web —
              each one shipped real work. Open any role to read the full story: what I built,
              what I learned, and the projects that came out of it.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent shadow-card">
                1 startup
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent shadow-card">
                4 internships
              </span>
              {ongoing > 0 && (
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {ongoing} ongoing
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline — stone */}
      <section className="bg-stone-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-zinc-200 sm:before:left-[9px]">
            {experience.map((job, i) => (
              <Reveal key={job.slug} delay={i * 80}>
                <div className="relative pl-8 sm:pl-12">
                  <span
                    className={`absolute left-0 top-2 h-4 w-4 rounded-full border-2 ${
                      job.current ? "border-accent bg-accent" : "border-accent bg-white"
                    }`}
                  />
                  <Link
                    to={`/experience/${job.slug}`}
                    className="card-hover group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h2 className="font-heading text-xl font-semibold text-zinc-900 transition-colors group-hover:text-accent">
                        {job.role}
                      </h2>
                      {job.current && (
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                          Working now
                        </span>
                      )}
                      {job.certificate && (
                        <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-600">
                          <Award size={11} /> Certified
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <span className="font-medium text-accent">{job.company}</span>
                      <span className="flex items-center gap-1 text-zinc-500">
                        <Calendar size={13} /> {job.period}
                      </span>
                      {job.location && (
                        <span className="flex items-center gap-1 text-zinc-500">
                          <MapPin size={13} /> {job.location}
                        </span>
                      )}
                    </div>

                    {job.summary && (
                      <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                        {job.summary}
                      </p>
                    )}

                    {job.stack?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.stack.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-stone-100 px-2 py-1 font-mono text-[11px] text-zinc-600"
                          >
                            {t}
                          </span>
                        ))}
                        {job.stack.length > 5 && (
                          <span className="rounded-md bg-stone-100 px-2 py-1 font-mono text-[11px] text-zinc-500">
                            +{job.stack.length - 5}
                          </span>
                        )}
                      </div>
                    )}

                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                      Read the full story <ArrowRight size={15} />
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}