import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import Magnetic from "../components/Magnetic";
import { Band, Statement } from "../components/Editorial";
import { profile, sectionCopy } from "../data";

export function ContactSection() {
  const copy = sectionCopy.contact;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo only — no backend. Wire this to your form service / API later.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Band id="contact" title={copy.label}>
      <div className="mt-8 md:mt-14">
        <Statement text={copy.statement} accent={copy.accent} as="h2" />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: details */}
        <Reveal>
          <p className="max-w-sm text-[0.875rem] leading-relaxed opacity-70">
            Whether you have a project in mind or just want to say hello, my
            inbox is always open. I'll get back to you within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 flex items-center gap-3 text-lg font-medium transition-opacity hover:opacity-60"
          >
            <Icon name="mail" size={18} />
            {profile.email}
          </a>

          <p className="mt-3 flex items-center gap-3 text-[0.875rem] opacity-60">
            <Icon name="pin" size={16} />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="pill-outline px-4 py-2 text-[0.75rem] font-medium uppercase tracking-[0.08em]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className="field-editorial"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                className="field-editorial"
              />
            </div>

            <textarea
              required
              rows={6}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about your project…"
              className="field-editorial mt-4 resize-none"
            />

            <div className="mt-6">
              <Magnetic strength={0.35}>
                <button
                  type="submit"
                  className="pill-green px-7 py-3 text-[0.875rem] font-medium"
                >
                  Send message
                </button>
              </Magnetic>
            </div>

            <AnimatePresence>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-2xl border border-leaf-500/40 px-4 py-3 text-[0.8125rem] text-leaf-600"
                >
                  Thanks! This is a demo form — connect it to your backend to go
                  live.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Band>
  );
}

export default function Contact() {
  return (
    <div className="page-editorial pt-16">
      <ContactSection />
    </div>
  );
}
