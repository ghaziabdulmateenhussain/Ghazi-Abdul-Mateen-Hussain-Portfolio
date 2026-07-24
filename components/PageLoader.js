"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const bootLines = [
  "booting portfolio.js",
  "loading components...",
  "compiling experience...",
  "ready.",
];

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < bootLines.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 260);
      return () => clearTimeout(t);
    }
    const finish = setTimeout(() => setVisible(false), 420);
    return () => clearTimeout(finish);
  }, [lineIndex]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-base"
        >
          <div className="w-[280px] font-mono text-sm">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-ink-muted tracking-widest text-xs uppercase">
                GAMH · portfolio
              </span>
            </div>
            <div className="space-y-1 min-h-[92px]">
              {bootLines.slice(0, lineIndex + 1).map((line, i) => (
                <p key={line} className="text-ink-muted">
                  <span className="text-accent">{">"}</span> {line}
                  {i === lineIndex && (
                    <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 bg-accent animate-blink" />
                  )}
                </p>
              ))}
            </div>
            <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${((lineIndex + 1) / bootLines.length) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full bg-gradient-primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
