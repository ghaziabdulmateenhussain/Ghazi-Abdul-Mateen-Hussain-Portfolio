"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-4 ${alignment} max-w-2xl mb-14`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
