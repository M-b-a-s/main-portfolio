import { mono } from "../ui";

const principles = [
  {
    id: "01",
    title: "Clarity before complexity.",
    copy: "I start by making the goal, constraints, and definition of done visible. Clear thinking keeps architecture and implementation grounded in the problem that matters.",
    className: "bg-ink text-paper md:col-span-4",
  },
  {
    id: "02",
    title: "Quality belongs in the process.",
    copy: "Testing, feedback, observability, and consistent standards shape the work from the beginning instead of being added just before release.",
    className: "bg-white text-ink md:col-span-2",
  },
  {
    id: "03",
    title: "Build for the next change.",
    copy: "A successful launch is a starting point. I design code, systems, and workflows so the next developer can understand them and the next requirement has somewhere sensible to go.",
    className: "bg-signal text-ink md:col-span-3",
  },
  {
    id: "04",
    title: "Strong teams share context.",
    copy: "I value direct communication, useful documentation, constructive reviews, and technical decisions that the whole team can explain and support.",
    className: "bg-[#dedcff] text-ink md:col-span-3",
  },
];

export function AboutPrinciples() {
  return (
    <section className="bg-[#e8e8e3] py-30 max-sm:py-20" aria-labelledby="principles-title">
      <div className="shell">
        <div className="grid grid-cols-[.65fr_1.35fr] gap-14 pb-16 max-[900px]:grid-cols-1" data-reveal>
          <span className={mono}>Engineering principles / 04</span>
          <h2 id="principles-title" className="text-[clamp(52px,7vw,105px)] font-medium leading-[.88] tracking-[-.06em]">
            The standards behind <em className="font-serif font-light">how I build.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {principles.map((principle) => (
            <article className={`flex min-h-100 flex-col justify-between rounded-[38px] p-[clamp(30px,5vw,60px)] ${principle.className}`} key={principle.id} data-reveal>
              <span className={mono}>{principle.id}</span>
              <div>
                <h3 className="max-w-165 text-[clamp(32px,4vw,58px)] font-medium leading-[.95] tracking-[-.045em]">{principle.title}</h3>
                <p className="mt-6 max-w-155 text-sm leading-[1.75] opacity-65">{principle.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
