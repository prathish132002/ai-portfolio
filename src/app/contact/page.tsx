"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, EmailIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from "@/components/Icons";
import { useMode } from "@/context/ModeContext";

const contactLinks = [
  { label: "Email", value: "alampurjprathish@gmail.com", href: "mailto:alampurjprathish@gmail.com", Icon: EmailIcon },
  { label: "LinkedIn", value: "linkedin.com/in/prathish-alampur", href: "https://linkedin.com/in/prathish-alampur", Icon: LinkedInIcon },
  { label: "GitHub", value: "github.com/prathish132002", href: "https://github.com/prathish132002", Icon: GitHubIcon },
  { label: "Instagram", value: "instagram.com/prathish_26_", href: "https://www.instagram.com/prathish_26_/", Icon: InstagramIcon },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const { mode } = useMode();
  const accentColor = mode === "student" ? "#10b981" : "#7c3aed";
  const softBg = mode === "student" ? "rgba(16, 185, 129, 0.05)" : "rgba(124, 58, 237, 0.05)";
  const glowShadow = mode === "student" ? "0 8px 16px rgba(16, 185, 129, 0.08)" : "0 8px 16px rgba(124, 58, 237, 0.08)";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: 10,
    color: "#1a1b2e",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    lineHeight: 1.6,
    boxSizing: "border-box",
    transition: "all 0.2s",
  };

  return (
    <div className="page-container" style={{ animation: "fadeIn 0.5s ease" }}>
      <section className="p-mobile" style={{ padding: "56px 0 96px" }}>

        {/* Back */}
        <Link href="/" className="back-btn" style={{ fontSize: 13, color: "#1a1b2e", marginBottom: 32, fontWeight: 700 }}>
          <ArrowLeftIcon size={16} />
          Home
        </Link>

        <div style={{ marginBottom: 44 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: accentColor, marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</p>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 800, color: "#1a1b2e", letterSpacing: "-0.05em", marginBottom: 16, lineHeight: 1.1 }}>
            Let's build something useful.
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#4b5563", lineHeight: 1.8, maxWidth: 520, fontWeight: 500 }}>
            If you're working on AI-driven products or need help integrating intelligent systems into your application, feel free to reach out.
          </p>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginBottom: 52 }} />

        {/* Contact links with icons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 72 }}>
          {contactLinks.map(({ label, value, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener"
              className="social-icon"
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "20px 0", borderBottom: "1px solid rgba(0,0,0,0.06)",
                textDecoration: "none", gap: 12,
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, overflow: "hidden" }}>
                <span style={{ color: accentColor, display: "flex", flexShrink: 0 }}>
                  <Icon size={18} />
                </span>
                <span className="hide-mobile" style={{ fontSize: 13, color: "#1a1b2e", fontWeight: 700, minWidth: 80 }}>{label}</span>
                <span style={{ fontSize: "clamp(13px, 3.5vw, 15px)", color: "#4b5563", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</span>
              </div>
              <span style={{ fontSize: 16, color: accentColor, opacity: 0.6, flexShrink: 0 }}>↗</span>
            </a>
          ))}
        </div>

        {/* Form */}
        {status === "sent" ? (
          <div style={{
            padding: "24px 28px", backgroundColor: softBg,
            border: `1px solid ${accentColor}26`, borderRadius: 12, maxWidth: 520,
          }}>
            <p style={{ fontSize: 16, color: accentColor, marginBottom: 6, fontWeight: 800 }}>Message sent.</p>
            <p style={{ fontSize: 15, color: "#4b5563", fontWeight: 600 }}>I'll get back to you within 24–48 hours.</p>
          </div>
        ) : (
          <div style={{ maxWidth: 520 }}>
            <p style={{ fontSize: 11, color: "#52525b", marginBottom: 20, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Or send a message
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="btn-stack stack-mobile" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-start" }}>
                <div className="full-mobile" style={{ width: "100%" }}>
                  <label style={{ fontSize: 11, fontWeight: 800, color: accentColor, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Name</label>
                  <input type="text" required placeholder="Your name" style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = accentColor;
                      e.currentTarget.style.backgroundColor = "#fff";
                      e.currentTarget.style.boxShadow = glowShadow;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                      e.currentTarget.style.boxShadow = "none";
                    }} />
                </div>
                <div className="full-mobile" style={{ width: "100%" }}>
                  <label style={{ fontSize: 11, fontWeight: 800, color: accentColor, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</label>
                  <input type="email" required placeholder="your@email.com" style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = accentColor;
                      e.currentTarget.style.backgroundColor = "#fff";
                      e.currentTarget.style.boxShadow = glowShadow;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                      e.currentTarget.style.boxShadow = "none";
                    }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 800, color: accentColor, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Message</label>
                <textarea required rows={5} placeholder="What are you building?"
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = accentColor;
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.boxShadow = glowShadow;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                    e.currentTarget.style.boxShadow = "none";
                  }} />
              </div>
              <div>
                <button type="submit" disabled={status === "sending"} className={`btn-primary btn-p-mobile ${mode === "student" ? "" : "btn-gradient"} full-mobile`} style={{
                  padding: "16px 36px", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700,
                  cursor: status === "sending" ? "not-allowed" : "pointer", fontFamily: "inherit",
                  background: mode === "student" ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : undefined,
                  color: "white"
                }}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Bottom back */}
        <div style={{ marginTop: 100, paddingTop: 48, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <Link href="/" className="back-btn" style={{ fontSize: 13, color: "#1a1b2e", fontWeight: 700 }}>
            <ArrowLeftIcon size={16} />
            Back to Home
          </Link>
        </div>

      </section>
    </div>
  );
}
