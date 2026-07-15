import { Arrow, mono } from "../ui";

export function About() {
  return (
    <section className="bg-ink text-paper" id="about">
      <div className="shell grid min-h-200 grid-cols-[.8fr_1.2fr] max-[900px]:grid-cols-1">
        <div
          className="relative flex min-h-150 flex-col justify-between overflow-hidden bg-signal p-7 text-ink before:absolute before:left-[10%] before:top-[17%] before:aspect-square before:w-[80%] before:rounded-full before:border before:border-ink after:absolute after:bottom-[12%] after:left-[22%] after:h-[58%] after:w-[55%] after:rounded-t-[45%] after:bg-ink max-[900px]:min-h-175 max-sm:min-h-125"
          data-reveal
        >
          <div className="portrait-noise absolute inset-0 opacity-[.08]" />
          <span className={`relative z-1 ${mono}`}>Lorem / 2026</span>
          <strong className="relative z-1 self-end font-serif text-[clamp(100px,14vw,220px)] font-light leading-[.7] text-paper mix-blend-difference">
            JD
          </strong>
        </div>
        <div
          className="flex flex-col justify-center px-[clamp(40px,7vw,110px)] py-25 max-sm:px-3 max-sm:py-18.75"
          data-reveal
        >
          <span className={mono}>Lorem ipsum dolor</span>
          <h2 className="my-7 mb-12.5 max-w-212.5 text-[clamp(44px,5.1vw,78px)] font-normal leading-[1.02] tracking-[-.045em] max-sm:text-[42px]">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <em className="font-serif font-light">adipiscing.</em>
          </h2>
          <p className="mb-4.5 max-w-160 leading-[1.7] text-[#bcbab1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4.5 max-w-160 leading-[1.7] text-[#bcbab1]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            className="mt-6 w-max border-b border-paper pb-1.5"
            href="mailto:john.doe@example.com"
          >
            Lorem ipsum{" "}
            <span className="ml-6">
              <Arrow />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
