import { steps } from "@/lib/site";
import { Reveal } from "./reveal";

export function Process() {
  return (
    <section id="process" className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow eyebrow-center mb-4">איך זה עובד</p>
            <h2 className="font-display text-4xl leading-tight text-text sm:text-5xl">
              תהליך העבודה — <span className="text-ember-gradient">צעד אחר צעד</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              שיטה מסודרת שמלווה אותך מהרגע הראשון ועד מסירת המפתח, כך שתמיד תדע
              בדיוק איפה הפרויקט עומד.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              delay={(i % 3) * 90}
              className="group card relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="font-display text-6xl leading-none text-sand-2 transition-colors group-hover:text-ember/30">
                {s.num}
              </span>
              <h3 className="mt-3 font-display text-xl text-text">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
