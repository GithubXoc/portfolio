import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const variants = {
  primary: 'bg-accent text-bg hover:bg-accent-strong',
  secondary: 'border border-border bg-surface/60 text-fg hover:border-accent/60 hover:text-accent',
};

export default function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
