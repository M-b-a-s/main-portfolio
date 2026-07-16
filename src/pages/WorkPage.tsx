import type { CSSProperties } from "react";
import { projects } from "../data/portfolio";
import { Arrow, mono, serifHeading } from "../components/ui";

const companies = [
  {
    period: "2025—Now",
    company: "Northstar Systems",
    role: "Senior Software Engineer",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo sed lorem feugiat posuere.",
  },
  {
    period: "2023—25",
    company: "Atlas Digital",
    role: "Full-stack Engineer",
    copy: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    period: "2021—23",
    company: "Kinetic Labs",
    role: "Software Engineer",
    copy: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
  },
];

export function WorkPage() {
  return (
    <div id="top">
      <section className="shell min-h-screen pt-34 pb-20 max-sm:pt-26">
        <div className={`flex justify-between border-b border-ink/25 pb-4 ${mono}`} data-reveal>
          <span>Selected work / 2026</span>
          <span className="max-sm:hidden">Platforms · Systems · Teams</span>
        </div>

        <div className="grid grid-cols-[1.25fr_.75fr] items-end gap-12 py-15 max-[900px]:grid-cols-1 max-sm:py-10" data-reveal>
          <h1 className="text-[clamp(72px,11vw,168px)] font-medium leading-[.78] tracking-[-.07em]">
            Work that
            <br />
            <em className="font-serif font-light">moves teams.</em>
          </h1>
          <p className="max-w-105 text-[15px] leading-[1.7] text-[#575750] max-[900px]:ml-[30%] max-sm:ml-0">
            A growing collection of platforms and engineering systems. The work is still taking shape; each project documents the thinking, trade-offs, and progress behind the build.
          </p>
        </div>

        <div className="relative min-h-135 overflow-hidden border-y border-ink bg-[#e9edf0] px-8 py-12 max-[900px]:min-h-120 max-sm:min-h-0 max-sm:px-3 max-sm:py-8" data-reveal>
          <div className="absolute -right-8 -top-12 size-52 bg-ink max-sm:hidden" aria-hidden="true" />
          <div className={`relative z-1 flex justify-between ${mono}`}>
            <span>Featured builds</span>
            <span>01—03</span>
          </div>

          <div className="relative mt-10 h-89 max-sm:grid max-sm:h-auto max-sm:gap-4">
            {projects.map((project, index) => (
              <a
                className="group absolute flex h-73 w-[42%] flex-col justify-between overflow-hidden border border-ink/25 p-6 shadow-[0_28px_55px_rgba(21,21,19,.18)] transition-transform duration-500 hover:-translate-y-3 max-sm:relative max-sm:left-auto! max-sm:top-auto! max-sm:h-65 max-sm:w-full max-sm:rotate-0!"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.id}
                style={
                  {
                    left: `${index * 25 + 7}%`,
                    top: `${index === 1 ? 0 : 38}px`,
                    zIndex: index === 1 ? 3 : index + 1,
                    background: project.color,
                    rotate: `${index === 0 ? -3 : index === 2 ? 3 : 0}deg`,
                  } as CSSProperties
                }
              >
                <div className={`flex justify-between ${mono}`}>
                  <span>{project.status}</span>
                  <Arrow diagonal />
                </div>
                <div>
                  <span className={`${mono} mb-3 block`}>{project.type}</span>
                  <h2 className={`${serifHeading} max-w-115 text-[clamp(34px,4vw,58px)] leading-[.9]`}>
                    {project.title}
                  </h2>
                </div>
                <span className="self-end font-serif text-6xl font-light">{project.id}</span>
              </a>
            ))}
          </div>

          <div className={`relative z-4 flex items-center justify-end gap-5 ${mono}`}>
            <span className="h-px w-28 bg-signal" />
            <span className="text-3xl font-medium">01</span>
            <span className="text-ink/40">02 03</span>
          </div>
        </div>
      </section>

      <section className="shell py-30 max-sm:py-20" aria-labelledby="project-index-title">
        <div className="grid grid-cols-[.65fr_1.35fr] gap-14 max-[900px]:grid-cols-1">
          <div data-reveal>
            <span className={mono}>Project index</span>
            <h2 id="project-index-title" className="mt-5 max-w-105 text-[clamp(48px,5.5vw,82px)] font-medium leading-[.92] tracking-[-.05em]">
              Built with intent. <em className="font-serif font-light">Documented honestly.</em>
            </h2>
          </div>
          <div className="border-b border-ink">
            {projects.map((project) => (
              <a className="group grid grid-cols-[65px_1fr_auto] gap-5 border-t border-ink py-7" href={project.href} target="_blank" rel="noreferrer" key={project.id} data-reveal>
                <span className={mono}>{project.id}</span>
                <div>
                  <h3 className="font-serif text-[clamp(30px,3vw,46px)] font-light">{project.title}</h3>
                  <p className="mt-3 max-w-145 text-sm leading-[1.65] text-[#5b5b54]">{project.description}</p>
                </div>
                <span className="grid size-11 place-items-center rounded-full border border-ink transition-all group-hover:rotate-45 group-hover:bg-ink group-hover:text-paper"><Arrow diagonal /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-30 text-paper max-sm:py-20" aria-labelledby="experience-title">
        <div className="shell">
          <div className="grid grid-cols-[.7fr_1.3fr] gap-14 pb-16 max-[900px]:grid-cols-1" data-reveal>
            <span className={mono}>Company experience / 03</span>
            <h2 id="experience-title" className="text-[clamp(52px,7vw,105px)] font-medium leading-[.87] tracking-[-.055em]">
              Teams I&apos;ve
              <br />
              <em className="font-serif font-light text-signal">helped move.</em>
            </h2>
          </div>
          <div className="border-b border-paper/30">
            {companies.map((company, index) => (
              <article className="grid grid-cols-[70px_130px_.8fr_.7fr_1fr] gap-6 border-t border-paper/30 py-8 max-[900px]:grid-cols-[50px_1fr]" key={company.company} data-reveal>
                <span className={mono}>0{index + 1}</span>
                <span className={`${mono} text-paper/55`}>{company.period}</span>
                <h3 className="font-serif text-3xl font-light max-[900px]:col-start-2">{company.company}</h3>
                <p className={`${mono} max-[900px]:col-start-2`}>{company.role}</p>
                <p className="text-sm leading-[1.65] text-paper/60 max-[900px]:col-start-2">{company.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-signal py-24 text-ink">
        <a className="shell flex items-end justify-between gap-8" href="mailto:mbasernest@outlook.com" data-reveal>
          <span className="text-[clamp(48px,8vw,120px)] font-medium leading-[.85] tracking-[-.06em]">Start a project.</span>
          <span className="grid size-15 shrink-0 place-items-center rounded-full border border-ink text-xl"><Arrow diagonal /></span>
        </a>
      </section>
    </div>
  );
}
