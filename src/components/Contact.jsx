import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, codingProfiles } from "../lib/data";

const socialIcon = { github: FaGithub, linkedin: FaLinkedin, youtube: FaYoutube, instagram: FaInstagram };

export default function Contact() {
  return (
    <section id="contact" className="bg-biscuit px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's build something"
            highlight="together"
            subtitle="Whether it's an internship, a full-time role, or just a conversation about a project — my inbox is always open."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
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
                  {Icon && <Icon size={22} />}
                </a>
              );
            })}
          </div>

          {codingProfiles.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {codingProfiles.map((c) => (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 transition hover:border-accent hover:text-accent"
                >
                  {c.label}
                </a>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}