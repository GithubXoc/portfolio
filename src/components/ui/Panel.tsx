import type { ReactNode } from 'react';

interface PanelProps {
  /** Label shown in the panel's title strip. */
  label?: string;
  /** Optional content on the right side of the title strip. */
  aside?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}

/** A bordered drawing panel with an optional title strip. */
export default function Panel({ label, aside, className = '', bodyClassName = '', children }: PanelProps) {
  return (
    <div className={`border border-line/50 bg-panel/70 ${className}`}>
      {label && (
        <div className="flex items-center justify-between gap-4 border-b border-line/50 px-4 py-2">
          <span className="annot text-fg">{label}</span>
          {aside}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
