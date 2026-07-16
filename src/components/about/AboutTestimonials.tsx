import { mono } from "../ui";

const contributions = [
  ["Product", "Shape an ambiguous idea into a focused experience with clear requirements and useful outcomes."],
  ["Engineering", "Move across frontend, backend, architecture, automation, and delivery without losing sight of the whole system."],
  ["Team", "Raise quality through shared standards, thoughtful reviews, mentoring, and calm technical direction."],
];

export function AboutApproach() {
  return (
    <section className="bg-ink py-32 text-paper max-sm:py-20" aria-labelledby="contribution-title">
      <div className="shell">
        <div className="text-center" data-reveal>
          <span className={mono}>How I contribute</span>
          <h2 id="contribution-title" className="mx-auto mt-6 max-w-285 text-[clamp(54px,7.8vw,118px)] font-medium leading-[.86] tracking-[-.06em]">
            Close to the details.
            <br />
            <em className="font-serif font-light text-signal">Aware of the system.</em>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-3 overflow-hidden rounded-[34px] border border-paper/30 max-[900px]:grid-cols-1" data-reveal>
          {contributions.map(([title, copy], index) => (
            <article className={`flex min-h-80 flex-col justify-between p-9 ${index ? "border-l border-paper/30 max-[900px]:border-l-0 max-[900px]:border-t" : ""}`} key={title}>
              <span className={mono}>0{index + 1}</span>
              <div>
                <h3 className="font-serif text-4xl font-light">{title}</h3>
                <p className="mt-5 max-w-105 text-sm leading-[1.75] text-paper/60">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
