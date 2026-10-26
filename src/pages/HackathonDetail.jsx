import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  Users,
} from "lucide-react";
import { hackathons } from "../lib/data";

// Detail page for every hackathon — opens from the home page timeline.
// Content lives in src/lib/data.js -> hackathons[] (summary, overview, points, stack).
export default function HackathonDetail() {
  const { slug } = useParams();
  const hack = hackathons.find((h) => h.slug === slug);

  if (!hack) {
    return (
      <main className="bg-biscuit px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold text-zinc-900">
          Hackathon not found
        </h1>
        <p className="mt-3 text-zinc-600">
          This hackathon may have been renamed or removed.
        </p>
        <Link
          to="/#hackathons"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
        >
          <ArrowLeft size={16} /> Back to hackathons
        </Link>
      </main>
    );
  }

  const next =
    hackathons[
      (hackathons.findIndex((h) => h.slug === slug) + 1) % hackathons.length
    ];

  return (
    <main>
      {/* Header — biscuit */}
      <section className="bg-biscuit px-4 pb-12 pt-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/#hackathons"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-accent"
          >
            <ArrowLeft size={16} /> Back to hackathons
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5 font-medium text-accent">
              <Users size={14} /> {hack.role}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {hack.period}
            </span>
            {hack.location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {hack.location}
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold text-zinc-900 sm:text-4xl">
            {hack.title}
          </h1>
          {hack.summary && (
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
              {hack.summary}
            </p>
          )}

          {hack.project && (
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={`/projects/${hack.project}`}
                state={{ fromHackathon: hack.slug, fromTitle: hack.title }}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
              >
                <Trophy size={16} /> View the full build <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Body — stone */}
      <section className="bg-stone-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* The story */}
          {hack.overview?.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                The story
              </h2>
              <div className="mt-4 space-y-4">
                {hack.overview.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-zinc-600">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* What we did */}
          {hack.points?.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                What we did
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {hack.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-600"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Snapshot + stack */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                Snapshot
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Users size={17} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-medium text-zinc-900">Team</dt>
                    <dd className="text-zinc-600">{hack.role}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={17} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-medium text-zinc-900">When</dt>
                    <dd className="text-zinc-600">{hack.period}</dd>
                  </div>
                </div>
                {hack.location && (
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <dt className="font-medium text-zinc-900">Where</dt>
                      <dd className="text-zinc-600">{hack.location}</dd>
                    </div>
                  </div>
                )}
                {hack.outcome && (
                  <div className="flex items-start gap-3">
                    <Trophy size={17} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <dt className="font-medium text-zinc-900">Result</dt>
                      <dd className="text-zinc-600">{hack.outcome}</dd>
                    </div>
                  </div>
                )}
              </dl>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                Tech & tools
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {(hack.stack || []).map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-stone-100 px-3 py-1.5 font-mono text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next hackathon */}
          <Link
            to={`/hackathons/${next.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-card transition hover:shadow-pop sm:p-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Next hackathon
              </span>
              <p className="mt-1 font-heading text-lg font-semibold text-zinc-900 group-hover:text-accent">
                {next.title}
              </p>
            </div>
            <ArrowRight className="shrink-0 text-accent" />
          </Link>
        </div>
      </section>
    </main>
  );
}