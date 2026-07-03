"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export function Typewriter({
  words,
  className,
  typingSpeed = 85,
  deletingSpeed = 40,
  pauseMs = 1500,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[index % words.length];

    // finished typing → hold, then start deleting
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    // finished deleting → advance to next word
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText((cur) =>
          deleting ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1)
        ),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={cn("inline", className)}>
      {text}
      <span
        aria-hidden
        className="ml-0.5 inline-block w-[0.5ch] -translate-y-[0.05em] animate-caret-blink text-muted-foreground/70"
      >
        |
      </span>
    </span>
  );
}
