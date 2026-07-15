import { mono } from '../ui'

const metrics = [['12', '+', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'], ['38', '%', 'Sed do eiusmod tempor incididunt ut labore et dolore.'], ['6', ' yrs', 'Ut enim ad minim veniam, quis nostrud exercitation.']]

export function Proof() {
  return <section className="shell pb-[150px] pt-[110px] max-sm:pb-[105px] max-sm:pt-[75px]" aria-label="Selected results">
    <div className={`flex justify-between border-b border-ink pb-[18px] ${mono}`} data-reveal><span>Lorem ipsum dolor</span><span className="max-sm:hidden">(Sit amet consectetur)</span></div>
    <div className="grid grid-cols-3 max-sm:grid-cols-1">{metrics.map(([value, suffix, copy], index) => <article className={`flex min-h-[260px] flex-col justify-between border-b border-ink/25 py-[34px] pr-7 max-[900px]:min-h-[220px] max-sm:min-h-[180px] max-sm:px-0 max-sm:py-7 ${index ? 'border-l pl-7 max-sm:border-l-0 max-sm:pl-0' : ''}`} data-reveal key={value}><span className="font-serif text-[clamp(58px,6vw,98px)] font-light leading-none tracking-[-.05em]"><span className="count" data-value={value}>0</span>{suffix}</span><p className="max-w-[310px] text-sm leading-[1.55] text-[#54544e]">{copy}</p></article>)}</div>
  </section>
}
