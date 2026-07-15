import { mono } from "../ui";

export function Ticker() {
  return (
    <section
      className="overflow-hidden border-y border-ink bg-signal py-3.75"
      aria-label="Capabilities"
    >
      <div
        className={`marquee-track flex w-max whitespace-nowrap text-xs ${mono}`}
      >
        {[0, 1].map((copy) => (
          <div className="flex gap-4 pr-4" key={copy}>
            Lorem <b className="text-[8px]">◆</b> Ipsum{" "}
            <b className="text-[8px]">◆</b> Dolor Sit{" "}
            <b className="text-[8px]">◆</b> Amet <b className="text-[8px]">◆</b>{" "}
            Consectetur <b className="text-[8px]">◆</b> Adipiscing Elit{" "}
            <b className="text-[8px]">◆</b> Magna Aliqua{" "}
            <b className="text-[8px]">◆</b>&nbsp;
          </div>
        ))}
      </div>
    </section>
  );
}
