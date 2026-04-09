import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GitHubIcon, LinkedInIcon, EmailIcon, InstagramIcon } from "@/components/Icons";
import { ModeProvider } from "@/context/ModeContext";

export const metadata: Metadata = {
  title: "Tyson — GenAI Builder",
  description: "Building real-world AI applications that solve practical problems. Focused on creating systems that improve user interaction, automate workflows, and deliver meaningful feedback.",
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/prathish132002", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/prathish-alampur", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/prathish_26_/", Icon: InstagramIcon },
  { label: "Email", href: "mailto:alampurjprathish@gmail.com", Icon: EmailIcon },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ModeProvider>
          <Navbar />
          <main className="page-container" style={{ minHeight: "calc(100vh - 160px)" }}>
            {children}
          </main>
          <footer style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "28px 32px",
            marginTop: 64,
          }}>
            <div className="page-container" style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", flexWrap: "wrap", gap: 16,
            }}>
              <span style={{ fontSize: 13, color: "#3f3f46" }}>Tyson · GenAI Builder</span>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                {socialLinks.map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener"
                    className="social-icon"
                    aria-label={label}
                    style={{ color: "#52525b", display: "flex", alignItems: "center" }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </ModeProvider>
      </body>
    </html>
  );
}
