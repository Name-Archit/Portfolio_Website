const Contact = () => {
  return (
    <main className="relative pt-32 pb-48 px-6 lg:px-0 overflow-hidden">

      {/* ===== Ambient Glow ===== */}
      <div className="absolute top-0 right-0 -z-10 w-150 h-150 bg-primary-container/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 -z-10 w-150 h-150 bg-secondary-container/5 blur-[120px] rounded-full"></div>

      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-5 space-y-12">

          {/* Heading */}
          <div className="space-y-4">

            <span className="text-[10px] tracking-[0.4em] text-primary uppercase block">
              04 // CONNECTION_HUB
            </span>

            <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-tight">

              LET'S BUILD <br /> & CODE <br />

              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                THE FUTURE
              </span>

            </h1>

            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              Ready to deploy your next vision? I specialize in bridging the
              gap between complex technical requirements and seamless user
              experiences.
            </p>

          </div>

          {/* Contact Links */}
          <div className="grid grid-cols-1 gap-6">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/archit-niranjan-0ba699238/3"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl bg-surface-container-low border border-white/10 hover:bg-surface-container-high transition-all duration-500"
            >

              <div className="flex items-center gap-4">

                <span className="material-symbols-outlined text-secondary text-3xl">
                  hub
                </span>

                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                    PROFESSIONAL_NETWORK
                  </p>

                  <p className="text-xl font-headline font-bold">
                    LINKEDIN
                  </p>
                </div>

              </div>

              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                north_east
              </span>

            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Name-Archit"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl bg-surface-container-low border border-white/10 hover:bg-surface-container-high transition-all duration-500"
            >

              <div className="flex items-center gap-4">

                <span className="material-symbols-outlined text-primary text-3xl">
                  code
                </span>

                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                    SOURCE_CONTROL
                  </p>

                  <p className="text-xl font-headline font-bold">
                    GITHUB
                  </p>
                </div>

              </div>

              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                north_east
              </span>

            </a>

            {/* EMAIL */}
            <a
              href="mailto:architniranjan4455@gmail.com"
              className="group flex items-center justify-between p-6 rounded-xl bg-surface-container-low border border-white/10 hover:bg-surface-container-high transition-all duration-500"
            >

              <div className="flex items-center gap-4">

                <span className="material-symbols-outlined text-white/70 text-3xl">
                  alternate_email
                </span>

                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                    DIRECT_INQUIRY
                  </p>

                  <p className="text-xl font-headline font-bold">
                    EMAIL
                  </p>
                </div>

              </div>

              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                north_east
              </span>

            </a>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:col-span-7">

          <div className="glass-panel p-8 md:p-12 rounded-4xl border border-white/5 shadow-2xl relative overflow-hidden">

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-size-[20px_20px] -z-10"></div>

            <form className="space-y-8">

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* NAME */}
                <div className="space-y-2">

                  <label className="text-[10px] tracking-widest text-primary uppercase ml-1">
                    NAME
                  </label>

                  <input
                    type="text"
                    placeholder="YOUR_NAME"
                    className="w-full bg-surface-container-highest/30 border border-white/10 focus:border-primary/50 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/30 transition-all outline-none"
                  />

                </div>

                {/* EMAIL */}
                <div className="space-y-2">

                  <label className="text-[10px] tracking-widest text-primary uppercase ml-1">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    placeholder="COMM_PROTOCOL@HOST.IO"
                    className="w-full bg-surface-container-highest/30 border border-white/10 focus:border-primary/50 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/30 transition-all outline-none"
                  />

                </div>

              </div>

              {/* MESSAGE */}
              <div className="space-y-2">

                <label className="text-[10px] tracking-widest text-primary uppercase ml-1">
                  MESSAGE
                </label>

                <textarea
                  rows="6"
                  placeholder="TRANSMIT_DATA_HERE..."
                  className="w-full bg-surface-container-highest/30 border border-white/10 focus:border-primary/50 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/30 transition-all outline-none resize-none"
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-5 bg-linear-to-r from-primary/80 to-primary-container/80 text-black rounded-xl font-headline font-bold text-sm tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3"
              >

                EXECUTE_TRANSMISSION

                <span className="material-symbols-outlined text-lg">
                  send
                </span>

              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;