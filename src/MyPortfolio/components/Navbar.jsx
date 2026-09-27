import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
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
          aria-label="Toggle menu"
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
  );
}
