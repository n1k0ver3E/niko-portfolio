"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  src: string;
  alt: string;
  fallback: string;
}

export function InteractiveAvatar({ src, alt, fallback }: Props) {
  const [turns, setTurns] = useState(0);

  return (
    <button
      type="button"
      aria-label="Spin avatar"
      onClick={() => setTurns((t) => t + 1)}
      style={{
        rotate: `${turns * 360}deg`,
        transition: "rotate 0.9s cubic-bezier(0.34, 1.4, 0.64, 1)",
      }}
      className="group cursor-pointer select-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <AvatarImage alt={alt} src={src} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </button>
  );
}
