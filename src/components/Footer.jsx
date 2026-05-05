import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 pt-24 pb-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-end gap-12">
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-cyan-400">
                    <a href="/">terminal</a>
            </span>
            <span className="text-lg font-bold tracking-[0.3em] text-cyan-400 font-headline uppercase">                
              <a href="/">ARCHIT</a>
            </span>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            © 2026 DIGITAL_ARCHITECT // BUILT_FOR_THE_OBSERVATORY
          </p>
        </div>
        
        <div className="flex gap-6">

          <a
          
            href="https://github.com/Name-Archit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-cyan-400 transition text-xl hover:drop-shadow-[0_0_6px_rgba(0,210,255,0.6)]"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/archit-niranjan-0ba699238/3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-cyan-400 transition text-xl hover:drop-shadow-[0_0_6px_rgba(0,210,255,0.6)]"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:architniranjan4455@gmail.com"
            className="text-neutral-500 hover:text-cyan-400 transition text-xl hover:drop-shadow-[0_0_6px_rgba(0,210,255,0.6)]"
          >
            <FaEnvelope />
          </a>          

        </div>

      </div>
    </footer>
  );
};

export default Footer;