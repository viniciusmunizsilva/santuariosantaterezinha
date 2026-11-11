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
    <path d="M5.500 3.500h3l1.600 4.200-2 1.500a12 12 0 0 0 6.700 6.700l1.500-2 4.200 1.600v3a2 2 0 0 1-2.100 2A15.400 15.400 0 0 1 3.500 5.600a2 2 0 0 1 2-2.100Z" />
  </Base>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M12 2.500a9.400 9.400 0 0 0-8.100 14.200L2.600 21.400l4.800-1.300A9.400 9.400 0 1 0 12 2.500Zm0 1.700a7.700 7.700 0 1 1-3.900 14.400l-.3-.2-2.800.8.800-2.700-.2-.300A7.700 7.700 0 0 1 12 4.200Zm-3.200 3.700c-.200 0-.500.100-.700.400-.300.300-1 1-1 2.300s1 2.700 1.100 2.900c.100.200 1.900 3 4.700 4.100 2.300.900 2.800.700 3.300.700.500-.100 1.600-.700 1.800-1.300.200-.600.200-1.200.200-1.300-.100-.100-.300-.200-.600-.400l-1.900-.900c-.300-.100-.500-.100-.700.200l-.800 1c-.100.200-.300.200-.600.100-.300-.200-1.200-.500-2.200-1.400-.800-.700-1.400-1.600-1.500-1.900-.200-.300 0-.400.100-.600l.400-.500.300-.500c.100-.200 0-.400 0-.500l-.900-2c-.200-.500-.400-.400-.600-.400h-.400Z" />
  </svg>
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
