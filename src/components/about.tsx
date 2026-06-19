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
        {/* פלייסהולדר פורטרט */}
        <Reveal>
          <div className="relative">
            <div className="corner-frame relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-lift">
              <Image
                src={site.aboutImage}
                alt="פרויקט שיפוץ של צחי צדקה"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
              />
            </div>
            {/* תג צף */}
            <div className="absolute -bottom-5 right-6 rounded-2xl bg-ember px-5 py-4 text-white shadow-lift">
              <div className="font-display text-2xl leading-none">ג-100</div>
              <div className="mt-1 text-xs font-bold">רישיון קבלן</div>
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
            אני צחי, קבלן שיפוצים כלליים עם רישיון קבלן ג-100. אני לוקח פרויקטים
            של וילות, בתים פרטיים ומבני ציבור — ומוביל אותם{" "}
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
