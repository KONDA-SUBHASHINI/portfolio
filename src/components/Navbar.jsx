import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, CodeXml } from "lucide-react";

// Nav order chosen by Subhashini: Home, About, Skills, Experience, Projects,
// Hackathons, Certifications, Beyond Code, Contact.
// Items with `to` are separate pages (active highlight); items with `hash`
// scroll to a home-page section.
const sections = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Skills", hash: "#skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Hackathons", hash: "#hackathons" },
  { label: "Certifications", hash: "#certifications" },
  { label: "Beyond Code", hash: "#beyond-code" },
  { label: "Contact", hash: "#contact" },
];

const linkBase = "rounded-lg px-3 py-2 text-sm font-medium transition";
const linkIdle = "text-zinc-600 hover:bg-accent-tint hover:text-accent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-white">
            <CodeXml size={18} />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-zinc-900">
            Subhashini<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {sections.map((s) =>
            s.to ? (
              <NavLink
                key={s.label}
                to={s.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "bg-accent-tint text-accent" : linkIdle}`
                }
              >
                {s.label}
              </NavLink>
            ) : (
              <Link key={s.hash} to={`/${s.hash}`} className={`${linkBase} ${linkIdle}`}>
                {s.label}
              </Link>
            )
          )}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-lg text-zinc-700 hover:bg-accent-tint xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 pb-4 pt-2 xl:hidden">
          {sections.map((s) =>
            s.to ? (
              <NavLink
                key={s.label}
                to={s.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-accent-tint text-accent"
                      : "text-zinc-600 hover:bg-accent-tint hover:text-accent"
                  }`
                }
              >
                {s.label}
              </NavLink>
            ) : (
              <Link
                key={s.hash}
                to={`/${s.hash}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-accent-tint hover:text-accent"
              >
                {s.label}
              </Link>
            )
          )}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}