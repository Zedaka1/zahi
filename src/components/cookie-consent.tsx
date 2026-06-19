"use client";

import { useEffect, useState } from "react";
import { openLegal } from "./legal";

const KEY = "cookie-consent";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const choose = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="הודעת עוגיות"
      className="fixed inset-x-3 bottom-3 z-[85] mx-auto max-w-3xl rounded-2xl border border-line bg-paper p-5 shadow-lift sm:bottom-5 sm:p-6"
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm leading-relaxed text-muted">
          האתר עושה שימוש בעוגיות (Cookies) לצורך תפעול תקין ושיפור חוויית
          הגלישה. למידע נוסף ראו{" "}
          <button
            type="button"
            onClick={() => openLegal("privacy")}
            className="font-semibold text-ember underline underline-offset-2"
          >
            מדיניות הפרטיות
          </button>
          .
        </p>
        <div className="flex w-full shrink-0 gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="flex-1 rounded-full border border-line px-5 py-2.5 text-sm font-bold text-text transition-colors hover:bg-sand sm:flex-none"
          >
            רק חיוניות
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="flex-1 rounded-full bg-ember px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03] sm:flex-none"
          >
            אישור
          </button>
        </div>
      </div>
    </div>
  );
}
