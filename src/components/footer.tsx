import {
  SiGithub,
  SiLinkedin,
  SiX,
  // Hidden social media icons
  SiInstagram,
  SiYoutube,
  SiTwitch,
  SiTiktok,
  SiReddit,
  SiFacebook,
  SiMedium,
  SiDevdotto,
  SiHashnode,
  SiStackoverflow,
  SiCodepen,
  SiDribbble,
  SiBehance,
} from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";

const visibleSocialLinks = [
  {
    href: "https://hmziq.rs",
    icon: Globe,
    label: "Website",
  },
  {
    href: "https://github.com/hmziqrs",
    icon: SiGithub,
    label: "Github",
  },
  {
    href: "https://x.com/hmziqrs",
    icon: SiX,
    label: "X (Twitter)",
  },
  {
    href: "https://linkedin.com/in/hmziqrs",
    icon: SiLinkedin,
    label: "LinkedIn",
  },
];

const hiddenSocialLinks = [
  {
    href: "https://instagram.com/hmziqrs",
    icon: SiInstagram,
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@hmziqrs",
    icon: SiYoutube,
    label: "YouTube",
  },
  {
    href: "https://twitch.tv/hmziqrs",
    icon: SiTwitch,
    label: "Twitch",
  },
  {
    href: "https://tiktok.com/@hmziqrs",
    icon: SiTiktok,
    label: "TikTok",
  },
  {
    href: "https://reddit.com/user/hmziqrs",
    icon: SiReddit,
    label: "Reddit",
  },
  {
    href: "https://facebook.com/hmziqrs",
    icon: SiFacebook,
    label: "Facebook",
  },
  {
    href: "https://medium.com/@hmziqrs",
    icon: SiMedium,
    label: "Medium",
  },
  {
    href: "https://dev.to/hmziqrs",
    icon: SiDevdotto,
    label: "Dev.to",
  },
  {
    href: "https://hashnode.com/@hmziqrs",
    icon: SiHashnode,
    label: "Hashnode",
  },
  {
    href: "https://stackoverflow.com/users/hmziqrs",
    icon: SiStackoverflow,
    label: "Stack Overflow",
  },
  {
    href: "https://codepen.io/hmziqrs",
    icon: SiCodepen,
    label: "CodePen",
  },
  {
    href: "https://dribbble.com/hmziqrs",
    icon: SiDribbble,
    label: "Dribbble",
  },
  {
    href: "https://behance.net/hmziqrs",
    icon: SiBehance,
    label: "Behance",
  },
];

export function Footer() {
  return (
    <footer className="flex bg-zinc-100 dark:bg-zinc-900 print:hidden jpeg">
      <div className="container max-w-8xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Visible Social Links */}
          <div className="flex gap-4">
            {visibleSocialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400
                hover:text-zinc-900 dark:hover:text-zinc-100
                transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Hidden Social Links */}
          <div className="sr-only">
            {hiddenSocialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm font-mono">
            © {new Date().getFullYear()} Hamza Iqbal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
