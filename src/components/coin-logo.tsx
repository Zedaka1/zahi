"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";

// הלוגו בפוטר מסתובב כמו מטבע אמיתי פעם אחת כשהוא נכנס לתצוגה,
// מאט בהדרגה ונעצר ממורכז וקדמי.
export function CoinLogo() {
  const ref = useRef<HTMLDivElement>(null);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setSpin(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full [perspective:1000px]">
      <Logo
        variant="onDark"
        className={`w-full justify-center${spin ? " coin-spin" : ""}`}
        imgClassName="h-44 w-auto lg:h-52"
      />
    </div>
  );
}
