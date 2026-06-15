import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "../lib/data";

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          data-testid="navbar"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className={`pointer-events-auto transition-transform duration-500 ${
            scrolled ? "scale-[0.98]" : ""
          }`}
        >
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full bg-[#0D0D0D]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]">
          <div
            className="px-3 py-1.5 text-[11px] tracking-[0.22em] uppercase text-white/60"
            data-testid="navbar-brand"
          >
            SM
          </div>
          <div className="h-4 w-px bg-white/10 mx-1" />
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => go(n.id)}
              className={`relative px-3.5 py-1.5 text-[12px] tracking-wide rounded-full transition-colors ${
                active === n.id
                  ? "text-white"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {active === n.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{n.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#0D0D0D]/70 backdrop-blur-xl border border-white/10 w-full max-w-[440px]">
          <span className="text-[11px] tracking-[0.22em] uppercase text-white/70 truncate">
            SARANMANI · M
          </span>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((s) => !s)}
            className="shrink-0 w-9 h-9 grid place-items-center rounded-full border border-white/10 text-white/80"
          >
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl pt-28 px-8"
            data-testid="mobile-menu"
          >
            <ul className="space-y-5">
              {NAV.map((n, i) => (
                <motion.li
                  key={n.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <button
                    data-testid={`mobile-nav-${n.id}`}
                    onClick={() => go(n.id)}
                    className="font-serif text-4xl text-white/90 hover:text-white"
                  >
                    {n.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
