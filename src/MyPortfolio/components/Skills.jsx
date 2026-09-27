import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skillsData";

export default function Skills() {
  return (
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
            Modern frontend and backend tech stack used to engineer responsive,
            rock-solid web products.
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
  );
}
