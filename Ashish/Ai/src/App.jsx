import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Mail,
  Zap,
  Menu,
  X,
  ArrowUpRight,
  Laptop,
  Flame,
  ShieldCheck,
  Cpu,
  Code2,
  Layers,
  Rocket,
} from "lucide-react";

import profileImg from "./assets/ashish.jpg";
import ChyGYM from "../Projects/ChyGYM.jsx";
import ChoudharyMart from "./Projects/ChoudharyMart.jsx";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skills Data
  const skills = [
    {
      name: "React 19",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      level: "Expert",
    },
    {
      name: "JavaScript (ES6+)",
      icon: "⚡",
      color: "from-yellow-400 to-amber-500",
      level: "Advanced",
    },
    {
      name: "Tailwind CSS v4",
      icon: "🎨",
      color: "from-cyan-400 to-teal-500",
      level: "Master",
    },
    {
      name: "Node.js & Express",
      icon: "🟢",
      color: "from-emerald-400 to-green-600",
      level: "Advanced",
    },
    {
      name: "Next.js",
      icon: "▲",
      color: "from-slate-200 to-slate-400",
      level: "Proficient",
    },
    {
      name: "Framer Motion",
      icon: "🎞️",
      color: "from-purple-400 to-pink-500",
      level: "Expert",
    },
    {
      name: "MongoDB & SQL",
      icon: "🍃",
      color: "from-emerald-500 to-teal-700",
      level: "Advanced",
    },
    {
      name: "Git & DevOps",
      icon: "🐙",
      color: "from-orange-500 to-red-500",
      level: "Proficient",
    },
  ];

  return (
    <div className="bg-[#04060d] text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-black font-sans">
      {/* Dynamic Animated Ambient Lights */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse" />
        <div
          className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: "9s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Futuristic Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-2xl bg-[#04060d]/80 border-b border-white/10 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#070a14] rounded-[10px] flex items-center justify-center font-black text-cyan-400 text-sm">
                AC
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-base sm:text-lg bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                Ashish Choudhary
              </span>
              <span className="hidden sm:block text-[10px] text-cyan-400/80 font-mono tracking-wider uppercase">
                Full-Stack & React Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <span>Projects</span>
              <span className="px-2 py-0.5 text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full font-mono">
                chyGYM Tracker
              </span>
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-xs tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden pt-4 pb-2 border-t border-white/10 mt-3 flex flex-col gap-3 text-sm"
            >
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#about"
                className="py-1 text-slate-300 hover:text-cyan-400"
              >
                About
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#skills"
                className="py-1 text-slate-300 hover:text-cyan-400"
              >
                Skills
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#projects"
                className="py-1 text-slate-300 hover:text-cyan-400"
              >
                Projects
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#contact"
                className="py-1 text-slate-300 hover:text-cyan-400"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO SECTION WITH PROFILE PHOTO SHOWCASE */}
      <section className="relative max-w-7xl mx-auto px-6 pt-10 pb-20 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/70 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide">
                Available for Full-Stack & Frontend Projects
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-mono text-cyan-400 font-semibold tracking-wide flex items-center gap-2">
                <span>Namaste 🙏 I'm</span>
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]">
                Ashish <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  Choudhary
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 pt-2 flex items-center gap-2 flex-wrap">
                <span className="text-cyan-400">Full-Stack Developer</span>
                <span className="text-cyan-500">•</span>
                <span className="text-slate-400 font-normal text-lg">
                  React & Modern Web Systems
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Building high-performance web applications, responsive digital
              platforms, and scalable full-stack architectures with clean code
              and fluid motion.
            </p>

            {/* Quick Feature Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-lg shadow-black/40">
                <div className="text-2xl font-black text-cyan-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Pixel Perfect UI
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-lg shadow-black/40">
                <div className="text-2xl font-black text-indigo-400">MERN</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Full-Stack Apps
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-lg shadow-black/40">
                <div className="text-2xl font-black text-emerald-400">
                  Ultra
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Fast Performance
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Featured Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-7 py-3.5 rounded-full font-semibold text-sm bg-slate-900/80 border border-white/15 text-slate-200 hover:bg-slate-800 hover:border-cyan-500/40 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          {/* Right: ROUNDED PROFILE PHOTO SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center py-6"
          >
            {/* Main Rounded Image Outer Wrapper */}
            <div className="relative flex items-center justify-center">
              {/* Outer Cosmic Gradient Glowing Aura */}
              <div
                className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/35 via-indigo-600/30 to-purple-600/30 rounded-full blur-2xl -z-10 animate-pulse"
                style={{ animationDuration: "4s" }}
              />

              {/* Rotating Futuristic Cyber Orbital Rings */}
              <div
                className="absolute -inset-4 sm:-inset-5 rounded-full border border-cyan-500/30 border-dashed animate-spin"
                style={{ animationDuration: "28s" }}
              />
              <div
                className="absolute -inset-8 sm:-inset-10 rounded-full border border-indigo-500/25 border-dotted animate-spin"
                style={{
                  animationDuration: "38s",
                  animationDirection: "reverse",
                }}
              />

              {/* Compact Circular Frame Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-[0_0_50px_rgba(6,182,212,0.35)]">
                {/* Inner Dark Rim */}
                <div className="w-full h-full rounded-full p-1 bg-[#050914] overflow-hidden relative group">
                  {/* The Profile Photo */}
                  <img
                    src={profileImg}
                    alt="Ashish Choudhary"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700 filter contrast-105 brightness-100"
                  />

                  {/* Subtle Dark Gradient Vignette */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#02040a]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Verified badge inside bottom of image */}
                  <div className="absolute bottom-3 inset-x-0 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-lg">
                      <Sparkles
                        className="w-3.5 h-3.5 text-cyan-400 animate-spin"
                        style={{ animationDuration: "6s" }}
                      />
                      <span>Verified Dev</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge 1 (Top-Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -left-6 sm:-left-8 bg-[#070d1e]/90 border border-cyan-500/40 backdrop-blur-xl px-3.5 py-2 rounded-2xl shadow-xl shadow-cyan-950/60 flex items-center gap-2.5 z-20"
              >
                <div className="w-7 h-7 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">
                  ⚛️
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-mono leading-none">
                    FRAMEWORK
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    React 19 Pro
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Badge 2 (Bottom-Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-3 -right-6 sm:-right-8 bg-[#070d1e]/90 border border-emerald-500/40 backdrop-blur-xl px-3.5 py-2 rounded-2xl shadow-xl shadow-emerald-950/60 flex items-center gap-2.5 z-20"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">
                  🏋️
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-mono leading-none">
                    PROJECT
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    chyGYM App
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS MARQUEE & INTERACTIVE MATRIX */}
      <section
        id="skills"
        className="py-20 relative border-y border-white/5 bg-white/[0.01]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase font-semibold">
              // Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Modern frontend and backend tech stack used to engineer
              responsive, rock-solid web products.
            </p>
          </div>

          {/* Dynamic Grid of Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {skill.level}
                  </span>
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <div className="mt-3 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full w-4/5`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS: chyGYM */}
      <ChyGYM />
      <ChoudharyMart />

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="py-20 bg-white/[0.01] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-black text-white mb-2">
                  Building Modern Digital Products
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Hi! I'm Ashish Choudhary, a full-stack engineer passionate
                  about crafting scalable web applications, fluid user
                  interfaces, and robust digital platforms.
                </p>

                <div className="space-y-3.5 mt-6">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <Laptop className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Full-Stack Architecture
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        End-to-end expertise spanning React 19, Tailwind CSS,
                        Node.js, Express, and MongoDB.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Performance & User Experience
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Specialized in high-speed responsive UI, smooth Framer
                        Motion animations, and fluid interactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-3xl">🏋️</div>
                <h4 className="font-bold text-lg text-white">
                  chyGYM Fitness Platform
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Full-stack gym tracker with workout management, exercise
                  library, JWT authentication, and MongoDB Atlas integration.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-3xl">⚡</div>
                <h4 className="font-bold text-lg text-white">
                  High Performance & Speed
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Optimized for 100/100 Lighthouse performance metrics, instant
                  hot reload, and clean reactive state stores.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-3xl">🎨</div>
                <h4 className="font-bold text-lg text-white">
                  Glassmorphism & Motion
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Smooth Framer Motion transitions, dark cyberpunk neon
                  aesthetics, and responsive mobile-first layouts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-3xl">🛡️</div>
                <h4 className="font-bold text-lg text-white">
                  Clean Code & Scalability
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Modular component architecture, reusable hooks, and clean file
                  structure for high maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer
        id="contact"
        className="relative pt-20 pb-12 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-black/80 border border-cyan-500/20 backdrop-blur-2xl text-center space-y-8 overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Collaborate
              </span>
              <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Let's Build Something <br />
                <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-400 bg-clip-text text-transparent">
                  Extraordinary Together
                </span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">
                Have a web development or full-stack project idea? Feel free to
                reach out directly.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ashish.choudhary.dev@gmail.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>ashish.choudhary.dev@gmail.com</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-cyan-500/40 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Profile</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <p>© 2026 Ashish Choudhary. All rights reserved.</p>
              <p className="font-mono text-[11px] text-cyan-400/70">
                Crafted with React 19 • Tailwind v4 • Framer Motion
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
