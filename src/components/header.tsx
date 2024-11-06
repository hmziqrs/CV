import { header } from "@/data/header";

export function Header() {
  return (
    <div className="flex bg-zinc-100 dark:bg-zinc-900">
      {" "}
      {/* Changed from bg-red-700 */}
      <div className="container max-w-6xl mx-auto flex flex-col px-6 py-10 gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-100">
            {header.name}
          </h1>
          <h3 className="font-semibold font-mono text-zinc-700 dark:text-zinc-300">
            {header.title}
          </h3>
          <div className="h-4" />
          <div className="flex flex-col gap-y-4">
            {header.intro.map((intro, index) => (
              <p key={index} className="text-zinc-600 dark:text-zinc-400">
                {intro}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          {header.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              className="flex items-center gap-3 px-6 py-3
                bg-zinc-200 dark:bg-zinc-800
                hover:bg-zinc-300 dark:hover:bg-zinc-700
                text-zinc-800 dark:text-zinc-200
                rounded-md transition-colors duration-300"
              /* Changed from bg-red-800/65 hover:bg-red-900/60 text-white */
            >
              <link.icon size={15} />
              <p className="font-medium text-sm">{link.label}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
