import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  BadgeCheck,
  Award,
  FileText,
  ExternalLink,
} from "lucide-react";
import { experience, featuredProjects } from "../lib/data";
import ProjectCard from "../components/ProjectCard";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const job = experience.find((j) => j.slug === slug);

  if (!job) {
    return (
      <main className="bg-biscuit px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold text-zinc-900">
          Experience not found
        </h1>
        <p className="mt-3 text-zinc-600">
          This role may have been renamed or removed.
        </p>
        <Link
          to="/experience"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
        >
          <ArrowLeft size={16} /> Back to all experience
        </Link>
      </main>
    );
  }

  const related = (job.relatedProjects || [])
    .map((s) => featuredProjects.find((p) => p.slug === s))
    .filter(Boolean);

  const next =
    experience[
      (experience.findIndex((j) => j.slug === slug) + 1) % experience.length
    ];

  return (
    <main>
      {/* Header — biscuit */}
      <section className="bg-biscuit px-4 pb-12 pt-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-accent"
          >
            <ArrowLeft size={16} /> All experience
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5 font-medium text-accent">
              <Building2 size={14} /> {job.company}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {job.period}
            </span>
            {job.location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {job.location}
              </span>
            )}
            {job.current && (
              <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Working here now
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold text-zinc-900 sm:text-4xl">
            {job.role}
          </h1>
          {job.summary && (
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
              {job.summary}
            </p>
          )}

          {(job.certificate || job.lor) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {job.certificate && (
                <a
                  href={job.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
                >
                  <Award size={16} /> View certificate <ExternalLink size={14} />
                </a>
              )}
              {job.lor && (
                <a
                  href={job.lor}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-card transition hover:border-accent hover:text-accent"
                >
                  <FileText size={16} /> View LOR <ExternalLink size={14} />
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Body — stone */}
      <section className="bg-stone-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* The story */}
          {job.overview?.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                The story
              </h2>
              <div className="mt-4 space-y-4">
                {job.overview.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-zinc-600">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* What I worked on */}
          {job.points?.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                What I worked on
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {job.points.map((pt) => (
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
                  <Building2 size={17} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-medium text-zinc-900">Company</dt>
                    <dd className="text-zinc-600">{job.company}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BadgeCheck size={17} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-medium text-zinc-900">Role</dt>
                    <dd className="text-zinc-600">{job.role}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={17} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-medium text-zinc-900">Period</dt>
                    <dd className="text-zinc-600">{job.period}</dd>
                  </div>
                </div>
                {job.location && (
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <dt className="font-medium text-zinc-900">Location</dt>
                      <dd className="text-zinc-600">{job.location}</dd>
                    </div>
                  </div>
                )}
                {job.certificate && (
                  <div className="flex items-start gap-3">
                    <Award size={17} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <dt className="font-medium text-zinc-900">Certificate</dt>
                      <dd>
                        <a
                          href={job.certificate}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-accent underline underline-offset-2 transition hover:text-accent-dark"
                        >
                          View completion certificate
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
                {job.lor && (
                  <div className="flex items-start gap-3">
                    <FileText size={17} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <dt className="font-medium text-zinc-900">Recommendation</dt>
                      <dd>
                        <a
                          href={job.lor}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-accent underline underline-offset-2 transition hover:text-accent-dark"
                        >
                          View Letter of Recommendation
                        </a>
                      </dd>
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
                {(job.stack || []).map((t) => (
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

          {/* Projects from this experience */}
          {related.length > 0 && (
            <div className="pt-2">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                Projects from this experience
              </h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {related.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </div>
          )}

          {/* Next experience */}
          <Link
            to={`/experience/${next.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-card transition hover:shadow-pop sm:p-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Next experience
              </span>
              <p className="mt-1 font-heading text-lg font-semibold text-zinc-900 group-hover:text-accent">
                {next.role} · {next.company}
              </p>
            </div>
            <ArrowRight className="shrink-0 text-accent" />
          </Link>
        </div>
      </section>
    </main>
  );
}