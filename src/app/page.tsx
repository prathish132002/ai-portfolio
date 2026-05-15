"use client";

import { useState } from "react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, EmailIcon, InstagramIcon } from "@/components/Icons";
import { useMode } from "@/context/ModeContext";
import { GitHubCalendar } from 'react-github-calendar';
import HeroMascot from "@/components/HeroMascot";
import Reveal from "@/components/Reveal";
import HolographicWrapper from "@/components/HolographicWrapper";

// --- FREELANCE DATA ---
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
    slug: "viralquotes-ai",
    title: "ViralQuotes AI",
    subtitle: "YouTube Intelligence for Creators",
    description: "A professional-grade command center for YouTube creators. Integrates Gemini AI for content synthesis and YouTube Data API for real-time engagement tracking.",
    tags: ["React 19", "Gemini Pro", "Supabase", "YouTube API"],
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

const skills = [
  { 
    id: "fe-01",
    category: "Frontend Architecture", 
    items: [
      { 
        name: "React", 
        desc: "Component-based library for building dynamic, low-latency interfaces with complex state.", 
        specs: ["Virtual DOM Optimization", "State Lifecycle Management", "Custom Hook Orchestration"], 
        impact: "Reduces interface latency by 40% using optimized reconciliation and code-splitting.",
        integration: "Spearheads the UI of SpeakEasy AI & ResumeForge, handling real-time audio telemetry.",
        usage: "SpeakEasy AI, ResumeForge" 
      },
      { 
        name: "Next.js", 
        desc: "The full-stack React framework enabling hybrid static & server rendering.", 
        specs: ["Static Generation (SSG)", "Incremental Static Regeneration (ISR)", "Edge Runtime Functions"],
        impact: "Achieves near-instant LCP (Largest Contentful Paint) while maintaining SEO dynamicism.",
        integration: "Handles routing manifolds and server-side model orchestration for all GenAI apps.",
        usage: "Portfolio Routing, Case Studies"
      },
      { 
        name: "TypeScript", 
        desc: "Industrial-grade typing for JavaScript to ensure system-wide data integrity.", 
        specs: ["Strict Type Checking", "Interface/Type Schemas", "Utility Types"], 
        impact: "Eliminated 95% of 'undefined' runtime errors during production stress tests.",
        integration: "Defines the payload contracts for all AI-to-Frontend communication pipelines.",
        usage: "Core System Reliability" 
      },
      { 
        name: "Tailwind CSS", 
        desc: "Utility-first CSS framework for rapid high-fidelity UI engineering.", 
        specs: ["JIT Compilation", "Responsive Architecture", "Custom Design Tokens"], 
        impact: "Enables sub-millisecond styling updates and consistent design tokenization.",
        integration: "Powers the 'Luminescent Light' aesthetic across the entire portfolio ecosystem.",
        usage: "Global Design System" 
      },
    ]
  },
  { 
    id: "ai-02",
    category: "AI Intelligence", 
    items: [
      { 
        name: "Prompt Design", 
        desc: "Advanced engineering of instructions to achieve deterministic, high-quality outputs from LLMs.", 
        specs: ["Few-Shot Prompting", "Chain-of-Thought (CoT)", "Context Compression"], 
        impact: "Boosted model accuracy for role-specific interview scoring by 35% in SpeakEasy AI.",
        integration: "The core intelligence engine for generating objective scoring and content synthesis.",
        usage: "SpeakEasy AI, AdGenius" 
      },
      { 
        name: "API Integration", 
        desc: "Low-latency orchestration of AI models via standard and custom endpoints.", 
        specs: ["OpenAI/Gemini Integration", "Rate Limit Management", "Response Caching"], 
        impact: "Ensures sub-second feedback loops during live conversational simulations.",
        integration: "Manages the multi-modal interaction between user voice and AI model responses.",
        usage: "All Generative Modules" 
      },
      { 
        name: "Response Structuring", 
        desc: "Logic to enforce strict JSON/Markdown formatting from unstructured AI outputs.", 
        specs: ["System Message Optimization", "Pydantic/Zod Schemas", "Extraction Logic"], 
        impact: "Ensures 100% ATS-compatibility for ResumeForge by strictly enforcing document schemas.",
        integration: "Converts raw AI insights into structured data for final document rendering.",
        usage: "ResumeForge, AdGenius" 
      },
    ]
  },
  { 
    id: "sys-03",
    category: "System Engineering", 
    items: [
      { 
        name: "Workflow Automation", 
        desc: "Designing autonomous manifolds that eliminate communication friction in high-volume queues.", 
        specs: ["Lead Routing Manifolds", "Autonomous Scheduling", "Pipeline Orchestration"], 
        impact: "Reduces manual lead-handling time from hours to milliseconds.",
        integration: "Powers the 'EstateFlow' engine, bridging user intent with agent availability.",
        usage: "EstateFlow, AdGenius" 
      },
      { 
        name: "User Interaction", 
        desc: "Frictionless paths for users within high-performance technical applications.", 
        specs: ["Haptic Feedback UI", "Micro-Animations", "Context-Aware Navigation"], 
        impact: "Increases user session length by 25% through improved tactile engagement.",
        integration: "Global implementation of button-haptics and smooth section transitions.",
        usage: "System Wide" 
      },
    ]
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/prathish132002", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/prathish-alampur", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/prathish_26_/", Icon: InstagramIcon },
  { label: "Email", href: "mailto:alampurjprathish@gmail.com", Icon: EmailIcon },
];

export default function Home() {
  const { mode } = useMode();

  return (
    <>
      {mode === "student" ? <StudentHome /> : <FreelanceHome />}
    </>
  );
}

// ============================================
// STUDENT MODE COMPONENT (RESUME DRIVEN)
// ============================================
function StudentHome() {
  return (
    <div className="page-container" style={{ animation: "fadeIn 0.5s ease" }}>
      {/* ── HERO ── */}
      <section className="p-mobile" style={{ padding: "96px 0 80px" }}>
        <div className="reverse-stack-mobile" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 32 }}>
          <div className="hero-text" style={{ maxWidth: 620, flex: "1 1 400px", zIndex: 10 }}>
            {/* Availability badge */}
            <div className="floating-element-delayed" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 32, padding: "5px 14px",
              borderRadius: 20, backgroundColor: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.18)",
              backdropFilter: "blur(4px)"
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block", boxShadow: "0 0 6px #10b981" }} />
              <span style={{ fontSize: 13, color: "#10b981", fontWeight: 700 }}>Seeking Opportunities</span>
            </div>

            <h1 className="text-glow" style={{ fontSize: "clamp(26px, 8vw, 52px)", fontWeight: 800, color: "#1a1b2e", lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20 }}>
              Prathish Alampur
            </h1>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#10b981", marginBottom: 16, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Full-Stack Developer | AI-Augmented Engineer
            </p>
            <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#4b5563", lineHeight: 1.7, marginBottom: 16, maxWidth: 580, fontWeight: 500 }}>
              Aspiring Full-Stack Developer with hands-on experience in React, Next.js, Python, and SQL. I don't just write code; I leverage modern AI workflows (Cursor, Prompting, n8n) to ship scalable features 10x faster.
            </p>
            <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.8, marginBottom: 44, maxWidth: 480 }}>
              Seeking an engineering role where I can bring end-to-end ownership, rapid prototyping, and a strong understanding of database architectures to the team.
            </p>

            <div className="btn-stack hero-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
              <a href="mailto:alampurjprathish@gmail.com">
                <button className="btn-primary btn-p-mobile" style={{
                    padding: "16px 36px", fontSize: 16, fontWeight: 700, borderRadius: 12, border: "none", cursor: "pointer",
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "white"
                  }}>
                  Contact Me
                </button>
              </a>
              <a href="https://github.com/prathish132002" target="_blank" rel="noreferrer">
                <button className="btn-ghost" style={{
                  padding: "16px 36px", fontSize: 16, borderRadius: 12, cursor: "pointer"
                }}>
                  GitHub Profile
                </button>
              </a>
            </div>
            
            <div className="hero-buttons" style={{ display: "flex", gap: 20, alignItems: "center" }}>
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener" className="social-pill" aria-label={label}>
                  <Icon size={17} />
                  <span className="hide-mobile">{label}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Mascot Hero Animation */}
          <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", width: "100%" }}>
            <HeroMascot 
              imageSrc="/skeleton_waving.png" 
              message="Trust me, I'm a good boy... down to the bone! 💀" 
              accentColor="#10b981" 
            />
          </div>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: "rgba(16, 185, 129, 0.08)", marginBottom: 72 }} />

      {/* ── GITHUB STATS ── */}
      <section style={{ marginBottom: 72 }}>
        <h2 style={{ fontSize: 34, fontWeight: 800, color: "#10b981", letterSpacing: "-0.03em", marginBottom: 12 }}>Open Source Contributions</h2>
        <p style={{ fontSize: 18, color: "#52525b", fontWeight: 500, marginBottom: 36 }}>A look at my daily coding activity and open-source pushes.</p>
        
        <div style={{ padding: "32px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, overflowX: "auto", backgroundColor: "white", boxShadow: "0 10px 40px rgba(0,0,0,0.02)" }}>
           <GitHubCalendar 
              username="prathish132002" 
              colorScheme="light"
              blockSize={14}
              fontSize={14}
              theme={{
                light: ['#ebedf0', '#a7f3d0', '#34d399', '#10b981', '#047857']
              }}
           />
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: "rgba(16, 185, 129, 0.08)", marginBottom: 72 }} />

      {/* ── STUDENT PROJECTS (FROM RESUME + EXTRA DB REQS) ── */}
      <section style={{ marginBottom: 72 }}>
        <h2 style={{ fontSize: 34, fontWeight: 800, color: "#10b981", letterSpacing: "-0.03em", marginBottom: 12 }}>Development Projects</h2>
        <p style={{ fontSize: 18, color: "#52525b", fontWeight: 500, marginBottom: 36 }}>Highlighting AI, Web, and Full-Stack development.</p>

        <div className="bento-grid">
           {/* Card 1 */}
             <Link href="/projects/speakeasy-ai" className="bento-large" style={{ textDecoration: "none" }}>
              <HolographicWrapper accentColor="#10b981">
                <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 11, padding: "26px", backgroundColor: "white", height: "100%" }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: "#1a1b2e", marginBottom: 6 }}>AI Interview Simulator App</h3>
                  <p style={{ fontSize: 15, color: "#059669", marginBottom: 16, fontWeight: 700, textTransform: "uppercase" }}>React | Firebase | GenAI APIs | TypeScript</p>
                  <ul style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.6, paddingLeft: 20 }}>
                    <li>Developed an intelligent interview practice platform that generates dynamic questions & evaluates responses.</li>
                    <li>Built frontend using React + TypeScript for highly scalable, type-safe components.</li>
                    <li>Integrated AI APIs for role-based reasoning, scoring, caching responses, and detailed analytics.</li>
                    <li><strong>Secured user performance data and session states utilizing a scalable Firebase backend database.</strong></li>
                  </ul>
                </div>
              </HolographicWrapper>
             </Link>
           
             {/* Card 2: ViralQuotes AI (Large) */}
             <Link href="/projects/viralquotes-ai" className="bento-large" style={{ textDecoration: "none" }}>
              <HolographicWrapper accentColor="#10b981">
                <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 11, padding: "26px", backgroundColor: "white", height: "100%" }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: "#1a1b2e", marginBottom: 6 }}>ViralQuotes AI</h3>
                  <p style={{ fontSize: 15, color: "#059669", marginBottom: 16, fontWeight: 700, textTransform: "uppercase" }}>React 19 | Gemini | Supabase | YouTube API</p>
                  <ul style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.6, paddingLeft: 20 }}>
                    <li>Professional-grade YouTube command center for AI-powered content generation and competitor tracking.</li>
                    <li>Integrated <strong>Google Gemini Pro</strong> for generating scripts, hooks, and optimized titles.</li>
                    <li>Connected <strong>YouTube Data API</strong> for real-time channel engagement analytics and AI insights.</li>
                    <li>Built with a premium glassmorphic UI and secure Supabase backend persistence.</li>
                  </ul>
                </div>
              </HolographicWrapper>
             </Link>
            
            {/* Card 3 */}
             <Link href="/projects/resumeforge-ai" className="bento-standard" style={{ textDecoration: "none" }}>
              <HolographicWrapper accentColor="#10b981">
                <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 11, padding: "26px", backgroundColor: "white", height: "100%" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1a1b2e", marginBottom: 6 }}>AI Resume Builder</h3>
                  <p style={{ fontSize: 13, color: "#059669", marginBottom: 16, fontWeight: 700, textTransform: "uppercase" }}>React | JavaScript | PostgreSQL</p>
                  <ul style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6, paddingLeft: 20 }}>
                    <li>Developed a web app that generates ATS-compliant resumes using AI prompt engineering.</li>
                    <li><strong>Integrated a structured relational database (PostgreSQL) to store generated templates and user configurations securely.</strong></li>
                    <li>Built features dynamically adjusting content based on specific job roles.</li>
                  </ul>
                </div>
              </HolographicWrapper>
             </Link>

            {/* Card 4 */}
             <Link href="/projects/adgenius-ai" className="bento-standard" style={{ textDecoration: "none" }}>
              <HolographicWrapper accentColor="#10b981">
                <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 11, padding: "26px", backgroundColor: "white", height: "100%" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1a1b2e", marginBottom: 6 }}>Workflow Automation</h3>
                  <p style={{ fontSize: 13, color: "#059669", marginBottom: 16, fontWeight: 700, textTransform: "uppercase" }}>n8n | Workflow APIs</p>
                  <ul style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6, paddingLeft: 20 }}>
                    <li>Built automated workflows connecting multiple distinct APIs and services autonomously using n8n.</li>
                    <li>Created pipelines to handle event notifications, structured data processing, and integrations.</li>
                  </ul>
                </div>
              </HolographicWrapper>
             </Link>
                      {/* Card 5 */}
             <Link href="/projects/smart-blind-stick" className="bento-standard" style={{ textDecoration: "none" }}>
              <HolographicWrapper accentColor="#10b981">
                <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 11, padding: "26px", backgroundColor: "white", height: "100%" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1a1b2e", marginBottom: 6 }}>SmartBlind Stick</h3>
                  <p style={{ fontSize: 13, color: "#059669", marginBottom: 16, fontWeight: 700, textTransform: "uppercase" }}>IoT | Arduino | Ultrasonic</p>
                  <ul style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6, paddingLeft: 20 }}>
                    <li>Created an assistive IoT device helping visually impaired detect obstacles via ultrasonic sensors.</li>
                    <li>Designed an auditory feedback loop for safe distance calculation.</li>
                  </ul>
                </div>
              </HolographicWrapper>
             </Link>
             
             {/* Card 5 */}
             <Link href="/projects/mobile-controlled-robot" className="bento-standard" style={{ textDecoration: "none" }}>
              <HolographicWrapper accentColor="#10b981">
                <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 11, padding: "26px", backgroundColor: "white", height: "100%" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1a1b2e", marginBottom: 6 }}>Mobile Controlled Robot</h3>
                  <p style={{ fontSize: 13, color: "#059669", marginBottom: 16, fontWeight: 700, textTransform: "uppercase" }}>Arduino | Bluetooth | Robotics</p>
                  <ul style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6, paddingLeft: 20 }}>
                    <li>Built a low-latency smartphone-controlled robot using Bluetooth communication loops.</li>
                    <li>Implemented PWM speed control and L298N motor driver coordination.</li>
                  </ul>
                </div>
              </HolographicWrapper>
             </Link>
          </div>
      </section>

      <div style={{ height: 1, backgroundColor: "rgba(16, 185, 129, 0.08)", marginBottom: 72 }} />

      {/* ── EDUCATIONAL, SKILLS & CERTIFICATIONS ── */}
      <section style={{ paddingBottom: 120 }}>
        <h2 style={{ fontSize: 34, fontWeight: 800, color: "#10b981", letterSpacing: "-0.03em", marginBottom: 12 }}>Credentials & Engineering Philosophy</h2>
        <p style={{ fontSize: 18, color: "#52525b", fontWeight: 500, marginBottom: 36 }}>What makes me a high-velocity developer.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          
          {/* Why Hire Me (The Recruiter Pitch) Block */}
          <div className="card-hover" style={{ background: "white", padding: 32, borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)", position: "relative", overflow: "hidden" }}>
             <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: "linear-gradient(90deg, #10b981, #059669)" }} />
             <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1a1b2e", marginBottom: 16 }}>The "10x" AI Advantage</h3>
             <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6, marginBottom: 16 }}>
               <strong>I treat AI as a force multiplier.</strong> I fluently utilize tools like Copilot, Cursor, and LLMs not to do my job for me, but to eliminate boilerplate, debug complex matrix errors, and drastically accelerate the deployment pipeline.
             </p>
             <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6 }}>
               For a technical recruiter, this means hiring a junior developer who outputs clean code and architects solutions at the velocity of a mid-level engineer. I focus on End-to-End ownership—from database schemas to responsive frontends.
             </p>
          </div>

          {/* Core Competencies Block */}
          <div className="card-hover card-p-mobile" style={{ background: "white", padding: 32, borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)" }}>
             <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1a1b2e", borderBottom: "2px solid #e5e7eb", paddingBottom: 16, marginBottom: 16 }}>Core Competencies</h3>
             <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
               <div>
                 <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981", textTransform: "uppercase" }}>Frontend & Frameworks</span>
                 <p style={{ fontSize: 16, fontWeight: 600, color: "#374151" }}>React.js, Next.js, Tailwind CSS, TypeScript</p>
               </div>
               <div>
                 <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981", textTransform: "uppercase" }}>Backend & Datastores</span>
                 <p style={{ fontSize: 16, fontWeight: 600, color: "#374151" }}>PostgreSQL, Firebase, MySQL, Node.js</p>
               </div>
               <div>
                 <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981", textTransform: "uppercase" }}>AI & Automation</span>
                 <p style={{ fontSize: 16, fontWeight: 600, color: "#374151" }}>GenAI Prompting, n8n Pipelines, Vector Logic</p>
               </div>
             </div>
          </div>

          {/* Academics & Certifications Block */}
          <div className="card-hover card-p-mobile" style={{ background: "white", padding: 32, borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)" }}>
             <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1a1b2e", borderBottom: "2px solid #e5e7eb", paddingBottom: 16, marginBottom: 16 }}>Academics & Certifications</h3>
             <div style={{ marginBottom: 20 }}>
               <h4 style={{ fontSize: 16, fontWeight: 700, color: "#1a1b2e" }}>B.Tech - ECE (CGPA: 7.20)</h4>
               <p style={{ fontSize: 14, color: "#6b7280" }}>Jayaprakash Narayan College</p>
             </div>
             
             <h4 style={{ fontSize: 13, fontWeight: 800, color: "#10b981", textTransform: "uppercase", marginBottom: 12 }}>Active Certifications</h4>
             <ul style={{ fontSize: 14, color: "#374151", margin: 0, paddingLeft: 16, lineHeight: 1.8, fontWeight: 500 }}>
               <li><strong style={{color:"#059669"}}>AI Tools Certified</strong> – Be10x (2025)</li>
               <li>React.js & Node.js Certified – NXT Wave</li>
               <li>Python & SQL Certified – NXT Wave</li>
               <li>Dynamic Website Architecture – NXT Wave</li>
             </ul>
          </div>
        </div>

      </section>

    </div>
  );
}


// ============================================
// FREELANCE MODE COMPONENT (ORIGINAL)
// ============================================
function FreelanceHome() {
  const [activeSkill, setActiveSkill] = useState<{ name: string, desc: string, specs?: string[], usage: string } | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="page-container" style={{ animation: "fadeIn 0.5s ease" }}>

      {/* ── HERO ── */}
      <section className="p-mobile" style={{ padding: "96px 0 80px" }}>
        <div className="reverse-stack-mobile" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 32 }}>
          <div className="hero-text" style={{ maxWidth: 620, flex: "1 1 400px", zIndex: 10 }}>
            {/* Availability badge */}
            <div className="floating-element-delayed" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 32, padding: "5px 14px",
              borderRadius: 20, backgroundColor: "rgba(124, 58, 237, 0.08)",
              border: "1px solid rgba(124, 58, 237, 0.18)",
              backdropFilter: "blur(4px)"
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#7c3aed", display: "inline-block", boxShadow: "0 0 6px #7c3aed" }} />
              <span style={{ fontSize: 13, color: "#7c3aed", fontWeight: 700 }}>Available for Freelance</span>
            </div>

            <h1 className="text-glow" style={{ fontSize: "clamp(26px, 8vw, 52px)", fontWeight: 800, color: "#1a1b2e", lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20 }}>
              Building the Next Era of AI Apps.
            </h1>
            <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#4b5563", lineHeight: 1.7, marginBottom: 16, maxWidth: 580, fontWeight: 500 }}>
              I'm an AI Systems Architect specializing in building autonomous workflows, custom LLM integrations, and high-performance React interfaces.
            </p>
            <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.8, marginBottom: 44, maxWidth: 480 }}>
              Focused on creating systems that improve user interaction, automate complex business workflows, and deliver meaningful ROI through intelligence.
            </p>

            <div className="btn-stack hero-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
              <a href="/contact">
                <button className="btn-primary btn-gradient" style={{
                  padding: "16px 36px", fontSize: 16, fontWeight: 700, borderRadius: 12, border: "none", cursor: "pointer"
                }}>
                  Start a Project
                </button>
              </a>
              <Link href="/projects">
                <button className="btn-ghost" style={{
                  padding: "16px 36px", fontSize: 16, borderRadius: 12, cursor: "pointer"
                }}>
                  View Portfolio
                </button>
              </Link>
            </div>
            
            <div className="hero-buttons" style={{ display: "flex", gap: 20, alignItems: "center" }}>
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener" className="social-pill" aria-label={label}>
                  <Icon size={17} />
                  <span className="hide-mobile">{label}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Mascot Hero Animation */}
          <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", width: "100%" }}>
            <HeroMascot 
              imageSrc="/business_hero_sketch.png" 
              message="Let's Build! 🚀" 
              accentColor="#7c3aed" 
            />
          </div>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: "rgba(124, 58, 237, 0.08)", marginBottom: 72 }} />

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ marginBottom: 72 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#7c3aed", letterSpacing: "-0.03em", marginBottom: 12 }}>About</h2>
            <p style={{ fontSize: 18, color: "#52525b", fontWeight: 500 }}>The engineer behind the code.</p>
          </div>
          <Link href="/about" className="link-pill">Full profile →</Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: 20, color: "#4b5563", lineHeight: 1.7, maxWidth: 900, fontWeight: 500 }}>
            I am a GenAI-focused developer with a strong interest in building practical AI-driven applications. My work focuses on integrating AI into real-world use cases such as interview preparation, resume generation, marketing automation, and user experience enhancement.
          </p>
          <p style={{ fontSize: 20, color: "#4b5563", lineHeight: 1.7, maxWidth: 900, fontWeight: 500 }}>
            Instead of just experimenting with AI models, I focus on building complete systems — from frontend interfaces to backend logic — that deliver clear value to users.
          </p>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginBottom: 72 }} />

      {/* ── PROJECTS ── */}
      <section style={{ marginBottom: 72 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#7c3aed", letterSpacing: "-0.03em", marginBottom: 12 }}>Projects</h2>
            <p style={{ fontSize: 18, color: "#52525b", fontWeight: 500 }}>AI systems built for real users.</p>
          </div>
          <Link href="/projects" className="link-pill">All projects →</Link>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => {
            // Alternating Bento layout mapping
            const bentoClass = (index === 0 || index === 3) ? "bento-large" : "bento-standard";
            
            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} className={`block no-underline ${bentoClass}`}>
                <HolographicWrapper accentColor="#7c3aed">
                  <div className="card-hover card-p-mobile" style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: 11, padding: "26px", height: "100%", display: "flex", flexDirection: "column"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <h3 style={{ fontSize: 26, fontWeight: 700, color: "#1a1b2e", letterSpacing: "-0.02em" }}>
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <span style={{
                          fontSize: 10, fontWeight: 600, color: "#4ade80",
                          backgroundColor: "rgba(74,222,128,0.08)", padding: "2px 8px",
                          borderRadius: 4, border: "1px solid rgba(74,222,128,0.2)",
                          flexShrink: 0, marginLeft: 10,
                        }}>Live</span>
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
                </HolographicWrapper>
              </Link>
            );
          })}
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: "rgba(124, 58, 237, 0.08)", marginBottom: 72 }} />

      {/* ── CAPABILITIES ── */}
      <section style={{ paddingBottom: 120, position: "relative" }}>
        <div style={{ marginBottom: 44, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#7c3aed", letterSpacing: "-0.03em", marginBottom: 12 }}>Capabilities</h2>
            <p style={{ fontSize: 18, color: "#52525b", fontWeight: 500 }}>
              {expandedCategory ? "Technical deep-dive into the selected module." : "Select a technical module to explore engineering proficiencies."}
            </p>
          </div>
          {expandedCategory && (
            <button 
              onClick={() => {
                setExpandedCategory(null);
                setActiveSkill(null);
              }}
              className="link-pill"
              style={{ padding: "10px 24px", background: "none", border: "1px solid rgba(124, 58, 237, 0.3)" }}
            >
              ← Back to modules
            </button>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: expandedCategory ? "1fr" : "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, transition: "all 0.5s" }}>
          {skills
            .filter(group => !expandedCategory || expandedCategory === group.id)
            .map((group) => {
              const isExpanded = expandedCategory === group.id;
              
              return (
                <div 
                  key={group.id} 
                  className={isExpanded ? "" : "card-hover"} 
                  onClick={() => !isExpanded && setExpandedCategory(group.id)}
                  style={{
                    border: isExpanded ? "1.5px solid #7c3aed" : "1px solid rgba(0,0,0,0.08)",
                    borderRadius: 24, padding: isExpanded ? "56px" : "40px",
                    display: "flex", flexDirection: "column", gap: isExpanded ? 48 : 0,
                    cursor: isExpanded ? "default" : "pointer",
                    backgroundColor: isExpanded ? "#fff" : "rgba(255,255,255,0.7)",
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    minHeight: isExpanded ? "none" : 140,
                    boxShadow: isExpanded ? "0 40px 100px rgba(124, 58, 237, 0.08)" : "none",
                    justifyContent: isExpanded ? "flex-start" : "center"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ 
                      fontSize: isExpanded ? 32 : 24, fontWeight: 800, color: "#1a1b2e", 
                      letterSpacing: "-0.04em", margin: 0, transition: "all 0.4s"
                    }}>
                      {group.category}
                    </h3>
                    {!isExpanded && (
                      <span style={{ 
                        fontSize: 12, fontWeight: 800, color: "#7c3aed", 
                        backgroundColor: "rgba(124, 58, 237, 0.1)", padding: "4px 10px", 
                        borderRadius: 6 
                      }}>
                        EXPLORE ⊕
                      </span>
                    )}
                  </div>

                  {isExpanded && (
                    <div style={{ 
                      display: "grid", 
                      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
                      gap: 24,
                      animation: "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}>
                      {group.items.map((item: any) => {
                        const isActive = activeSkill?.name === item.name;
                        
                        return (
                          <div 
                            key={item.name} 
                            style={{ 
                              display: "contents" // Allows children to participate directly in the parent grid
                            }}
                          >
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSkill(isActive ? null : item);
                              }}
                              style={{ 
                                fontSize: 18, color: "#1a1b2e", 
                                fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center",
                                background: isActive ? "rgba(124, 58, 237, 0.05)" : "#fff", 
                                border: isActive ? "1.5px solid #7c3aed" : "1px solid rgba(0,0,0,0.06)", 
                                padding: "28px 36px", borderRadius: 16, cursor: "pointer",
                                textAlign: "left", width: "100%", transition: "all 0.3s ease",
                                boxShadow: isActive ? "0 10px 30px rgba(124, 58, 237, 0.1)" : "0 4px 12px rgba(0,0,0,0.03)"
                              }}
                              onMouseEnter={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.transform = "translateY(-4px)";
                                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.transform = "translateY(0)";
                                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                                }
                              }}
                            >
                              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <span style={{ fontSize: 11, color: "#7c3aed", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em" }}>Technology</span>
                                <span style={{ fontSize: 20, fontWeight: 800 }}>{item.name}</span>
                              </div>
                              <span style={{ fontSize: 13, color: "#7c3aed", fontWeight: 800, opacity: isActive ? 1 : 0.6 }}>
                                {isActive ? "CLOSE_SPEC ✕" : "OPEN_SPEC ↗"}
                              </span>
                            </button>

                            {/* Full-Width Inline Diagnostic Readout */}
                            {isActive && (
                              <div style={{ 
                                gridColumn: "1 / -1", // THIS IS KEY: Spans entire grid width
                                padding: "64px", backgroundColor: "rgba(124, 58, 237, 0.02)", 
                                border: "1px solid rgba(124, 58, 237, 0.15)", borderRadius: 24,
                                animation: "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                margin: "12px 0 32px 0",
                                display: "flex", flexDirection: "column", gap: 48
                              }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40, flexWrap: "wrap" }}>
                                  <div style={{ flex: "2 1 400px" }}>
                                    <p style={{ fontSize: 12, fontWeight: 800, color: "#7c3aed", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.15em" }}>01. Functional Overview</p>
                                    <h4 style={{ fontSize: 28, color: "#1a1b2e", fontWeight: 800, lineHeight: 1.3, marginBottom: 24, letterSpacing: "-0.02em" }}>{item.desc}</h4>
                                    
                                    <div style={{ padding: "24px", background: "#fff", borderRadius: 16, border: "1px solid rgba(0,0,0,0.04)" }}>
                                      <p style={{ fontSize: 12, fontWeight: 800, color: "#7c3aed", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>02. Performance & Production Impact</p>
                                      <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.5, fontWeight: 600 }}>{item.impact}</p>
                                    </div>
                                  </div>

                                  <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 32 }}>
                                    <section>
                                      <p style={{ fontSize: 12, fontWeight: 800, color: "#7c3aed", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}>03. Technical Specifications</p>
                                      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
                                        {item.specs?.map((spec: string) => (
                                          <div key={spec} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#7c3aed" }} />
                                            <span style={{ fontSize: 15, color: "#4b5563", fontWeight: 600 }}>{spec}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </section>

                                    <section>
                                      <p style={{ fontSize: 12, fontWeight: 800, color: "#7c3aed", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}>04. Active Environment Deployments</p>
                                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                                        {item.usage.split(", ").map((use: string) => (
                                          <span key={use} style={{ 
                                            fontSize: 13, fontWeight: 700, color: "#1a1b2e", 
                                            backgroundColor: "rgba(0,0,0,0.05)", padding: "10px 20px", borderRadius: 10
                                          }}>{use}</span>
                                        ))}
                                      </div>
                                    </section>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </section>

    </div>
  );
}