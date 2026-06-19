"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { PhoneIcon, WhatsappIcon, MailIcon, CheckIcon } from "./icons";

const projectTypes = ["וילה", "בית פרטי", "מבנה ציבור", "דירה", "אחר"];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(projectTypes[0]);
  const [message, setMessage] = useState("");

  // אין שרת — שולחים את הפרטים ישירות לוואטסאפ עם הודעה מוכנה
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `שלום צחי! 👋
שמי: ${name || "—"}
טלפון: ${phone || "—"}
סוג פרויקט: ${type}
פרטים: ${message || "—"}`;
    const url = `${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const channels = [
    { icon: PhoneIcon, label: "טלפון", value: site.phone, href: site.phoneHref },
    { icon: WhatsappIcon, label: "וואטסאפ", value: "שליחת הודעה", href: site.whatsapp },
    { icon: MailIcon, label: "אימייל", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section
      id="contact"
      className="ember-glow relative overflow-hidden bg-paper py-12 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* טקסט ופרטי קשר */}
          <Reveal>
            <p className="eyebrow mb-4">צרו קשר</p>
            <h2 className="font-display text-4xl leading-tight text-text sm:text-5xl">
              מוכנים להתחיל?
              <br />
              <span className="text-ember-gradient">בואו נדבר.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              ספרו לי על הפרויקט שלכם ואחזור אליכם בהקדם עם כל המידע. פגישת הייעוץ
              והערכת העלות — ללא התחייבות.
            </p>

            <div className="mt-9 space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "וואטסאפ" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group card flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ember/12 text-ember-deep transition-colors group-hover:bg-ember group-hover:text-white">
                    <c.icon width={22} height={22} />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{c.label}</span>
                    <span
                      className="block font-bold text-text"
                      dir={c.label === "טלפון" ? "ltr" : undefined}
                    >
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {site.areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-line bg-sand px-3 py-1 text-sm text-muted"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>

          {/* טופס */}
          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="corner-frame card rounded-3xl p-7 sm:p-9"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="שם מלא">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="איך קוראים לכם?"
                    className="input"
                  />
                </Field>
                <Field label="טלפון">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    dir="ltr"
                    placeholder="050-0000000"
                    className="input text-right"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="סוג הפרויקט">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="input"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="פרטים על הפרויקט">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="כמה מילים על מה שאתם רוצים לעשות..."
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                <WhatsappIcon width={20} height={20} />
                שליחה בוואטסאפ
              </button>

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted">
                <CheckIcon width={14} height={14} className="text-ember" />
                הפנייה נשלחת ישירות לוואטסאפ — מענה מהיר ואישי
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid var(--color-line);
          background: var(--color-sand);
          padding: 0.85rem 1rem;
          color: var(--color-text);
          font-size: 0.95rem;
          outline: none;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .input::placeholder { color: #9a9085; }
        .input:focus {
          background: #fff;
          border-color: var(--color-ember);
          box-shadow: 0 0 0 3px rgba(196,98,45,0.16);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-text">
        {label}
      </span>
      {children}
    </label>
  );
}
