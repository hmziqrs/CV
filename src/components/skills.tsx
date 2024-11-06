import { skills } from "@/data/skills";

export function Skills() {
  return (
    <div className="flex bg-zinc-100 dark:bg-zinc-900">
      <div className="container max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">
          Skills
        </h2>

        <div className="flex flex-col gap-10">
          {skills.map((section) => (
            <div key={section.key}>
              {/* Hidden section label that can help with semantic HTML */}
              <span className="sr-only">{section.key}</span>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill) => (
                  <div
                    key={skill.label}
                    // sm:px-4 px-4 py-3
                    className="flex items-center sm:gap-3 gap-2 cursor-pointer
                    py-2 px-4
                    bg-zinc-200 dark:bg-zinc-800
                    hover:bg-zinc-300 dark:hover:bg-zinc-700
                    rounded-full duration-300"
                  >
                    <skill.icon className="text-zinc-700 dark:text-zinc-300 sm:w-4 w-4" />
                    <p className="text-xs sm:text-sm font-medium font-mono text-zinc-800 dark:text-zinc-200">
                      {skill.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
