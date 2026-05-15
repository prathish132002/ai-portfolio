"use client";

import { motion } from "framer-motion";

export default function SkeletonHero() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 440, height: 440, display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Skeleton Mascot */}
      <motion.img
        src="/skeleton_waving.png"
        alt="Skeleton Mascot"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 1,
        }}
      />

      {/* Floating "Hi" Speech Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0, x: -20, y: 20 }}
        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        style={{
          position: "absolute",
          top: "10%",
          right: "0%",
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          border: "2px solid #10b981",
          boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)",
          zIndex: 10,
          fontWeight: 800,
          fontSize: "24px",
          color: "#1a1b2e",
        }}
      >
        Hi! 💀
        {/* Pointer */}
        <div style={{
          position: "absolute",
          bottom: "-8px",
          left: "20px",
          width: "14px",
          height: "14px",
          backgroundColor: "white",
          borderRight: "2px solid #10b981",
          borderBottom: "2px solid #10b981",
          transform: "rotate(45deg)",
        }} />
      </motion.div>

      {/* Background Glow Effect */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)",
        zIndex: 0,
        borderRadius: "50%",
      }} />
    </div>
  );
}
