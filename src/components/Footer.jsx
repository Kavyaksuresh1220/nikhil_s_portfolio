import Reveal from "./Reveal";
import { Arrow } from "./ui";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer id="contact" className="band footer">
      <div className="shell">
        <div className="footer-top">
          <p className="footer-love">
            Crafted with love &amp; care <span aria-hidden="true">❤️</span>
          </p>
          <div className="footer-cta">
            <p className="footer-cta-title">Have a project in mind? Let's talk.</p>
            <div className="footer-mail">
              <a href={`mailto:${profile.email}`} className="mail-field">
                {profile.email}
              </a>
              <a href={`mailto:${profile.email}`} className="btn-green-sm">
                Say hi <Arrow size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="band-line">
        <div className="shell footer-socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="social-chip">
              <span className="social-glyph" aria-hidden="true">{s.short}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="band-line">
        <div className="shell">
          <Reveal y={40}>
            <p className="footer-big">Your vision, my design.</p>
          </Reveal>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
