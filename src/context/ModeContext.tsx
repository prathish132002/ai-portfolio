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
