import {
  SiReact,
  SiTypescript,
  SiMaterialdesign,
  SiFirebase,
  SiFlutter,
  SiSocketdotio,
  SiNodedotjs,
  SiAdonisjs,
  SiExpress,
  SiGo,
  SiDart,
  SiGithubactions,
  SiAmazon,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiWebassembly,
  SiGoogletranslate,
  SiFlask,
  SiRust,
} from "@icons-pack/react-simple-icons";
import {
  ChevronsLeftRightEllipsis,
  Cpu,
  FileTerminal,
  FlaskConical,
  Globe,
} from "lucide-react";

export const skills = [
  {
    key: "Web",
    skills: [
      { label: "React JS", icon: SiReact },
      { label: "Next JS", icon: SiNextdotjs },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Webassembly", icon: SiWebassembly },
      { label: "Typescript", icon: SiTypescript },
      { label: "Material UI", icon: SiMaterialdesign },
      { label: "Firebase", icon: SiFirebase },
    ],
  },
  {
    key: "Mobile",
    skills: [
      { label: "Flutter", icon: SiFlutter },
      { label: "React Native", icon: SiReact },
      { label: "Socket.IO", icon: SiSocketdotio },
      { label: "Internationalization", icon: Globe }, // Replace with appropriate i18n icon
      { label: "Multi Threaded Apps", icon: Cpu }, // Replace with appropriate threading icon
      { label: "E2E Testing", icon: FlaskConical }, // Replace with appropriate testing icon
      { label: "Pixel Perfect UI", icon: ChevronsLeftRightEllipsis }, // Replace with appropriate UI icon
      { label: "Parallax Animations", icon: SiReact }, // Replace with appropriate animation icon
    ],
  },
  {
    key: "Server",
    skills: [
      { label: "Rust", icon: SiRust },
      { label: "Node JS", icon: SiNodedotjs },
      { label: "Adonis JS", icon: SiAdonisjs },
      { label: "Express JS", icon: SiExpress },
      { label: "CLI App", icon: FileTerminal },
      { label: "Github Actions", icon: SiGithubactions },
      { label: "Postgres", icon: SiPostgresql },
    ],
  },
];
