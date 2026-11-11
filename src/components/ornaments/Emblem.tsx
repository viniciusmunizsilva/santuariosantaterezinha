import { Rose } from "./Rose";

/**
 * Emblema do Santuário: cruz sobre a rosa.
 * Identidade provisória até que a administração forneça o logotipo oficial.
 */
export function Emblem({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-grid place-items-center ${className}`}
    >
      <svg viewBox="0 0 48 60" className="size-full" focusable="false">
        <path
          d="M24 2v20M17 9h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <Rose variant="wine" x={6} y={22} width={36} height={36} />
      </svg>
    </span>
  );
}
