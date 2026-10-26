import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { sports, campusLife, beyondCode } from "../lib/data";
import { Medal, Trophy, HeartHandshake, Store, Video, Youtube, Instagram } from "lucide-react";

// medal dot colour per place
const medalColor = {
  "1st": "bg-amber-400",
  "2nd": "bg-zinc-300",
  "3rd": "bg-orange-400",
};

// icon picker for the service & campus cards
const lifeIcon = {
  heart: HeartHandshake,
  store: Store,
  video: Video,
};

// icon picker for the channel link buttons
const linkIcon = {
  YouTube: Youtube,
  Instagram: Instagram,
};

// one card used for the channel AND the remaining campus cards
function CampusCard({ c, delay = 0 }) {
  const Icon = lifeIcon[c.icon] || Trophy;
  return (
    <Reveal delay={delay}>
      <div className="card-hover h-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-tint text-accent">
            <Icon size={19} />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold text-zinc-900">
              {c.title}
            </h3>
            <p className="text-xs font-medium text-accent">{c.tag}</p>
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600">
          {c.text}
        </p>
        {c.links?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {c.links.map((l) => {
              const LIcon = linkIcon[l.label] || Trophy;
              return (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white shadow-card transition hover:bg-accent-dark"
                >
                  <LIcon size={14} /> {l.label}
                </a>
              );
            })}
          </div>
        )}
        {c.stats?.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {c.stats.map((st) => (
              <span
                key={st}
                className="rounded-lg bg-stone-100 px-2 py-1.5 text-center text-xs font-semibold text-zinc-700"
              >
                {st}
              </span>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function BeyondCode() {
  const totalMedals = sports.reduce((n, s) => n + s.medals.length, 0);
  const channel = campusLife.find((c) => c.wide) || null;
  const restCampus = campusLife.filter((c) => !c.wide);
  if (!totalMedals && !campusLife.length && !beyondCode.length) return null;

  return (
    <section id="beyond-code" className="bg-stone-50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Off the keyboard"
            title="Beyond"
            highlight="Code"
            subtitle="My tech channel, athletics medals, service and a food stall — the things that make me a better teammate, not just a better developer."
          />
        </Reveal>

        {/* 1 — Channel first */}
        {channel && (
          <div className="mt-10 grid gap-5">
            <CampusCard c={channel} />
          </div>
        )}

        {/* 2 — Athletics medals */}
        {totalMedals > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sports.map((s, i) => (
              <Reveal key={s.meet} delay={i * 80}>
                <div className="card-hover h-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-card sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-xl font-semibold text-zinc-900">
                      {s.meet}
                    </h3>
                    <span className="rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold text-accent">
                      {s.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{s.where}</p>

                  <ul className="mt-4 space-y-2.5">
                    {s.medals.map((m) => (
                      <li key={m.event} className="flex items-center gap-3 text-sm">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                            medalColor[m.place] || "bg-zinc-200"
                          }`}
                        >
                          <Medal
                            size={14}
                            className={m.place === "2nd" ? "text-zinc-600" : "text-white"}
                          />
                        </span>
                        <span className="w-8 font-semibold text-zinc-900">{m.place}</span>
                        <span className="text-zinc-600">{m.event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {totalMedals > 0 && (
          <Reveal>
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-zinc-500">
              <Trophy size={15} className="shrink-0 text-accent" />
              {totalMedals} athletics medals in total — original certificates available
              for every one.
            </p>
          </Reveal>
        )}

        {/* 3 — Remaining campus cards */}
        {restCampus.length > 0 && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {restCampus.map((c, i) => (
              <CampusCard key={c.title} c={c} delay={i * 80} />
            ))}
          </div>
        )}

        {/* 4 — How I work — full-width rows, no empty half */}
        {beyondCode.length > 0 && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {beyondCode.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="sm:col-span-2">
                <div className="card-hover h-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-card sm:p-6">
                  <h3 className="font-heading text-lg font-semibold text-zinc-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{b.text}</p>
                  {b.stats?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {b.stats.map((st) => (
                        <span
                          key={st}
                          className="rounded-lg bg-stone-100 px-2.5 py-1.5 text-xs font-semibold text-zinc-700"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}