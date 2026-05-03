const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-24 space-y-32">

      {/* ================= ABOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-primary uppercase">
              SYSTEM_IDENTIFICATION // 01
            </span>

            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none">
              ENGINEERING <br />
              <span className="text-primary-container">
                DIGITAL DEPTH
              </span>
            </h1>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              I specialize in architecting high-performance systems where technical complexity meets elegant resolution.
            </p>

            <p className="italic border-l-2 border-secondary/30 pl-6 text-on-surface-variant/80">
              "The goal isn't just to write code that works, but to build systems that endure through clarity and precision."
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl opacity-30 rounded-full"></div>

          <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4h39vEJmp5ATLK-Kft3hh2mYhBIpyST8E7vPI3cvS_D_y-AFHW2K16mw_2g0yo2b1RprOKzsM8YB2Wph1tij0gtxg-wbiats_dBjzupHIbjb_uG5Nsdry9MzXaoCE4UQcGK7btFNNCN3GMkO452Tn8xZSH_JGOGCaVPjgWXnwyaBzKfA6UpplAKeqZlq3wvd7x3HUqv1fAlQMiHP14fERcufJk7ZdtHoX-PKQKUT4A8oWRuwMXTLpjaqd_WLXNA0ZWw4hVmUcS-Tc"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition duration-700"
            />
          </div>
        </div>

      </div>

      {/* ================= SKILLS ================= */}
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

          {/* LANGUAGES */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h3 className="text-2xl font-bold uppercase">Languages</h3>

            {[
              { name: "C++", val: "95%" },
              { name: "Go", val: "88%" },
              { name: "JavaScript", val: "92%" },
            ].map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex justify-between text-xs uppercase">
                  <span>{item.name}</span>
                  <span className="text-primary">{item.val}</span>
                </div>

                <div className="h-1 bg-white/10 rounded">
                  <div
                    className="h-full bg-primary"
                    style={{ width: item.val }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* FRAMEWORKS */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h3 className="text-2xl font-bold uppercase">Frameworks</h3>

            {[
              { name: "React", val: "90%" },
              { name: "Node.js", val: "85%" },
              { name: "Express", val: "80%" },
            ].map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex justify-between text-xs uppercase">
                  <span>{item.name}</span>
                  <span className="text-secondary">{item.val}</span>
                </div>

                <div className="h-1 bg-white/10 rounded">
                  <div
                    className="h-full bg-secondary"
                    style={{ width: item.val }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* TOOLS */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h3 className="text-2xl font-bold uppercase">Tools</h3>

            <div className="flex flex-wrap gap-2">
              {["Docker", "Kubernetes", "Git", "CI/CD", "Terraform"].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs uppercase"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5">
        {[
          { label: "UPTIME", val: "99.9%", color: "text-primary" },
          { label: "COMMITS", val: "2.4k+", color: "text-secondary" },
          { label: "SYSTEMS_BUILD", val: "42", color: "text-primary" },
          { label: "COFFEE_UNITS", val: "∞", color: "text-secondary" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-xs uppercase text-on-surface-variant">
              {item.label}
            </p>
            <p className={`text-3xl font-bold ${item.color}`}>
              {item.val}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;