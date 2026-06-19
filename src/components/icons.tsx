import type { SVGProps } from "react";

const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Construction(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </svg>
  );
}
function Plumbing(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M9 3v6a3 3 0 0 0 3 3 3 3 0 0 1 3 3v6" />
      <path d="M6 3h6M15 18h6" />
      <circle cx="12" cy="12" r="1.2" />
    </svg>
  );
}
function Electricity(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}
function Drywall(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 10h18M3 15h18M9 4v6M15 10v5M12 15v5" />
    </svg>
  );
}
function Flooring(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}
function Paint(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5h13v5H4z" />
      <path d="M17 7h3v4h-5" />
      <path d="M12 10v4M12 14a2 2 0 0 0-2 2v4h4v-4a2 2 0 0 0-2-2Z" />
    </svg>
  );
}
function Waterproof(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  );
}
function Turnkey(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l8 8M16 16l2-2M19 19l1.5-1.5" />
    </svg>
  );
}

export const serviceIcons: Record<
  string,
  (p: SVGProps<SVGSVGElement>) => React.ReactElement
> = {
  construction: Construction,
  plumbing: Plumbing,
  electricity: Electricity,
  drywall: Drywall,
  flooring: Flooring,
  paint: Paint,
  waterproof: Waterproof,
  turnkey: Turnkey,
};

export function PhoneIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
export function WhatsappIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M20 12a8 8 0 0 1-11.8 7L4 20l1-4.2A8 8 0 1 1 20 12Z" />
      <path d="M9 9c0 3 3 6 6 6 1 0 1.5-.5 1.5-1.2 0-.3-1.7-1.1-2-1.1-.4 0-.7.6-1 .6-.7 0-2.8-2.1-2.8-2.8 0-.3.6-.6.6-1 0-.3-.8-2-1.1-2C9.5 7.5 9 8 9 9Z" />
    </svg>
  );
}
export function MailIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
export function CheckIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}
export function ArrowIcon(p: SVGProps<SVGSVGElement>) {
  // חץ שמצביע שמאלה (כיוון "קדימה" ב-RTL)
  return (
    <svg {...base} {...p}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}
