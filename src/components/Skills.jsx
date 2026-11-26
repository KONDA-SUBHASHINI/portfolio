import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills, codingProfiles } from "../lib/data";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8 7 17 7 17 16" />
    </svg>
  );
}

export default function Skills() {
  console.log("Coding Profiles:", codingProfiles);
  return (
    <section id="skills" className="bg-biscuit px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="What I work with"
            title="Skills &"
            highlight="Toolkit"
            subtitle="The stack I reach for when building — grouped the way I actually use it."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="card-hover h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-card">
                <h3 className="font-heading text-lg font-semibold text-zinc-900">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-stone-100 px-3 py-1.5 text-sm font-medium text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ---- Coding profiles ---- */}
        <div className="mt-16">
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Practice & compete
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-zinc-900 sm:text-3xl">
                  Coding Profiles
                </h3>
              </div>
              <p className="text-sm text-zinc-500">
                Where I solve problems, join contests and track my progress.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {codingProfiles.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-card"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl font-heading text-xl font-bold"
                      style={{ backgroundColor: `${p.accent}1A`, color: p.accent }}
                    >
                      {p.label.charAt(0)}
                    </span>
                    <div>
                      <p className="font-heading font-semibold text-zinc-900">
                        {p.label}
                      </p>
                      <p className="text-xs font-medium text-zinc-500">
                        @{p.username}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                    {p.blurb}
                  </p>
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: p.accent }}
                  >
                    Visit profile
                    <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowIcon />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}