"use client";

import { motion } from "framer-motion";
import { Code2, FileSpreadsheet, Languages } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skillGroups } from "@/lib/data";

const groupIcons = {
  "Technical Skills": Code2,
  "Microsoft Office": FileSpreadsheet,
  Languages: Languages,
};

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-ink">{name}</span>
        <span className="text-xs font-mono text-ink-faint">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-primary"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-hero-glow opacity-60"
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I work with"
          description="A snapshot of my technical toolkit, productivity software, and the languages I communicate in."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[group.title] ?? Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: gi * 0.1, ease: "easeOut" }}
              >
                <GlassCard className="p-7 sm:p-8 h-full">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary-soft">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {group.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                        {group.note}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    {group.skills.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={0.15 + si * 0.1}
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
