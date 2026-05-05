import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-6 mx-auto max-w-6xl rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-[20px] shadow-[0_20px_40px_rgba(0,210,255,0.06)] z-100 px-6 md:px-10 py-4 flex justify-between items-center">
      
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-cyan-400">
            <a href="/">terminal</a>
        </span>
        <span className="text-md font-bold tracking-[0.3em] text-cyan-400 font-headline">
          <a href="/">ARCHIT.exe</a>
        </span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
       <NavLink
          to="/"
          className={({ isActive }) =>
         `uppercase text-sm relative ${
          isActive
          ? "text-fuchsia-300  font-bold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-fuchsia-400 after:rounded-full"
          : "text-neutral-400 hover:text-cyan-400 transition"
         }`
        }
        >
          index.html
        </NavLink>        

        <NavLink
          to="/about"
          className={({ isActive }) =>
         `uppercase text-sm relative ${
          isActive
          ? "text-fuchsia-300  font-bold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-fuchsia-400 after:rounded-full"
          : "text-neutral-400 hover:text-cyan-400 transition"
         }`
        }
        >
          README.md
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
         `uppercase text-sm relative ${
          isActive
          ? "text-fuchsia-300  font-bold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-fuchsia-400 after:rounded-full"
          : "text-neutral-400 hover:text-cyan-400 transition"
         }`
        }
        >
          deployed_builds 
        </NavLink>

        <NavLink
          to="/expertise"
          className={({ isActive }) =>
         `uppercase text-sm relative ${
          isActive
          ? "text-fuchsia-300  font-bold  after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-fuchsia-400 after:rounded-full"
          : "text-neutral-400 hover:text-cyan-400 transition"
         }`
        }
        >
          capabilities.json
        </NavLink>
      </nav>
      
      <button className="bg-primary-container/10 border hover:cursor-pointer border-primary-container/20 px-5 py-2 rounded-xl text-cyan-400 uppercase text-xs font-bold hover:bg-primary-container/20 transition">
        INITIALIZE_CONTACT
      </button>
    </header>
  );
};

export default Navbar;