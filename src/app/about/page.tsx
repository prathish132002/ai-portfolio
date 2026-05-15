"use client";

import Link from "next/link";
import { ArrowLeftIcon, GitHubIcon, LinkedInIcon, EmailIcon, InstagramIcon } from "@/components/Icons";
import { useMode } from "@/context/ModeContext";

const skillGroups = [
  { category: "[ MODULE_01: FRONTEND ]", items: ["React", "TypeScript", "Tailwind CSS"] },
  { category: "[ MODULE_02: AI_CORE ]", items: ["Prompt Design", "AI API Integration", "Response Structuring"] },
  { category: "[ MODULE_03: SYSTEMS ]", items: ["Workflow Automation", "User Interaction Design", "Feedback Systems"] },
  { category: "[ MODULE_04: NETWORK ]", items: ["Git", "REST APIs", "Basic Backend Integration"] },
];

const socialLinks = [
  { label: "alampurjprathish@gmail.com", href: "mailto:alampurjprathish@gmail.com", Icon: EmailIcon },
  { label: "linkedin.com/in/prathish-alampur", href: "https://linkedin.com/in/prathish-alampur", Icon: LinkedInIcon },
  { label: "github.com/prathish132002", href: "https://github.com/prathish132002", Icon: GitHubIcon },
  { label: "instagram.com/prathish_26_", href: "https://www.instagram.com/prathish_26_/", Icon: InstagramIcon },
];

export default function AboutPage() {
  const { mode } = useMode();
  const accentColor = mode === "student" ? "#10b981" : "#7c3aed";
  const softBg = mode === "student" ? "rgba(16, 185, 129, 0.08)" : "rgba(124, 58, 237, 0.08)";
  const softBorder = mode === "student" ? "rgba(16, 185, 129, 0.2)" : "rgba(124, 58, 237, 0.2)";

  return (
    <div className="page-container" style={{ animation: "fadeIn 0.5s ease" }}>
      <section style={{ padding: "56px 0 96px" }}>

        {/* Back */}
        <Link href="/" className="back-btn nav-link" style={{ fontSize: 13, color: "#52525b", marginBottom: 44, display: "inline-flex", fontWeight: 500 }}>
          <ArrowLeftIcon size={15} />
          Home
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: accentColor, marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>About</p>
          <h1 style={{ fontSize: "clamp(34px, 6vw, 48px)", fontWeight: 800, color: "#1a1b2e", letterSpacing: "-0.06em", marginBottom: 32 }}>Tyson</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 880 }}>
            <p style={{ fontSize: 20, color: "#4b5563", lineHeight: 1.7, fontWeight: 500 }}>
              I am a GenAI-focused developer with a strong interest in building practical AI-driven applications. My work focuses on integrating AI into real-world use cases such as interview preparation, resume generation, marketing automation, and user experience enhancement.
            </p>
            <p style={{ fontSize: 20, color: "#4b5563", lineHeight: 1.7, fontWeight: 500 }}>
              Instead of just experimenting with AI models, I focus on building complete systems — from frontend interfaces to backend logic — that deliver clear value to users.
            </p>
            <p style={{ fontSize: 20, color: "#4b5563", lineHeight: 1.7, fontWeight: 500 }}>
              I have experience working with React, TypeScript, and AI APIs to create applications that are interactive, efficient, and user-focused.
            </p>
            <p style={{ fontSize: 20, color: "#4b5563", lineHeight: 1.7, fontWeight: 500 }}>
              Currently, I am focused on improving how AI can assist users in decision-making, communication, and productivity.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener"
                className="social-pill"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.06)", marginBottom: 48 }} />

        {/* Capabilities */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>Capabilities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {skillGroups.map((group) => (
              <div key={group.category} style={{
                backgroundColor: "rgba(255, 255, 255, 0.4)", border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 12, padding: "26px",
              }} className="card-hover">
              <div style={{ 
                fontSize: 13, fontWeight: 800, color: accentColor, fontFamily: "monospace", 
                letterSpacing: "0.06em", marginBottom: 20, display: "inline-flex", alignItems: "center",
                padding: "6px 12px", backgroundColor: softBg, borderRadius: 8,
                border: `1px solid ${softBorder}`, textTransform: "uppercase"
              }}>
                {group.category}
              </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {group.items.map((item) => (
                    <span key={item} style={{ fontSize: 18, color: "#4b5563", fontWeight: 600, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: accentColor, opacity: 0.4 }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginBottom: 48 }} />

        {/* Education */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>Education</h2>
          <div style={{
            padding: "20px 24px", backgroundColor: "rgba(255, 255, 255, 0.4)",
            border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1b2e", marginBottom: 4, letterSpacing: "-0.01em" }}>
                  B.Tech — Electronics & Communication Engineering
                </div>
                <div style={{ fontSize: 13, color: "#4b5563" }}>Jayaprakash Narayan College of Engineering</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: "#71717a", marginBottom: 4 }}>2021 – 2025</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: accentColor }}>CGPA: 7.20</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginBottom: 48 }} />

        {/* Certifications */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>Certifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { name: "Python, SQL, JavaScript, React.js, Node.js", issuer: "NXT Wave", year: null },
              { name: "AI Tools Certification", issuer: "Be10x", year: "2025" },
            ].map((cert, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 18px", backgroundColor: "rgba(255, 255, 255, 0.4)",
                border: "1px solid rgba(0,0,0,0.06)", borderRadius: 8, flexWrap: "wrap", gap: 8,
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1b2e", marginBottom: 2 }}>{cert.name}</div>
                  <div style={{ fontSize: 12, color: "#71717a" }}>{cert.issuer}</div>
                </div>
                {cert.year && <span style={{ fontSize: 12, color: accentColor, fontWeight: 700 }}>{cert.year}</span>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.06)", marginBottom: 48 }} />

        {/* Cricket / Beyond Code */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 11, fontWeight: 600, color: "#06b6d4", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
            Beyond Code
          </h2>

          <div style={{
            backgroundColor: "#111113",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 10,
            padding: "24px",
          }}>
            {/* Header row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#f5f5f7", marginBottom: 4, letterSpacing: "-0.01em" }}>
                  🏏 Cricket — All-rounder
                </div>
                <div style={{ fontSize: 13, color: "#71717a" }}>
                  Intra-district matches · CricHeroes verified
                </div>
              </div>
              <a
                href="https://cricheroes.com/player-profile/18740417/alampur-prathish/matches"
                target="_blank"
                rel="noopener"
                className="btn-ghost"
                style={{
                  padding: "6px 14px",
                  backgroundColor: "transparent",
                  color: "#a1a1aa",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 7,
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  whiteSpace: "nowrap",
                }}
              >
                View Profile ↗
              </a>
            </div>

            {/* Stat chips */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
              {[
                { label: "Matches", value: "120+" },
                { label: "Runs", value: "1000+" },
                { label: "Wickets", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} style={{
                  padding: "8px 16px",
                  backgroundColor: "rgba(6,182,212,0.06)",
                  border: "1px solid rgba(6,182,212,0.15)",
                  borderRadius: 7,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  minWidth: 80,
                }}>
                  <span style={{ fontSize: 17, fontWeight: 700, color: "#f5f5f7", letterSpacing: "-0.02em" }}>{stat.value}</span>
                  <span style={{ fontSize: 10, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.75 }}>
              Built consistency, adaptability, and decision-making under pressure through competitive cricket — skills that translate directly into how I approach engineering problems.
            </p>
          </div>
        </div>

        {/* Bottom back */}
        <div style={{ paddingTop: 32, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <Link href="/" className="back-btn nav-link" style={{ fontSize: 13, color: "#52525b", display: "inline-flex", fontWeight: 500 }}>
            <ArrowLeftIcon size={15} />
            Back to Home
          </Link>
        </div>

      </section>
    </div>
  );
}
