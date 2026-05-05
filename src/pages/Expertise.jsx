const Expertise = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* ================= HEADER ================= */}
      <section className="mb-32 flex flex-col md:flex-row items-end gap-8">
        <div className="flex-1">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] block mb-4">
            SYSTEMS_RECORD_01 // CHRONOLOGY
          </span>

          <h1 className="text-6xl md:text-8xl font-bold uppercase leading-[0.9]">
            PROVEN_
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              CAPABILITY.
            </span>
          </h1>
        </div>

        <div className="max-w-md pb-4 border-l border-primary/20 pl-8">
          <p className="text-on-surface-variant text-sm">
            A technical trajectory defined by algorithmic precision and
            architectural integrity.
          </p>
        </div>
      </section>
      {/* ================= FIRST GRID ================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-32">
        <div className="md:col-span-12 glass-panel rounded-3xl p-10 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_50px_rgba(0,210,255,0.4)]">
          <div className="flex flex-col gap-16">
            {/* ===== LEETCODE ===== */}
            <div>
              <div className="flex justify-between mb-12">
                <div>
                  <span className="text-xs text-secondary uppercase">
                    COMPETITIVE_ARENA
                  </span>

                  <h2 className="text-4xl font-bold mt-2 uppercase">
                    LEETCODE
                  </h2>
                </div>

                <span className="material-symbols-outlined text-secondary text-5xl">
                  leaderboard
                </span>
              </div>

              <div className="flex flex-wrap gap-12">
                <div>
                  <span className="text-[10px] text-on-surface-variant">
                    MAX_RATING
                  </span>
                  <p className="text-5xl text-primary font-bold">1606</p>
                </div>

                <div>
                  <span className="text-[10px] text-on-surface-variant">
                    PROBLEMS_SOLVED
                  </span>
                  <p className="text-5xl font-bold">250+</p>
                </div>

                <div className="ml-auto">
                  <span className="text-[10px] text-on-surface-variant">
                    GLOBAL_RANK
                  </span>
                  <p className="text-5xl text-secondary font-bold">TOP_21%</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-blue/70"></div>

            {/* ===== CODECHEF ===== */}
            <div>
              <div className="flex justify-between mb-12">
                <h2 className="text-4xl font-bold uppercase">
                  CODECHEF_3_STAR
                </h2>

                <span
                  className="material-symbols-outlined text-secondary text-5xl opacity-80"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  leaderboard
                </span>
              </div>

              <div className="flex flex-wrap gap-12">
                <div>
                  <span className="text-[10px] text-on-surface-variant">
                    MAX_RATING
                  </span>
                  <p className="text-5xl text-primary font-bold">1733</p>
                </div>

                <div>
                  <span className="text-[10px] text-on-surface-variant">
                    PROBLEMS_SOLVED
                  </span>
                  <p className="text-5xl font-bold">500+</p>
                </div>

                <div className="ml-auto">
                  <span className="text-[10px] text-on-surface-variant">
                    GLOBAL_RANK
                  </span>
                  <p className="text-5xl text-secondary font-bold">6972</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
            
      {/* ================= SECOND GRID ================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-32 items-start">
        {/* ===== LEFT (GATE) ===== */}
        <div className="md:col-span-4 bg-surface-container-low rounded-3xl p-10 border border-white/5">
          <h3 className="text-3xl font-bold">At_Coder_7_Kyu</h3>

          <p className="text-sm mt-4 text-on-surface-variant leading-relaxed">
            Specialized in algorithms, data structures, and system design with
            time complexity optimization.
          </p>

          <div className="h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[99.6%]" />
          </div>
        </div>

        {/* ===== RIGHT (ACHIEVEMENTS) ===== */}
        <div className="md:col-span-8 glass-panel rounded-3xl p-10 border border-white/5">
          {[
            {
              id: "01",
              title: "GOLD CERTIFIED C++ CODER ON HACKERRANK",
              year: "2025",
            },
            {
              id: "02",
              title: "CERTIFICATION ON PROBLEM SOLVING",
              year: "2025",
            },
            {
              id: "03",
              title: "PARTICIPATED IN 50+ CONTESTS",
              year: "2023 - 2026",
            },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-8 mb-8 group">
              <span className="text-3xl opacity-30 group-hover:opacity-100 transition">
                {item.id}
              </span>

              <div className="flex-1 border-b border-white/20 pb-4 flex justify-between">
                <span className="font-medium">{item.title}</span>

                <span className="text-xs text-on-surface-variant">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-24">
        <h2 className="text-4xl font-bold uppercase">PROFESSIONAL_NODES</h2>

        {/* ITEM 1 */}
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <span className="text-primary font-bold">01 // PRESENT</span>
            <p className="text-xs">SDE INTERN</p>
          </div>

          <div className="md:col-span-9 glass-panel p-12 border-l-4 border-primary/40">
            <h3 className="text-3xl font-bold mb-4">QUANTUM_LABS_INC</h3>

            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li>/ Reduced latency by 42%</li>
              <li>/ 50k+ events/sec system</li>
              <li>/ Migrated to Kubernetes</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-48 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video rounded-3xl overflow-hidden">
          <img
            src="YOUR_IMAGE_URL"
            className="w-full h-full object-cover grayscale brightness-50"
          />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <p className="text-xl font-bold">
              "ALGORITHMS ARE THE ARCHITECTURE OF THE MODERN WORLD."
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold uppercase">
            CONTINUOUS_INTEGRATION
          </h3>

          <p className="text-on-surface-variant mt-4">
            Bridging theory and scalable systems.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Expertise;