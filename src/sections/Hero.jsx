import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-198.75 flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden bg-background text-on-surface font-body">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary-container/10 rounded-full blur-[120px]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #3c494e 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-3">
          <span className="w-12 h-px bg-primary"></span>
          <span className="text-xs tracking-[0.4em] uppercase text-on-surface-variant">
            EST_2026 // VERSION_1.0.4
          </span>
          <span className="w-12 h-px bg-primary"></span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-headline font-bold uppercase tracking-tighter mb-6"
        >
          ARCHIT{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary">
            NIRANJAN
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-headline tracking-tight text-on-surface-variant mb-8 max-w-3xl mx-auto"
        >
          while(alive) {"{"} Solve( ); Code( ); Build( ); {"}"}
        </motion.p>

        <p className="text-base md:text-lg text-on-surface-variant/80 leading-relaxed max-w-2xl mx-auto mb-12">
          I specialize in building high-performance systems and intuitive user
          experiences with technical depth and a strong sense of design.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <NavLink to="/about">
            <button className="px-18 py-4 bg-linear-to-r from-primary-container/100 to-primary/90 text-black font-headline hover:cursor-pointer font-bold uppercase tracking-widest rounded-xl shadow-[0_0_60px_rgba(0,210,255,0.25)] hover:shadow-[0_0_70px_rgba(0,200,255,0.8)] hover:scale-105 transition-all duration-300">
              README.md
            </button>
          </NavLink>
          
          <NavLink to="/contact">
          <button className="px-5 py-4 glass-panel border border-primary/20 text-primary font-headline font-bold uppercase tracking-widest rounded-xl hover:bg-primary/20 hover:shadow-[0_0_70px_rgba(0,210,255,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer">
            Initialize_Contact
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;