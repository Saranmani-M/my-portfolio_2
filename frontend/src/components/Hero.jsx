import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { PROFILE } from "../lib/data";

const easeOut = [0.16, 1, 0.3, 1];

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden bg-black"
    >
      {/* --- ROTATING BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none select-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35, // Adjust speed here (higher number = slower, smoother rotation)
            ease: "linear",
            repeat: Infinity,
          }}
          className="w-[140vw] h-[140vw] md:w-[90vw] md:h-[90vw] max-w-[1200px] max-h-[1200px] aspect-square rounded-full mix-blend-screen"
          style={{
            // This replicates the thousands of dark beaded patterns with high contrast shading
            backgroundImage: `radial-gradient(circle at 3px 3px, rgba(255,255,255,0.15) 1px, transparent 0), 
                              radial-gradient(circle at 12px 12px, rgba(0,0,0,0.9) 8px, transparent 0)`,
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 60%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 60%, transparent 75%)",
            boxShadow: "inset 0 0 100px rgba(0,0,0,0.9)",
            filter: "contrast(180%) brightness(80%)",
          }}
        />
        {/* Subtle foreground depth shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        {/* Editorial typography container expanded for impact */}
        <div className="lg:col-span-9 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
            className="flex items-center gap-3 mb-8 text-[11px] tracking-[0.28em] uppercase text-white/55"
            data-testid="hero-eyebrow"
          >
            <span className="w-8 h-px bg-white/30" />
            Portfolio · 2026
          </motion.div>

          <h1
            className="font-serif text-white text-balance leading-[0.92]"
            data-testid="hero-name"
            style={{ letterSpacing: "-0.02em" }}
          >
            {"SARANMANI".split("").map((c, i) => (
              <motion.span
                key={`s1-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25 + i * 0.04,
                  ease: easeOut,
                }}
                className="inline-block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <span className="inline-flex items-baseline gap-4">
              {"M.".split("").map((c, i) => (
                <motion.span
                  key={`s2-${i}`}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6 + i * 0.05,
                    ease: easeOut,
                  }}
                  className="inline-block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light italic text-white/85"
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: easeOut, delay: 1.05 }}
            className="mt-10 max-w-xl font-serif text-2xl md:text-3xl text-white/90 leading-snug text-balance"
            data-testid="hero-headline"
          >
            Building <em className="italic text-white">secure cloud</em>{" "}
            infrastructure with Python, AWS &amp; modern security practices.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 1.2 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-[#A1A1AA]"
            data-testid="hero-description"
          >
            {PROFILE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 1.35 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              data-testid="cta-projects"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-[13px] tracking-wide hover:bg-white/90 transition-all"
            >
              View Projects
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <a
              data-testid="cta-resume"
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[13px] tracking-wide text-white hover:bg-white/[0.04] transition-all"
            >
              Download Resume <Download size={14} />
            </a>
            <button
              data-testid="cta-contact"
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-[13px] tracking-wide text-white/80 hover:text-white hover:border-white/25 transition-all"
            >
              Contact Me <Mail size={13} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-white/40 z-10"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-white/30"
        />
      </motion.div>
    </section>
  );
};
