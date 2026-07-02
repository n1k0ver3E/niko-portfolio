/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { useData } from "@/data";
import { cn } from "@/lib/utils";

const ACCOUNTS = [
  { username: "n1k0ver3E", label: "Personal" },
  { username: "Pn1ko", label: "Cookiy" },
] as const;

const USAGE_URL = "https://usage.nikopang.com";

export default function MyWorkSection() {
  const { t } = useData();
  const { resolvedTheme } = useTheme();
  const [account, setAccount] = useState<(typeof ACCOUNTS)[number]>(
    ACCOUNTS[0]
  );

  return (
    <section id="my-work">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                {t.myWorkPill}
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t.myWorkHeading}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {t.myWorkIntro}
            </p>
          </div>
        </div>

        <div className="border border-border rounded-xl p-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-2">
              {ACCOUNTS.map((a) => (
                <button
                  key={a.username}
                  type="button"
                  onClick={() => setAccount(a)}
                  className={cn(
                    "border rounded-xl h-8 px-4 text-sm font-medium transition-colors cursor-pointer",
                    account.username === a.username
                      ? "bg-primary text-background border-primary"
                      : "bg-background text-muted-foreground border-border hover:text-foreground"
                  )}
                >
                  {a.label}
                </button>
              ))}
            </div>
            <Link
              href={`https://github.com/${account.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Icons.github className="size-3.5" />
              @{account.username}
            </Link>
          </div>
          <div className="overflow-x-auto">
            <GitHubCalendar
              key={`${account.username}-${resolvedTheme}`}
              username={account.username}
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              blockSize={10}
              blockMargin={3}
              fontSize={12}
            />
          </div>
        </div>

        <div className="group border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row">
          <div className="p-6 flex flex-col gap-3 md:w-1/2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{t.usageTitle}</h3>
              <time className="text-xs text-muted-foreground">
                {t.usageDates}
              </time>
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed flex flex-col gap-2 flex-1">
              <p>{t.usageP1}</p>
              <p>{t.usageP2}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["GitHub Actions", "TypeScript", "Automation"].map((tag) => (
                <Badge
                  key={tag}
                  className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
              <Link
                href={USAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  <Icons.globe className="size-3" />
                  Website
                </Badge>
              </Link>
            </div>
          </div>
          <Link
            href={USAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-1/2 overflow-hidden block border-t md:border-t-0 md:border-l border-border"
          >
            <img
              src="/projects/token-usage.png"
              alt={t.usageTitle}
              className="w-full h-full min-h-48 max-h-72 object-cover object-left-top transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
