"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

function formatStars(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : `${n}`;
}

/**
 * Live star count for a github.com/{owner}/{repo} URL, fetched client-side
 * from the GitHub API and cached in sessionStorage (unauthenticated calls
 * are rate-limited per visitor IP).
 */
export function GitHubStars({ href }: { href: string }) {
  const repo = href.match(/github\.com\/([^/]+\/[^/]+?)(?:[/?#]|$)/)?.[1];
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    if (!repo) return;
    const cacheKey = `gh-stars:${repo}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached !== null) {
      setStars(Number(cached));
      return;
    }
    let cancelled = false;
    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        if (cancelled || typeof data.stargazers_count !== "number") return;
        sessionStorage.setItem(cacheKey, String(data.stargazers_count));
        setStars(data.stargazers_count);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [repo]);

  if (stars === null) return null;

  return (
    <span className="flex items-center gap-0.5 border-l border-white/30 pl-1.5 ml-0.5 tabular-nums">
      <Star className="size-3 fill-current" />
      {formatStars(stars)}
    </span>
  );
}
