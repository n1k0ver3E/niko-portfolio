"use client";

import { DockIcon } from "@/components/magicui/dock";
import { useEffect, useRef, useState, type ComponentType } from "react";

interface GithubAccount {
  label: string;
  url: string;
}

interface GithubDockIconProps {
  icon: ComponentType<{ className?: string }>;
  accounts: readonly GithubAccount[];
  className?: string;
}

/**
 * A single dock icon that consolidates multiple GitHub accounts. Clicking it
 * opens a small popover to pick which profile to open (personal vs. work),
 * instead of cluttering the dock with one icon per account.
 */
export function GithubDockIcon({
  icon: Icon,
  accounts,
  className,
}: GithubDockIconProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative flex items-end">
      <button
        type="button"
        aria-label="GitHub"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <DockIcon className={className}>
          <Icon className="size-full rounded-sm overflow-hidden object-contain" />
        </DockIcon>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute bottom-full left-1/2 mb-3 w-max min-w-[9rem] -translate-x-1/2 rounded-xl border border-border bg-card/95 p-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] backdrop-blur-xl dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
        >
          {accounts.map((account) => (
            <a
              key={account.url}
              role="menuitem"
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="size-4 shrink-0" />
              {account.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
