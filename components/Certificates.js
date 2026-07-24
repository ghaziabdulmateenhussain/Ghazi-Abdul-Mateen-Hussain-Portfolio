"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, X, Download } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { certifications } from "@/lib/data";

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="relative py-28 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certificates"
          title="Courses & recognitions"
          description="A few certificates from courses and competitions I've completed along the way."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <GlassCard className="overflow-hidden h-full flex flex-col">
                <button
                  type="button"
                  onClick={() => setActive(cert)}
                  data-cursor="hover"
                  className="relative aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary-soft">
                    <Award size={16} className="text-accent" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-ink leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-5">{cert.issuer}</p>
                  <p className="mt-auto font-mono text-[11px] uppercase tracking-wider text-accent">
                    {cert.date}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full overflow-hidden rounded-2xl glass shadow-card">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="90vw"
                    className="object-contain bg-black/20"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-4 border-t border-border-glass">
                  <div>
                    <p className="text-sm font-semibold text-ink">{active.title}</p>
                    <p className="text-xs text-ink-muted">{active.issuer}</p>
                  </div>
                  <a
                    href={active.image}
                    download
                    data-cursor="hover"
                    className="btn-ghost !py-2 !px-3 shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download size={15} />
                  </a>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute -top-4 -right-4 flex h-9 w-9 items-center justify-center rounded-full glass text-ink shadow-card"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
