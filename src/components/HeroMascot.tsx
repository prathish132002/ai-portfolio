"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

interface HeroMascotProps {
  imageSrc: string;
  message: string;
  accentColor: string;
}

export default function HeroMascot({ imageSrc, message, accentColor }: HeroMascotProps) {
  // Mouse tracking motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothing the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms for different layers
  const gridX = useTransform(smoothX, [0, 1000], [5, -5]);
  const gridY = useTransform(smoothY, [0, 1000], [5, -5]);

  const shapesX = useTransform(smoothX, [0, 1000], [30, -30]);
  const shapesY = useTransform(smoothY, [0, 1000], [30, -30]);

  const mascotX = useTransform(smoothX, [0, 1000], [-20, 20]);
  const mascotY = useTransform(smoothY, [0, 1000], [-20, 20]);
  const mascotRotate = useTransform(smoothX, [0, 1000], [-2, 2]);

  const bubbleX = useTransform(smoothX, [0, 1000], [40, -40]);
  const bubbleY = useTransform(smoothY, [0, 1000], [40, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 500, height: 500, display: "flex", justifyContent: "center", alignItems: "center", perspective: "1000px" }}>
      
      {/* ── BACKGROUND DECORATIONS ── */}
      
      {/* Tech Grid (Subtle Parallax) */}
      <motion.div style={{
        position: "absolute",
        width: "120%",
        height: "120%",
        backgroundImage: `radial-gradient(${accentColor}33 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
        opacity: 0.3,
        maskImage: "radial-gradient(circle, black 40%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 80%)",
        zIndex: 0,
        x: gridX,
        y: gridY
      }} />

      {/* Floating 3D-like Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2], 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity, 
            delay: i * 0.8,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            width: i % 2 === 0 ? "40px" : "20px",
            height: i % 2 === 0 ? "40px" : "20px",
            border: `2px solid ${accentColor}44`,
            borderRadius: i % 3 === 0 ? "50%" : "8px",
            top: `${20 + (i * 15)}%`,
            left: `${10 + (i * 20)}%`,
            zIndex: 0,
            backdropFilter: "blur(2px)",
            x: useTransform(smoothX, [0, 1000], [(i + 1) * 10, (i + 1) * -10]),
            y: useTransform(smoothY, [0, 1000], [(i + 1) * 10, (i + 1) * -10]),
          }}
        />
      ))}

      {/* Background Glow Hub */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "70%",
          height: "70%",
          background: `radial-gradient(circle, ${accentColor}22 0%, ${accentColor}00 70%)`,
          zIndex: 0,
          borderRadius: "50%",
          x: gridX,
          y: gridY
        }}
      />

      {/* ── MAIN MASCOT (Interactive Parallax + Circular Frame) ── */}
      
      <motion.div
        style={{
          width: "380px",
          height: "380px",
          zIndex: 2,
          x: mascotX,
          y: mascotY,
          rotateY: mascotRotate,
          rotateX: useTransform(smoothY, [0, 1000], [2, -2]),
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
          borderRadius: "50%", // Circular Frame
          overflow: "hidden", // Clip content to circle
          border: `4px solid ${accentColor}33`, // Subtle glass border
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(4px)",
          boxShadow: `inset 0 0 40px ${accentColor}1a`
        }}
      >
        <motion.img
          src={imageSrc}
          alt="Mascot"
          initial={{ y: 30, opacity: 0, scale: 1.1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Cover ensures circle is filled
          }}
        />
      </motion.div>

      {/* Mascot Shadow/Platform */}
      <motion.div
        animate={{ 
          scaleX: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "10%",
          width: "40%",
          height: "20px",
          backgroundColor: "black",
          borderRadius: "50%",
          filter: "blur(20px)",
          zIndex: 1,
          x: gridX,
        }}
      />

      {/* ── INTERACTION ELEMENTS ── */}

      {/* Floating "Hi" Speech Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0, x: -20, y: 20 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "8px 16px",
          borderRadius: "18px",
          border: `2px solid ${accentColor}`,
          boxShadow: `0 10px 25px ${accentColor}33`,
          zIndex: 10,
          fontWeight: 800,
          fontSize: "16px",
          color: "#1a1b2e",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backdropFilter: "blur(10px)",
          x: bubbleX,
          y: bubbleY,
          maxWidth: "240px",
        }}
      >
        {message}
        {/* Pointer */}
        <div style={{
          position: "absolute",
          bottom: "-8px",
          left: "24px",
          width: "16px",
          height: "16px",
          backgroundColor: "white",
          borderRight: `2px solid ${accentColor}`,
          borderBottom: `2px solid ${accentColor}`,
          transform: "rotate(45deg)",
          zIndex: -1
        }} />
      </motion.div>
    </div>
  );
}
