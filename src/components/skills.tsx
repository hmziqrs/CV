import { skills } from "@/data/skills";

export function Skills() {
  return (
    <div className="flex bg-zinc-100 dark:bg-zinc-900">
      <div className="container max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
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
                    className="flex items-center gap-3 px-4 py-3
                    bg-zinc-200 dark:bg-zinc-800
                    hover:bg-zinc-300 dark:hover:bg-zinc-700
                    rounded-full duration-300"
                  >
                    <skill.icon
                      size={18}
                      className="text-zinc-700 dark:text-zinc-300"
                    />
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
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
