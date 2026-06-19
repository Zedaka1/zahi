const words = [
  "בנייה",
  "אינסטלציה",
  "חשמל",
  "גבס",
  "ריצוף",
  "צבע",
  "איטום",
  "גמר",
  "מבטון עד מפתח",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative border-y border-white/10 bg-ink-2 py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-xl text-white/90 sm:text-2xl">
                {w}
              </span>
              <span className="text-gold">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
