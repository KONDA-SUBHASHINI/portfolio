import { Link } from "react-router-dom";
import { CodeXml } from "lucide-react";
import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white">
            <CodeXml size={15} />
          </span>
          <span className="font-heading text-sm font-semibold text-zinc-900">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-5 text-sm text-zinc-500">
          <Link to="/projects" className="transition hover:text-accent">
            Projects
          </Link>
          <Link to="/#about" className="transition hover:text-accent">
            About
          </Link>
          <Link to="/#contact" className="transition hover:text-accent">
            Contact
          </Link>
        </div>

        <p className="text-xs text-zinc-400">Built with React, Tailwind CSS & Vite</p>
      </div>
    </footer>
  );
}