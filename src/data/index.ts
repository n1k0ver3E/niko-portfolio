"use client";

import { useLang } from "@/components/language-provider";
import { DATA } from "./resume";
import { DATA_ZH } from "./resume.zh";
import { UI, type UIStrings } from "./strings";
import type { AppData } from "./types";

export type { AppData } from "./types";
export type { UIStrings } from "./strings";

/**
 * Language-aware accessor for resume data and UI strings.
 * Must be used inside a client component under <LanguageProvider>.
 */
export function useData(): {
  data: AppData;
  t: UIStrings;
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
} {
  const { lang, setLang } = useLang();
  const data: AppData = lang === "zh" ? DATA_ZH : DATA;
  return { data, t: UI[lang], lang, setLang };
}
