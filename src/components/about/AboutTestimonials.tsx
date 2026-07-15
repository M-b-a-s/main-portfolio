import { mono } from '../ui'

export function AboutTestimonials() {
  return <section className="shell py-[150px] max-sm:py-[95px]"><div className={`flex justify-between border-b border-ink pb-[18px] ${mono}`} data-reveal><span>Lorem ipsum dolor</span><span>(02)</span></div><div className="grid grid-cols-2 max-[900px]:grid-cols-1">
    <blockquote className="flex min-h-[430px] flex-col border-b border-ink/25 py-10 pr-12 max-[900px]:pr-0" data-reveal><span className="font-serif text-7xl font-light text-signal">“</span><p className="font-serif text-[clamp(26px,3vw,43px)] font-light leading-[1.2]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo sed lorem tincidunt posuere.</p><footer className={`mt-auto pt-10 ${mono}`}>Lorem Ipsum · Dolor Sit</footer></blockquote>
    <blockquote className="flex min-h-[430px] flex-col border-b border-l border-ink/25 py-10 pl-12 max-[900px]:border-l-0 max-[900px]:pl-0" data-reveal><span className="font-serif text-7xl font-light text-signal">“</span><p className="font-serif text-[clamp(26px,3vw,43px)] font-light leading-[1.2]">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><footer className={`mt-auto pt-10 ${mono}`}>Consectetur Elit · Magna Aliqua</footer></blockquote>
  </div></section>
}
