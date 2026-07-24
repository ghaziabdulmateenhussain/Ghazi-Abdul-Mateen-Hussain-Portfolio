"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import Typewriter from "@/components/ui/Typewriter";
import { socials } from "@/lib/data";

const roles = [
  "Web Developer",
  "React & Next.js Learner",
  "UI/UX Enthusiast",
  "CS Undergraduate",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 bg-grid"
    >
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[120px] animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-primary/20 blur-[120px] animate-float"
        aria-hidden="true"
      />

      <div className="section-shell relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="eyebrow inline-flex items-center gap-2 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Hello, I&apos;m
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-ink">
            Ghazi Abdul Mateen
            <br />
            <span className="heading-gradient">Hussain</span>
          </h1>

          <div className="font-mono text-lg sm:text-xl text-ink-muted h-8">
            <Typewriter words={roles} className="text-accent" />
          </div>

          <p className="max-w-xl text-ink-muted text-base sm:text-lg leading-relaxed">
            I am a passionate Web Developer currently pursuing a BS in Computer
            Science. I build responsive, user-friendly, and high-quality
            websites while continuously growing as a professional software
            developer.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="/CV-Ghazi-Abdul-Mateen-Hussain.pdf" download data-cursor="hover" className="btn-primary">
              <Download size={16} />
              Download CV
            </a>
            <a href="#contact" data-cursor="hover" className="btn-ghost">
              <Mail size={16} />
              Email
            </a>
            <a
              href="#projects"
              data-cursor="hover"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink px-2 py-3"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
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
                data-cursor="hover"
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-xl text-ink-muted hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm"
        >
          <div
            className="absolute -inset-4 rounded-full bg-gradient-primary opacity-20 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative aspect-square w-full rounded-full bg-gradient-primary p-[3px] shadow-glow">
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-base">
              <Image
                src="/profile.jpg"
                alt="Ghazi Abdul Mateen Hussain"
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 24vw"
                className="object-cover"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="glass absolute bottom-2 -left-4 sm:-left-8 flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-card"
          >
            <MapPin size={14} className="text-accent" />
            <span className="text-xs font-medium text-ink-muted whitespace-nowrap">
              Based in Punjab, Pakistan
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="glass absolute top-4 -right-2 sm:-right-6 hidden sm:flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-card"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium text-ink-muted whitespace-nowrap">
              Available for work
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
