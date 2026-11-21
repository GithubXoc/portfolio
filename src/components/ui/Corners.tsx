interface CornersProps {
  /** Border color classes, e.g. "border-line/60 group-hover:border-accent". */
  className?: string;
}

/** L-shaped corner marks drawn just outside a `relative` container, like crop marks on a drawing. */
export default function Corners({ className = 'border-line/70' }: CornersProps) {
  const base = `pointer-events-none absolute size-3 transition-colors ${className}`;
  return (
    <>
      <span aria-hidden className={`${base} -top-1.5 -left-1.5 border-t border-l`} />
      <span aria-hidden className={`${base} -top-1.5 -right-1.5 border-t border-r`} />
      <span aria-hidden className={`${base} -bottom-1.5 -left-1.5 border-b border-l`} />
      <span aria-hidden className={`${base} -right-1.5 -bottom-1.5 border-r border-b`} />
    </>
  );
}
