import { mono } from "../ui";

const metrics = [
  ["12", "+", "Projects Completed"],
  ["80", "%", "Client Retention Rate"],
  ["3", " yrs", "Relevant Work Experience"],
];

export function Proof() {
  return (
    <section
      className="shell pb-37.5 pt-27.5 max-sm:pb-26.25 max-sm:pt-18.75"
      aria-label="Selected results"
    >
      <div
        className={`flex justify-between border-b border-ink pb-4.5 ${mono}`}
        data-reveal
      >
        <span>Proof</span>
        <span className="max-sm:hidden">(Sit amet consectetur)</span>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1">
        {metrics.map(([value, suffix, copy], index) => (
          <article
            className={`flex min-h-65 flex-col justify-between border-b border-ink/25 py-8.5 pr-7 max-[900px]:min-h-55 max-sm:min-h-45 max-sm:px-0 max-sm:py-7 ${index ? "border-l pl-7 max-sm:border-l-0 max-sm:pl-0" : ""}`}
            data-reveal
            key={value}
          >
            <span className="font-serif text-[clamp(58px,6vw,98px)] font-light leading-none tracking-tighter">
              <span className="count" data-value={value}>
                0
              </span>
              {suffix}
            </span>
            <p className="max-w-77.5 text-sm leading-[1.55] text-[#54544e]">
              {copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
