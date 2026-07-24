"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { contactInfo, socials, subjectSuggestions } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const infoItems = [
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}`, copy: true },
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/-/g, "")}` },
    { icon: MapPin, label: "Location", value: contactInfo.location, href: null },
  ];

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSuggestion = (s) => {
    setForm((f) => ({ ...f, subject: s }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link still works as a fallback.
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Netlify's built-in form handling — the message goes straight to the
    // Netlify dashboard and, once email notifications are turned on for
    // this form (Site settings > Forms > Notifications, a one-time setup
    // with no confirmation link to click), straight to the inbox too.
    // One click, no email app needs to open.
    const encode = (data) =>
      Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio inquiry",
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Fallback: open the visitor's email client pre-filled, in case the
      // site isn't hosted on Netlify yet (e.g. still on localhost).
      const subjectLine = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name || "a visitor"}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${contactInfo.email}?subject=${subjectLine}&body=${body}`;
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind, a question, or just want to connect? Send a message and I'll get back to you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-7">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <GlassCard className="p-7 flex flex-col gap-5">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary-soft">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-faint mb-0.5">
                      {item.label}
                    </p>
                    <div className="flex items-center gap-2">
                      {item.href ? (
                        <a
                          href={item.href}
                          data-cursor="hover"
                          className="text-sm sm:text-base font-medium text-ink hover:text-accent transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-medium text-ink">
                          {item.value}
                        </p>
                      )}
                      {item.copy && (
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          data-cursor="hover"
                          aria-label="Copy email address"
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-ink-faint hover:text-accent hover:bg-white/[0.05] transition-colors"
                        >
                          {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="h-px bg-border-glass my-1" />

              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
                  { icon: Github, href: socials.github, label: "GitHub" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    data-cursor="hover"
                    className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted hover:text-accent"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden h-56 relative" hover={false}>
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=Punjab,Pakistan&output=embed"
                className="absolute inset-0 h-full w-full grayscale invert-[0.92] contrast-[0.9] opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border-glass rounded-2xl" />
            </GlassCard>
          </motion.div>

          <div>
            <div className="glass rounded-2xl shadow-card p-7 sm:p-9">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-ink-faint">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="rounded-xl border border-border-glass bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-primary/60"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-ink-faint">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="rounded-xl border border-border-glass bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-primary/60"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-ink-faint">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="rounded-xl border border-border-glass bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-primary/60"
                  />
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {subjectSuggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => handleSuggestion(s)}
                        data-cursor="hover"
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                          form.subject === s
                            ? "border-primary/60 bg-primary/15 text-primary-light"
                            : "border-border-glass text-ink-muted hover:text-ink hover:border-border-glassStrong"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-ink-faint">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="resize-none rounded-xl border border-border-glass bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-primary/60"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="hover"
                  disabled={status === "sending"}
                  className="btn-primary w-full sm:w-fit disabled:opacity-70"
                >
                  {status === "sent" ? (
                    <>
                      <CheckCircle2 size={16} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </>
                  )}
                </button>
                {status === "sent" && (
                  <p className="flex items-center gap-1.5 text-xs text-ink-muted">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    Sent straight to my inbox — no extra clicks needed. I&apos;ll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-1.5 text-xs text-ink-muted">
                    <AlertCircle size={14} className="text-accent shrink-0" />
                    Couldn&apos;t send directly, so your email app just opened pre-filled instead — hit send there.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
