"use client";

import { useCallback, useEffect, useState } from "react";
import { openLegal } from "./legal";

type Settings = {
  fontScale: number;
  contrast: boolean;
  grayscale: boolean;
  links: boolean;
  readable: boolean;
  bigCursor: boolean;
  noMotion: boolean;
};

const DEFAULTS: Settings = {
  fontScale: 100,
  contrast: false,
  grayscale: false,
  links: false,
  readable: false,
  bigCursor: false,
  noMotion: false,
};

const KEY = "a11y-settings";
const MIN = 90;
const MAX = 160;

function apply(s: Settings) {
  const html = document.documentElement;
  html.style.fontSize = s.fontScale === 100 ? "" : `${s.fontScale}%`;
  // ניגודיות וגווני-אפור מיושמים דרך שכבת-על (backdrop-filter) ב-JSX,
  // ולא דרך filter על html/body — כי filter על אב שובר מיקום fixed.
  html.classList.toggle("a11y-links", s.links);
  html.classList.toggle("a11y-readable", s.readable);
  html.classList.toggle("a11y-bigcursor", s.bigCursor);
  html.classList.toggle("a11y-nomotion", s.noMotion);
}

const toggles: { key: keyof Settings; label: string }[] = [
  { key: "contrast", label: "ניגודיות גבוהה" },
  { key: "grayscale", label: "גווני אפור" },
  { key: "links", label: "הדגשת קישורים" },
  { key: "readable", label: "פונט קריא" },
  { key: "bigCursor", label: "סמן עכבר גדול" },
  { key: "noMotion", label: "עצירת אנימציות" },
];

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<Settings>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed: Settings = { ...DEFAULTS, ...JSON.parse(raw) };
        setS(parsed);
        apply(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update = useCallback((patch: Partial<Settings>) => {
    setS((prev) => {
      const next = { ...prev, ...patch };
      apply(next);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    apply(DEFAULTS);
    setS(DEFAULTS);
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const filterStr = [
    s.grayscale ? "grayscale(100%)" : "",
    s.contrast ? "contrast(1.45)" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {/* שכבת-על לניגודיות / גווני-אפור — לא נוגעת ב-filter של האב,
          ולכן מיקום ה-fixed של התפריט וההדר נשמר */}
      {filterStr && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[300]"
          style={{
            backdropFilter: filterStr,
            WebkitBackdropFilter: filterStr,
          }}
        />
      )}

      {/* כפתור צף */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="תפריט נגישות"
        aria-expanded={open}
        className="fixed bottom-5 left-5 z-[80] inline-flex h-14 w-14 items-center justify-center rounded-full bg-ember text-white shadow-lift ring-2 ring-white/70 transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <AccessibilityIcon />
      </button>

      {/* פאנל */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[80] bg-ink/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            role="dialog"
            aria-label="הגדרות נגישות"
            className="fixed bottom-24 left-5 z-[81] max-h-[80vh] w-[330px] max-w-[calc(100vw-2.5rem)] overflow-y-auto rounded-2xl border border-line bg-paper p-5 text-text shadow-lift"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-xl text-text">נגישות</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="סגירת תפריט נגישות"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-xl text-muted hover:bg-sand"
              >
                ×
              </button>
            </div>

            {/* גודל טקסט */}
            <div className="mb-4 rounded-xl border border-line bg-sand p-3">
              <div className="mb-2 text-sm font-bold">גודל טקסט</div>
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  aria-label="הקטנת טקסט"
                  onClick={() =>
                    update({ fontScale: Math.max(MIN, s.fontScale - 10) })
                  }
                  className="inline-flex h-10 w-12 items-center justify-center rounded-lg bg-paper text-xl font-bold ring-1 ring-line hover:ring-ember disabled:opacity-40"
                  disabled={s.fontScale <= MIN}
                >
                  −
                </button>
                <span className="font-bold tabular-nums">{s.fontScale}%</span>
                <button
                  type="button"
                  aria-label="הגדלת טקסט"
                  onClick={() =>
                    update({ fontScale: Math.min(MAX, s.fontScale + 10) })
                  }
                  className="inline-flex h-10 w-12 items-center justify-center rounded-lg bg-paper text-xl font-bold ring-1 ring-line hover:ring-ember disabled:opacity-40"
                  disabled={s.fontScale >= MAX}
                >
                  +
                </button>
              </div>
            </div>

            {/* מתגים */}
            <div className="grid gap-2">
              {toggles.map((t) => {
                const active = Boolean(s[t.key]);
                return (
                  <button
                    key={t.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => update({ [t.key]: !active } as Partial<Settings>)}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-right text-sm font-semibold transition-colors ${
                      active
                        ? "border-ember bg-ember/10 text-ember"
                        : "border-line bg-paper text-text hover:border-ember/40"
                    }`}
                  >
                    {t.label}
                    <span
                      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
                        active ? "bg-ember" : "bg-sand-2"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                          active ? "left-0.5" : "right-0.5"
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-3 w-full rounded-xl border border-line py-2.5 text-sm font-bold text-muted hover:bg-sand"
            >
              איפוס הגדרות
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openLegal("accessibility");
              }}
              className="mt-2 w-full rounded-xl bg-ember py-2.5 text-sm font-bold text-white"
            >
              הצהרת נגישות
            </button>
          </div>
        </>
      )}
    </>
  );
}

function AccessibilityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="4" r="2" fill="currentColor" />
      <path
        d="M12 7c2.5 0 5 .6 5 .6M12 7c-2.5 0-5 .6-5 .6M12 7v6m0 0-2.5 5M12 13l2.5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
