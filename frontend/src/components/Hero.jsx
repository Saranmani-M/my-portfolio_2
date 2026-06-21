import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { PROFILE, SOCIALS } from "../lib/data";

const SOCIAL_ICONS = [
  { Icon: Linkedin,  url: SOCIALS.linkedin,  k: "linkedin"  },
  { Icon: Github,    url: SOCIALS.github,    k: "github"    },
  { Icon: Instagram, url: SOCIALS.instagram, k: "instagram" },
  { Icon: Twitter,   url: SOCIALS.twitter,   k: "x"         },
];

// Dream stack logos shown in the middle logo row
const RUNNING_LOGOS = [
  { name: "AWS",       color: "#FF9900", icon: "amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Microsoft", color: "#F25022", icon: "azure/azure-original.svg" },
  { name: "Google",    color: "#4285F4", icon: "google/google-original.svg" },
  { name: "Red Hat",   color: "#EE0000", icon: "redhat/redhat-original.svg" },
  { name: "Cisco",     color: "#1BA0D7", icon: "linux/linux-original.svg" },
  { name: "VMware",    color: "#607078",  icon: "debian/debian-original.svg" },
  { name: "Dell EMC",  color: "#007DB8", icon: "docker/docker-original.svg" },
  { name: "NetApp",    color: "#0067C5", icon: "kubernetes/kubernetes-plain.svg" },
];

const BASE_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

// ─── Drop animation variants ──────────────────────────────────────────────────
const drop = {
  hidden: { opacity: 0, y: -36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.62, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ─── Waveform ─────────────────────────────────────────────────────────────────
const WaveformIcon = ({ playing, size = 16 }) => {
  const bars = [0.45, 1, 0.6, 0.88, 0.5];
  return (
    <svg width={size} height={size} viewBox="0 0 20 16" fill="none" aria-hidden="true">
      {bars.map((h, i) => (
        <rect key={i} x={i * 3.2 + 1} y={8 - h * 6} width={2} height={h * 12} rx={1} fill="currentColor"
          style={playing ? { animation: `waveBar ${0.45 + i * 0.08}s ease-in-out ${i * 0.04}s infinite alternate`, transformOrigin: "50% 100%" } : {}}
        />
      ))}
    </svg>
  );
};

const easeOut = [0.16, 1, 0.3, 1];

// ─── Portrait background ──────────────────────────────────────────────────────
const PortraitBackground = () => (
  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.6, ease: easeOut }}
    className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[58%] z-0"
    data-testid="hero-portrait"
  >
    <div className="absolute inset-0 bg-[#050505]" />
    <img
      src={PROFILE.photoUrl}
      alt="Saranmani M"
      className="w-full h-full object-cover object-[center_15%] md:object-[center_30%] opacity-95"
      style={{ filter: "grayscale(1) contrast(1.18) brightness(0.72)" }}
    />
    {/* Left edge gradient */}
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, #050505 0%, #050505 18%, rgba(5,5,5,0.7) 32%, rgba(5,5,5,0.2) 50%, transparent 70%)",
      }}
    />
    {/* Soft vignette */}
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)",
      }}
    />
  </motion.div>
);

// ─── Bottom running strip ─────────────────────────────────────────────────────
const SkillsStrip = () => {
  const items = [...RUNNING_LOGOS, ...RUNNING_LOGOS, ...RUNNING_LOGOS];
  return (
    <div className="relative z-10 w-full border-t border-white/[0.06] bg-black/50 py-3 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
        style={{ background: "linear-gradient(to right, rgba(7,7,8,1), transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
        style={{ background: "linear-gradient(to left, rgba(7,7,8,1), transparent)" }} />
      <div
        className="flex items-center gap-10 whitespace-nowrap will-change-transform"
        style={{ animation: "marquee-ltr 28s linear infinite", width: "max-content" }}
      >
        {items.map((logo, i) => (
          <span key={i} className="inline-flex items-center gap-2 shrink-0">
            <img src={`${BASE_ICON}${logo.icon}`} alt={logo.name} className="w-4 h-4 opacity-70" style={{ filter: "brightness(1.4)" }} />
            <span className="text-[11px] tracking-[0.16em] uppercase font-mono opacity-60" style={{ color: logo.color }}>{logo.name}</span>
            <span className="text-white/10 ml-1">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── Static logo grid ─────────────────────────────────────────────────────────
const LogoGrid = () => (
  <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 py-6">
    <p className="text-center text-[9px] tracking-[0.28em] uppercase font-mono text-white/[0.18] mb-5 select-none">
      Dream Stacks &amp; Engineering Ambitions
    </p>
    <div className="flex items-center justify-between gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
      {RUNNING_LOGOS.map((logo, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5 group opacity-45 hover:opacity-90 transition-opacity duration-400 flex-1 min-w-0">
          <img src={`${BASE_ICON}${logo.icon}`} alt={logo.name} className="w-6 h-6 sm:w-7 sm:h-7 object-contain" style={{ filter: "brightness(1.4) grayscale(0.15)" }} />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase font-sans text-center leading-tight" style={{ color: logo.color }}>{logo.name}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Touch detection ──────────────────────────────────────────────────────────
const isTouchDevice = () =>
  typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const Hero = () => {
  const audioRef  = useRef(null);
  const cursorRef = useRef(null);
  const mousePos  = useRef({ x: -100, y: -100 });
  const [playing, setPlaying] = useState(false);
  const [isTouch] = useState(() => isTouchDevice());

  // Custom cursor — desktop only
  useEffect(() => {
    if (isTouch) return;
    const onMove = (e) => { mousePos.current = { x: e.clientX, y: e.clientY }; };
    let raf;
    const tick = () => {
      if (cursorRef.current)
        cursorRef.current.style.transform =
          `translate3d(calc(${mousePos.current.x}px - 50%), calc(${mousePos.current.y}px - 50%), 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, [isTouch]);

  useEffect(() => {
    const audio = new Audio("/1.mp3");
    audio.loop = true; audio.volume = 0.5;
    audioRef.current = audio;
    return () => { audio.pause(); audio.src = ""; };
  }, []);

  const toggleMusic = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().catch(() => {}); setPlaying(true); }
  }, [playing]);

  return (
    <>
      <style>{`
        ${!isTouch ? `html,body,#root,a,button,img,svg,[role="button"]{cursor:none!important}` : ""}
        @keyframes marquee-ltr { from{transform:translateX(0)} to{transform:translateX(-25%)} }
        @keyframes waveBar     { from{transform:scaleY(0.3)}  to{transform:scaleY(1)} }
        @media(prefers-reduced-motion:reduce){[style*="animation"]{animation:none!important}}
        .soc { display:inline-flex;align-items:center;justify-content:center;padding:7px;min-width:36px;min-height:36px; }
      `}</style>

      {/* Custom cursor */}
      {!isTouch && (
        <div ref={cursorRef}
          className="fixed w-3.5 h-3.5 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference will-change-transform"
          style={{ left: 0, top: 0 }}
        />
      )}

      <section
        id="home"
        data-testid="hero-section"
        className="relative min-h-screen overflow-hidden flex flex-col"
        style={{ background: "#050505" }}
      >
        {/* ── Portrait background ── */}
        <PortraitBackground />

        {/* ── Music toggle — TOP RIGHT ── */}
        <motion.div
          variants={drop} initial="hidden" animate="visible" custom={0}
          className="fixed top-4 right-4 z-50"
        >
          <button
            onClick={toggleMusic}
            aria-label={playing ? "Pause" : "Play"}
            className={`flex items-center justify-center w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/[0.07] shadow-lg transition-colors ${playing ? "text-white" : "text-white/35 hover:text-white"}`}
          >
            <WaveformIcon playing={playing} size={14} />
          </button>
        </motion.div>

        {/* Spacer for navbar */}
        <div className="pt-20" aria-hidden="true" />

        {/* ── Hero body — LEFT aligned ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-12 max-w-7xl mx-auto w-full py-4">

          {/* Badge */}
          <motion.div variants={drop} initial="hidden" animate="visible" custom={1}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-6 backdrop-blur-sm select-none w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-green-400/90 font-medium">
              Open to Work
            </span>
          </motion.div>

          {/* Heading line 1 */}
          <motion.div variants={drop} initial="hidden" animate="visible" custom={2}
            className="flex items-center gap-2 flex-wrap text-2xl sm:text-3xl md:text-[3.25rem] font-light tracking-[-0.01em] leading-[1.18] text-white mb-1"
          >
            <span className="text-white/45 font-light">Hey, I&rsquo;m</span>
            <span className="inline-block w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-white/20 align-middle flex-shrink-0">
              <img src={PROFILE.photoUrl} alt="Saranmani M" className="w-full h-full object-cover grayscale" />
            </span>
            <span className="font-bold">Saranmani M</span>
          </motion.div>

          {/* Heading line 2 */}
          <motion.div variants={drop} initial="hidden" animate="visible" custom={3}
            className="flex items-center gap-2 flex-wrap text-2xl sm:text-3xl md:text-[3.25rem] font-light tracking-[-0.01em] leading-[1.18] text-white mb-1"
          >
            <span className="text-white/45 font-light">Aspiring</span>
            <span className="font-bold">Cloud &amp; Storage Engineer</span>
          </motion.div>

          {/* Heading line 3 */}
          <motion.div variants={drop} initial="hidden" animate="visible" custom={4}
            className="flex items-center gap-2 flex-wrap text-2xl sm:text-3xl md:text-[3.25rem] font-light tracking-[-0.01em] leading-[1.18] text-white"
          >
            <span className="text-white/45 font-light">Building</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
              Secure Infrastructure
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={drop} initial="hidden" animate="visible" custom={5}
            className="mt-5 text-[13px] md:text-[15px] text-white/40 max-w-[500px] leading-relaxed"
          >
            I enjoy working with Linux systems, cloud infrastructure, and storage technologies,
            building reliable, secure, and scalable environments while continuously learning.
          </motion.p>

          {/* CTAs — socials + Résumé → + Say hi */}
          <motion.div variants={drop} initial="hidden" animate="visible" custom={6}
            className="mt-7 flex items-center gap-4 flex-wrap"
          >
            {SOCIAL_ICONS.map(({ Icon, url, k }) => (
              <a key={k} href={url} target="_blank" rel="noopener noreferrer"
                data-testid={`hero-social-${k}`}
                className="text-white/45 hover:text-white transition-colors p-1"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
            <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer"
              className="text-[11px] tracking-[0.22em] uppercase text-white/50 hover:text-white transition-colors py-2 ml-1"
            >
              Résumé →
            </a>
            <span className="w-px h-4 bg-white/15" />
            <a href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-1.5 bg-[#e8ff47] text-black text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-2.5 rounded-full hover:opacity-90 active:opacity-80 transition-opacity"
            >
              Say hi ↗
            </a>
          </motion.div>
        </div>

        {/* ── Static logo grid ── */}
        <motion.div variants={drop} initial="hidden" animate="visible" custom={7}>
          <LogoGrid />
        </motion.div>

        {/* ── Skills strip ── */}
        <SkillsStrip />
      </section>
    </>
  );
};
