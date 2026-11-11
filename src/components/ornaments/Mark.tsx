/** Marca do Santuário: a cruz sobre a rosa, em traço. Provisória até o logotipo oficial. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 52"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M20 2v15M14.500 7.500h11" />
      <path d="M27 24.600A13.500 13.500 0 1 0 33.500 36" />
      <path d="M20 28a8 8 0 1 0 8 8c0-3-2.200-5.200-5-5.200" />
      <path d="M20 33a3 3 0 1 0 3 3" />
    </svg>
  );
}
