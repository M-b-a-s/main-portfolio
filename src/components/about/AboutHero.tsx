import { mono } from '../ui'

export function AboutHero() {
  return <section className="shell grid min-h-screen grid-cols-[.82fr_1.18fr] gap-8 pb-10 pt-[132px] max-[900px]:grid-cols-1 max-sm:pt-[105px]" id="top">
    <div className="about-portrait relative min-h-[620px] overflow-hidden bg-[#8b87ff] max-[900px]:order-2 max-sm:min-h-[470px]" data-reveal>
      <div className="portrait-noise absolute inset-0 z-[1] opacity-10" /><div className="absolute left-1/2 top-[18%] aspect-square w-[58%] -translate-x-1/2 rounded-full border border-ink" /><div className="absolute -bottom-[14%] left-1/2 h-[62%] w-[68%] -translate-x-1/2 rounded-t-[48%] bg-ink" /><span className={`absolute left-6 top-6 z-[2] ${mono}`}>Lorem ipsum / 2026</span><strong className="absolute bottom-3 right-5 z-[2] font-serif text-[clamp(90px,12vw,180px)] font-light leading-none text-paper mix-blend-difference">JD</strong>
    </div>
    <div className="flex flex-col justify-between pb-5 max-[900px]:min-h-[570px] max-sm:min-h-[510px]">
      <div className={`eyebrow flex justify-between border-b border-ink/25 pb-4 ${mono}`}><span>About</span><span>(01 — 04)</span></div>
      <h1 className="text-[clamp(64px,7.7vw,118px)] font-medium leading-[.86] tracking-[-.065em]"><span className="hero-line"><span>Lorem ipsum</span></span><span className="hero-line"><span>dolor <em className="font-serif font-light">sit amet.</em></span></span></h1>
      <p className="hero-bottom max-w-[690px] text-[clamp(17px,1.7vw,24px)] leading-[1.45]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </section>
}
