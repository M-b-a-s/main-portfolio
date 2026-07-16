import type { CSSProperties } from "react";
import { projects } from "../../data/portfolio";
import { Arrow, mono, SectionHead, serifHeading } from "../ui";

export function Work() {
  return (
    <section className="shell pb-37.5 max-sm:pb-25" id="work">
      <SectionHead
        label="Projects · In progress"
        title={
          <>
            Platforms designed
            <br />
            <em>to remove friction.</em>
          </>
        }
        copy="Three major platform projects exploring better developer experience, clearer system visibility, and smarter automation. The Internal Developer Platform is currently in active development."
      />
      <div>
        {projects.map((project) => (
          <a
            className="group block overflow-hidden border-t border-ink py-5.5 pb-7 last:border-b"
            href={project.href}
            key={project.title}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title}`}
            data-reveal
            style={{ "--accent": project.color } as CSSProperties}
          >
            <div
              className={`grid grid-cols-[80px_150px_1fr_auto] max-sm:grid-cols-[50px_1fr_auto] ${mono}`}
            >
              <span>{project.id}</span>
              <span>{project.status}</span>
              <span className="max-sm:hidden">{project.type}</span>
              <Arrow diagonal />
            </div>
            <div className="grid min-h-62.5 grid-cols-[1.1fr_.75fr_.55fr] items-center gap-8.75 max-[900px]:grid-cols-[1fr_.65fr] max-sm:block max-sm:min-h-0 max-sm:py-8 max-sm:pb-6">
              <h3
                className={`${serifHeading} text-[clamp(44px,4.8vw,76px)] leading-[.95] transition-transform duration-500 group-hover:translate-x-3.5 max-sm:mb-6 max-sm:text-[48px]`}
              >
                {project.title}
              </h3>
              <div
                className="relative h-42.5 scale-[.92] -rotate-2 overflow-hidden bg-(--accent) transition-transform duration-500 group-hover:scale-100 group-hover:rotate-1 max-[900px]:row-span-2 max-[900px]:[grid-area:1/2/3] max-sm:mb-5.5 max-sm:h-52.5 max-sm:scale-100 max-sm:-rotate-1"
                aria-hidden="true"
              >
                <i className="absolute top-[30%] left-[30%] h-[160%] w-[60%] rounded-full border border-ink" />
                <i className="absolute top-[30%] left-[15%] h-[160%] w-[60%] rounded-full border border-ink" />
                <span className="absolute bottom-1.5 right-3 font-serif text-6xl font-light">
                  {project.id}
                </span>
              </div>
              <p className="max-w-80 text-sm leading-[1.65] max-[900px]:col-start-1">
                {project.description}
              </p>
            </div>
            <div className={`flex gap-2 max-sm:flex-wrap ${mono}`}>
              {project.tags.map((tag) => (
                <span
                  className="rounded-full border border-ink/25 px-2.25 py-1.5"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
