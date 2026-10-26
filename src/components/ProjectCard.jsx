import { Link } from "react-router-dom";
import {
  Calendar,
  ExternalLink,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Building2,
  Sparkles,
  Rocket,
  Trophy,
  ImageOff,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

// icon for the context the project was built in
const typeIcon = {
  Internship: Briefcase,
  College: GraduationCap,
  Client: Building2,
  Personal: Sparkles,
  Startup: Rocket,
  Hackathon: Trophy,
};

export default function ProjectCard({ project }) {
  const TypeIcon = typeIcon[project.type];
  const tagText = project.tag || project.type; // specific tag, falls back to type

  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card">
      {/* Image */}
      <Link
        to={`/projects/${project.slug}`}
        className="relative block h-44 overflow-hidden border-b border-zinc-100 bg-accent-tint"
      >
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.title} home page`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-400">
            <ImageOff size={22} />
            <span className="text-xs">Screenshot coming soon</span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-1.5">
          {(project.categories || []).map((c) => (
            <span
              key={c}
              className="rounded-full bg-accent-tint px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-accent"
            >
              {c}
            </span>
          ))}
        </div>

        <h3 className="mt-3 font-heading text-lg font-semibold text-zinc-900 transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        {/* tag beside the year — right under the name */}
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white shadow-card">
            {TypeIcon && <TypeIcon size={11} />} {tagText}
          </span>
          <span className="flex items-center gap-1 text-xs text-zinc-400">
            <Calendar size={12} /> {project.whenBuilt}
          </span>
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">
          {project.description}
        </p>

        <div className="mb-5 mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md bg-stone-100 px-2 py-1 font-mono text-[11px] text-zinc-600"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-md bg-stone-100 px-2 py-1 font-mono text-[11px] text-zinc-500">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repo"
                onClick={(e) => e.stopPropagation()}
                className="text-zinc-500 transition hover:text-accent"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-sm text-zinc-500 transition hover:text-accent"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-accent transition-all hover:gap-2"
          >
            Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}