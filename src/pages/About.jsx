import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-24 space-y-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[10px] tracking-[0.4em] text-primary uppercase"
            >
              SYSTEM_IDENTIFICATION // 01
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold uppercase leading-none"
            >
              I THINK IN SYSTEM{" "}
              <span className="text-primary-container">SPEAK IN CODE</span>
            </motion.h1>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              I specialize in architecting high-performance systems where
              technical complexity meets elegant resolution.
            </p>

            <p className="italic border-l-2 border-secondary/30 pl-6 text-on-surface-variant/80">
              "The goal isn't just to write code that works, but to build
              systems that endure through clarity and precision."
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          {/* Glow background */}
          <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-secondary/10 blur-3xl opacity-30 rounded-full"></div>

          {/* Card */}
          <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="/images/MyProfessional.webp"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition duration-700"
            />

            {/* 👇 OVERLAY CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 via-black/20 to-transparent">
              <div className="flex items-end justify-between">
                {/* LEFT TEXT */}
                <div>
                  <p className="text-[12px] tracking-widest uppercase text-primary mb-1">
                    CURRENT_STATUS
                  </p>
                  <h4 className="text-md font-bold uppercase text-on-surface">
                    READY_FOR_DEPLOYMENT
                  </h4>
                </div>

                {/* RIGHT ICON */}
                <span className="material-symbols-outlined fill text-secondary text-4xl drop-shadow-[0_0_8px_rgba(237,177,255,0.6)]">
                  verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-secondary uppercase">
              TECHNICAL_COMPETENCIES // 02
            </span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase">
              CORE_STACK
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group rounded-3xl border border-white/5 p-8 bg-linear-to-b from-white/5 to-transparent hover:border-primary/40 transition-all duration-500">
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 30px rgba(0,210,255,0.15)" }}
            />

            <span className="absolute top-6 right-6 text-xs text-on-surface-variant/40">
              01
            </span>

            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl">
              &lt;/&gt;
            </div>

            <h3 className="text-2xl font-bold uppercase mb-6">Languages</h3>

            {[
              { name: "C++", val: "99%" },
              { name: "Go", val: "80%" },
              { name: "JavaScript", val: "81%" },
              { name: "HTML", val: "95%" },
              { name: "CSS", val: "96%" },
              { name: "Python", val: "85%" },
            ].map((item) => (
              <div key={item.name} className="space-y-1 mb-4">
                <div className="flex justify-between text-xs uppercase">
                  <span>{item.name}</span>
                  <span className="text-primary">{item.val}</span>
                </div>

                <div className="h-0.5 bg-white/10">
                  <div
                    className="h-full bg-primary"
                    style={{ width: item.val }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative group rounded-3xl border border-white/5 p-8 bg-linear-to-b from-white/5 to-transparent hover:border-secondary/40 transition-all duration-500">
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 30px rgba(237,177,255,0.15)" }}
            />

            <span className="absolute top-6 right-6 text-xs text-on-surface-variant/40">
              02
            </span>

            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary text-xl">
              ◇
            </div>

            <h3 className="text-2xl font-bold uppercase mb-6">Frameworks</h3>

            {[
              { name: "React", val: "90%" },
              { name: "Node.js", val: "85%" },
              { name: "Express", val: "80%" },
              { name: "Next.js", val: "87%" },
              { name: "Tailwind CSS", val: "90%" },
            ].map((item) => (
              <div key={item.name} className="space-y-1 mb-4">
                <div className="flex justify-between text-xs uppercase">
                  <span>{item.name}</span>
                  <span className="text-secondary">{item.val}</span>
                </div>

                <div className="h-0.5 bg-white/10">
                  <div
                    className="h-full bg-secondary"
                    style={{ width: item.val }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative group rounded-3xl border border-white/5 p-8 bg-linear-to-b from-white/5 to-transparent hover:border-primary/40 transition-all duration-500">
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 30px rgba(0,210,255,0.15)" }}
            />

            <span className="absolute top-6 right-6 text-xs text-on-surface-variant/40">
              03
            </span>

            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl">
              ⚒
            </div>

            <h3 className="text-2xl font-bold uppercase mb-6">Tools</h3>

            <div className="flex flex-wrap gap-2">
              {["Docker", "Kubernetes", "Git", "CI/CD", "Terraform"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs uppercase"
                  >
                    {tool}
                  </span>
                ),
              )}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-xs text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">info</span>
                INFRASTRUCTURE AS CODE FOCUS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5">
        {[
          {
            label: "LeetCode Rating",
            val: "1606 (Top 22%)",
            color: "text-primary",
          },
          {
            label: "LeetCode questions solved",
            val: "240+",
            color: "text-secondary",
          },
          { label: "CodeChef rating", val: "1733 (3*)", color: "text-primary" },
          {
            label: "HackerRank total certificates",
            val: "3+",
            color: "text-secondary",
          },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-sm uppercase text-on-surface-variant">
              {item.label}
            </p>
            <p className={`text-3xl font-bold ${item.color}`}>{item.val}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
