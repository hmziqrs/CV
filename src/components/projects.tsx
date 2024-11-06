import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";
import {
  Box,
  Globe,
  Smartphone,
  Terminal,
  Layout,
  MonitorSmartphone,
} from "lucide-react";

const ProjectTypeBadge = ({ type }: { type: string }) => {
  if (type === "Product") {
    return (
      <div
        className="flex items-center gap-1.5 text-xs px-2 py-0.5
        bg-blue-100 dark:bg-blue-950
        text-blue-700 dark:text-blue-200
        border border-blue-700/30 dark:border-blue-200/30
        rounded-full font-medium
        hover:bg-blue-200 dark:hover:bg-blue-900
        transition-colors duration-200"
      >
        <Box className="w-3.5" />
        {type}
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-1.5 text-xs px-2 py-0.5
      bg-green-100 dark:bg-green-950
      text-green-700 dark:text-green-200
      border border-green-700/30 dark:border-green-200/30
      rounded-full font-medium
      hover:bg-green-200 dark:hover:bg-green-900
      transition-colors duration-200"
    >
      <Globe className="w-3.5" />
      {type}
    </div>
  );
};

const ContributionBadge = ({ role }: { role: string }) => {
  const getBadgeConfig = (role: string) => {
    switch (role) {
      case "Mobile App":
        return {
          colors:
            "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-700/30 dark:border-purple-300/30 hover:bg-purple-200 dark:hover:bg-purple-900",
          icon: Smartphone,
        };
      case "Full Stack":
        return {
          colors:
            "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-700/30 dark:border-red-300/30 hover:bg-red-200 dark:hover:bg-red-900",
          icon: MonitorSmartphone,
        };
      case "Web App":
        return {
          colors:
            "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-700/30 dark:border-orange-300/30 hover:bg-orange-200 dark:hover:bg-orange-900",
          icon: Layout,
        };
      case "CLI App":
        return {
          colors:
            "bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-700/30 dark:border-teal-300/30 hover:bg-teal-200 dark:hover:bg-teal-900",
          icon: Terminal,
        };
      default:
        return {
          colors:
            "bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-gray-700/30 dark:border-gray-300/30 hover:bg-gray-200 dark:hover:bg-gray-900",
          icon: Box,
        };
    }
  };

  const config = getBadgeConfig(role);
  const Icon = config.icon;

  return (
    <div
      className={`flex items-center gap-1.5  text-xs px-2 py-0.5
      rounded-full font-medium border
      transition-colors duration-200
      ${config.colors}`}
    >
      <Icon className="w-3.5" />
      <span className="">{role}</span>
    </div>
  );
};

export function Projects() {
  return (
    <div className="flex bg-zinc-100 dark:bg-zinc-900">
      <div className="container max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden
              group hover:transform hover:scale-[1.02] transition-all duration-300
              border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Details */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  {/* <ProjectTypeBadge type={project.type} /> */}
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <ProjectTypeBadge type={project.type} />
                  <ContributionBadge role={project.contribution} />
                </div>

                <ul className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow sr-only">
                  {project.description.map((desc, index) => (
                    <li key={index} className="mb-1">
                      • {desc}
                    </li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2 mb-auto">
                  {project.buttons.map((button) => (
                    <Link
                      key={button.link}
                      href={button.link}
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-2
                      bg-zinc-300 dark:bg-zinc-700
                      hover:bg-zinc-400 dark:hover:bg-zinc-600
                      rounded-md text-sm font-medium
                      text-zinc-800 dark:text-zinc-200
                      transition-colors duration-300"
                    >
                      <button.icon className="w-4 h-4" />
                      {button.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
