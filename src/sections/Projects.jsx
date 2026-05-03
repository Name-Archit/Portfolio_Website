const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* BIG CARD */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-full bg-surface-container-low border border-white/5">

          <div className="aspect-[16/9] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRWH5p94foGOyrGee-0DxM7iZWnLi73LCewjOEBwWAUBZVLiJ6HvS7h0iFFFVkxWVa8F-XywfaQC26PalZjwieK-RKjjjYMVwR-ACl3SkljSOXUtpd4P3N4sA1EZJhuKEvP7RSFIj2ejz8ZSEh4_Gddme5k0hAYvpNCDhC4YMQo7D3DEQMOq7z32Hep25P9pCvHHZexNMLCYkjrkAifl4pvwV_s6YDR3PN9i5TR82rdWJV7rx3DocbNt2UNPfhgbkdAa5vbItbY4Py"
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent p-12 flex flex-col justify-end">
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

        {/* SIDE CARD */}
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

        {/* STATS */}
        <div className="md:col-span-4 bg-surface-container-low border border-white/5 rounded-full p-10 flex flex-col items-center justify-center text-center">
          <span className="text-6xl font-headline font-bold text-primary">
            08+
          </span>
          <span className="text-[10px] uppercase text-on-surface-variant mt-2">
            YEARS_IN_THE_VOID
          </span>
        </div>

        {/* SECOND CARD */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-full bg-surface-container-low border border-white/5">

          <div className="aspect-[21/9] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApjy-U5SSVKgjEAynEcWAEjpoNcZL3OTzmLYwWhumLOpu2xGERz0e6oscccFN8s2q29-lFnHA1aGa8-1WMEQxFXqw4TUetiMYheuWAD-YQ2F5Uz0ugxpco7qxD1o-epeq9nga01cndZ4Rji0RMRaF2tTq3WOGDbYpXVUgcUthSZ1U3yLHtAkY9W_o6RKIzJQjZ16DOhRHKnJU2_JNPH8dFQa7T0CczMSjOTsC2jmdwoYXD1wMPL2uMXSzCZOTgp4FBsUEif_8JQgE1"
              className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest to-transparent p-12 flex flex-col justify-center">
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