import { LucideIcon } from 'lucide-react';
import './SocialLink.css';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label={label}
    >
      <Icon className="social-link-icon" />
    </a>
  );
}
