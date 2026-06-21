import Image from "next/image";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowIcon, CheckIcon } from "./icons";

const strip = [
  { label: "רישיון קבלן", value: "ג-100" },
  { label: "שיטת עבודה", value: "מבטון עד מפתח — קבלן אחד" },
  { label: "אזורי שירות", value: site.areas.join(" · ") },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] flex-col overflow-hidden"
    >
      {/* תמונת רקע */}
      {site.heroImage ? (
        <Image
          src={site.heroImage}
          alt="פרויקט שיפוץ"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-gradient-to-br from-ink-2 via-ink to-ink-3"
        />
      )}
      {/* שכבת כהות לקריאוּת הטקסט — סקרים אחיד וכהה במובייל, גרדיאנט צדדי עדין בדסקטופ */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-ink/78 sm:bg-transparent sm:bg-gradient-to-l sm:from-ink/92 sm:from-20% sm:via-ink/55 sm:via-70% sm:to-transparent"
      />
      {/* זוהר עדין */}
      <div
        aria-hidden
        className="absolute -top-24 right-0 -z-10 h-[380px] w-[560px] rounded-full bg-ember-bright/10 blur-[140px]"
      />

      {/* תוכן ראשי */}
      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-5 pt-[120px] pb-10 lg:px-8">
          <div className="max-w-2xl text-right">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.12em] text-gold">
              <span className="h-px w-10 bg-gold" />
              {site.name} {site.nickname}
            </p>

            <h1 className="display-xl font-display text-white">
              שיפוצים כלליים
              <span className="mt-2 block text-gold">מבטון עד מפתח</span>
            </h1>

            {/* קו "מתכת מותכת" מתחת לכותרת — נחושת לוהטת → זהב */}
            <span className="mt-6 block h-1 w-28 rounded-full bg-[linear-gradient(90deg,var(--color-ember),var(--color-gold))]" />

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-steel">
              {site.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-base font-bold text-ember shadow-lift transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                לתיאום פגישת ייעוץ
                <ArrowIcon
                  width={18}
                  height={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon width={18} height={18} className="text-gold" />
                <span dir="ltr">{site.phone}</span>
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-steel">
              {["וילות", "בתים פרטיים", "מבני ציבור ומסחרי"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon width={16} height={16} className="text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* פס נתונים זכוכיתי בתחתית */}
      <div className="relative z-[1] border-t border-white/10 bg-ink/45 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {strip.map((s) => (
            <div key={s.label} className="px-2 py-4 text-center sm:text-right">
              <div className="text-[11px] font-bold tracking-[0.15em] text-gold">
                {s.label}
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
