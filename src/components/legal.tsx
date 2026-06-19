"use client";

import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/lib/site";

export type LegalDoc = "accessibility" | "privacy" | "terms";

/** פותח מסמך משפטי כפופאפ מכל מקום באתר. */
export function openLegal(doc: LegalDoc) {
  window.dispatchEvent(new CustomEvent("open-legal", { detail: doc }));
}

const UPDATED = "18.06.2026";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="mb-1.5 font-display text-lg text-text">{title}</h3>
      <div className="space-y-2 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}

const docs: Record<LegalDoc, { title: string; body: ReactNode }> = {
  accessibility: {
    title: "הצהרת נגישות",
    body: (
      <>
        <p className="mb-5 text-[15px] leading-relaxed text-muted">
          אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים ופועלים להנגיש את
          האתר בהתאם לתקן הישראלי ת"י 5568 ולהנחיות WCAG 2.1 ברמה AA, ככל הניתן.
        </p>
        <Section title="אמצעי הנגישות באתר">
          <ul className="list-inside list-disc space-y-1">
            <li>תפריט נגישות הכולל הגדלת טקסט, ניגודיות גבוהה וגווני אפור.</li>
            <li>הדגשת קישורים, פונט קריא, סמן עכבר גדול ועצירת אנימציות.</li>
            <li>ניווט מלא באמצעות מקלדת וסימון מיקוד ברור.</li>
            <li>מבנה כותרות תקין, טקסט חלופי לתמונות וניגודיות צבעים נאותה.</li>
            <li>קישור "דילוג לתוכן" בתחילת העמוד.</li>
          </ul>
        </Section>
        <Section title="הסדרי נגישות ופנייה">
          <p>
            למרות מאמצינו, ייתכן שיימצאו רכיבים שטרם הונגשו במלואם. אם נתקלתם
            בקושי, נשמח שתעדכנו אותנו ונפעל לתקן בהקדם.
          </p>
          <p>
            רכז הנגישות: {site.name} · טלפון:{" "}
            <span dir="ltr">{site.phone}</span> · אימייל: {site.email}
          </p>
        </Section>
        <p className="text-sm text-muted">עודכן לאחרונה: {UPDATED}</p>
      </>
    ),
  },
  privacy: {
    title: "מדיניות פרטיות",
    body: (
      <>
        <p className="mb-5 text-[15px] leading-relaxed text-muted">
          הפרטיות שלך חשובה לנו. מדיניות זו מסבירה איזה מידע נאסף באתר וכיצד
          אנו עושים בו שימוש.
        </p>
        <Section title="איזה מידע נאסף">
          <p>
            מידע שתמסור ביוזמתך בטופס יצירת הקשר (שם, מספר טלפון ופרטי הפנייה),
            וכן נתוני שימוש טכניים בסיסיים לצורך תפעול האתר ושיפורו.
          </p>
        </Section>
        <Section title="השימוש במידע">
          <p>
            המידע משמש אך ורק ליצירת קשר חוזר, מתן הצעת מחיר ומתן השירות. איננו
            מוכרים או מעבירים את המידע לצדדים שלישיים, למעט כאשר הדבר נדרש על פי
            דין.
          </p>
        </Section>
        <Section title="עוגיות (Cookies)">
          <p>
            האתר עושה שימוש בעוגיות הכרחיות לתפעול תקין, ובעוגיות נוספות לשיפור
            חוויית הגלישה (כגון שמירת העדפות נגישות). ניתן לנהל או לחסום עוגיות
            דרך הגדרות הדפדפן; חסימת עוגיות הכרחיות עלולה לפגוע בתפקוד האתר.
          </p>
        </Section>
        <Section title="אבטחת מידע וזכויותיך">
          <p>
            אנו נוקטים אמצעים סבירים לשמירת המידע. באפשרותך לפנות אלינו לעיון
            במידע שנמסר על ידך, לתיקונו או למחיקתו.
          </p>
          <p>
            ליצירת קשר: טלפון <span dir="ltr">{site.phone}</span> · אימייל{" "}
            {site.email}
          </p>
        </Section>
        <p className="text-sm text-muted">עודכן לאחרונה: {UPDATED}</p>
      </>
    ),
  },
  terms: {
    title: "תנאי שימוש",
    body: (
      <>
        <p className="mb-5 text-[15px] leading-relaxed text-muted">
          השימוש באתר כפוף לתנאים שלהלן. הגלישה באתר מהווה הסכמה לתנאים אלו.
        </p>
        <Section title="התכנים והקניין הרוחני">
          <p>
            כל התכנים, הטקסטים והתמונות באתר הם קניינו של {site.name} ומוגנים
            בזכויות יוצרים. אין להעתיק, לשכפל או לעשות בהם שימוש מסחרי ללא אישור
            מראש ובכתב.
          </p>
        </Section>
        <Section title="אחריות ומידע">
          <p>
            המידע באתר הוא כללי ואינפורמטיבי בלבד ואינו מהווה התחייבות. התמונות
            מובאות להמחשה. ייתכנו אי-דיוקים, ואנו רשאים לעדכן את התכנים מעת לעת.
          </p>
        </Section>
        <Section title="קישורים חיצוניים">
          <p>
            ככל שקיימים באתר קישורים לאתרים חיצוניים, איננו אחראים לתוכנם או
            לזמינותם.
          </p>
        </Section>
        <Section title="דין וסמכות שיפוט">
          <p>
            על תנאי שימוש אלה יחולו דיני מדינת ישראל, וסמכות השיפוט הבלעדית נתונה
            לבתי המשפט המוסמכים בישראל.
          </p>
          <p>
            יצירת קשר: טלפון <span dir="ltr">{site.phone}</span> · אימייל{" "}
            {site.email}
          </p>
        </Section>
        <p className="text-sm text-muted">עודכן לאחרונה: {UPDATED}</p>
      </>
    ),
  },
};

/** מרנדר את הפופאפ המשפטי. יש למקם פעם אחת בעמוד. */
export function LegalModals() {
  const [doc, setDoc] = useState<LegalDoc | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => setDoc((e as CustomEvent).detail as LegalDoc);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDoc(null);
    };
    window.addEventListener("open-legal", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-legal", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = doc ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [doc]);

  if (!doc) return null;
  const d = docs[doc];

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      onClick={() => setDoc(null)}
      role="dialog"
      aria-modal="true"
      aria-label={d.title}
    >
      <div
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <h2 className="font-display text-2xl text-text">{d.title}</h2>
          <button
            type="button"
            onClick={() => setDoc(null)}
            aria-label="סגירה"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-2xl text-muted hover:bg-sand"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6">{d.body}</div>
      </div>
    </div>
  );
}

/** קישורי המסמכים — לשורת הפוטר. */
export function LegalLinks({ className = "" }: { className?: string }) {
  const items: { doc: LegalDoc; label: string }[] = [
    { doc: "accessibility", label: "הצהרת נגישות" },
    { doc: "privacy", label: "מדיניות פרטיות" },
    { doc: "terms", label: "תנאי שימוש" },
  ];
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 ${className}`}>
      {items.map((it) => (
        <button
          key={it.doc}
          type="button"
          onClick={() => openLegal(it.doc)}
          className="text-steel underline-offset-2 transition-colors hover:text-gold hover:underline"
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
