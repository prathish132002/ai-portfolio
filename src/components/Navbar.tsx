"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMode } from "@/context/ModeContext";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { mode, toggleMode } = useMode();
  const accentColor = mode === "student" ? "#10b981" : "#7c3aed";
  const navBg = mode === "student" ? "rgba(240, 253, 244, 0.9)" : "rgba(245, 243, 255, 0.9)";
  const navBorder = mode === "student" ? "rgba(16, 185, 129, 0.08)" : "rgba(124, 58, 237, 0.08)";

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      backgroundColor: navBg,
      backdropFilter: "blur(20px)",
      borderBottom: `1px solid ${navBorder}`,
    }}>
      <nav style={{
        maxWidth: "94%", margin: "0 auto", padding: "0 32px",
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ fontSize: 16, fontWeight: 700, color: "#1a1b2e", letterSpacing: "-0.03em", flexShrink: 0 }}>
          Tyson
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "nowrap" }}>
          {/* Mode Toggle Switch */}
          <button 
            onClick={toggleMode}
            style={{
              padding: "4px 8px",
              borderRadius: "20px",
              border: mode === 'freelance' ? "1px solid rgba(124, 58, 237, 0.2)" : "1px solid rgba(16, 185, 129, 0.2)",
              backgroundColor: mode === 'freelance' ? "rgba(124, 58, 237, 0.05)" : "rgba(16, 185, 129, 0.05)",
              marginRight: "4px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            title={`Switch to ${mode === 'freelance' ? 'Student' : 'Freelance'} Mode`}
          >
            <span className="hide-mobile" style={{ 
              fontSize: 9, fontWeight: 800, 
              color: mode === 'freelance' ? "#7c3aed" : "#9ca3af",
              marginRight: 6, opacity: mode === 'freelance' ? 1 : 0.6
            }}>BUSINESS</span>
            
            <div style={{
              width: 32, height: 16, borderRadius: 8,
              backgroundColor: mode === 'freelance' ? "rgba(124, 58, 237, 0.8)" : "rgba(16, 185, 129, 0.8)",
              position: "relative",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: 5, backgroundColor: "#fff",
                position: "absolute", top: 3,
                left: mode === 'freelance' ? 3 : 19,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }} />
            </div>

            <span className="hide-mobile" style={{ 
              fontSize: 9, fontWeight: 800, 
              color: mode === 'student' ? "#10b981" : "#9ca3af",
              marginLeft: 6, opacity: mode === 'student' ? 1 : 0.6
            }}>RECRUITER</span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link" style={{
                fontSize: 13, fontWeight: 600, padding: "6px 10px", borderRadius: 6,
                color: pathname === link.href ? "#1a1b2e" : "#4b5563",
                backgroundColor: pathname === link.href ? "rgba(0,0,0,0.04)" : "transparent",
              }}>
                {link.label}
              </Link>
            ))}
          </div>

          <a href="/contact" style={{
            marginLeft: 4, padding: "8px 16px",
            borderRadius: 8, fontSize: 13, fontWeight: 700,
            textDecoration: "none",
            background: mode === "student" ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : undefined,
            color: "white"
          }} className={`${mode === "student" ? "" : "btn-primary btn-gradient"} hide-mobile`}>
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
