import { Link } from "react-router-dom";
import { profile } from "../data";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-0 border-t border-veil/10 bg-ink px-6 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <Link to="/" className="font-display text-2xl font-semibold">
          {profile.firstName}
          <span className="text-leaf-500">.</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-3">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full glass px-4 py-2 text-sm text-mist/70 transition-colors hover:text-mist"
            >
              {s.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-lg font-medium text-mist transition-colors hover:text-leaf-600"
        >
          <Icon name="mail" size={18} />
          {profile.email}
        </a>

        <p className="text-sm text-mist/40">
          © {new Date().getFullYear()} {profile.name}. Designed & built with care.
        </p>
      </div>
    </footer>
  );
}
