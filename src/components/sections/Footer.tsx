import { Brand, mono } from "../ui";

export function Footer() {
  return (
    <footer className="shell grid min-h-52.5 grid-cols-[1fr_1fr_1fr_auto] items-center gap-10 max-[900px]:grid-cols-2 max-[900px]:py-12 max-sm:grid-cols-1 max-sm:gap-6">
      <a href="/">
        <Brand />
      </a>
      <div className="flex gap-5 text-xs">
        <a href="https://www.linkedin.com/in/ifechimenim" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href="https://github.com/M-b-a-s" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href="https://www.instagram.com/mbas_ernest" target="_blank" rel="noreferrer">
          Instagram ↗
        </a>
      </div>
      <p className={`leading-relaxed ${mono}`}>
        © 2026 · Edition
      </p>
      <a className="text-xs" href="#top">
        Back to top ↑
      </a>
    </footer>
  );
}
