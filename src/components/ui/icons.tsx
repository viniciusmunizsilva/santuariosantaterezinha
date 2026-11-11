import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5.5 3.5h3l1.6 4.2-2 1.5a12 12 0 0 0 6.7 6.7l1.5-2 4.2 1.6v3A2 2 0 0 1 18.4 20.5 15.4 15.4 0 0 1 3.5 5.6 2 2 0 0 1 5.5 3.5Z" />
  </Base>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.6 20.4l1.2-4.3a8.5 8.5 0 1 1 3.3 3.2l-4.5 1.1Z" />
    <path d="M9 8.6c-.3 1.2.3 2.7 1.6 4s2.900 2 4.100 1.700l.7-1.300-1.800-1-.8.800c-.800-.300-1.800-1.300-2.100-2.100l.8-.8-1-1.800L9 8.600Z" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s-6.500-5.600-6.500-10.500a6.500 6.500 0 0 1 13 0C18.500 15.400 12 21 12 21Z" />
    <circle cx="12" cy="10.500" r="2.300" />
  </Base>
);

export const ArrowIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13.500 6.500 19 12l-5.500 5.500" />
  </Base>
);

export const ClockIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.500" />
    <path d="M12 7.500V12l3 2" />
  </Base>
);

/** Cálice com hóstia — Santa Missa */
export const ChaliceIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="4.800" r="2.300" />
    <path d="M6.500 9.500h11c0 3.600-2.300 6-5.500 6s-5.500-2.400-5.500-6ZM12 15.500v4M8.500 20.500h7" />
  </Base>
);

/** Sol nascente — domingo, dia do Senhor */
export const SunIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="3.600" />
    <path d="M12 3.500v2M12 18.500v2M3.500 12h2M18.500 12h2M6 6l1.400 1.400M16.600 16.600 18 18M18 6l-1.400 1.400M7.400 16.600 6 18" />
  </Base>
);

/** Cruz — dias de semana */
export const CrossIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.500v17M7 8.500h10" />
  </Base>
);

/** Igreja — sábado */
export const ChurchIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.500v4M10.500 4h3M12 6.500l4 3.500v10.500H8V10l4-3.500ZM8 13.500l-4.500 2.500v4.500H8M16 13.500l4.500 2.500v4.500H16M12 20.500v-3.500" />
  </Base>
);
