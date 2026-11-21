interface TagProps {
  children: string;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
