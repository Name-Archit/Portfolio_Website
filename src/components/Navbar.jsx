import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-6 mx-auto max-w-6xl rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-[20px] shadow-[0_20px_40px_rgba(0,210,255,0.06)] z-[100] px-6 md:px-10 py-4 flex justify-between items-center">
      
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-cyan-400">
            terminal
        </span>
        <span className="text-lg font-bold tracking-[0.3em] text-cyan-400 font-headline uppercase">
          ARCHIT NIRANJAN
        </span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <NavLink to="/home" className="text-fuchsia-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-fuchsia-400 after:rounded-full uppercase text-sm">
          HOME
        </NavLink>        

        <NavLink to="/about" className="text-fuchsia-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-fuchsia-400 after:rounded-full uppercase text-sm">
          ABOUT
        </NavLink>

        <NavLink to="/projects" className="text-neutral-400 hover:text-cyan-400 transition uppercase text-sm">
          PROJECTS
        </NavLink>

        <NavLink to="/expertise" className="text-neutral-400 hover:text-cyan-400 transition uppercase text-sm">
          EXPERTISE
        </NavLink>
      </nav>
      
      <button className="bg-primary-container/10 border border-primary-container/20 px-5 py-2 rounded-xl text-cyan-400 uppercase text-xs font-bold hover:bg-primary-container/20 transition">
        INITIALIZE_CONTACT
      </button>
    </header>
  );
};

export default Navbar;