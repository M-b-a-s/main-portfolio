import { mono } from "../ui";

const capabilities = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "JAVA",
  "NODE.JS",
  "EXPRESS.JS",
  "DOCKER",
  "GITHUB ACTIONS",
  "AWS",
  "TAILWIND CSS",
  "SHADCN UI",
  "SPRING BOOT",
  "POSTGRESQL",
];

export function Ticker() {
  return (
    <section
      className="ticker overflow-hidden border-y border-ink bg-signal py-4"
      aria-label="Capabilities"
    >
      <div
        className={`marquee-track flex w-max whitespace-nowrap text-base! ${mono}`}
      >
        {[0, 1].map((copy) => (
          <div className="flex items-center gap-8 pr-8" key={copy}>
            {capabilities.map((capability) => (
              <span className="flex items-center gap-8" key={capability}>
                <span>{capability}</span>
                <span className="text-[10px]" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
