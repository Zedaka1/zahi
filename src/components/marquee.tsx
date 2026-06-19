import { services } from "@/lib/site";
import { serviceIcons } from "./icons";

export function Marquee() {
  // כל "מחצית" חוזרת מספיק פעמים כדי להיות רחבה מכל מסך,
  // והמסלול = שתי מחציות זהות → translateX(-50%) נוחת בדיוק על התפר = לולאה אינסופית חלקה.
  const half = [...services, ...services, ...services];
  const row = [...half, ...half];
  return (
    // דקורטיבי — השירותים מופיעים גם בסקשן "שירותים", לכן מוסתר מקוראי מסך
    <div aria-hidden className="relative border-y border-line bg-sand py-6">
      <div className="marquee-mask overflow-hidden">
        <ul className="animate-marquee flex w-max items-center hover:[animation-play-state:paused]">
          {row.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <li
                key={i}
                className="me-4 flex flex-none items-center gap-3 whitespace-nowrap rounded-full border border-line bg-paper py-2.5 pe-5 ps-2.5 shadow-soft"
              >
                <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ember/10 text-ember ring-1 ring-ember/15">
                  {Icon ? <Icon width={18} height={18} /> : null}
                </span>
                <span className="text-[15px] font-semibold text-text">
                  {s.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
