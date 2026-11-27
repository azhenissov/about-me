import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  /** Screen-reader hint, e.g. "(opens in a new tab)". */
  newTabHint: string;
  className?: string;
};

export function ExternalLink({ href, children, newTabHint, className = "" }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> {newTabHint}</span>
    </a>
  );
}
