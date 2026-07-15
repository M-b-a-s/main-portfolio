import { useEffect, useState } from "react";
import { Arrow, mono } from "../ui";

export function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Africa/Lagos",
        }).format(new Date()),
      );
    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="shell flex min-h-screen flex-col justify-between pt-34.5 max-sm:min-h-190 max-sm:pt-27"
      id="top"
    >
      <div className={`eyebrow flex items-center justify-between ${mono}`}>
        <span>Software Engineer ◆ DevOps</span>
        <span className="flex items-center gap-2 max-sm:hidden">
          <i className="size-1.75 rounded-full bg-[#69a92f] shadow-[0_0_0_4px_rgba(105,169,47,.14)]" />{" "}
          Open to new opportunities
        </span>
      </div>
      <h1 className="my-auto text-[clamp(64px,9.4vw,152px)] font-medium leading-[.84] tracking-[-.07em] max-sm:text-[clamp(56px,19vw,88px)] max-sm:leading-[.88]">
        <span className="hero-line">
          <span>Ikwukala-Mbas</span>
        </span>
        <span className="hero-line text-right max-sm:text-left">
          <span>
            <em className="font-serif font-light">Ifechi</em>menim.
          </span>
        </span>
      </h1>
      <div className="hero-bottom grid grid-cols-[1fr_1.25fr_.75fr] items-end gap-9 border-t border-ink/25 py-7 pb-9 max-[900px]:grid-cols-[auto_1fr] max-sm:items-start max-sm:gap-5 max-sm:pb-6">
        <a
          className="magnetic grid size-14 place-items-center rounded-full border border-ink text-xl transition-colors hover:bg-ink hover:text-white max-sm:size-11.5"
          href="#work"
          aria-label="Explore selected work"
        >
          <Arrow />
        </a>
        <p className="max-w-145 text-[clamp(15px,1.4vw,19px)] leading-normal max-sm:text-sm">
          Let's build systems that raise the standard. No noise, just thoughtful engineering across frontend,{" "}
          <em className="font-serif">backend, </em>  QA, system design, and DevOps.
        </p>
        <div className={`flex justify-end gap-5 max-[900px]:hidden ${mono}`}>
          <span>Nigeria, PH</span>
          <span>{time} WAT</span>
        </div>
      </div>
    </section>
  );
}
