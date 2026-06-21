"use server";

// ─────────────────────────────────────────────────────────────
//  Server Action — שליחת ליד במייל דרך Resend.
//  רץ אך ורק בצד השרת; מפתח ה-API לעולם לא נחשף לדפדפן.
//
//  משתני סביבה (להגדיר ב-Vercel וב-.env.local):
//    RESEND_API_KEY  — חובה. המפתח מ-resend.com (מתחיל ב-"re_").
//    RESEND_TO       — אופציונלי. יעד המייל. ברירת מחדל: site.email.
//    RESEND_FROM     — אופציונלי. כתובת השולח. ברירת מחדל: onboarding@resend.dev
//                      (עד שמאמתים דומיין ב-Resend חייבים לשלוח מכתובת זו,
//                       ו-RESEND_TO חייב להיות המייל שאיתו נפתח חשבון ה-Resend).
// ─────────────────────────────────────────────────────────────

import { Resend } from "resend";
import { site } from "@/lib/site";

type LeadInput = {
  name: string;
  phone: string;
  type: string;
  message: string;
};

export type LeadResult = { ok: true } | { ok: false; error: string };

const clean = (v: unknown, max: number) =>
  String(v ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function sendLead(input: LeadInput): Promise<LeadResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "missing_config" };

  // ולידציה בצד השרת — לא סומכים על הלקוח
  const name = clean(input.name, 120);
  const phoneDigits = String(input.phone ?? "").replace(/\D/g, "").slice(0, 15);
  const type = clean(input.type, 60);
  const message = String(input.message ?? "").trim().slice(0, 2000);

  // חובה: שם, טלפון בן 10 ספרות שמתחיל ב-0, ופירוט
  if (
    name.length < 2 ||
    phoneDigits.length !== 10 ||
    phoneDigits[0] !== "0" ||
    message.length < 2
  ) {
    return { ok: false, error: "invalid" };
  }

  const phone = `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(
    3,
    6,
  )}-${phoneDigits.slice(6)}`;

  const to = process.env.RESEND_TO || site.email;
  const from = process.env.RESEND_FROM || "Tzahi Website <onboarding@resend.dev>";

  const rows: Array<[string, string]> = [
    ["שם", name],
    ["טלפון", phone],
    ["סוג פרויקט", type || "—"],
    ["פרטים", message || "—"],
  ];

  const html = `<!doctype html><html dir="rtl" lang="he"><body style="margin:0;background:#f7f4ef;font-family:Arial,Helvetica,sans-serif;color:#221d17">
  <div style="max-width:560px;margin:0 auto;padding:24px">
    <div style="background:#fff;border:1px solid #e8ded2;border-radius:16px;overflow:hidden">
      <div style="background:#c04a18;color:#fff;padding:18px 24px;font-size:18px;font-weight:bold">ליד חדש מהאתר 🛠️</div>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:14px 24px;border-bottom:1px solid #f0e9df;color:#6c6155;font-size:13px;white-space:nowrap;vertical-align:top">${esc(
                k,
              )}</td><td style="padding:14px 24px;border-bottom:1px solid #f0e9df;font-size:15px;font-weight:600;white-space:pre-wrap">${esc(
                v,
              )}</td></tr>`,
          )
          .join("")}
      </table>
      <div style="padding:16px 24px;color:#9a9085;font-size:12px">נשלח אוטומטית מטופס יצירת הקשר באתר ${esc(
        site.name,
      )} ${esc(site.nickname)}.</div>
    </div>
  </div></body></html>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `ליד חדש מהאתר — ${name} (${phone})`,
      html,
      text,
    });
    if (error) return { ok: false, error: "send_failed" };
    return { ok: true };
  } catch {
    return { ok: false, error: "send_failed" };
  }
}
