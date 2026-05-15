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
        <Link href="/" style={{ fontSize: 16, fontWeight: 700, color: "#1a1b2e", letterSpacing: "-0.03em" }}>
          Tyson
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* Mode Toggle Switch */}
          <button 
            onClick={toggleMode}
            style={{
              padding: "6px 12px",
              borderRadius: "20px",
              border: mode === 'freelance' ? "1px solid rgba(124, 58, 237, 0.2)" : "1px solid rgba(16, 185, 129, 0.2)",
              backgroundColor: mode === 'freelance' ? "rgba(124, 58, 237, 0.05)" : "rgba(16, 185, 129, 0.05)",
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            title={`Switch to ${mode === 'freelance' ? 'Student' : 'Freelance'} Mode`}
          >
            <span style={{ 
              fontSize: 10, fontWeight: 800, 
              color: mode === 'freelance' ? "#7c3aed" : "#9ca3af",
              marginRight: 6, opacity: mode === 'freelance' ? 1 : 0.6
            }}>BUSINESS</span>
            
            <div style={{
              width: 38, height: 20, borderRadius: 10,
              backgroundColor: mode === 'freelance' ? "rgba(124, 58, 237, 0.8)" : "rgba(16, 185, 129, 0.8)",
              position: "relative",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <div style={{
                width: 14, height: 14, borderRadius: 7, backgroundColor: "#fff",
                position: "absolute", top: 3,
                left: mode === 'freelance' ? 3 : 21,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }} />
            </div>

            <span style={{ 
              fontSize: 10, fontWeight: 800, 
              color: mode === 'student' ? "#10b981" : "#9ca3af",
              marginLeft: 6, opacity: mode === 'student' ? 1 : 0.6
            }}>RECRUITER</span>
          </button>

          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" style={{
              fontSize: 14, fontWeight: 500, padding: "6px 14px", borderRadius: 6,
              color: pathname === link.href ? "#1a1b2e" : "#4b5563",
              backgroundColor: pathname === link.href ? "rgba(0,0,0,0.04)" : "transparent",
            }}>
              {link.label}
            </Link>
          ))}
          <a href="/contact" style={{
            marginLeft: 8, padding: "10px 24px",
            borderRadius: 10, fontSize: 14, fontWeight: 700,
            textDecoration: "none",
            background: mode === "student" ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : undefined,
            color: "white"
          }} className={mode === "student" ? "" : "btn-primary btn-gradient"}>
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
