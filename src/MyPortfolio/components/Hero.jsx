import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import profileImg from "../../assets/ashish.jpg";

export default function Hero() {
  return (
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
  );
}
