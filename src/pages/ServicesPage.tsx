import { Arrow, mono } from "../components/ui";
import { services } from "../data/portfolio";

const serviceStyles = [
  "bg-ink text-paper md:col-span-4",
  "bg-white text-ink md:col-span-2",
  "bg-signal text-ink md:col-span-2",
  "bg-[#dfe7d1] text-ink md:col-span-2",
  "bg-[#dedcff] text-ink md:col-span-2",
];

export function ServicesPage() {
  return (
    <div id="top">
      <section className="shell flex min-h-screen flex-col justify-between pb-16 pt-34 max-sm:min-h-180 max-sm:pt-26">
        <div className={`flex justify-between border-b border-ink/25 pb-4 ${mono}`} data-reveal>
          <span>Services / Five disciplines</span>
          <span className="max-sm:hidden">One delivery system</span>
        </div>
        <div className="my-auto py-16" data-reveal>
          <p className={`${mono} mb-7`}>Engineering from idea to operation</p>
          <h1 className="max-w-310 text-[clamp(68px,10.5vw,158px)] font-medium leading-[.8] tracking-[-.07em]">
            Complex systems.
            <br />
            <em className="font-serif font-light">Made clear.</em>
          </h1>
        </div>
        <div className="grid grid-cols-[1fr_.6fr] items-end gap-10 border-t border-ink/25 pt-7 max-[900px]:grid-cols-1" data-reveal>
          <p className="max-w-155 text-[clamp(18px,2vw,28px)] leading-[1.35] tracking-[-.02em]">
            Thoughtful product engineering across interfaces, infrastructure, quality, architecture, and teams.
          </p>
          <a className="justify-self-end rounded-full bg-ink px-6 py-4 text-sm text-paper max-[900px]:justify-self-start" href="mailto:mbasernest@outlook.com">
            Discuss a project <span className="ml-5"><Arrow diagonal /></span>
          </a>
        </div>
      </section>

      <section className="bg-[#e8e8e3] py-30 max-sm:py-20" aria-labelledby="services-grid-title">
        <div className="shell">
          <div className="mb-16 grid grid-cols-[.7fr_1.3fr] gap-12 max-[900px]:grid-cols-1" data-reveal>
            <span className={mono}>Capabilities / 01—05</span>
            <h2 id="services-grid-title" className="text-[clamp(48px,6.5vw,98px)] font-medium leading-[.9] tracking-[-.055em]">
              Everything needed to move from <em className="font-serif font-light">concept to confidence.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
            {services.map(([id, title, copy], index) => (
              <article className={`group flex min-h-105 flex-col justify-between rounded-[36px] p-[clamp(28px,4vw,55px)] ${serviceStyles[index]}`} key={id} data-reveal>
                <div className={`flex items-center justify-between ${mono}`}>
                  <span>{id}</span>
                  <span className="grid size-10 place-items-center rounded-full border border-current/30 transition-transform duration-500 group-hover:rotate-45"><Arrow diagonal /></span>
                </div>
                <div className="my-12 flex min-h-28 items-center justify-center" aria-hidden="true">
                  <div className="relative grid size-28 place-items-center rounded-[30px] border border-current/30 transition-transform duration-500 group-hover:scale-110">
                    <span className="font-serif text-5xl font-light">{id}</span>
                    <i className="absolute -right-3 -top-3 size-7 rounded-full bg-current opacity-90" />
                  </div>
                </div>
                <div>
                  <h3 className="max-w-135 text-[clamp(31px,3.5vw,52px)] font-medium leading-[.95] tracking-[-.04em]">{title}</h3>
                  <p className="mt-5 max-w-145 text-sm leading-[1.7] opacity-65">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-32 max-sm:py-20" aria-labelledby="delivery-title">
        <div className="text-center" data-reveal>
          <span className={mono}>A connected practice</span>
          <h2 id="delivery-title" className="mx-auto mt-6 max-w-260 text-[clamp(52px,7.5vw,112px)] font-medium leading-[.88] tracking-[-.06em]">
            One partner across the <em className="font-serif font-light">whole build.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-165 text-[17px] leading-[1.7] text-[#5b5b54]">
            I connect product decisions, architecture, implementation, quality, and operations so every stage supports the same outcome: software that works well and remains easy to evolve.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-5 overflow-hidden rounded-4xl border border-ink max-[900px]:grid-cols-1" data-reveal>
          {["Discover", "Design", "Build", "Assure", "Operate"].map((step, index) => (
            <div className={`flex min-h-48 flex-col justify-between p-6 ${index ? "border-l border-ink max-[900px]:border-l-0 max-[900px]:border-t" : ""}`} key={step}>
              <span className={mono}>0{index + 1}</span>
              <span className="font-serif text-2xl font-light">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-28 text-paper max-sm:py-20">
        <div className="shell grid grid-cols-[1.3fr_.7fr] items-end gap-12 max-[900px]:grid-cols-1" data-reveal>
          <h2 className="text-[clamp(58px,8.5vw,132px)] font-medium leading-[.82] tracking-[-.065em]">
            Build something
            <br />
            <em className="font-serif font-light text-signal">that lasts.</em>
          </h2>
          <div>
            <p className="mb-8 max-w-110 leading-[1.7] text-paper/65">Whether you need focused engineering support or leadership across the full delivery cycle, we can shape an engagement around your product, team, and goals.</p>
            <a className="inline-flex items-center rounded-full bg-paper px-6 py-4 text-sm text-ink" href="mailto:mbasernest@outlook.com">Start a conversation <span className="ml-5"><Arrow diagonal /></span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
