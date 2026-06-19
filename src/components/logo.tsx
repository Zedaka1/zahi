import Image from "next/image";

/**
 * הלוגו של צחי הג'ינג'י — PNG עם רקע שקוף, מתאים לרקע בהיר וכהה כאחד.
 * variant נשמר לתאימות אך אינו נדרש (אין צורך במסגרת).
 */
export function Logo({
  imgClassName = "h-12 w-auto",
  className = "",
}: {
  variant?: "onLight" | "onDark";
  imgClassName?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/LOGO_NEW.png"
        alt="צחי הג'ינג'י שיפוצים — הכל תחת קורה אחת"
        width={554}
        height={450}
        priority
        className={imgClassName}
      />
    </span>
  );
}
