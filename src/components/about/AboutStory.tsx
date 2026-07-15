import { mono } from '../ui'

export function AboutStory() {
  return <section className="shell py-[150px] max-sm:py-[95px]">
    <div className="grid grid-cols-[.75fr_1.25fr] gap-14 max-[900px]:grid-cols-1"><span className={mono} data-reveal>Lorem ipsum dolor</span><div data-reveal><h2 className="max-w-[900px] text-[clamp(43px,5.5vw,82px)] font-medium leading-[.98] tracking-[-.05em]">Lorem ipsum dolor sit amet, <em className="font-serif font-light">consectetur adipiscing.</em></h2><div className="mt-16 grid grid-cols-2 gap-10 border-t border-ink pt-7 max-sm:grid-cols-1"><p className="leading-[1.75] text-[#55554f]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p className="leading-[1.75] text-[#55554f]">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p></div></div></div>
    <div className="relative mt-[130px] h-[min(70vw,760px)] min-h-[430px] overflow-hidden bg-signal max-sm:mt-20" data-reveal><div className="portrait-noise absolute inset-0 opacity-10" /><span className={`absolute left-6 top-6 ${mono}`}>Consectetur / Magna aliqua</span><div className="absolute left-[12%] top-[13%] size-[55%] rounded-full border border-ink" /><div className="absolute -right-[5%] -bottom-[35%] aspect-square w-[68%] rotate-12 border border-ink bg-paper" /><strong className="absolute bottom-4 left-6 font-serif text-[clamp(80px,16vw,230px)] font-light leading-none">02</strong></div>
  </section>
}
