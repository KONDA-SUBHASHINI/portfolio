import { useMemo, useState } from "react";
import { featuredProjects, archiveProjects } from "../lib/data";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function Projects() {
  const categories = useMemo(
    () => ["All", ...new Set(featuredProjects.flatMap((p) => p.categories || []))],
    []
  );
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => (p.categories || []).includes(active));

  const chip = (c) =>
    `flex shrink-0 items-center whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition ${
      active === c
        ? "border-accent bg-accent text-white shadow-card"
        : "border-zinc-200 bg-white text-zinc-600 hover:border-accent hover:text-accent"
    }`;

  return (
    <main>
      {/* Page hero — biscuit */}
      <section className="bg-biscuit px-4 pb-12 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-zinc-300 sm:w-16" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              My Work
            </span>
            <span className="h-px w-10 bg-zinc-300 sm:w-16" />
          </div>
          <h1 className="mt-4 text-center font-display text-4xl font-semibold text-zinc-900 sm:text-5xl">
            Things I've <span className="text-accent">Built</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-zinc-600">
            Every project I've shipped — from campus platforms to AI agents. Filter by
            the stack you're curious about, or open any project for the full story.
          </p>
        </div>
      </section>

      {/* Filters + grid — stone */}
      <section className="bg-stone-50 pb-20">
        <div className="sticky top-16 z-30 border-y border-zinc-200 bg-stone-50/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)} className={chip(c)}>
                {c}
                <span className="ml-1.5 text-[10px] opacity-70">
                  {c === "All"
                    ? featuredProjects.length
                    : featuredProjects.filter((p) => (p.categories || []).includes(c)).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 px-4 pt-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="pt-10 text-center text-zinc-500">
            No projects in this category yet.
          </p>
        )}

        {archiveProjects.length > 0 && (
          <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
            <h2 className="font-heading text-xl font-semibold text-zinc-900">
              More smaller builds
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {archiveProjects.map((p) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm text-zinc-600 shadow-card"
                >
                  <span className="font-semibold text-zinc-900">{p.title}</span>
                  {p.note ? ` — ${p.note}` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}