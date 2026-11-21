interface DimensionProps {
  label: string;
  className?: string;
}

/** A horizontal dimension line: |◄──── label ────►| */
export default function Dimension({ label, className = '' }: DimensionProps) {
  return (
    <div aria-hidden className={`flex items-center text-muted ${className}`}>
      <span className="h-3 w-px bg-current" />
      <span className="border-y-[3px] border-r-[7px] border-y-transparent border-r-current" />
      <span className="h-px flex-1 bg-current opacity-70" />
      <span className="annot px-3 whitespace-nowrap">{label}</span>
      <span className="h-px flex-1 bg-current opacity-70" />
      <span className="border-y-[3px] border-l-[7px] border-y-transparent border-l-current" />
      <span className="h-3 w-px bg-current" />
    </div>
  );
}
