"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative border-y border-line bg-sand py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow eyebrow-center mb-4">שאלות נפוצות</p>
            <h2 className="font-display text-4xl leading-tight text-text sm:text-5xl">
              כל מה ש<span className="text-ember-gradient">שואלים אותי</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={f.q}
                delay={i * 60}
                className="card overflow-hidden rounded-2xl"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span className="font-display text-lg text-text">
                    {f.q}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xl transition-all ${
                      isOpen
                        ? "rotate-45 border-ember bg-ember text-white"
                        : "border-line text-ember-deep"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-muted">
                      {f.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
