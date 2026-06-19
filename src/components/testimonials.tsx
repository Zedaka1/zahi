import { Reveal } from "./reveal";

// TODO: להחליף בהמלצות אמיתיות של לקוחות
const reviews = [
  {
    quote:
      "צחי שיפץ לנו את כל הווילה מהיסוד. עבודה נקייה, עמידה בלוח הזמנים, ותמיד זמין לכל שאלה. קיבלנו בית מושלם.",
    name: "משפחה מהשרון",
    project: "שיפוץ וילה מקצה לקצה",
  },
  {
    quote:
      "הכי חשוב לי היה שיהיה איש אחד שאחראי על הכול — וזה בדיוק מה שקיבלתי. חשמל, אינסטלציה, גבס וצבע, הכול תפר אחד חלק.",
    name: "בעל בית פרטי",
    project: "שיפוץ בית דו-קומתי",
  },
  {
    quote:
      "מקצוען אמיתי עם יחס אישי. הצעת המחיר הייתה שקופה, בלי הפתעות, והתוצאה דיברה בעד עצמה. ממליץ בחום.",
    name: "ועד מבנה ציבורי",
    project: "שדרוג מבנה ציבור",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-paper py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow eyebrow-center mb-4">לקוחות ממליצים</p>
            <h2 className="font-display text-4xl leading-tight text-text sm:text-5xl">
              מה אומרים <span className="text-ember-gradient">עליי</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 100}
              className="card relative flex flex-col rounded-2xl p-7"
            >
              <span className="font-display text-6xl leading-none text-ember/30">
                ״
              </span>
              <p className="-mt-3 flex-1 text-[15px] leading-relaxed text-text/90">
                {r.quote}
              </p>
              <div className="mt-6 flex items-center gap-1 text-ember">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k}>★</span>
                ))}
              </div>
              <div className="mt-3 border-t border-line pt-3">
                <div className="font-bold text-text">{r.name}</div>
                <div className="text-sm text-muted">{r.project}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
