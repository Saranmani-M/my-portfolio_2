import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { PROFILE, SOCIALS } from "../lib/data";

const easeOut = [0.16, 1, 0.3, 1];

const SOCIAL_ICONS = [
  { Icon: Linkedin, url: SOCIALS.linkedin, k: "linkedin" },
  { Icon: Github, url: SOCIALS.github, k: "github" },
  { Icon: Instagram, url: SOCIALS.instagram, k: "instagram" },
  { Icon: Twitter, url: SOCIALS.twitter, k: "x" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* Full-bleed dramatic portrait on the right */}
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
        {/* Left edge gradient blends portrait into dark bg */}
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

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-28 md:pt-32 pb-16 md:pb-20 min-h-[100svh] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.3 }}
          className="max-w-[640px] mt-4 md:mt-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-testid="badge-open-to-work"
            className="inline-flex items-center gap-2.5 mb-6 md:mb-8 px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-300 text-[10px] tracking-[0.22em] uppercase"
          >
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
            Open to Work · 2026
          </motion.div>

          <h1
            data-testid="hero-name"
            className="font-sans font-extrabold tracking-[-0.03em] leading-[0.92] text-white text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem]"
          >
            Building
            <br />
            Secure Cloud
            <br />
            Since 2025
          </h1>
        </motion.div>

        <div className="flex-1 min-h-[40px]" />

        <div className="max-w-[520px] space-y-7 md:space-y-9">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: easeOut }}
          >
            <p className="text-[18px] md:text-[20px] text-white font-medium leading-relaxed">
              Hi, I am Saranmani M
            </p>
            <p
              className="mt-1 text-[15px] md:text-[16px] text-white/55 leading-relaxed"
              data-testid="hero-role"
            >
              Final-year IT Student at Vel Tech · Aspiring Cloud &amp; Storage
              Engineer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.15, ease: easeOut }}
            data-testid="hero-description"
            className="text-[14px] md:text-[15px] leading-[1.7] text-white/45 max-w-[460px]"
          >
            I spent the last two years living inside Linux terminals,
            cryptography papers and cloud consoles — only to learn that the
            most reliable systems come from mastering the quiet fundamentals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: easeOut }}
            className="flex items-center gap-5 pt-2"
          >
            {SOCIAL_ICONS.map(({ Icon, url, k }) => (
              <a
                key={k}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`hero-social-${k}`}
                className="text-white/55 hover:text-[#e8ff47] transition-colors"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-resume"
              className="ml-3 text-[11px] tracking-[0.22em] uppercase text-white/65 hover:text-[#e8ff47] link-underline"
            >
              Résumé →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
