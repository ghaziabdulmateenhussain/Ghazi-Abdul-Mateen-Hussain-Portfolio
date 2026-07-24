"use client";

import { Github, Linkedin, Mail, ArrowUp, Terminal } from "lucide-react";
import { socials, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border-glass mt-10">
      <div className="section-shell py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                <Terminal size={16} className="text-white" />
              </span>
              Ghazi<span className="text-primary">.</span>dev
            </a>
            <p className="text-sm text-ink-muted leading-6">
              Web Developer &amp; Computer Science student building responsive,
              high-quality web experiences.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-faint">
              Navigate
            </span>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-faint">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
                { icon: Github, href: socials.github, label: "GitHub" },
                { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-glass flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-faint">
            © {year} Ghazi Abdul Mateen Hussain. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="glass glass-hover flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium text-ink-muted hover:text-ink"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
