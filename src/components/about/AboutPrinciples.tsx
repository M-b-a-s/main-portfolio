import { mono } from "../ui";

const principles = [
  [
    "01",
    "Lorem ipsum dolor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ],
  [
    "02",
    "Consectetur adipiscing",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
  [
    "03",
    "Magna aliqua",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  ],
];

export function AboutPrinciples() {
  return (
    <section className="bg-ink py-[140px] text-paper max-sm:py-[90px]">
      <div className="shell">
        <div
          className={`flex justify-between border-b border-white/30 pb-[18px] ${mono}`}
          data-reveal
        >
          <span>Lorem ipsum</span>
          <span>(Dolor sit amet)</span>
        </div>
        <h2
          className="my-20 max-w-[1000px] text-[clamp(54px,7.4vw,110px)] font-medium leading-[.9] tracking-[-.06em]"
          data-reveal
        >
          Consectetur
          <br />
          <em className="font-serif font-light text-signal">
            adipiscing elit.
          </em>
        </h2>
        <div className="border-b border-white/30">
          {principles.map(([id, title, copy]) => (
            <article
              className="grid grid-cols-[80px_.7fr_1fr] gap-8 border-t border-white/30 py-9 max-sm:grid-cols-[40px_1fr]"
              key={id}
              data-reveal
            >
              <span className={mono}>{id}</span>
              <h3 className="font-serif text-[clamp(28px,3vw,45px)] font-light">
                {title}
              </h3>
              <p className="max-w-[600px] leading-[1.7] text-white/60 max-sm:col-start-2">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
