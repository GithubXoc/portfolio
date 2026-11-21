import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const variants = {
  primary: 'border-accent bg-accent text-bg hover:bg-transparent hover:text-accent',
  secondary: 'border-line/60 text-fg hover:border-accent hover:text-accent',
};

export default function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 border px-5 py-3 font-mono text-xs font-medium tracking-[0.15em] uppercase transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
