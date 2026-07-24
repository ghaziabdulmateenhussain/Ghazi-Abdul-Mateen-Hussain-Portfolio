"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="My academic journey"
          description="From high school to a Computer Science degree in progress — the path that shaped my path into web development."
        />

        <div className="relative">
          <div
            className="absolute left-[19px] sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {education.map((item, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className={`relative flex flex-col sm:flex-row items-start gap-5 sm:gap-0 ${
                    isRight ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-0 sm:left-1/2 top-1 sm:-translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-base border border-border-glassStrong z-10">
                    <span
                      className={`flex h-full w-full items-center justify-center rounded-full ${
                        item.current
                          ? "bg-gradient-primary shadow-glow"
                          : "bg-white/5"
                      }`}
                    >
                      <GraduationCap
                        size={16}
                        className={item.current ? "text-white" : "text-ink-muted"}
                      />
                    </span>
                  </div>

                  <div className="w-full pl-16 sm:pl-0 sm:w-1/2" />

                  <div
                    className={`w-full pl-16 sm:pl-0 sm:w-1/2 ${
                      isRight ? "sm:pr-12" : "sm:pl-12"
                    }`}
                  >
                    <GlassCard className="p-6 sm:p-7">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="rounded-full bg-primary/15 border border-primary/30 px-2.5 py-0.5 text-[10px] font-semibold text-primary-light uppercase tracking-wide">
                            In Progress
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-ink mb-1">
                        {item.stage}
                      </h3>
                      <p className="text-sm font-medium text-ink-muted mb-3">
                        {item.institute}
                      </p>
                      <p className="text-sm text-ink-muted leading-6">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
