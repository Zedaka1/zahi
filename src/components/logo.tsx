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
        src="/images/LAST_LOGO.png"
        alt="צחי צדקה — בוני יוקרה"
        width={577}
        height={433}
        priority
        className={imgClassName}
      />
    </span>
  );
}
