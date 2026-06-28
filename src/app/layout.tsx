import type { Metadata } from "next";
import { Suez_One, Assistant, Frank_Ruhl_Libre } from "next/font/google";
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

// גופן סריף עברי אצילי — לסלוגנים ולמבטאים יוקרתיים
const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | שיפוצים כלליים — ${site.tagline}`,
  description: site.subtitle,
  keywords: [
    "שיפוצים",
    "קבלן שיפוצים",
    "שיפוץ וילות",
    "שיפוץ בתים פרטיים",
    "שיפוץ מבני ציבור",
    "צחי צדקה",
  ],
  openGraph: {
    title: `${site.name} — שיפוצים כלליים`,
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
      className={`${suez.variable} ${assistant.variable} ${frankRuhl.variable} h-full antialiased`}
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
