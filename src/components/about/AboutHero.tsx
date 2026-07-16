import { mono } from "../ui";

export function AboutHero() {
  return (
    <section className="shell min-h-screen pb-20 pt-34 max-sm:pt-26" id="top">
      <div className={`flex justify-between border-b border-ink/25 pb-4 ${mono}`} data-reveal>
        <span>About / Ifechimenim</span>
        <span className="max-sm:hidden">Software engineer · Port Harcourt, Nigeria</span>
      </div>

      <div className="py-15 max-sm:py-10" data-reveal>
        <p className={`${mono} mb-7`}>Product thinking meets engineering depth</p>
        <h1 className="max-w-330 text-[clamp(68px,10vw,154px)] font-medium leading-[.8] tracking-[-.07em]">
          Engineering that
          <br />
          <em className="font-serif font-light">feels considered.</em>
        </h1>
      </div>

      <div className="grid grid-cols-[.85fr_1.15fr] gap-5 max-[900px]:grid-cols-1">
        <div className="relative min-h-155 overflow-hidden rounded-[38px] bg-[#d9d9d3] max-sm:min-h-125" data-reveal>
          <img
            className="absolute inset-0 size-full object-cover object-[center_55%]"
            src="/my-photo.jpg"
            alt="Ikwukala-Mbas Ifechimenim"
          />
          <span className={`absolute left-6 top-6 rounded-full bg-paper/85 px-4 py-2 backdrop-blur-md ${mono}`}>
            Building useful systems
          </span>
        </div>

        <div className="grid gap-5 md:grid-rows-[1.15fr_.85fr]">
          <article className="flex min-h-90 flex-col justify-between rounded-[38px] bg-ink p-[clamp(30px,5vw,65px)] text-paper" data-reveal>
            <span className={mono}>What I do</span>
            <p className="max-w-190 text-[clamp(29px,4vw,55px)] leading-[1.08] tracking-[-.04em]">
              I turn rough ideas into clear, useful products that feel fast, reliable, and easy to understand.
            </p>
          </article>
          <article className="flex min-h-65 flex-col justify-between rounded-[38px] bg-signal p-[clamp(30px,5vw,60px)] text-ink" data-reveal>
            <span className={mono}>Where I work best</span>
            <p className="max-w-180 text-[clamp(24px,3vw,42px)] leading-[1.12] tracking-[-.035em]">
              At the intersection of polished interfaces, practical automation, cloud workflows, and maintainable systems.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
