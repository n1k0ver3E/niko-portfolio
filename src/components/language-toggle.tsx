"use client";

import { Button } from "@/components/ui/button";
import { useLang } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(
        "text-sm font-semibold no-underline hover:no-underline",
        className
      )}
      onClick={() => setLang(lang === "en" ? "zh" : "en")}
      aria-label={lang === "en" ? "切换到中文" : "Switch to English"}
    >
      {lang === "en" ? "中" : "EN"}
    </Button>
  );
}
