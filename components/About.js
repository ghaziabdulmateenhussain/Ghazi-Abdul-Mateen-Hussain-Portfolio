"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Sparkles, Target } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const highlights = [
  {
    icon: GraduationCap,
    title: "CS Undergraduate",
    text: "Pursuing a BS in Computer Science at GIMS (affiliated with Arid University).",
  },
  {
    icon: Code2,
    title: "Web Development",
    text: "Completed multiple courses across the modern web stack.",
  },
  {
    icon: Sparkles,
    title: "Always Learning",
    text: "Continuously improving skills with modern technologies.",
  },
  {
    icon: Target,
    title: "Quality Focused",
    text: "Building responsive, user-friendly, high-quality websites.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Turning curiosity about code into finished products"
          description="A short introduction to who I am and what drives the way I build for the web."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlassCard className="p-8 sm:p-10">
              <p className="text-ink-muted text-base sm:text-lg leading-8">
                I am a passionate Web Developer currently pursuing a{" "}
                <span className="text-ink font-medium">
                  BS in Computer Science
                </span>
                . My interest in technology and software development inspired
                me to choose Computer Science as my career path. I have
                completed multiple courses in web development and
                continuously improve my skills by learning modern
                technologies.
              </p>
              <p className="mt-5 text-ink-muted text-base sm:text-lg leading-8">
                My goal is to build{" "}
                <span className="text-ink font-medium">
                  responsive, user-friendly, and high-quality websites
                </span>{" "}
                while growing as a professional software developer.
              </p>
            </GlassCard>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary-soft mb-4">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-6">{item.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
