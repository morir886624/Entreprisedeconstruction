export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/morir",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/morir",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/morir",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:morir@example.com",
    icon: "mail",
  },
];
