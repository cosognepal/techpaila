"use client"

import { useEffect, useState } from "react";
import AnimatedLogo from "./components/AnimatedLogo";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(!loaded);
  }, [])

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {!loaded && <AnimatedLogo />}
    </main>
  );
}
