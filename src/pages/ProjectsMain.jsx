import { motion } from "framer-motion";

const ProjectsMain = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 py-24">
      {/* HEADER */}
      <header className="mb-24">
        <div className="inline-block px-3 py-1 mb-6 border border-primary/20 rounded-full bg-primary/5">
          <span className="text-[10px] tracking-[0.3em] text-primary uppercase">
            ARCHIVE_VOLUME_01
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-headline text-[3.5rem] leading-[0.9] font-bold uppercase tracking-tight mb-6 max-w-4xl"
        >
          FEATURED <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary">
            PROJECT_REGISTRY
          </span>
        </motion.h1>

        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          A curated selection of high-performance architectural systems and
          digital environments engineered for scalable infrastructure.
        </p>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* PROJECT 1 */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-low border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,210,255,0.1)]">
          <div className="flex flex-col md:flex-row h-full">
            {/* IMAGE */}
            <div className="md:w-1/2 relative min-h-75">
              <img
                src="/images/Project01.png"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="md:w-1/2 p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-secondary tracking-widest">
                  01 // QUANTUM_CORE
                </span>

                <h2 className="font-headline text-3xl font-bold uppercase mt-4 mb-4">
                  NEON ZENITH
                </h2>

                <p className="text-on-surface-variant text-sm mb-6">
                  A distributed ledger system designed for micro-second latency
                  execution environments.
                </p>

                <div className="flex gap-2 mb-6 flex-wrap">
                  <span className="px-3 py-1 bg-white/5 text-primary text-[10px] rounded-lg uppercase">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-primary text-[10px] rounded-lg uppercase">
                    Go
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-primary text-[10px] rounded-lg uppercase">
                    Redis
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-linear-to-r from-primary to-primary-container text-on-primary py-3 rounded-xl text-xs font-bold uppercase">
                  LIVE DEMO
                </button>

                <button className="flex-1 border border-white/20 py-3 rounded-xl text-xs uppercase">
                  SOURCE CODE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="md:col-span-4 group p-8 rounded-3xl border border-white/10 hover:border-secondary/30 transition duration-500">
          <div className="mb-6 aspect-square overflow-hidden rounded-xl">
            <img
              src="/images/Project02.png"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
            />
          </div>

          <h2 className="font-headline text-2xl mb-3">VOID_SENTINEL</h2>

          <p className="text-sm text-on-surface-variant mb-4">
            Intrusion detection using behavioral heuristics.
          </p>

          <div className="flex gap-2">
            <span className="text-xs text-secondary">Python</span>
            <span className="text-xs text-secondary">AWS</span>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="md:col-span-12 group relative overflow-hidden rounded-3xl bg-surface-container-low border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_50px_rgba(223,220,219,0.05)]">
          <div className="flex flex-col md:flex-row p-10 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] text-white/50 tracking-widest">
                  03 // AI_ORCHESTRA
                </span>
              </div>

              <h2 className="font-headline text-3xl font-bold uppercase mb-4">
                SYNAPSE_GRID
              </h2>

              <p className="text-on-surface-variant text-sm mb-6">
                A neural-network visualization engine providing real-time
                telemetry of multi-agent cognitive environments.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] uppercase">
                  Rust
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] uppercase">
                  WASM
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] uppercase">
                  Three.js
                </span>
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-3 bg-linear-to-r from-white/70 to-white text-black rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition">
                  INITIALIZE
                </button>

                <button className="p-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                  <span className="material-symbols-outlined text-sm">
                    code
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
              <div className="aspect-video rounded-xl overflow-hidden group-hover:scale-[1.02] transition duration-500">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqHYJwmfzYrnKfMVPgFL_gcK7n8j2J8ZZApVFKkEtUw4uCMuys9v904mulB9BkR53zH2USbCv1KJxcFl-ghfBGpj4wG4XN6ie6nrFWyuG856BPzvao4aVsGsh12bhDemvMwfqclmefBPYE-4nkR-bnoYYFrXHlj78ED4oGFo4S4gBJ92QoUPJBgFLCKk4tyaJSEvALIzaoqq1aXzyJKKxjdkvsvEQfRB0EPl5iodlmQv4F3bBbJq_KT0TEaSyJWtrzTCoFE2gnpODE"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition duration-500"
                />
              </div>

              <div className="aspect-video rounded-xl overflow-hidden group-hover:scale-[1.02] transition duration-500 delay-75">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhqWcvU7zseItI9dtwFWvxc_-Mo8IAnmjfXf0d_BkkZsa9h7wrf_Bq988Rdt5RQX_KvIg9Cs5llrS3cqns_oVe2maXPTHFagVc77b8of6wQbyOwaLAaJBfh7Fhja3tIs_ws_mp24r9DkgyFQMuAqiSSFPQbVGS53oPTELUaod58laj-wwgAeHv_aBDPUSA-bX0SIxsaF90EZ8dy_68-MOCRRT2DAB4JpDSA8mbgZgMnxt7Wjza3NFXygrJw2T-xrqwPRObnspILb2I"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsMain;