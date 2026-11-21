interface TagProps {
  children: string;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="border border-line/40 px-2 py-0.5 font-mono text-[11px] tracking-wide text-fg/90">
      {children}
    </span>
  );
}
