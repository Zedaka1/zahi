// ─────────────────────────────────────────────────────────────
//  קונפיגורציה מרכזית של האתר — ערוך כאן ופרטים יתעדכנו בכל הדף.
//  שדות עם TODO הם פלייסהולדרים שצריך להחליף בפרטים אמיתיים.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "צחי צדקה",
  role: "קבלן שיפוצים כלליים",
  tagline: "מבטון עד מפתח",
  subtitle: "חידוש, השבחה ועבודות גמר לווילות, בתים פרטיים ומבני ציבור — מבטון עד מפתח. עבודה מקצועית, נקייה ואמינה.",
  license: "רישיון קבלן ג-100",
  experience: "ניסיון של שנים בעבודות בנייה וגמר",

  phone: "052-431-0383",
  phoneHref: "tel:+972524310383",
  whatsapp: "https://wa.me/972524310383",
  email: "Zedaka1@gmail.com",

  // תמונת רקע להירו — להחליף בכל נתיב מתוך public/images
  heroImage: "/HERO_ZAHI.png",
  // תמונה לסקשן "עליי"
  aboutImage: "/ZAHI_ME.png",

  areas: [
    "מרכז הארץ",
    "השרון",
    "ירושלים והסביבה",
    "שפלה",
    "דרום",
  ],
} as const;

export type NavItem = { id: string; label: string };

// פריטי הניווט בהדר — כל id חייב להתאים ל-id של סקשן בעמוד.
export const navItems: NavItem[] = [
  { id: "home", label: "בית" },
  { id: "about", label: "עליי" },
  { id: "services", label: "שירותים" },
  { id: "process", label: "תהליך העבודה" },
  { id: "gallery", label: "פרויקטים" },
  { id: "testimonials", label: "המלצות" },
  { id: "faq", label: "שאלות נפוצות" },
  { id: "contact", label: "צרו קשר" },
];

export type Service = {
  key: string;
  title: string;
  desc: string;
};

export const services: Service[] = [
  {
    key: "construction",
    title: "בנייה ושלד",
    desc: "תוספות בנייה, הריסות, שינויי קונסטרוקציה ותשתיות — בסיס יציב לכל פרויקט.",
  },
  {
    key: "plumbing",
    title: "אינסטלציה",
    desc: "מערכות מים, ביוב וניקוז, נקודות מטבח ואמבטיה — מתוכננות ומבוצעות לפי תקן.",
  },
  {
    key: "electricity",
    title: "חשמל",
    desc: "לוחות, נקודות, תאורה ותשתית חכמה — עבודה בטוחה ומסודרת מקצה לקצה.",
  },
  {
    key: "drywall",
    title: "גבס ותקרות",
    desc: "קירות גבס, תקרות מונמכות, נישות ותאורה נסתרת לעיצוב נקי ומדויק.",
  },
  {
    key: "flooring",
    title: "ריצוף וחיפויים",
    desc: "ריצוף, חיפוי קירות, אבן וקרמיקה — יישור, פילוס וגימור ללא פשרות.",
  },
  {
    key: "paint",
    title: "צבע ושפכטל",
    desc: "שפכטל, צבע ועבודות גמר — קירות חלקים ומושלמים שמשדרגים כל חלל.",
  },
  {
    key: "waterproof",
    title: "איטום",
    desc: "איטום גגות, מרפסות וחדרים רטובים — מניעת נזקי רטיבות לאורך שנים.",
  },
  {
    key: "turnkey",
    title: "מבטון עד מפתח",
    desc: "ניהול וביצוע של הפרויקט כולו תחת קבלן אחד — אתם מקבלים בית מוכן למגורים.",
  },
];

export type Step = {
  num: string;
  title: string;
  desc: string;
};

export const steps: Step[] = [
  { num: "01", title: "פגישה ואפיון", desc: "מגיעים לשטח, מבינים את החזון והצרכים, ומגדירים יחד את היקף העבודה." },
  { num: "02", title: "תכנון ומפרט", desc: "הצעת מחיר מפורטת ושקופה, לוח זמנים ומפרט טכני — בלי הפתעות באמצע." },
  { num: "03", title: "הריסות ותשתיות", desc: "פינוי, הריסות מבוקרות והכנת כל התשתיות — חשמל, אינסטלציה ובנייה." },
  { num: "04", title: "שלד, גבס ואיטום", desc: "בניית החללים, קירות גבס, תקרות ואיטום מלא של האזורים הרטובים." },
  { num: "05", title: "ריצוף, צבע וגמר", desc: "ריצוף וחיפויים, שפכטל וצבע, והרכבת פרטי הגמר עד הפרט האחרון." },
  { num: "06", title: "מסירה ומפתח", desc: "ניקיון, בדיקות, סיור מסירה ואחריות — מקבלים בית מוכן ומפתח ביד." },
];

export type ProjectCategory = "villas" | "homes" | "commercial" | "process";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  // נתיב לתמונה מתוך public, למשל "/images/home/home-01.jpeg"
  image?: string;
  // show=true → מוצג בגלריה. כבוי = לא מוצג (אך נשמר כאן לשימוש עתידי).
  show?: boolean;
};

export const projectCategories = [
  { key: "all", label: "הכול" },
  { key: "villas", label: "וילות" },
  { key: "homes", label: "בתים פרטיים" },
  { key: "commercial", label: "מסחרי" },
] as const;

// מסודר לפי קטגוריה (מויין אוטומטית מתוך התמונות שהועלו).
export const projects: Project[] = [
  // וילות
  { id: 1, title: "וילה — סלון פתוח לגינה", category: "villas", image: "/images/villa/villa-01.jpeg", show: true },
  { id: 2, title: "וילה — מרפסת עץ וגינה", category: "villas", image: "/images/villa/villa-02.jpeg", show: true },
  // בתים פרטיים
  { id: 3, title: "סלון לאחר שיפוץ", category: "homes", image: "/images/home/home-01.jpeg" },
  { id: 4, title: "חדר לאחר שיפוץ", category: "homes", image: "/images/home/home-02.jpeg" },
  { id: 5, title: "משטח מטבח חדש", category: "homes", image: "/images/home/home-03.jpeg", show: true },
  { id: 6, title: "דלת זכוכית לגינה", category: "homes", image: "/images/home/home-04.jpeg" },
  { id: 7, title: "מטבח בהתקנה", category: "homes", image: "/images/home/home-05.jpeg", show: true },
  { id: 8, title: "סלון ופינת אוכל", category: "homes", image: "/images/home/home-06.jpeg", show: true },
  // מסחרי
  { id: 9, title: "מסדרון מבנה ציבורי", category: "commercial", image: "/images/commercial/commercial-01.jpeg", show: true },
  { id: 10, title: "מרפאת שיניים", category: "commercial", image: "/images/commercial/commercial-02.jpeg", show: true },
  { id: 11, title: "לובי ודלפק קבלה", category: "commercial", image: "/images/commercial/commercial-03.jpeg", show: true },
  // עבודות בתהליך
  { id: 12, title: "חיפוי קיר", category: "process", image: "/images/process/process-01.jpeg" },
  { id: 13, title: "חיפוי קיר חיצוני", category: "process", image: "/images/process/process-02.jpeg" },
  { id: 14, title: "חדר רחצה בבנייה", category: "process", image: "/images/process/process-03.jpeg" },
  { id: 15, title: "מטבח לפני שיפוץ", category: "process", image: "/images/process/process-04.jpeg" },
  { id: 16, title: "הריסת חדר רחצה", category: "process", image: "/images/process/process-05.jpeg" },
  { id: 17, title: "פינוי והכנת סלון", category: "process", image: "/images/process/process-06.jpeg" },
  { id: 18, title: "עבודות הריסה בסלון", category: "process", image: "/images/process/process-07.jpeg" },
  { id: 19, title: "איטום רצפת מקלחת", category: "process", image: "/images/process/process-08.jpeg" },
  { id: 20, title: "הכנת רצפת רחצה", category: "process", image: "/images/process/process-09.jpeg" },
  { id: 21, title: "ריצוף חדר שירות", category: "process", image: "/images/process/process-10.jpeg" },
  { id: 22, title: "חיפוי חדר רחצה", category: "process", image: "/images/process/process-11.jpeg" },
  { id: 23, title: "הנחת ריצוף", category: "process", image: "/images/process/process-12.jpeg" },
  { id: 24, title: "עבודות שיפוץ בסלון", category: "process", image: "/images/process/process-13.jpeg" },
  { id: 25, title: "כיור אמבטיה חדש", category: "process", image: "/images/process/process-14.jpeg" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "כמה עולה שיפוץ?",
    a: "המחיר נקבע לפי גודל הפרויקט, היקף העבודה, רמת הגימור ומצב התשתיות הקיימות. אני נותן הצעת מחיר מפורטת ושקופה אחרי פגישה בשטח — בלי עלויות נסתרות.",
  },
  {
    q: "כמה זמן לוקח שיפוץ?",
    a: "תלוי בהיקף. שיפוץ דירה ממוצע נע בין מספר שבועות לחודשים, ושיפוץ וילה מקצה לקצה יכול לקחת יותר. בפגישה נקבע לוח זמנים ריאלי ומחייב.",
  },
  {
    q: "אתם עובדים עם אדריכל / מעצב?",
    a: "בהחלט. אני עובד בשיתוף פעולה מלא עם אדריכלים ומעצבי פנים, וגם יכול להמליץ על אנשי מקצוע אם צריך. אפשר להגיע גם עם תוכניות מוכנות.",
  },
  {
    q: "מה זה 'מבטון עד מפתח'?",
    a: "זה אומר שאני מנהל ומבצע את כל הפרויקט תחת קורת גג אחת — הריסה, בנייה, אינסטלציה, חשמל, גבס, ריצוף, צבע וגמר — עד שאתם מקבלים בית מוכן למגורים עם מפתח ביד.",
  },
  {
    q: "יש אחריות על העבודה?",
    a: "כן. כל עבודה מבוצעת לפי תקן ומלווה באחריות. הרישיון (קבלן ג-100) והניסיון הם הביטחון שלכם לעבודה מקצועית ואמינה.",
  },
];
