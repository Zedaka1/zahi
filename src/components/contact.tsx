"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { PhoneIcon, WhatsappIcon, MailIcon, CheckIcon } from "./icons";
import { sendLead } from "@/app/actions";

const projectTypes = ["וילה", "בית פרטי", "מבנה ציבור", "דירה", "אחר"];

type Status = "idle" | "sending" | "sent" | "error";
type Errors = { name?: string; phone?: string; message?: string };

const onlyDigits = (s: string) => s.replace(/\D/g, "");

function validate(v: { name: string; phone: string; message: string }): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "נא למלא שם מלא";

  const digits = onlyDigits(v.phone);
  if (!digits) errors.phone = "נא להזין מספר טלפון";
  else if (!/^05\d{8}$/.test(digits))
    errors.phone =
      "מספר הטלפון אינו תקין — יש להזין מספר נייד ישראלי בן 10 ספרות (לדוגמה 050-1234567)";

  if (v.message.trim().length < 2)
    errors.message = "נא לכתוב כמה מילים על הפרויקט";

  return errors;
}

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(projectTypes[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState(false);

  // שגיאות מוצגות רק אחרי ניסיון שליחה ראשון, ומתעדכנות חי תוך כדי תיקון
  const errors: Errors = submitted ? validate({ name, phone, message }) : {};

  // קישור וואטסאפ עם הודעה מוכנה — גיבוי אם שליחת המייל נכשלת
  const waText = `שלום צחי! 👋\nשמי: ${name || "—"}\nטלפון: ${
    phone || "—"
  }\nסוג פרויקט: ${type}\nפרטים: ${message || "—"}`;
  const waUrl = `${site.whatsapp}?text=${encodeURIComponent(waText)}`;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setSubmitted(true);
    const errs = validate({ name, phone, message });
    if (Object.keys(errs).length > 0) {
      setStatus("idle");
      const first = (["name", "phone", "message"] as const).find(
        (k) => errs[k],
      );
      if (first) document.getElementById(`lead-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    const res = await sendLead({ name, phone, type, message });
    if (res.ok) {
      setStatus("sent");
      setSubmitted(false);
      setName("");
      setPhone("");
      setMessage("");
      setType(projectTypes[0]);
    } else {
      setStatus("error");
    }
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
            {status === "sent" ? (
              <div className="corner-frame card flex flex-col items-center justify-center rounded-3xl p-10 text-center sm:p-12">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-ember/12 text-ember">
                  <CheckIcon width={32} height={32} />
                </span>
                <h3 className="mt-5 font-display text-2xl text-text">
                  הפנייה נשלחה! 🎉
                </h3>
                <p className="mt-3 max-w-xs text-muted">
                  תודה — קיבלתי את הפרטים ואחזור אליכם בהקדם. בינתיים מוזמנים גם
                  להתקשר ישירות.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-7 rounded-full border border-line px-6 py-3 text-sm font-bold text-text transition-colors hover:border-ember/40 hover:text-ember"
                >
                  שליחת פנייה נוספת
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="corner-frame card rounded-3xl p-7 sm:p-9"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="שם מלא" htmlFor="lead-name" error={errors.name}>
                    <input
                      id="lead-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      autoComplete="name"
                      required
                      aria-invalid={!!errors.name}
                      placeholder="איך קוראים לכם?"
                      className={`input ${errors.name ? "input-error" : ""}`}
                    />
                  </Field>
                  <Field label="טלפון" htmlFor="lead-phone" error={errors.phone}>
                    <input
                      id="lead-phone"
                      value={phone}
                      onChange={(e) =>
                        setPhone(onlyDigits(e.target.value).slice(0, 10))
                      }
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      autoComplete="tel"
                      required
                      dir="ltr"
                      aria-invalid={!!errors.phone}
                      placeholder="0501234567"
                      className={`input text-right ${
                        errors.phone ? "input-error" : ""
                      }`}
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="סוג הפרויקט" htmlFor="lead-type">
                    <select
                      id="lead-type"
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
                  <Field
                    label="פרטים על הפרויקט"
                    htmlFor="lead-message"
                    error={errors.message}
                  >
                    <textarea
                      id="lead-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                      aria-invalid={!!errors.message}
                      placeholder="כמה מילים על מה שאתם רוצים לעשות..."
                      className={`input resize-none ${
                        errors.message ? "input-error" : ""
                      }`}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === "sending" ? (
                    "שולח..."
                  ) : (
                    <>
                      <MailIcon width={20} height={20} />
                      שליחת פנייה
                    </>
                  )}
                </button>

                {status === "error" ? (
                  <div className="mt-4 rounded-2xl border border-ember/30 bg-ember/5 p-4 text-center text-sm">
                    <p className="font-bold text-ember-deep">
                      לא הצלחנו לשלוח כרגע 😕
                    </p>
                    <p className="mt-1 text-muted">
                      אפשר ליצור קשר ישירות ואחזור אליכם:
                    </p>
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-bold text-white"
                      >
                        <WhatsappIcon width={16} height={16} />
                        וואטסאפ
                      </a>
                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-bold text-text"
                      >
                        <PhoneIcon width={16} height={16} className="text-ember" />
                        <span dir="ltr">{site.phone}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted">
                    <CheckIcon width={14} height={14} className="text-ember" />
                    הפרטים נשלחים ישירות למייל של צחי — מענה מהיר ואישי
                  </p>
                )}
              </form>
            )}
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
        .input-error,
        .input-error:focus {
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220,38,38,0.14);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-semibold text-text">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-xs font-semibold text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}
