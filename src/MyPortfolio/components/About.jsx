import React from "react";
import { Laptop, Flame } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl">
              <h3 className="text-2xl font-black text-white mb-2">
                Building Modern Digital Products
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Hi! I'm Ashish Choudhary, a full-stack engineer passionate about
                crafting scalable web applications, fluid user interfaces, and
                robust digital platforms.
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
                      Specialized in high-speed responsive UI, smooth Framer Motion
                      animations, and fluid interactions.
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
                Full-stack gym tracker with workout management, exercise library,
                JWT authentication, and MongoDB Atlas integration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-3xl">⚡</div>
              <h4 className="font-bold text-lg text-white">
                High Performance & Speed
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Optimized for 100/100 Lighthouse performance metrics, instant hot
                reload, and clean reactive state stores.
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
  );
}
