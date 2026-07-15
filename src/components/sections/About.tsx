import { Arrow, mono } from "../ui";

export function About() {
  return (
    <section className="bg-ink text-paper" id="about">
      <div className="shell grid min-h-200 grid-cols-[.8fr_1.2fr] max-[900px]:grid-cols-1">
        <div
          className="relative min-h-150 overflow-hidden max-[900px]:min-h-175 max-sm:min-h-125"
          data-reveal
        >
          <img
            className="absolute inset-0 size-full object-cover object-[center_55%]"
            src="/my-photo.jpg"
            alt="Ikwukala-Mbas Ifechimenim"
          />
        </div>
        <div
          className="flex flex-col justify-center px-[clamp(40px,7vw,110px)] py-25 max-sm:px-3 max-sm:py-18.75"
          data-reveal
        >
          <span className={mono}>About / Software Engineer</span>
          <h2 className="my-7 mb-12.5 max-w-212.5 text-[clamp(44px,5.1vw,78px)] font-normal leading-[1.02] tracking-[-.045em] max-sm:text-[42px]">
            I turn rough ideas into software that{" "}
            <em className="font-serif font-light">feels simple.</em>
          </h2>
          <p className="mb-4.5 max-w-160 leading-[1.7] text-[#bcbab1]">
            I&apos;m a software engineer who turns early-stage ideas into
            thoughtful, useful products. I care about the details users
            notice—clear interfaces, fast feedback, and dependable
            performance—and the engineering decisions that make those
            experiences possible.
          </p>
          <p className="mb-4.5 max-w-160 leading-[1.7] text-[#bcbab1]">
            My work spans full-stack development, practical automation, cloud
            workflows, and quality-focused delivery. I build for launch without
            losing sight of what comes next: systems that remain easy to
            understand, maintain, and evolve as products and teams grow.
          </p>
          <a
            className="mt-6 w-max border-b border-paper pb-1.5"
            href="mailto:mbasernest@outlook.com"
          >
            Let&apos;s build something{" "}
            <span className="ml-6">
              <Arrow />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
