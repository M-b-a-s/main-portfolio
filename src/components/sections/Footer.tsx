import { Brand, mono } from '../ui'

export function Footer() {
  return <footer className="shell grid min-h-[210px] grid-cols-[1fr_1fr_1fr_auto] items-center gap-10 max-[900px]:grid-cols-2 max-[900px]:py-12 max-sm:grid-cols-1 max-sm:gap-6">
    <a href="/"><Brand /></a>
    <div className="flex gap-5 text-xs"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">Lorem ↗</a><a href="https://github.com" target="_blank" rel="noreferrer">Ipsum ↗</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Dolor ↗</a></div>
    <p className={`leading-relaxed ${mono}`}>© 2026 · Lorem ipsum<br />dolor sit amet.</p><a className="text-xs" href="#top">Lorem ipsum ↑</a>
  </footer>
}
