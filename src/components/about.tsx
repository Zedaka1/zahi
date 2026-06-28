import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { CheckIcon } from "./icons";

const points = [
  "אחריות אישית על כל שלב בפרויקט",
  "צוות מקצועי ומפרט עבודה ברור",
  "עמידה בלוחות זמנים ובתקציב",
  "שקיפות מלאה — בלי הפתעות בדרך",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* פורטרט צחי + סלוגן מוטמע */}
        <Reveal>
          <div className="corner-frame relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-lift">
            <Image
              src={site.aboutImage}
              alt="צחי צדקה — בוני יוקרה"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
            />
            {/* סלוגן מוטמע — עיצוב אצילי */}
            <div className="absolute inset-x-0 bottom-0 px-6 pb-9 pt-24 text-center sm:px-10 sm:pb-11">
              <span
                aria-hidden
                className="mx-auto mb-4 block h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
              <p className="font-elegant text-[1.6rem] leading-[1.3] tracking-wide text-white/95 [text-shadow:0_2px_24px_rgba(0,0,0,0.7)] sm:text-3xl lg:text-[2.1rem]">
                הסטנדרט הגבוה שלכם.
                <span className="mt-2 block font-bold text-gold">
                  הביצוע המדויק שלנו.
                </span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* טקסט */}
        <Reveal delay={120}>
          <p className="eyebrow mb-4">עליי</p>
          <h2 className="font-display text-4xl leading-tight text-text sm:text-5xl">
            {site.name}{" "}
            <span className="text-ember-gradient">{site.nickname}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            קבלן שיפוצים כלליים בעל רישיון קבלן ג-100, המתמחה בפרויקטים של וילות,
            בתים פרטיים ומבני ציבור — ומלווה כל פרויקט{" "}
            <span className="font-semibold text-text">מהבטון ועד המפתח</span>.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            בנייה, אינסטלציה, חשמל, גבס, ריצוף, צבע — כל מה שקשור לעולם הבנייה
            נעשה תחת ניהול אחד, עם אחריות אישית ועבודה נקייה ומסודרת.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-text">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember/12 text-ember-deep">
                  <CheckIcon width={15} height={15} />
                </span>
                <span className="text-[15px] leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
