"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";

export function ParticlesBackground() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#737373");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#404040");
  }, [resolvedTheme]);

  return (
    <Particles
      className="fixed inset-0 -z-10"
      quantity={110}
      ease={80}
      staticity={40}
      color={color}
      refresh
    />
  );
}
