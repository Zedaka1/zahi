"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";

// הלוגו בפוטר מסתובב כמו מטבע אמיתי: פעם אחת כשנכנס לתצוגה, ושוב בכל hover.
export function CoinLogo() {
  const ref = useRef<HTMLDivElement>(null);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setSpinning(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full cursor-pointer [perspective:1000px]"
      onMouseEnter={() => setSpinning(true)}
      onAnimationEnd={() => setSpinning(false)}
    >
      <Logo
        variant="onDark"
        className={`w-full justify-center${spinning ? " coin-spin" : ""}`}
        imgClassName="h-36 w-auto lg:h-44"
      />
    </div>
  );
}
