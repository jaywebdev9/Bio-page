export type ProfileLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  kind: "portfolio" | "github" | "fiverr" | "instagram" | "facebook" | "linkedin" | "whatsapp";
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  kind: "instagram" | "facebook" | "github" | "linkedin" | "whatsapp";
};

export const profile = {
  name: "Joshua Mwalukimba",
  title: "Software Developer",
  available: true,
  bio: "I build modern web products — from full sites to freelance delivery. Clean code, careful craft, and work that actually ships.",
  avatarSrc: "/joshua.jpg",
  avatarAlt: "Portrait of Joshua Mwalukimba",
  links: [
    {
      id: "portfolio",
      title: "Portfolio",
      description: "Selected work and case studies",
      href: "https://joshuadeveloper.gamer.gd/",
      kind: "portfolio",
    },
    {
      id: "github",
      title: "GitHub",
      description: "Code, repos, and experiments",
      href: "https://github.com/jaywebdev9",
      kind: "github",
    },
    {
      id: "fiverr",
      title: "Hire me on Fiverr",
      description: "Freelance projects, delivered",
      href: "https://www.fiverr.com/s/mmxo4r7",
      kind: "fiverr",
    },
    {
      id: "instagram",
      title: "Instagram",
      description: "@jay_tech09",
      href: "https://www.instagram.com/jay_tech09/",
      kind: "instagram",
    },
    {
      id: "facebook",
      title: "Facebook",
      description: "Connect and follow along",
      href: "https://www.facebook.com/share/1M2m6qQiJW/",
      kind: "facebook",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Professional profile & network",
      href: "https://www.linkedin.com/in/joshua-mwalukimba-a77a602a6",
      kind: "linkedin",
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Chat with me directly",
      href: "https://wa.me/255689995937",
      kind: "whatsapp",
    },
  ] satisfies ProfileLink[],
  socials: [
    {
      id: "ig",
      label: "Instagram",
      href: "https://www.instagram.com/jay_tech09/",
      kind: "instagram",
    },
    {
      id: "fb",
      label: "Facebook",
      href: "https://www.facebook.com/share/1M2m6qQiJW/",
      kind: "facebook",
    },
    {
      id: "gh",
      label: "GitHub",
      href: "https://github.com/jaywebdev9",
      kind: "github",
    },
    {
      id: "li",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joshua-mwalukimba-a77a602a6",
      kind: "linkedin",
    },
    {
      id: "wa",
      label: "WhatsApp",
      href: "https://wa.me/255689995937",
      kind: "whatsapp",
    },
  ] satisfies SocialLink[],
} as const;
