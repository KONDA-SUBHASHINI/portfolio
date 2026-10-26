import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "../lib/data";

export default function Skills() {
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
      </div>
    </section>
  );
}