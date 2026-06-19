import { Logo } from "./logo";
import { navItems, site } from "@/lib/site";
import { PhoneIcon, WhatsappIcon, MailIcon } from "./icons";
import { LegalLinks } from "./legal";

export function SiteFooter() {
  return (
    <footer className="relative border-t-2 border-gold bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="onDark" imgClassName="h-16 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
            שיפוצים כלליים לווילות, בתים פרטיים ומבני ציבור — מבטון עד מפתח.
            עבודה מקצועית, נקייה ואמינה.
          </p>
          <span className="mt-4 inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
            {site.license}
          </span>
        </div>

        <div>
          <h3 className="font-display text-lg text-white">ניווט מהיר</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-steel transition-colors hover:text-gold"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-white">אזורי שירות</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel">
            {site.areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-white">יצירת קשר</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-steel transition-colors hover:text-gold"
              >
                <PhoneIcon width={16} height={16} />
                <span dir="ltr">{site.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-steel transition-colors hover:text-gold"
              >
                <WhatsappIcon width={16} height={16} />
                וואטסאפ
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-steel transition-colors hover:text-gold"
              >
                <MailIcon width={16} height={16} />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-steel sm:flex-row lg:px-8">
          <span>
            © {new Date().getFullYear()} {site.name} "{site.nickname}" · כל
            הזכויות שמורות
          </span>
          <LegalLinks />
        </div>
      </div>
    </footer>
  );
}
