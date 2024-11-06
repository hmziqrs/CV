import { experience } from "@/data/experience";

export function Experience() {
  return (
    <div className="flex bg-zinc-100 dark:bg-zinc-900">
      <div className="container max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">
          Experience
        </h2>

        <div className="flex flex-col gap-16">
          {experience.map((exp, index) => (
            <div key={index}>
              {/* Company Name */}
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {exp.company}
              </h3>

              {/* Positions & Dates */}
              <div className="mt-2 mb-4 space-y-1">
                {exp.journey.map((position, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {position.position}
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {position.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap sm:gap-3 gap-1.5 mb-6">
                {exp.tech.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center cursor-pointer
                    sm:gap-2 gap-1.5 text-xs
                    sm:px-3 sm:py-1 py-0.5 px-2.5

                    bg-zinc-200 dark:bg-zinc-800
                    text-zinc-800 dark:text-zinc-200
                    rounded-full font-medium font-mono
                    hover:bg-zinc-300 dark:hover:bg-zinc-700
                    transition-colors duration-200"
                  >
                    <tech.icon className="sm:w-3.5 w-3" />
                    {tech.label}
                  </div>
                ))}
              </div>

              {/* Responsibilities */}
              <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-700 dark:text-zinc-300 marker:text-zinc-500">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="pl-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
