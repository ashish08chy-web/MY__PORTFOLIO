const ChyGYMOverview = () => {
  const features = [
    "User Signup & Login",
    "JWT Authentication",
    "Workout Management",
    "Exercise Library",
    "Progress Tracking",
    "User Profile",
    "REST API Integration",
    "MongoDB Atlas Database",
  ];

  const technologies = [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
  ];

  return (
    <section id="projects" className="w-full bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 mb-4 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 text-sm font-medium">
            Featured Project
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            chy<span className="text-emerald-400">GYM</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-400 text-base md:text-lg leading-relaxed">
            A full-stack gym tracker web application designed to help users
            manage workouts, explore exercises and track their fitness journey.
          </p>
        </div>

        {/* ================= MAIN CARD ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT - PROJECT PREVIEW */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 overflow-hidden">
              {/* Fake Browser Header */}
              <div className="flex items-center gap-2 px-2 pb-4">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>

                <div className="flex-1 ml-3 h-7 rounded-lg bg-white/5"></div>
              </div>

              {/* Project Preview */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 min-h-[330px]">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-gray-400 text-sm">Welcome back</p>

                    <h3 className="text-white text-2xl font-bold mt-1">
                      chyGYM Dashboard
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                    <span className="text-2xl">🏋️</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                    <p className="text-gray-400 text-xs">Workouts</p>

                    <p className="text-white text-xl font-bold mt-2">24</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                    <p className="text-gray-400 text-xs">Exercises</p>

                    <p className="text-white text-xl font-bold mt-2">12+</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                    <p className="text-gray-400 text-xs">Progress</p>

                    <p className="text-emerald-400 text-xl font-bold mt-2">
                      +18%
                    </p>
                  </div>
                </div>

                {/* Workout Progress */}
                <div className="mt-5 rounded-xl bg-white/5 border border-white/5 p-4">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 text-sm">
                      Weekly Workout
                    </span>

                    <span className="text-emerald-400 text-sm">75%</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-3/4 h-full rounded-full bg-emerald-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - PROJECT INFO */}
          <div>
            <p className="text-emerald-400 font-semibold uppercase tracking-wider text-sm mb-3">
              Full Stack Web Application
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Your Fitness Journey,
              <span className="text-emerald-400"> Tracked.</span>
            </h3>

            <p className="text-gray-400 mt-5 leading-relaxed">
              chyGYM is a full-stack gym tracker application built with
              React.js, Tailwind CSS, Node.js, Express.js and MongoDB. The
              application includes authentication, workout management, exercise
              data and REST API integration.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="mt-8">
              <h4 className="text-white font-semibold text-lg mb-4">
                Key Features
              </h4>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400 text-xs">
                      ✓
                    </span>

                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= TECHNOLOGIES ================= */}
            <div className="mt-8">
              <h4 className="text-white font-semibold text-lg mb-4">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 text-sm hover:border-emerald-400/40 hover:text-emerald-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="#"
                className="px-6 py-3 rounded-xl bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition duration-300"
              >
                Live Demo ↗
              </a>

              <a
                href="#"
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition duration-300"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChyGYMOverview;
