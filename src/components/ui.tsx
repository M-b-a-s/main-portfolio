import type { ReactNode } from "react";

export const mono = "font-mono text-[11px] uppercase tracking-[.08em]";
export const serifHeading = "font-serif font-light tracking-[-.045em]";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function Brand() {
  return (
    <span className="flex items-center gap-2.5 text-sm font-semibold">
      <span className="grid size-7.5 place-items-center rounded-full border border-ink font-mono text-[10px] font-medium">
        M
      </span>{" "}
      M-b-a-s
    </span>
  );
}

export function SectionHead({
  label,
  title,
  copy,
}: {
  label: string;
  title: ReactNode;
  copy: string;
}) {
  return (
    <div
      className="grid grid-cols-[1.5fr_.5fr] items-end gap-15 pb-13.75 max-[900px]:grid-cols-1 max-sm:pb-10"
      data-reveal
    >
      <div>
        <span className={mono}>{label}</span>
        <h2 className="mt-4.5 text-[clamp(48px,6vw,90px)] font-medium leading-[.93] tracking-[-.055em] max-sm:text-[49px] [&_em]:font-serif [&_em]:font-light">
          {title}
        </h2>
      </div>
      <p className="max-w-100 text-[15px] leading-[1.65] text-[#585851] max-[900px]:ml-[25%] max-sm:ml-0">
        {copy}
      </p>
    </div>
  );
}
