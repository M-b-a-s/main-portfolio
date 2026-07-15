import { useEffect, useState } from "react";
import { Arrow, Brand } from "../ui";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20 h-22 max-sm:h-18">
        <div className="nav-inner shell grid h-full grid-cols-[1fr_auto_1fr] items-center border-b border-ink/25 max-[900px]:grid-cols-[1fr_auto]">
          <a href="/" aria-label="John Doe, home">
            <Brand />
          </a>
          <nav
            className="flex gap-8 text-[13px] max-[900px]:hidden"
            aria-label="Main navigation"
          >
            <a className="nav-link relative" href="/#work">
              Work
            </a>
            <a className="nav-link relative" href="/#services">
              Services
            </a>
            <a className="nav-link relative" href="/about/">
              About
            </a>
          </nav>
          <a
            className="magnetic justify-self-end rounded-full bg-ink px-4.25 py-3.25 text-xs text-paper max-[900px]:hidden"
            href="mailto:mbasernest@outlook.com"
          >
            Book a Call{" "}
            <span className="ml-3">
              <Arrow diagonal />
            </span>
          </a>
          <button
            className="hidden border-0 bg-transparent py-3 pl-5 text-xs max-[900px]:block"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-15 hidden -translate-y-full flex-col justify-center bg-ink px-4 pb-10 pt-30 text-paper transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] max-[900px]:flex ${menuOpen ? "translate-y-0" : ""}`}
        aria-hidden={!menuOpen}
      >
        {[
          ["Work", "/#work"],
          ["Services", "/#services"],
          ["About", "/about/"],
          ["Contact", "/#contact"],
        ].map(([item, href], index) => (
          <a
            key={item}
            className="border-b border-white/20 py-3 font-serif text-[15vw] font-light leading-none"
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            <sup className="mr-4.5 font-mono text-[10px]">0{index + 1}</sup>
            {item}
          </a>
        ))}
      </div>
    </>
  );
}
