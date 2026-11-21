import { socials } from '../../data/profile';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
            className="grid size-10 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-accent"
          >
            <Icon size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
