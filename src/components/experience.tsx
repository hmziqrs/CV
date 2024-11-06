import { experience } from "@/data/experience";

const ExperienceBadge = ({ label }: { label: string }) => {
  return (
    <div
      className="flex items-center gap-1.5 text-xs px-2 py-0.5
      bg-zinc-200 dark:bg-zinc-800
      text-zinc-800 dark:text-zinc-200
      rounded-full font-medium font-mono
      hover:bg-zinc-300 dark:hover:bg-zinc-700
      transition-colors duration-200"
    >
      {label}
    </div>
  );
};

export function Experience() {
  return (
    <div className="flex bg-zinc-100 dark:bg-zinc-900">
      <div className="container max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">
          Experience
        </h2>

        <div className="flex flex-col gap-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Company and Timeline */}
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                  {exp.company}
                </h3>
                <div className="mt-2 space-y-1">
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
              </div>

              {/* Description and Tech Stack */}
              <div className="md:w-2/3">
                <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-700 dark:text-zinc-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <ExperienceBadge
                      key={idx}
                      label={typeof tech === "string" ? tech : tech.label}
                    />
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
