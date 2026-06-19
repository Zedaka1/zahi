import Image from "next/image";
import { Logo } from "./logo";
import { navItems, site } from "@/lib/site";
import { PhoneIcon, WhatsappIcon, MailIcon } from "./icons";
import { LegalLinks } from "./legal";

export function SiteFooter() {
  return (
    <footer className="relative border-t-2 border-gold bg-ink text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-6 px-5 py-8 lg:grid-cols-4 lg:gap-10 lg:px-8 lg:py-14">
        <div className="col-span-2 lg:col-span-1">
          <Logo
            variant="onDark"
            className="w-full justify-center"
            imgClassName="h-24 w-auto lg:h-32"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
            שיפוצים כלליים לווילות, בתים פרטיים ומבני ציבור — מבטון עד מפתח.
            עבודה מקצועית, נקייה ואמינה.
          </p>
        </div>

        <div className="hidden lg:block">
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

        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-display text-lg text-white">אזורי שירות</h3>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-steel lg:block lg:space-y-2">
            {site.areas.map((a) => (
              <li key={a} className="flex items-center gap-2 after:h-1 after:w-1 after:rotate-45 after:bg-white/20 after:content-[''] last:after:hidden lg:after:hidden">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-display text-lg text-white">יצירת קשר</h3>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm lg:block lg:space-y-3">
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
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-5 lg:px-8">
          <LegalLinks className="justify-center" />

          <div className="flex flex-col items-center gap-3 text-xs text-steel sm:flex-row sm:gap-5">
            <span>
              © {new Date().getFullYear()} {site.name} "{site.nickname}" · כל
              הזכויות שמורות
            </span>
            <span className="hidden h-1 w-1 rotate-45 bg-white/20 sm:inline-block" />
            <a
              href="https://pixelia.co.il"
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="group flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
            >
              <span className="text-[8px] uppercase leading-none tracking-[0.2em]">
                Powered by
              </span>
              <Image
                src="/images/pixelia_logo_color.avif"
                alt="Pixelia"
                width={80}
                height={20}
                className="h-7 w-auto object-contain md:h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
