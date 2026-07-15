import { Arrow, mono } from '../ui'

export function Contact() {
  return <section className="bg-signal py-[115px] pb-[90px] text-ink max-sm:pt-20" id="contact"><div className="shell" data-reveal><div className={`flex justify-between border-b border-ink pb-10 ${mono}`}><span>Lorem ipsum dolor?</span><span className="max-sm:hidden">Consectetur elit · 2026</span></div><h2 className="my-20 text-[clamp(70px,10.5vw,160px)] font-medium leading-[.8] tracking-[-.065em] max-sm:my-[60px] max-sm:text-[20vw]">Lorem ipsum<br /><em className="font-serif font-light text-paper">dolor sit amet.</em></h2><a className="magnetic flex items-center justify-between border-y border-ink py-[22px] text-[clamp(18px,2vw,30px)] max-sm:text-[17px]" href="mailto:john.doe@example.com">john.doe@example.com <Arrow diagonal /></a></div></section>
}
