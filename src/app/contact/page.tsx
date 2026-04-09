"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, GitHubIcon, LinkedInIcon, EmailIcon, InstagramIcon } from "@/components/Icons";

const contactLinks = [
  { label: "Email", value: "alampurjprathish@gmail.com", href: "mailto:alampurjprathish@gmail.com", Icon: EmailIcon },
  { label: "LinkedIn", value: "linkedin.com/in/prathish-alampur", href: "https://linkedin.com/in/prathish-alampur", Icon: LinkedInIcon },
  { label: "GitHub", value: "github.com/prathish132002", href: "https://github.com/prathish132002", Icon: GitHubIcon },
  { label: "Instagram", value: "instagram.com/prathish_26_", href: "https://www.instagram.com/prathish_26_/", Icon: InstagramIcon },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

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
    <div className="page-container">
      <section style={{ padding: "56px 0 96px" }}>

        {/* Back */}
        <Link href="/" className="back-btn" style={{ fontSize: 13, color: "#1a1b2e", marginBottom: 32, fontWeight: 700 }}>
          <ArrowLeftIcon size={16} />
          Home
        </Link>

        <div style={{ marginBottom: 44 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#1a1b2e", letterSpacing: "-0.05em", marginBottom: 16 }}>
            Let's build something useful.
          </h1>
          <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.8, maxWidth: 520, fontWeight: 500 }}>
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
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ color: "#7c3aed", display: "flex", flexShrink: 0 }}>
                  <Icon size={19} />
                </span>
                <span style={{ fontSize: 14, color: "#1a1b2e", fontWeight: 700, minWidth: 80 }}>{label}</span>
                <span style={{ fontSize: 15, color: "#4b5563", fontWeight: 500 }}>{value}</span>
              </div>
              <span style={{ fontSize: 18, color: "#7c3aed", opacity: 0.6 }}>↗</span>
            </a>
          ))}
        </div>

        {/* Form */}
        {status === "sent" ? (
          <div style={{
            padding: "24px 28px", backgroundColor: "rgba(124, 58, 237, 0.05)",
            border: "1px solid rgba(124, 58, 237, 0.15)", borderRadius: 10, maxWidth: 520,
          }}>
            <p style={{ fontSize: 16, color: "#7c3aed", marginBottom: 6, fontWeight: 700 }}>Message sent.</p>
            <p style={{ fontSize: 15, color: "#4b5563", fontWeight: 500 }}>I'll get back to you within 24–48 hours.</p>
          </div>
        ) : (
          <div style={{ maxWidth: 520 }}>
            <p style={{ fontSize: 12, color: "#52525b", marginBottom: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>
              Or send a message
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ fontSize: 12, fontWeight: 500, color: "#71717a", display: "block", marginBottom: 7 }}>Name</label>
                  <input type="text" required placeholder="Your name" style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#7c3aed";
                      e.currentTarget.style.backgroundColor = "#fff";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(124, 58, 237, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                      e.currentTarget.style.boxShadow = "none";
                    }} />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#7c3aed", display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</label>
                  <input type="email" required placeholder="your@email.com" style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#7c3aed";
                      e.currentTarget.style.backgroundColor = "#fff";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(124, 58, 237, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                      e.currentTarget.style.boxShadow = "none";
                    }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 700, color: "#7c3aed", display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</label>
                <textarea required rows={5} placeholder="What are you building?"
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#7c3aed";
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(124, 58, 237, 0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                    e.currentTarget.style.boxShadow = "none";
                  }} />
              </div>
              <div>
                <button type="submit" disabled={status === "sending"} className="btn-primary btn-gradient" style={{
                  padding: "16px 36px", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700,
                  cursor: status === "sending" ? "not-allowed" : "pointer", fontFamily: "inherit",
                }}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Bottom back */}
        <div style={{ marginTop: 120, paddingTop: 48, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <Link href="/" className="back-btn" style={{ fontSize: 13, color: "#1a1b2e", fontWeight: 700 }}>
            <ArrowLeftIcon size={16} />
            Back to Home
          </Link>
        </div>

      </section>
    </div>
  );
}
