"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  projectCategories,
  projects,
  type Project,
} from "@/lib/site";
import { Reveal } from "./reveal";

const categoryLabel: Record<Project["category"], string> = {
  villas: "וילות",
  homes: "בתים פרטיים",
  commercial: "מסחרי",
  process: "עבודות בתהליך",
};

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  // פלייסהולדר עד שתתווסף תמונה אמיתית
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-3 to-ink">
      <span className="relative font-display text-5xl text-white/12">
        {project.id.toString().padStart(2, "0")}
      </span>
      <span className="relative text-xs text-steel">תמונה תתווסף</span>
    </div>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // מבחר מצומצם — רק פרויקטים שסומנו show=true ב-site.ts
  const shown = useMemo(() => projects.filter((p) => p.show), []);
  const visible = useMemo(
    () =>
      filter === "all" ? shown : shown.filter((p) => p.category === filter),
    [filter, shown],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i + 1) % visible.length));
      if (e.key === "ArrowRight")
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + visible.length) % visible.length,
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, visible.length]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <section
      id="gallery"
      className="relative border-y border-line bg-sand py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">תיק עבודות</p>
              <h2 className="font-display text-4xl leading-tight text-text sm:text-5xl">
                פרויקטים <span className="text-ember-gradient">נבחרים</span>
              </h2>
            </div>

            {/* סינון לפי קטגוריה */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setFilter(c.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    filter === c.key
                      ? "border-ember bg-ember text-white"
                      : "border-line bg-paper text-muted hover:border-ember/50 hover:text-text"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 4) * 70}
              className={i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className={`group relative block w-full overflow-hidden rounded-2xl border border-line text-right shadow-soft ${
                  i % 5 === 0 ? "aspect-square sm:h-full" : "aspect-[4/3]"
                }`}
              >
                <ProjectVisual project={p} />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-1 inline-block rounded-full bg-ember px-2.5 py-0.5 text-[11px] font-bold text-white">
                    {categoryLabel[p.category]}
                  </span>
                  <span className="block font-display text-base text-white">
                    {p.title}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          רוצה לראות עוד? יש עוד הרבה —{" "}
          <a href="#contact" className="font-semibold text-ember-deep underline">
            דברו איתי
          </a>{" "}
          ואשמח לשלוח תיק עבודות מלא.
        </p>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="סגירה"
            onClick={() => setOpenIndex(null)}
            className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-2xl text-white hover:bg-white/10"
          >
            ×
          </button>

          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <ProjectVisual project={current} />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold text-gold">
                  {categoryLabel[current.category]}
                </span>
                <h3 className="font-display text-2xl text-white">
                  {current.title}
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="הקודם"
                  onClick={() =>
                    setOpenIndex(
                      (i) => (i! - 1 + visible.length) % visible.length,
                    )
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
                >
                  ›
                </button>
                <button
                  type="button"
                  aria-label="הבא"
                  onClick={() =>
                    setOpenIndex((i) => (i! + 1) % visible.length)
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
                >
                  ‹
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
