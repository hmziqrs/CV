import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";

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
              hover:transform hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={`${project.thumbnail}`}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-zinc-300 dark:bg-zinc-700 rounded-full">
                    {project.type}
                  </span>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
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
