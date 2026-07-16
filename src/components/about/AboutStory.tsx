import { mono } from "../ui";

const perspectives = [
  ["01", "Full-stack", "I connect interface decisions to APIs, data, and the systems behind them."],
  ["02", "Platform-minded", "I look for repeatable paths that reduce friction for developers and teams."],
  ["03", "Quality-led", "I treat testing, reliability, and maintainability as part of the build—not a final step."],
];

export function AboutStory() {
  return (
    <section className="shell py-32 max-sm:py-20" aria-labelledby="about-story-title">
      <div className="grid grid-cols-[.55fr_1.45fr] gap-14 max-[900px]:grid-cols-1">
        <span className={mono} data-reveal>My perspective</span>
        <div data-reveal>
          <h2 id="about-story-title" className="max-w-275 text-[clamp(48px,6.6vw,100px)] font-medium leading-[.9] tracking-[-.06em]">
            Good software should make a difficult problem <em className="font-serif font-light">feel simple.</em>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-10 border-t border-ink pt-7 max-sm:grid-cols-1">
            <p className="leading-[1.8] text-[#565650]">
              I&apos;m a software engineer focused on translating early ideas into dependable products. That means understanding the goal, choosing practical architecture, and paying attention to the details users actually experience.
            </p>
            <p className="leading-[1.8] text-[#565650]">
              My work spans full-stack development, quality assurance, system design, DevOps, and technical leadership. I care about shipping well, but I care just as much about leaving behind code and workflows that teams can confidently evolve.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-3 overflow-hidden rounded-[32px] border border-ink max-[900px]:grid-cols-1" data-reveal>
        {perspectives.map(([id, title, copy], index) => (
          <article className={`flex min-h-70 flex-col justify-between p-8 ${index ? "border-l border-ink max-[900px]:border-l-0 max-[900px]:border-t" : ""}`} key={id}>
            <span className={mono}>{id}</span>
            <div>
              <h3 className="font-serif text-4xl font-light">{title}</h3>
              <p className="mt-4 max-w-95 text-sm leading-[1.7] text-[#5b5b54]">{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
