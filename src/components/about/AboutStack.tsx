import { Arrow, mono } from "../ui";

const stack = [
  ["Interface", ["React", "Next.js", "TypeScript"]],
  ["Backend", ["Java", "Node.js", "Express.js"]],
  ["Delivery", ["Docker", "CI/CD", "Cloud workflows"]],
  ["Quality", ["Test strategy", "Automation", "Code review"]],
];

export function AboutStack() {
  return (
    <>
      <section className="shell py-32 max-sm:py-20" aria-labelledby="stack-title">
        <div className="grid grid-cols-[.65fr_1.35fr] gap-14 max-[900px]:grid-cols-1" data-reveal>
          <span className={mono}>Tools and disciplines</span>
          <div>
            <h2 id="stack-title" className="text-[clamp(52px,7vw,105px)] font-medium leading-[.88] tracking-[-.06em]">
              A practical stack for <em className="font-serif font-light">end-to-end delivery.</em>
            </h2>
            <p className="mt-8 max-w-175 text-[16px] leading-[1.75] text-[#5b5b54]">
              Tools change. The goal stays the same: choose technology that fits the problem, supports the team, and remains understandable after launch.
            </p>
          </div>
        </div>

        <div className="mt-18 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
          {stack.map(([category, tools], index) => (
            <article className={`min-h-72 rounded-[34px] p-9 ${index === 0 ? "bg-signal" : index === 3 ? "bg-[#dfe7d1]" : "bg-[#e8e8e3]"}`} key={category as string} data-reveal>
              <div className={`flex justify-between ${mono}`}>
                <span>{category}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="mt-20 flex flex-wrap gap-2.5">
                {(tools as string[]).map((tool) => (
                  <span className="rounded-full border border-ink/25 bg-paper/40 px-4 py-2 text-sm" key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-signal py-24 text-ink">
        <a className="shell flex items-end justify-between gap-8" href="mailto:mbasernest@outlook.com" data-reveal>
          <div>
            <span className={mono}>Have a problem worth solving?</span>
            <h2 className="mt-5 text-[clamp(52px,8.5vw,128px)] font-medium leading-[.82] tracking-[-.065em]">
              Let&apos;s build it well.
            </h2>
          </div>
          <span className="grid size-16 shrink-0 place-items-center rounded-full border border-ink text-xl"><Arrow diagonal /></span>
        </a>
      </section>
    </>
  );
}

export default AboutStack;
