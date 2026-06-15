# SARANMANI M — Portfolio · PRD

## Original Problem Statement
Premium personal portfolio website for SARANMANI M (IT student → future Cloud Engineer / Storage Administrator / Cybersecurity / Python developer). Heavily inspired by Ronit Mohata's Awwwards-style editorial portfolio. Dark luxury aesthetic (#050505), real profile photo as a primary visual element, no SaaS/dashboard/cyberpunk visuals, no big 3D objects.

## Tech Stack
- React (CRA) + Tailwind CSS
- Framer Motion (motion/animations)
- tsParticles (@tsparticles/react v4 + slim) — subtle ambient particles
- Three.js + @react-three/fiber installed (decoded to inactive — was causing R3F prop-injection errors with visual-edits)
- @emailjs/browser — contact form (PLACEHOLDER credentials — replace before going live)
- sonner — toasts
- lucide-react — icons

## Implemented (2026-06-15)
- Floating glassmorphism navbar with active-section indicator + mobile sheet
- Hero: large editorial SARANMANI / M. typography, real portrait with soft purple/blue glow, 3 CTAs (View Projects, Download Resume, Contact Me)
- About: editorial scroll-reveal storytelling + sticky headline + parallax
- Skills: 5 typography categories (no progress bars), marquee strip
- Projects: full case-study layout for Secure Cloud Storage System Using Homomorphic Encryption (Problem/Solution/Architecture/Technologies/Outcome) + 3 "in motion" Coming Soon entries
- Articles: 4 placeholders (AWS EC2, Linux Hardening, Python for Cloud, Homomorphic Encryption)
- Coding Profiles: GitHub + LeetCode premium cards
- Contact: EmailJS form with placeholder credentials → simulated success toast + validation
- Footer: 4 social links (LinkedIn, GitHub, Instagram, X) + reach block
- Ambient: tsParticles drift + 3 gradient blur orbs + vignette + film grain

## Persona
Saranmani M — final-year IT student (Vel Tech, CGPA 7.0, batch 2022-26) looking for internships / junior cloud / storage / security roles.

## Known Limitations
- EmailJS credentials are placeholders — user needs to add Service ID / Template ID / Public Key in `/app/frontend/src/components/Contact.jsx`
- Three.js installed but SubtleThree component temporarily disabled (R3F + visual-edits prop injection conflict)
- Resume linked to user-provided PDF artifact

## Backlog
- P1: Wire real EmailJS credentials (user to provide)
- P2: Add Three.js subtle background once visual-edits compatibility verified
- P2: Real article pages or external blog links once content exists
- P2: Coding profile live stats fetch (GitHub repos / LeetCode rank)
