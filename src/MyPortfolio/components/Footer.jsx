import React from "react";
import { Sparkles, Mail } from "lucide-react";

export default function Footer() {
  return (
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
            <p>© {new Date().getFullYear()} Ashish Choudhary. All rights reserved.</p>
            <p className="font-mono text-[11px] text-cyan-400/70">
              Crafted with React 19 • Tailwind v4 • Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
