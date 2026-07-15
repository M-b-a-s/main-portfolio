import { Arrow, mono } from "../ui";

export function Contact() {
  return (
    <section
      className="bg-signal py-28.75 pb-22.5 text-ink max-sm:pt-20"
      id="contact"
    >
      <div className="shell" data-reveal>
        <div
          className={`flex justify-between border-b border-ink pb-10 ${mono}`}
        >
          <span>Have a project in mind?</span>
          <span className="max-sm:hidden">Available for collaborations · 2026</span>
        </div>
        <h2 className="my-20 text-[clamp(70px,10.5vw,160px)] font-medium leading-[.8] tracking-[-.065em] max-sm:my-15 max-sm:text-[20vw]">
          Let&apos;s build
          <br />
          <em className="font-serif font-light text-paper">something useful.</em>
        </h2>
        <a
          className="magnetic flex items-center justify-between border-y border-ink py-5.5 text-[clamp(18px,2vw,30px)] max-sm:text-[17px]"
          href="mailto:mbasernest@outlook.com"
        >
          mbasernest@outlook.com <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
