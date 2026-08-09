import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { profile } from "../data";

export function ContactSection() {
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

  const field =
    "w-full rounded-xl border border-veil/10 bg-veil/[0.03] px-4 py-3 text-mist placeholder:text-mist/30 outline-none transition-colors focus:border-brand-400 focus:bg-veil/[0.06]";

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Contact
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">
            Let's create something{" "}
            <span className="text-gradient">great together</span>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: details */}
          <Reveal>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-mist/70">
                Whether you have a project in mind or just want to say hello, my
                inbox is always open. I'll get back to you within a day.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-2xl glass p-5 transition-colors hover:bg-veil/[0.07]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-veil/10">
                  <Icon name="mail" size={20} />
                </span>
                <span>
                  <span className="block text-sm text-mist/50">Email</span>
                  <span className="block font-medium">{profile.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-3 rounded-2xl glass p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-veil/10">
                  <Icon name="pin" size={20} />
                </span>
                <span>
                  <span className="block text-sm text-mist/50">Based in</span>
                  <span className="block font-medium">{profile.location}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
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
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl glass p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-mist/60">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-mist/60">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                    className={field}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-sm text-mist/60">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project..."
                  className={`${field} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40"
              >
                Send message
                <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 rounded-xl bg-green-400/10 px-4 py-3 text-center text-sm text-green-300 ring-1 ring-green-400/20"
                  >
                    Thanks! This is a demo form — connect it to your backend to go
                    live. ✨
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
