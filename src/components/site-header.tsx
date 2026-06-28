"use client";

import { useCallback, useEffect, useState } from "react";
import { Logo } from "./logo";
import { PhoneIcon } from "./icons";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // נעילת גלילת הרקע כשהתפריט הנייד פתוח
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // מעבר לדסקטופ סוגר את התפריט — כדי לא להשאיר נעילת גלילה תקועה
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      setActive(id);
      setOpen(false);
      document.body.style.overflow = ""; // שחרור הנעילה לפני גלילה תוכניתית
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    },
    [],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* פס אקסנט עליון — גרדיאנט של גוון האקסנט הפעיל בלבד (מתחלף עם הערכה) */}
      <div className="h-1 w-full bg-[linear-gradient(90deg,var(--color-ember-deep),var(--color-ember),var(--color-ember-bright))]" />

      <div
        className={`header-tint border-b bg-paper/95 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "border-line shadow-md shadow-ink/5" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:h-[92px] lg:px-8">
          <a href="#home" onClick={(e) => goTo(e, "home")} aria-label="לראש העמוד">
            <Logo variant="onLight" imgClassName="h-[72px] w-auto lg:h-[84px]" />
          </a>

          {/* ניווט — דסקטופ */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => goTo(e, item.id)}
                className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  active === item.id
                    ? "text-ember"
                    : "text-muted hover:text-text"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-bold text-text transition-colors hover:border-ember/40 hover:text-ember sm:inline-flex"
            >
              <PhoneIcon width={16} height={16} className="text-ember" />
              <span dir="ltr">{site.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => goTo(e, "contact")}
              className="hidden rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
            >
              לתיאום פגישה
            </a>

            {/* כפתור תפריט נייד */}
            <button
              type="button"
              aria-label="תפריט"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-text xl:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute right-0 block h-0.5 w-5 bg-current transition-all ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute right-0 top-1.5 block h-0.5 w-5 bg-current transition-all ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute right-0 block h-0.5 w-5 bg-current transition-all ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* תפריט נייד נפתח */}
        <div
          className={`overflow-hidden border-t bg-paper transition-[max-height,opacity] duration-300 xl:hidden ${
            open
              ? "max-h-[560px] border-line opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => goTo(e, item.id)}
                className={`rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                  active === item.id
                    ? "bg-sand text-ember"
                    : "text-muted hover:bg-sand hover:text-text"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => goTo(e, "contact")}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-ember px-4 py-3 text-base font-bold text-white"
            >
              לתיאום פגישה
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 text-base font-bold text-text"
            >
              <PhoneIcon width={18} height={18} className="text-ember" />
              <span dir="ltr">{site.phone}</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
