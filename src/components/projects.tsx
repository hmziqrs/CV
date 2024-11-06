import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Box, Globe } from "lucide-react";

const ProjectTypeBadge = ({ type }: { type: string }) => {
  if (type === "Product") {
    return (
      <span
        className="flex items-center gap-1.5 text-xs px-2 py-1
        bg-blue-100 dark:bg-blue-950
        text-blue-700 dark:text-blue-300
        rounded-full font-medium"
      >
        <Box className="w-3 h-3" />
        {type}
      </span>
    );
  }

  return (
    <span
      className="flex items-center gap-1.5 text-xs px-2 py-1
      bg-green-100 dark:bg-green-950
      text-green-700 dark:text-green-300
      rounded-full font-medium"
    >
      <Globe className="w-3 h-3" />
      {type}
    </span>
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
                  <ProjectTypeBadge type={project.type} />
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 font-medium">
                  {project.contribution}
                </p>

                <ul className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
                  {project.description.map((desc, index) => (
                    <li key={index} className="mb-1">
                      • {desc}
                    </li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2 mt-auto">
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
