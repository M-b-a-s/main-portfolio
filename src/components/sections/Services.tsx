import { services } from "../../data/portfolio";
import { Arrow, mono } from "../ui";

export function Services() {
  return (
    <section
      className="shell py-[125px] pb-[155px] max-sm:py-[90px] max-sm:pb-[110px]"
      id="services"
    >
      <div
        className={`flex justify-between border-b border-ink pb-[18px] ${mono}`}
        data-reveal
      >
        <span>Services</span>
        <span className="max-sm:hidden">(End-to-end engineering)</span>
      </div>
      <div
        className="grid grid-cols-[1.5fr_.5fr] items-end gap-[60px] py-[70px] pb-[90px] max-[900px]:grid-cols-1 max-sm:py-[55px]"
        data-reveal
      >
        <h2 className="text-[clamp(48px,6vw,90px)] font-medium leading-[.93] tracking-[-.055em] max-sm:text-[49px]">
          From first idea
          <br />
          <em className="font-serif font-light">to reliable delivery.</em>
        </h2>
        <p className="max-w-[400px] text-[15px] leading-[1.65] text-[#585851] max-[900px]:ml-[25%] max-sm:ml-0">
          I help teams design, build, test, and operate dependable software—while
          providing the technical leadership needed to deliver with confidence.
        </p>
      </div>
      <div className="border-b border-ink">
        {services.map(([id, title, text]) => (
          <article
            className="group grid grid-cols-[80px_.7fr_1fr_50px] items-start gap-7 border-t border-ink py-8 max-sm:grid-cols-[40px_1fr_42px] max-sm:gap-2.5"
            key={id}
            data-reveal
          >
            <span className={mono}>{id}</span>
            <h3 className="font-serif text-[35px] font-light max-sm:text-[27px]">
              {title}
            </h3>
            <p className="max-w-[570px] text-sm leading-[1.65] text-[#565650] max-sm:col-span-2 max-sm:col-start-2 max-sm:mt-[15px]">
              {text}
            </p>
            <span className="grid size-[42px] place-items-center rounded-full border border-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white">
              <Arrow diagonal />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
