"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutTemplate } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="A few things I've been building"
          description="Concept builds exploring layout, interaction, and responsive design across different kinds of products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12, ease: "easeOut" }}
            >
              <GlassCard className="group overflow-hidden h-full flex flex-col">
                <div
                  className={`relative h-52 sm:h-56 overflow-hidden bg-gradient-to-br ${project.accent}`}
                >
                  <div className="absolute inset-0 bg-base/40" />
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-base/40 backdrop-blur-md border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <LayoutTemplate size={26} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-base/60">
                    <a
                      href={project.demo}
                      data-cursor="hover"
                      className="flex items-center gap-1.5 rounded-lg bg-white text-base px-4 py-2 text-xs font-semibold hover:bg-white/90 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      data-cursor="hover"
                      className="flex items-center gap-1.5 rounded-lg bg-white/10 border border-white/30 text-white px-4 py-2 text-xs font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-6 mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-glass bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
