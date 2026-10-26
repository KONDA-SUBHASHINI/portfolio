import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { profile, stats } from "../lib/data";
import Typewriter from "./Typewriter";
import Reveal from "./Reveal";

const socialIcon = {
  github: FaGithub,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  instagram: FaInstagram,
};

export default function Hero() {
  return (
    <section id="home" className="bg-biscuit px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Hi, my name is
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 font-heading text-xl font-medium text-zinc-700 sm:text-2xl">
            <Typewriter words={profile.roles} />
          </p>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-zinc-600">
            {profile.tagline}
          </p>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-zinc-500">
            <MapPin size={15} /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
            >
              View my work <ArrowRight size={16} />
            </Link>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent bg-white px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent-tint"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            {profile.socials.map((s) => {
              const Icon = socialIcon[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-zinc-500 transition hover:text-accent"
                >
                  {Icon && <Icon size={20} />}
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-card"
              >
                <p className="font-display text-3xl font-semibold text-accent">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}