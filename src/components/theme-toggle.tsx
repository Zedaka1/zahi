"use client";

import { useEffect, useState } from "react";

// כפתור הדגמה ללקוח — מחליף את אקסנט המותג בין נחושת (ג'ינג'י) לכחול (נייבי).
// ערכת הכחול מוגדרת ב-globals.css תחת html.theme-navy.

const KEY = "brand-theme";
type Theme = "copper" | "navy";

function applyTheme(t: Theme) {
  document.documentElement.classList.toggle("theme-navy", t === "navy");
}

const SWATCH: Record<Theme, string> = {
  copper: "#b1531c",
  navy: "#24437e",
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("copper");

  useEffect(() => {
    let t: Theme = "copper";
    try {
      const s = localStorage.getItem(KEY);
      if (s === "navy" || s === "copper") t = s;
    } catch {
      /* ignore */
    }
    setTheme(t);
    applyTheme(t);
  }, []);

  const choose = (t: Theme) => {
    setTheme(t);
    applyTheme(t);
    try {
      localStorage.setItem(KEY, t);
    } catch {
      /* ignore */
    }
  };

  const options: { key: Theme; label: string }[] = [
    { key: "copper", label: "נחושת" },
    { key: "navy", label: "כחול" },
  ];

  return (
    <div
      role="group"
      aria-label="בחירת צבע נושא להדגמה"
      className="fixed bottom-24 right-5 z-[80] flex items-center gap-1 rounded-full border border-line bg-white/95 p-1 shadow-lift backdrop-blur"
    >
      <span className="px-2 text-[11px] font-bold text-muted">ערכת צבע</span>
      {options.map((o) => {
        const active = theme === o.key;
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => choose(o.key)}
            aria-pressed={active}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              active ? "text-white" : "text-muted hover:bg-sand"
            }`}
            style={active ? { backgroundColor: SWATCH[o.key] } : undefined}
          >
            <span
              className="h-3 w-3 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: SWATCH[o.key] }}
            />
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
