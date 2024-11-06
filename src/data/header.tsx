import {
  SiGmail,
  SiLinkedin,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";

export const header = {
  links: [
    {
      href: "mailto:hmziqrs@gmail.com",
      icon: SiGmail,
      label: "hmziqrs@gmail.com",
    },
    {
      href: "https://t.me/hmziqrs",
      icon: SiTelegram,
      label: "@hmziqrs",
    },
    {
      href: "https://x.com/hmziqrs",
      icon: SiX,
      label: "@hmziqrs",
    },
    {
      href: "https://www.linkedin.com/in/hmziqrs",
      target: "_linkedin",
      icon: SiLinkedin,
      label: "@hmziqrs",
    },
  ],
  name: "Hamza Iqbal",
  title: "Full Stack Engineer | Rust, Flutter, React Native",
  intro: [
    `A self-taught engineer with ${new Date().getFullYear() - 2017}+ years of experience, I've built different types of software solutions like travel booking platforms, social networks, online stores, and business applications. I mostly use Rust, Flutter, NextJS, NodeJS, and React Native.`,
    `Outside of coding, I enjoy flying drones and playing story-rich video games like Detroit: Become Human and Cyber punk.`,
  ],
};
