import { processSteps } from "../../data/portfolio";
import { mono, SectionHead } from "../ui";

export function Process() {
  return (
    <section className="shell py-37.5 max-sm:py-25">
      <SectionHead
        label="My Process"
        title={
          <>
            From clear goals
            <br />
            <em>to better builds.</em>
          </>
        }
        copy="A focused three-phase workflow that turns an idea into a purposeful, well-built product—and every build into a lesson for the next one."
      />
      <ol className="grid list-none grid-cols-3 border-y border-ink p-0 max-sm:grid-cols-1">
        {processSteps.map(([step, title, copy], index) => (
          <li
            className={`flex min-h-85 flex-col p-7 max-sm:min-h-60 max-sm:px-0 max-sm:py-6.5 ${index ? "border-l border-ink/25 max-sm:border-l-0 max-sm:border-t" : "pl-0"}`}
            key={step}
            data-reveal
          >
            <span className={mono}>{step}</span>
            <h3 className="mt-auto mb-3.75 font-serif text-[32px] font-light">
              {title}
            </h3>
            <p className="max-w-90 text-sm leading-[1.65] text-[#575750]">
              {copy}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
