import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";

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
    slug: "resumeforge-ai",
    title: "ResumeForge AI",
    subtitle: "Dynamic Resume Builder",
    description: "An AI-powered propulsion engine for career advancement. It distills minimal user input into optimized, ATS-compliant structured resumes tailored to specific roles, accelerating the path to deployment.",
    tags: ["React", "TypeScript", "AI APIs"],
    manifest: "// Deployment Readiness: ATS-Optimized",
    liveUrl: "https://ats-resume-creator.vercel.app",
  },
  {
    slug: "estateflow",
    title: "EstateFlow",
    subtitle: "Real Estate Lead Automation System",
    description: "A high-efficiency routing manifold that eliminates communication friction. Captures inbound signals, autonomously qualifies leads, and establishes instant connections with agents to maximize conversion velocity.",
    tags: ["React", "REST APIs", "Backend Integration"],
    manifest: "// Conversion Velocity: +40%",
    liveUrl: null,
  },
  {
    slug: "adgenius-ai",
    title: "AdGenius AI",
    subtitle: "Automated Marketing Content Generator",
    description: "A centralized command module for marketing strategy. From a single brand input, it autonomously synthesizes ad creatives, 30-day temporal content schedules, and calculated campaign trajectories.",
    tags: ["React", "AI APIs"],
    liveUrl: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <section style={{ padding: "56px 0 96px" }}>

        {/* Back */}
        <Link href="/" className="back-btn nav-link" style={{ fontSize: 13, color: "#52525b", marginBottom: 44, display: "inline-flex", fontWeight: 500 }}>
          <ArrowLeftIcon size={15} />
          Home
        </Link>

        <div style={{ marginBottom: 52 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Portfolio</p>
          <h1 style={{ fontSize: "clamp(34px, 6vw, 48px)", fontWeight: 800, color: "#1a1b2e", letterSpacing: "-0.06em", marginBottom: 16 }}>Projects</h1>
          <p style={{ fontSize: 20, color: "#4b5563", maxWidth: 720, fontWeight: 500, lineHeight: 1.7 }}>
            AI systems built for real users — from interview prep to marketing automation.
          </p>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => {
            const bentoClass = (index === 0 || index === 3) ? "bento-large" : "bento-standard";
            
            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} className={`block no-underline ${bentoClass}`}>
                <div className="card-hover" style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 11, padding: "26px", height: "100%", display: "flex", flexDirection: "column"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <h3 style={{ fontSize: 26, fontWeight: 700, color: "#1a1b2e", letterSpacing: "-0.02em" }}>
                      {project.title}
                    </h3>
                    {project.liveUrl ? (
                      <span style={{
                        fontSize: 10, fontWeight: 600, color: "#4ade80",
                        backgroundColor: "rgba(74,222,128,0.08)", padding: "2px 8px",
                        borderRadius: 4, border: "1px solid rgba(74,222,128,0.2)",
                        flexShrink: 0, marginLeft: 10,
                      }}>Live</span>
                    ) : (
                      <span style={{
                        fontSize: 10, fontWeight: 600, color: "#06b6d4",
                        backgroundColor: "rgba(6,182,212,0.08)", padding: "2px 8px",
                        borderRadius: 4, border: "1px solid rgba(6,182,212,0.18)",
                        flexShrink: 0, marginLeft: 10,
                      }}>Built</span>
                    )}
                  </div>
                  <p style={{ fontSize: 15, color: "#7c3aed", marginBottom: 16, fontWeight: 700, letterSpacing: "0.03em", textTransform: "uppercase" }}>{project.subtitle}</p>
                  <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.6, marginBottom: project.manifest ? 14 : "auto", flexGrow: 1, fontWeight: 500 }}>{project.description}</p>
                  {project.manifest && (
                    <p style={{ fontSize: 13, color: "#16a34a", fontFamily: "monospace", marginBottom: "auto", flexGrow: 1, paddingTop: 4, fontWeight: 600 }}>
                      {project.manifest}
                    </p>
                  )}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 20 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: 10, color: "#c084fc",
                        backgroundColor: "rgba(167, 139, 250, 0.08)",
                        border: "1px solid rgba(167, 139, 250, 0.2)",
                        padding: "3px 10px", borderRadius: 100,
                        fontWeight: 600
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom back */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/" className="back-btn nav-link" style={{ fontSize: 13, color: "#52525b", display: "inline-flex", fontWeight: 500 }}>
            <ArrowLeftIcon size={15} />
            Back to Home
          </Link>
        </div>

      </section>
    </div>
  );
}
