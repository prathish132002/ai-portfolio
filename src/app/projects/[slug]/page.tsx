"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon } from "@/components/Icons";
import { useMode } from "@/context/ModeContext";
import { use, useMemo } from "react";

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
    missionObjective: "Bypassing ATS (Applicant Tracking Systems) requires specific algorithmic alignment. The mission was to forge a prompt-driven content engine that ingests raw background data and synthesizes role-optimized, mathematically aligned resume structures for maximum industry impact.",
    systemArchitecture: "Utilizes a JSON-schema based content orchestration model. Sparse user inputs are injected into high-fidelity prompt templates, processed by AI, and returned as structured data objects. The frontend renders these objects into a live-previewing, high-fidelity PDF canvas utilizing browser-based print-media orchestration.",
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
    missionObjective: "Manual lead routing in real estate creates unacceptable latency. The objective was to design an autonomous manifold that captures, qualifies, and routes leads without human intervention in the pipeline, ensuring zero lead-leakage.",
    systemArchitecture: "Operates as a high-velocity event manifold. Lead ingestion points trigger serverless validation functions that score lead quality against predefined agent availability and specialty matrices. Routing is executed via low-latency REST calls to external CRM endpoints and communication gateways.",
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
    missionObjective: "Small teams lack the bandwidth for sustained marketing. The mission was to build a centralized command module that synthesizes a complete 30-day temporal content strategy from a single, initial brand prompt, effectively acting as a virtual marketing agency.",
    systemArchitecture: "Implements a recursive prompt chaining model. The system first derives 'Brand DNA' from user input, then uses that state to generate multi-channel ad copy, visual creative prompts, and a temporal calendar. Each step is validated against the previous to ensure strict brand voice consistency.",
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
  "smart-blind-stick": {
    title: "SmartBlind Stick",
    subtitle: "Assistive Navigation System",
    category: "IoT / Embedded Systems",
    liveUrl: null,
    tags: ["Arduino", "Ultrasonic Sensors", "C++", "Hardware Design"],
    overview: "A specialized IoT assistive device designed to provide autonomous navigation support for visually impaired individuals. The stick utilizes ultrasonic sensing to detect obstacles and provides tactile or auditory feedback to the user.",
    missionObjective: "The white cane has remained unchanged for decades. The mission was to build a proximity-aware extension that detects obstacles at chest and head height, providing a haptic safety net for visually impaired users in complex environments.",
    systemArchitecture: "A hardware-interrupt driven loop on an Arduino Uno. The system pulses 40kHz ultrasonic waves and calculates distance via time-of-flight math. If the distance falls below threshold limits, the controller triggers a pulse-width modulated (PWM) buzzer and vibration motor to provide tiered feedback intensity based on proximity.",
    technicalPropulsion: [
      { name: "Arduino Uno", reason: "Central micro-controller for processing sensor telemetry and triggering actuators." },
      { name: "Ultrasonic Sensors", reason: "High-frequency sound wave emission and reception for distance calculation." },
      { name: "Buzzer / Vibrator", reason: "Feedback loop providing non-visual haptic and auditory alerts to the user." },
    ],
    features: [
      "Real-time proximity detection (2cm to 400cm range)",
      "Variable feedback frequency based on obstacle distance",
      "Low-power consumption for extended mobile use",
      "Ergonomic hardware integration into standard assistive sticks",
    ],
    atmosphericImpact: "Significantly enhanced user confidence and safety in unfamiliar environments, reducing the risk of upper-body collisions.",
  },
  "mobile-controlled-robot": {
    title: "Mobile Controlled Robot",
    subtitle: "Smartphone-Orchestrated Robotic Unit",
    category: "Robotics / IoT",
    liveUrl: null,
    tags: ["Arduino", "Bluetooth", "Android Integration", "Robotics"],
    overview: "A remote-controlled robotic platform that interfaces with a custom smartphone application. The unit supports low-latency directional movement and speed control over a Bluetooth communication link.",
    missionObjective: "The goal was to bridge high-level mobile applications with low-level hardware orchestration. I designed a reliable command-and-control loop that allows a mobile unit to navigate complex spaces with near-instant response times.",
    systemArchitecture: "An asynchronous serial communication pipeline. A mobile application sends byte-encoded directional packets over a Bluetooth SPP (Serial Port Profile) link. The Arduino parses these packets in real-time to drive an L298N H-bridge motor controller, managing the differential steering of a 4-wheel drive chassis.",
    technicalPropulsion: [
      { name: "Arduino", reason: "Hardware logic controller for motor driver coordination and serial comms." },
      { name: "HC-05 Bluetooth", reason: "Wireless communication bridge for receiving real-time directional packets." },
      { name: "L298N Motor Driver", reason: "H-bridge module managing the voltage and direction of DC drive motors." },
    ],
    features: [
      "Low-latency remote orchestration via Bluetooth Serial",
      "Variable PWM speed control for precise maneuvering",
      "Robust 4-wheel drive chassis architecture",
      "Custom Android interface for directional control",
    ],
    atmosphericImpact: "Demonstrated successful integration of mobile UX with hardware robotics, serving as a foundational prototype for autonomous indoor delivery units.",
  },
  "viralquotes-ai": {
    title: "ViralQuotes AI",
    subtitle: "YouTube Intelligence for Modern Creators",
    category: "AI / SaaS / Creator Tools",
    liveUrl: null, // User didn't provide one, but mentioned it's a project
    tags: ["React 19", "Google Gemini", "Supabase", "YouTube API", "Recharts"],
    overview: "ViralQuotes AI is a professional-grade creator workflow manager designed to bridge the gap between content ideation and data-driven performance. It leverages the Google Gemini AI engine and the YouTube Data API to provide creators with a 'command center' for generating viral content, tracking engagement, and spying on competitor trends.",
    missionObjective: "ViralQuotes AI transforms the chaotic content creation process into a streamlined, data-backed workflow. By integrating real-time YouTube metrics with generative AI, I built a tool that doesn't just suggest what to make, but explains how to make it go viral through systematic trend alignment and performance telemetry.",
    systemArchitecture: "Built on a React 19 + Vite architecture for high-performance HMR. The backend utilizes Supabase (PostgreSQL) for secure data persistence and OAuth 2.0 for authenticated YouTube API access. The AI layer is orchestrated via Google Gemini Pro, facilitating multi-step prompt chaining for script synthesis and analytical gap analysis. Data visualization is powered by Recharts, rendering interactive telemetry for growth comparison.",
    technicalPropulsion: [
      { name: "React 19 + Vite", reason: "Ultra-fast development cycle and optimized production builds for complex creator dashboards." },
      { name: "Google Gemini Pro", reason: "Advanced LLM execution for video scripts, magnetic hooks, and zero-shot NLP evaluation." },
      { name: "Supabase", reason: "Robust PostgreSQL backend providing authentication, row-level security, and real-time listeners for content state changes." },
      { name: "YouTube Data API", reason: "Direct channel integration for live metrics including Views, Likes, and Engagement Rates for precise performance auditing." },
      { name: "Recharts", reason: "Interactive data visualization providing beautiful trend lines and competitive growth comparisons for strategic decision making." },
    ],
    features: [
      "AI-Powered Content Forge: Uses advanced Gemini models to generate high-conversion scripts, magnetic hooks, and SEO-optimized titles.",
      "Competitor Spy Engine: Analyzes top-performing channels to extract 'viral DNA'—the specific hooks and topics driving their growth.",
      "Real-Time Performance Analytics: Connects directly via OAuth to track live metrics and generates automated 'AI Insights' on video performance.",
      "Smart Content Vault: Every generated script and tracked video is stored in a secure Supabase backend with a Kanban-inspired status system.",
      "Automated Image Prompts: Automatically generates descriptive prompts for AI image tools (Midjourney/DALL-E) to streamline thumbnail creation.",
      "Gap Analysis: Algorithmically identifies content opportunities that competitors are missing, giving creators a significant competitive edge.",
    ],
    atmosphericImpact: "ViralQuotes AI successfully transformed the creator process from intuition-based guessing to a data-driven science, enabling creators to build reusable content libraries and hit viral benchmarks with mathematical consistency.",
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { mode } = useMode();
  
  const project = projects[resolvedParams.slug];
  if (!project) notFound();

  const accentColor = mode === "student" ? "#10b981" : "#7c3aed";
  const softBg = mode === "student" ? "rgba(16, 185, 129, 0.05)" : "rgba(124, 58, 237, 0.05)";

  return (
    <div className="page-container" style={{ animation: "fadeIn 0.5s ease" }}>
      <section style={{ padding: "56px 0 96px" }}>

        {/* Back button */}
        <Link href="/" className="back-btn" style={{ marginBottom: 44, fontWeight: 700, fontSize: 13 }}>
          <ArrowLeftIcon size={16} />
          Back to Home
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
            <span style={{ fontSize: 13, color: accentColor, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{project.category}</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#1a1b2e", letterSpacing: "-0.05em", marginBottom: 12, lineHeight: 1.1 }}>
            {project.title}
          </h1>
          <p style={{ fontSize: 13, fontWeight: 700, color: accentColor, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>{project.subtitle}</p>
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
          <h2 style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Mission Objective</h2>
          <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.8, fontWeight: 500 }}>{project.missionObjective}</p>
        </div>

        {/* Deep Dive Architecture (if exists) */}
        {project.systemArchitecture && (
          <div style={{ marginBottom: 52 }}>
            <h2 style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>System Architecture</h2>
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
          <h2 style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>System Capabilities</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {project.features.map((f: string) => (
              <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: accentColor, flexShrink: 0, fontSize: 16, lineHeight: "24px", fontWeight: 800 }}>—</span>
                <span style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.6, fontWeight: 500 }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginBottom: 48 }} />

        {/* Technical Propulsion */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Technical Propulsion</h2>
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
          <h2 style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Atmospheric Impact</h2>
          <div style={{
            padding: "24px 28px",
            backgroundColor: softBg,
            borderLeft: `4px solid ${accentColor}`,
            borderRadius: "0 12px 12px 0",
          }}>
            <p style={{ fontSize: 16, color: "#1a1b2e", lineHeight: 1.8, fontWeight: 600 }}>{project.atmosphericImpact}</p>
          </div>
        </div>

        {/* Live CTA */}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <button className={`btn-primary ${mode === "student" ? "" : "btn-gradient"}`} style={{
              padding: "16px 36px", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 10,
              background: mode === "student" ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : undefined,
              color: "white"
            }}>
              Engage System <ExternalLinkIcon size={16} />
            </button>
          </a>
        )}

        <div style={{ marginTop: 80, paddingTop: 48, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <Link href="/" className="back-btn" style={{ fontSize: 13, color: "#1a1b2e", fontWeight: 700 }}>
            <ArrowLeftIcon size={16} />
            Back to Home
          </Link>
        </div>

      </section>
    </div>
  );
}
