import { services } from "@/lib/site";
import { serviceIcons } from "./icons";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-line bg-sand py-12 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">תחומי התמחות</p>
              <h2 className="font-display text-4xl leading-tight text-text sm:text-5xl">
                כל מה שקשור{" "}
                <span className="text-ember-gradient">לעולם הבנייה</span>
              </h2>
            </div>
            <p className="max-w-md text-muted">
              שירות מלא תחת קורת גג אחת — מההריסה הראשונה ועד הסרת הניילונים
              ומסירת המפתח. בלי לתפור בין כמה בעלי מקצוע.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <Reveal
                key={s.key}
                delay={(i % 4) * 80}
                className="group card relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ember/12 text-ember-deep transition-colors group-hover:bg-ember group-hover:text-white">
                  {Icon ? <Icon className={`tool tool-${s.key}`} /> : null}
                </span>
                <h3 className="mt-4 font-display text-lg text-text sm:mt-5 sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 right-0 h-1 w-0 bg-ember transition-all duration-300 group-hover:w-full"
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
