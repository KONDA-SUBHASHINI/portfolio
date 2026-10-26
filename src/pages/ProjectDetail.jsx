import { Link, useParams, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  ImageOff,
  CheckCircle2,
  Folder,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Building2,
  Sparkles,
  Rocket,
  Trophy,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { featuredProjects } from "../lib/data";

// icon for the context the project was built in
const typeIcon = {
  Internship: Briefcase,
  College: GraduationCap,
  Client: Building2,
  Personal: Sparkles,
  Startup: Rocket,
  Hackathon: Trophy,
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = featuredProjects.find((p) => p.slug === slug);
  const location = useLocation();
  const fromHackathon = location.state?.fromHackathon;
  const fromTitle = location.state?.fromTitle;
  const TypeIcon = project ? typeIcon[project.type] : null;

  if (!project) {
    return (
      <main className="bg-biscuit px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold text-zinc-900">
          Project not found
        </h1>
        <p className="mt-3 text-zinc-600">
          This project may have been renamed or removed.
        </p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
        >
          <ArrowLeft size={16} /> Back to all projects
        </Link>
      </main>
    );
  }

  const next =
    featuredProjects[
      (featuredProjects.findIndex((p) => p.slug === slug) + 1) % featuredProjects.length
    ];

  return (
    <main>
      {/* Header — biscuit */}
      <section className="bg-biscuit px-4 pb-12 pt-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
                    {fromHackathon ? (
            <Link
              to={`/hackathons/${fromHackathon}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-accent"
            >
              <ArrowLeft size={16} /> Back to {fromTitle || "hackathon"}
            </Link>
          ) : (
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-accent"
            >
              <ArrowLeft size={16} /> All projects
            </Link>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {(project.categories || []).map((c) => (
              <span
                key={c}
                className="rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold tracking-wide text-accent"
              >
                {c}
              </span>
            ))}
            <span className="flex items-center gap-1.5 text-sm text-zinc-500">
              {TypeIcon && <TypeIcon size={14} />} {project.tag || project.type}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-zinc-500">
              <Calendar size={14} /> Built in {project.whenBuilt}
            </span>
            <span
              className={`flex items-center gap-1.5 text-sm font-medium ${
                project.status === "Live" ? "text-emerald-600" : "text-amber-600"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  project.status === "Live" ? "bg-emerald-500" : "bg-amber-500"
                }`}
              />
              {project.status}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold text-zinc-900 sm:text-4xl">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="mt-3 font-heading text-lg font-medium text-accent">
              {project.tagline}
            </p>
          )}
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
              >
                <FaGithub size={16} /> View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-white px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent-tint"
              >
                <ExternalLink size={15} /> Open live site
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Body — stone */}
      <section className="bg-stone-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="w-full rounded-2xl border border-zinc-200 shadow-card"
            />
          ) : (
            <div className="flex h-56 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-zinc-300 bg-white text-zinc-400">
              <ImageOff size={22} />
              <span className="text-sm">Screenshot coming soon</span>
            </div>
          )}

          {/* Full story */}
          {project.overview?.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                Overview
              </h2>
              <div className="mt-4 space-y-4">
                {project.overview.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-zinc-600">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Collection card: one mini-card per sub-project */}
          {project.subProjects?.length > 0 ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                The {project.subProjects.length} projects inside
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Every project is a complete ML pipeline in its own folder — click a
                card to open its code on GitHub.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.subProjects.map((sp, i) => (
                  <a
                    key={sp.name}
                    href={sp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="card-hover group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-card"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-tint font-heading text-sm font-bold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Folder
                        size={16}
                        className="text-zinc-300 transition group-hover:text-accent"
                      />
                    </div>
                    <h3 className="mt-3 font-heading text-base font-semibold text-zinc-900 transition group-hover:text-accent">
                      {sp.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-600">
                      {sp.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 border-t border-zinc-100 pt-3 text-[13px] font-semibold text-accent">
                      <TrendingUp size={14} className="shrink-0" /> {sp.metric}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            project.features?.length > 0 && (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
                <h2 className="font-heading text-xl font-semibold text-zinc-900">
                  What it includes
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-600"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                My role
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {project.contribution}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-zinc-900">
                Tech stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
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

          <Link
            to={`/projects/${next.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-card transition hover:shadow-pop sm:p-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Next project
              </span>
              <p className="mt-1 font-heading text-lg font-semibold text-zinc-900 group-hover:text-accent">
                {next.title}
              </p>
            </div>
            <ArrowRight className="text-accent" />
          </Link>
        </div>
      </section>
    </main>
  );
}