"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Mode = "freelance" | "student";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("freelance");

  // On mount, read from localStorage if available
  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as Mode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const nextMode = prev === "freelance" ? "student" : "freelance";
      localStorage.setItem("portfolio-mode", nextMode);
      return nextMode;
    });
  };

  // Sync CSS variables with mode
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "student") {
      root.style.setProperty("--accent-color", "#10b981");
      root.style.setProperty("--accent-soft", "rgba(16, 185, 129, 0.08)");
      root.style.setProperty("--accent-glow", "rgba(52, 211, 153, 0.6)");
      root.style.setProperty("--accent-border", "rgba(16, 185, 129, 0.2)");
      root.style.setProperty("--accent-gradient", "linear-gradient(135deg, #10b981 0%, #059669 100%)");
      root.style.setProperty("--accent-gradient-hover", "linear-gradient(135deg, #34d399 0%, #10b981 100%)");
    } else {
      root.style.setProperty("--accent-color", "#7c3aed");
      root.style.setProperty("--accent-soft", "rgba(124, 58, 237, 0.05)");
      root.style.setProperty("--accent-glow", "rgba(167, 139, 250, 0.6)");
      root.style.setProperty("--accent-border", "rgba(124, 58, 237, 0.2)");
      root.style.setProperty("--accent-gradient", "linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)");
      root.style.setProperty("--accent-gradient-hover", "linear-gradient(135deg, #8b5cf6 0%, #d8b4fe 100%)");
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
