import { processSteps } from '../../data/portfolio'
import { mono, SectionHead } from '../ui'

export function Process() {
  return <section className="shell py-[150px] max-sm:py-[100px]">
    <SectionHead label="Lorem ipsum dolor" title={<>Lorem ipsum.<br /><em>Dolor sit amet.</em></>} copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
    <ol className="grid list-none grid-cols-3 border-y border-ink p-0 max-sm:grid-cols-1">{processSteps.map(([step, title, copy], index) => <li className={`flex min-h-[340px] flex-col p-7 max-sm:min-h-[240px] max-sm:px-0 max-sm:py-[26px] ${index ? 'border-l border-ink/25 max-sm:border-l-0 max-sm:border-t' : 'pl-0'}`} key={step} data-reveal><span className={mono}>{step}</span><h3 className="mt-auto mb-[15px] font-serif text-[32px] font-light">{title}</h3><p className="max-w-[360px] text-sm leading-[1.65] text-[#575750]">{copy}</p></li>)}</ol>
  </section>
}
