/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useData } from "@/data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AppData } from "@/data/types";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  // Thoughtworks keeps the original single-image render (the frame/inner
  // split subtly changed how its square favicon sat in the circle).
  if (src.includes("thoughtworks")) {
    return (
      <img
        src={src}
        alt={alt}
        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
        onError={() => setImageError(true)}
      />
    );
  }

  // BoundlessAI's diamond mark only touches a circular frame at its 4
  // cardinal tips, so it reads as small next to square favicons — scale the
  // inner image (not the frame) up to fill the circle. Other logos render
  // the same way with no scale.
  const scale = src.includes("boundless") ? "scale-[1.3]" : "";

  return (
    <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden flex-none">
      <img
        src={src}
        alt={alt}
        className={cn("size-full object-contain", scale)}
        onError={() => setImageError(true)}
      />
    </div>
  );
}

function WorkItem({
  work,
  present,
}: {
  work: AppData["work"][number];
  present: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full grid gap-2 group">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="p-0 cursor-pointer text-left"
      >
        <div className="flex items-center gap-x-3 justify-between w-full">
          <div className="flex items-center gap-x-3 flex-1 min-w-0">
            <LogoImage src={work.logoUrl} alt={work.company} />
            <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
              <div className="font-semibold leading-none flex items-center gap-2">
                {work.company}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                    "opacity-0 group-hover:opacity-100",
                    open && "opacity-100 rotate-180"
                  )}
                />
              </div>
              <div className="font-sans text-sm text-muted-foreground">
                {work.title}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
            <span>
              {work.start} - {work.end ?? present}
            </span>
          </div>
        </div>
      </button>
      <p
        onClick={() => !open && setOpen(true)}
        className={cn(
          "ml-11 md:ml-13 text-xs sm:text-sm text-muted-foreground leading-relaxed",
          !open && "line-clamp-2 cursor-pointer"
        )}
      >
        {work.description}
      </p>
    </div>
  );
}

export default function WorkSection() {
  const { data, t } = useData();

  return (
    <div className="w-full grid gap-6">
      {data.work.map((work) => (
        <WorkItem key={work.company} work={work} present={t.present} />
      ))}
    </div>
  );
}
