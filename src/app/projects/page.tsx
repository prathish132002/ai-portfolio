"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";
import { useMode } from "@/context/ModeContext";
import HolographicWrapper from "@/components/HolographicWrapper";

const projects = [
  {
    slug: "speakeasy-ai",
    title: "SpeakEasy AI",
    subtitle: "Adaptive Interview Practice System",
    description: "An intelligent simulation system designed to elevate interview prep. It subjects users to dynamic, AI-generated interrogations, analyzing telemetry—content, clarity, and confidence—to provide precise, actionable feedback.",
    tags: ["React", "TypeScript", "AI APIs", "TTS/STT"],
    liveUrl: "https://live-interview-app.vercel.app",
  },
  {
    slug: "viralquotes-ai",
    title: "ViralQuotes AI",
    subtitle: "YouTube Intelligence for Creators",
    description: "A professional-grade command center for YouTube creators. Integrates Gemini AI for content synthesis and YouTube Data API for real-time engagement tracking.",
    tags: ["React 19", "Gemini Pro", "Supabase", "YouTube API"],
  },
  {
    slug: "resumeforge-ai",
    title: "ResumeForge AI",
    subtitle: "Dynamic Resume Builder",
    description: "An AI-powered propulsion engine for career advancement. It distills minimal user input into optimized, ATS-compliant structured resumes tailored to specific roles, accelerating the path to deployment.",
    tags: ["React", "TypeScript", "AI APIs"],
    manifest: "// Deployment Readiness: ATS-Optimized",
    liveUrl: "https://ats-resume-creator.vercel.app",
  },
  {
    slug: "smart-blind-stick",
    title: "SmartBlind Stick",
    subtitle: "Assistive Navigation System",
    description: "A specialized IoT assistive device designed to provide autonomous navigation support for visually impaired individuals using ultrasonic sensing.",
    tags: ["Arduino", "Ultrasonic", "IoT", "C++"],
  },
  {
    slug: "mobile-controlled-robot",
    title: "Mobile Controlled Robot",
    subtitle: "Smartphone-Orchestrated Robotics",
    description: "A remote-controlled robotic platform that interfaces with a custom smartphone application for low-latency directional movement and PWM speed control.",
    tags: ["Arduino", "Bluetooth", "Robotics", "L298N"],
  },
  {
    slug: "estateflow",
    title: "EstateFlow",
    subtitle: "Real Estate Lead Automation",
    description: "A high-efficiency routing manifold that eliminates communication friction. Captures inbound signals, autonomously qualifies leads, and establishes instant connections.",
    tags: ["React", "REST APIs", "Backend Integration"],
    manifest: "// Conversion Velocity: +40%",
  },
];

export default function ProjectsPage() {
  const { mode } = useMode();
  const accentColor = mode === "student" ? "#10b981" : "#7c3aed";

  return (
    <div className="page-container" style={{ animation: "fadeIn 0.5s ease" }}>
      <section style={{ padding: "56px 0 96px" }}>

        {/* Back */}
        <Link href="/" className="back-btn nav-link" style={{ fontSize: 13, color: "#52525b", marginBottom: 44, display: "inline-flex", fontWeight: 500 }}>
          <ArrowLeftIcon size={15} />
          Home
        </Link>

        <div style={{ marginBottom: 52 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: accentColor, marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Portfolio</p>
          <h1 style={{ fontSize: "clamp(34px, 6vw, 48px)", fontWeight: 800, color: "#1a1b2e", letterSpacing: "-0.06em", marginBottom: 16 }}>Projects</h1>
          <p style={{ fontSize: "clamp(16px, 3vw, 20px)", color: "#4b5563", maxWidth: 720, fontWeight: 500, lineHeight: 1.7 }}>
            AI systems, IoT devices, and full-stack applications built for real-world impact.
          </p>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => {
            const bentoClass = (index === 0 || index === 1) ? "bento-large" : "bento-standard";
            
            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} className={`block no-underline ${bentoClass}`}>
                <HolographicWrapper accentColor={accentColor}>
                  <div className="card-hover" style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: 12, padding: "24px", height: "100%", display: "flex", flexDirection: "column",
                    backgroundColor: "white"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, gap: 12 }}>
                      <h3 style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 700, color: "#1a1b2e", letterSpacing: "-0.02em" }}>
                        {project.title}
                      </h3>
                      <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                        {project.liveUrl ? (
                          <span style={{
                            fontSize: 9, fontWeight: 700, color: "#4ade80",
                            backgroundColor: "rgba(74,222,128,0.08)", padding: "2px 6px",
                            borderRadius: 4, border: "1px solid rgba(74,222,128,0.2)",
                            textTransform: "uppercase"
                          }}>Live</span>
                        ) : (
                          <span style={{
                            fontSize: 9, fontWeight: 700, color: "#06b6d4",
                            backgroundColor: "rgba(6,182,212,0.08)", padding: "2px 6px",
                            borderRadius: 4, border: "1px solid rgba(6,182,212,0.18)",
                            textTransform: "uppercase"
                          }}>Built</span>
                        )}
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: accentColor, marginBottom: 16, fontWeight: 700, letterSpacing: "0.03em", textTransform: "uppercase" }}>{project.subtitle}</p>
                    <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#4b5563", lineHeight: 1.6, marginBottom: project.manifest ? 14 : "auto", flexGrow: 1, fontWeight: 500 }}>{project.description}</p>
                    {project.manifest && (
                      <p className="text-sm-mobile" style={{ fontSize: 13, color: "#16a34a", fontFamily: "monospace", marginBottom: "auto", flexGrow: 1, paddingTop: 4, fontWeight: 600 }}>
                        {project.manifest}
                      </p>
                    )}
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 20 }}>
                      {project.tags.map((tag) => (
                        <span key={tag} style={{
                          fontSize: 10, color: accentColor,
                          backgroundColor: "var(--accent-soft)",
                          border: "1px solid var(--accent-border)",
                          padding: "3px 10px", borderRadius: 100,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.02em"
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </HolographicWrapper>
              </Link>
            );
          })}
        </div>

        {/* Bottom back */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <Link href="/" className="back-btn nav-link" style={{ fontSize: 13, color: "#52525b", display: "inline-flex", fontWeight: 600 }}>
            <ArrowLeftIcon size={15} />
            Back to Home
          </Link>
        </div>

      </section>
    </div>
  );
}
