import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { WhatsappIcon } from "./icons";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* פורטרט צחי + סלוגן מוטמע */}
        <Reveal>
          <div className="corner-frame relative aspect-[5/4] overflow-hidden rounded-3xl border border-line shadow-lift">
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
            צחי צדקה{" "}
            <span className="text-ember-gradient">בוני יוקרה</span>
          </h2>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-text">
            מעל 30 שנות מצוינות בהנדסה, גמר והשבחת נכסים.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            מתמחים בחידוש, שדרוג והשבחת וילות, בתים פרטיים, מבני ציבור
            ופרויקטים ייחודיים — ברמת ביצוע בלתי מתפשרת.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            בפרויקטים מורכבים ובהנדסת יוקרה, כל פרט עושה את ההבדל. לכן אדריכלים
            ויזמים בוחרים בקבלן מורשה בעל ניסיון עשיר, שמלווה כל פרויקט באחריות
            מלאה, אמינות מוחלטת וסטנדרט עבודה של המאיון העליון.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            מהבטון ועד המפתח, אנו מובילים עבודות גמר, חידוש ומערכות מתקדמות, תוך
            הקפדה מחמירה על לוחות זמנים, איכות חומרים ושירות אישי ומסור לאורך כל
            הדרך.
          </p>
          <p className="mt-5 font-display text-xl leading-snug text-ember-deep sm:text-2xl">
            כי חלל ייחודי ראוי לרמת הביצוע הגבוהה ביותר.
          </p>

          <p className="mt-8 font-bold text-text">
            📲 מתכננים פרויקט חדש, חידוש או עבודות גמר?
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 text-base font-bold text-white shadow-lift transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsappIcon width={20} height={20} />
            לתיאום פגישת ייעוץ ותכנון עם צחי
          </a>
        </Reveal>
      </div>
    </section>
  );
}
