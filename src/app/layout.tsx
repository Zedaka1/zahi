import type { Metadata } from "next";
import { Suez_One, Assistant } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const suez = Suez_One({
  variable: "--font-suez",
  subsets: ["hebrew", "latin"],
  weight: "400",
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} "${site.nickname}" | שיפוצים כלליים — ${site.tagline}`,
  description: site.subtitle,
  keywords: [
    "שיפוצים",
    "קבלן שיפוצים",
    "שיפוץ וילות",
    "שיפוץ בתים פרטיים",
    "שיפוץ מבני ציבור",
    "צחי צדקה",
    "הג'ינג'י",
  ],
  openGraph: {
    title: `${site.name} "${site.nickname}" — שיפוצים כלליים`,
    description: site.subtitle,
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${suez.variable} ${assistant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-text">
        <a href="#main" className="skip-link">
          דילוג לתוכן הראשי
        </a>
        {children}
      </body>
    </html>
  );
}
