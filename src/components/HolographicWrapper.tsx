"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function HolographicWrapper({ children, accentColor = "#7c3aed" }: { children: ReactNode; accentColor?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse positions relative to the card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothing
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transforms for the "glare/sheen"
  const sheenX = useTransform(smoothX, [-200, 200], ["0%", "100%"]);
  const sheenY = useTransform(smoothY, [-200, 200], ["0%", "100%"]);
  const sheenOpacity = useTransform(smoothX, [-200, 0, 200], [0, 0.4, 0]);

  // Subtle tilt effect
  const rotateX = useTransform(smoothY, [-200, 200], [5, -5]);
  const rotateY = useTransform(smoothX, [-200, 200], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        height: "100%",
        position: "relative",
      }}
    >
      {/* The Actual Content */}
      <div style={{ height: "100%", transform: "translateZ(20px)" }}>
        {children}
      </div>

      {/* The Holographic Sheen Layer */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5,
          pointerEvents: "none",
          borderRadius: "inherit",
          background: `radial-gradient(circle at ${sheenX} ${sheenY}, ${accentColor}33 0%, transparent 60%)`,
          opacity: sheenOpacity,
          mixBlendMode: "screen",
        }}
      />
      
      {/* Edge Reflection */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 6,
          pointerEvents: "none",
          borderRadius: "inherit",
          background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)`,
          backgroundSize: "200% 200%",
          backgroundPosition: `${sheenX} ${sheenY}`,
          opacity: sheenOpacity,
        }}
      />
    </motion.div>
  );
}
