"use client";

import { useEffect, useState } from "react";
import AnimatedLogo from "@/app/components/AnimatedLogo";
import MapExplorer from "@/components/MapExplorer";

const SPLASH_MS = 2900;

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), SPLASH_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <main className="splash" aria-busy="true" aria-label="Loading TechPaila">
        <AnimatedLogo />
      </main>
    );
  }

  return <MapExplorer />;
}
