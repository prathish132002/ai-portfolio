import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon } from "@/components/Icons";

const projects: Record<string, any> = {
  "speakeasy-ai": {
    title: "SpeakEasy AI",
    subtitle: "Adaptive Interview Practice System",
    category: "AI / Web Application",
    liveUrl: "https://live-interview-app.vercel.app",
    tags: ["React", "TypeScript", "AI APIs", "TTS/STT Integration"],
    overview: "An AI-powered interview simulation platform designed to help users practice and improve their interview skills in real-time. The system conducts mock interviews, analyzes user responses, and provides structured feedback based on content, clarity, and confidence.",
    missionObjective: "Most candidates prepare for interviews using static resources — sample questions without any feedback. Blindspots accumulate and performance stays stagnant. The objective was to build an adaptive simulation engine that generates role-specific interrogations in real-time, moving preparation from passive reading to performance-based simulation.",
    systemArchitecture: "Operates on a low-latency React state orchestration model tightly coupled with WebSocket or polling mechanisms to rapidly process audio-to-text. Incoming transcriptions are dispatched to an AI model pre-loaded with objective scoring schemas via advanced prompt engineering (Few-Shot & Chain-of-Thought). This ensures the feedback loop is deterministic, hallucination-free, and returned in sub-second intervals.",
    technicalPropulsion: [
      { name: "React", reason: "Component-based UI handling the complex, low-latency interview session state." },
      { name: "TypeScript", reason: "Ensures strict type-safety across the telemetry payload and API responses." },
      { name: "AI APIs", reason: "Core model execution for dynamic question generation and zero-shot NLP evaluation." },
      { name: "TTS/STT", reason: "Real-time speech-to-text bridging for natural conversational flow." },
    ],
    features: [
      "Role-based mock simulation tailored to specific job schematics",
      "Real-time dynamic question generation via language models",
      "Performance scoring across objective metrics (content, clarity, confidence)",
      "Continuous audio-text interaction support",
    ],
    atmosphericImpact: "Successfully elevated user preparation efficiency, simulating high-pressure environments and providing immediate actionable data, reducing blindspots before actual deployment.",
  },
  "resumeforge-ai": {
    title: "ResumeForge AI",
    subtitle: "Dynamic Resume Builder",
    category: "AI / Web Application",
    liveUrl: "https://ats-resume-creator.vercel.app",
    tags: ["React", "TypeScript", "AI APIs"],
    overview: "An AI-driven resume generation platform that helps users create structured, professional resumes based on minimal input. The system generates optimized content tailored to job roles and improves clarity, formatting, and keyword relevance.",
    missionObjective: "Bypassing ATS (Applicant Tracking Systems) requires specific algorithmic alignment that candidates struggle with. The mission was to forge a prompt-driven content engine that ingests raw background data and synthesizes role-optimized, mathematically aligned resume structures.",
    technicalPropulsion: [
      { name: "React", reason: "Real-time editing interface with immediate visual preview generation." },
      { name: "TypeScript", reason: "Type-safe management of deeply nested user background state structures." },
      { name: "AI APIs", reason: "Translates sparse user inputs into highly optimized, professional copy." },
    ],
    features: [
      "AI-driven content synthesis from minimal raw data",
      "Role-specific keyword targeting for ATS alignment",
      "Structured section-by-section automated formatting",
      "Clean, high-fidelity PDF export protocols",
    ],
    atmosphericImpact: "Dramatically reduces the time-to-deployment for job seekers, increasing their statistical probability of passing automated screening filters.",
  },
  "estateflow": {
    title: "EstateFlow",
    subtitle: "Real Estate Lead Automation System",
    category: "Automation / Web Application",
    liveUrl: null,
    tags: ["React", "REST APIs", "Backend Integration"],
    overview: "A real estate platform that streamlines communication between users and agents by automating lead handling and transfer. The system captures user interest, processes incoming data, and routes leads to agents — improving response time and conversion.",
    missionObjective: "Manual lead routing in real estate creates unacceptable latency, causing high-intent users to drop off. The objective was to design an autonomous manifold that captures, qualifies, and routes leads without human intervention in the pipeline.",
    technicalPropulsion: [
      { name: "React", reason: "Frontend terminal for lead ingestion and agent dashboard readouts." },
      { name: "REST APIs", reason: "Data transmission layer interfacing with external CRMs and comms networks." },
      { name: "Backend Logic", reason: "Asynchronous routing algorithms based on predefined qualification parameters." },
    ],
    features: [
      "Autonomous lead capture from distributed sources",
      "Algorithmic qualification and priority routing",
      "Real-time user-agent communication bridging",
      "Comprehensive telemetry tracking for agent conversion",
    ],
    atmosphericImpact: "Eliminated manual queue times, accelerating lead response velocity to near-instantanous speeds and driving higher baseline conversion rates.",
  },
  "adgenius-ai": {
    title: "AdGenius AI",
    subtitle: "Automated Marketing Content Generator",
    category: "AI / Web Application",
    liveUrl: null,
    tags: ["React", "AI APIs"],
    overview: "An AI-powered marketing tool that generates complete campaign strategies based on a single brand input — ad creatives, a 30-day content schedule, and strategic recommendations.",
    missionObjective: "Small teams lack the bandwidth for sustained, multi-channel marketing campaigns. The mission was to build a centralized command module that synthesizes a complete 30-day temporal content strategy from a single, initial brand prompt.",
    technicalPropulsion: [
      { name: "React", reason: "Interactive campaign dashboard displaying generated timelines and assets." },
      { name: "AI APIs", reason: "Sophisticated prompt chaining to maintain brand consistency across generated outputs." },
    ],
    features: [
      "Autonomous generation of ad copy and visual concepts",
      "Algorithmic 30-day timeline creation and scheduling",
      "Platform-specific tone matching protocols",
      "Strategic campaign parameter suggestions",
    ],
    atmosphericImpact: "Empowered singular users to deploy agency-level campaign structures in minutes, radically increasing outbound marketing velocity.",
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects[resolvedParams.slug];
  if (!project) notFound();

  return (
    <div className="page-container">
      <section style={{ padding: "56px 0 96px" }}>

        {/* Back button */}
        <Link href="/projects" className="back-btn" style={{ marginBottom: 44, fontWeight: 700, fontSize: 13 }}>
          <ArrowLeftIcon size={16} />
          All Projects
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 48, paddingBottom: 36, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener" style={{
                fontSize: 11, fontWeight: 600, color: "#4ade80",
                backgroundColor: "rgba(74,222,128,0.08)", padding: "3px 10px",
                borderRadius: 4, border: "1px solid rgba(74,222,128,0.2)",
                display: "flex", alignItems: "center", gap: 4,
              }}>
                Live <ExternalLinkIcon size={11} />
              </a>
            ) : (
              <span style={{
                fontSize: 11, fontWeight: 600, color: "#06b6d4",
                backgroundColor: "rgba(6,182,212,0.08)", padding: "3px 10px",
                borderRadius: 4, border: "1px solid rgba(6,182,212,0.18)",
              }}>Built</span>
            )}
            <span style={{ fontSize: 13, color: "#7c3aed", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{project.category}</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#1a1b2e", letterSpacing: "-0.05em", marginBottom: 12, lineHeight: 1.1 }}>
            {project.title}
          </h1>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>{project.subtitle}</p>
          <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.8, maxWidth: 660, marginBottom: 24, fontWeight: 500 }}>{project.overview}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.tags.map((tag: string) => (
              <span key={tag} style={{
                fontSize: 12, color: "#1a1b2e",
                backgroundColor: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.08)",
                padding: "4px 12px", borderRadius: 100,
                fontWeight: 600
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Mission Objective */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Mission Objective</h2>
          <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.8, fontWeight: 500 }}>{project.missionObjective}</p>
        </div>

        {/* Deep Dive Architecture (if exists) */}
        {project.systemArchitecture && (
          <div style={{ marginBottom: 52 }}>
            <h2 style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>System Architecture</h2>
            <div style={{
              padding: "24px 28px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
            }}>
              <p style={{ fontSize: 15, color: "#1a1b2e", lineHeight: 1.8, fontFamily: "monospace", fontWeight: 500 }}>{project.systemArchitecture}</p>
            </div>
          </div>
        )}

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginBottom: 48 }} />

        {/* Mission Specs / Features */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>System Capabilities</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {project.features.map((f: string) => (
              <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#7c3aed", flexShrink: 0, fontSize: 16, lineHeight: "24px", fontWeight: 800 }}>—</span>
                <span style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.6, fontWeight: 500 }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginBottom: 48 }} />

        {/* Technical Propulsion */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Technical Propulsion</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {project.technicalPropulsion.map((t: any) => (
              <div key={t.name} style={{
                display: "flex", gap: 20, alignItems: "flex-start",
                padding: "18px 22px", backgroundColor: "rgba(255, 255, 255, 0.4)",
                border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10, flexWrap: "wrap",
              }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#1a1b2e", minWidth: 140, flexShrink: 0 }}>{t.name}</span>
                <span style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, fontWeight: 500 }}>{t.reason}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginBottom: 48 }} />

        {/* Atmospheric Impact */}
        <div style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Atmospheric Impact</h2>
          <div style={{
            padding: "24px 28px",
            backgroundColor: "rgba(124, 58, 237, 0.05)",
            borderLeft: "4px solid #7c3aed",
            borderRadius: "0 12px 12px 0",
          }}>
            <p style={{ fontSize: 16, color: "#1a1b2e", lineHeight: 1.8, fontWeight: 600 }}>{project.atmosphericImpact}</p>
          </div>
        </div>

        {/* Live CTA */}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <button className="btn-primary btn-gradient" style={{
              padding: "16px 36px", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              Engage System <ExternalLinkIcon size={16} />
            </button>
          </a>
        )}

        <div style={{ marginTop: 80, paddingTop: 48, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <Link href="/projects" className="back-btn" style={{ fontSize: 13, color: "#1a1b2e", fontWeight: 700 }}>
            <ArrowLeftIcon size={16} />
            Back to Projects
          </Link>
        </div>

      </section>
    </div>
  );
}
