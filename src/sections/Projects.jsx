const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <div className="md:col-span-8 group relative overflow-hidden rounded-full bg-surface-container-low border border-white/5">

          <div className="aspect-video overflow-hidden">
            <img
              src="./images/unnamed.png"
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-transparent to-transparent p-12 flex flex-col justify-end">
            <span className="text-[10px] tracking-[0.2em] text-primary mb-2">
              01 // CLOUD ARCHITECTURE
            </span>
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">
              NEURAL_GRID_OS
            </h3>
            <p className="text-on-surface-variant text-sm max-w-md">
              A distributed computing platform designed for low-latency synchronization across edge nodes.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-4 bg-surface-container-low border border-white/5 rounded-full p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
              CORE_LOGIC
            </h3>
            <p className="text-on-surface-variant text-sm">
              Specializing in Rust and Go for mission-critical backends.
            </p>
          </div>

          <div className="mt-8 flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase">
              RUST
            </span>
            <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase">
              KUBERNETES
            </span>
            <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase">
              GRPC
            </span>
          </div>
        </div>
        
        <div className="md:col-span-4 bg-surface-container-low border border-white/5 rounded-full p-10 flex flex-col items-center justify-center text-center">
          <span className="text-6xl font-headline font-bold text-primary">
            08+
          </span>
          <span className="text-[10px] uppercase text-on-surface-variant mt-2">
            YEARS_IN_THE_VOID
          </span>
        </div>
        
        <div className="md:col-span-8 group relative overflow-hidden rounded-full bg-surface-container-low border border-white/5">

          <div className="aspect-21/9 overflow-hidden">
            <img
              src="./images/blueBulb.png"
              className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-surface-container-lowest to-transparent p-12 flex flex-col justify-center">
            <span className="text-[10px] text-secondary mb-2">
              02 // CYBERSEC
            </span>
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">
              VAULT_PROTOCOL
            </h3>
            <p className="text-on-surface-variant text-sm max-w-sm">
              End-to-end encrypted storage for enterprise-level data compliance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;