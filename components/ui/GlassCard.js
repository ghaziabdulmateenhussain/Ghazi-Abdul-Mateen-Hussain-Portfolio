"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  as: Component = "div",
  ...props
}) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={`glass rounded-2xl shadow-card ${
        hover ? "glass-hover" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
