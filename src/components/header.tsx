import { header } from "@/data/header";

export function Header() {
  return (
    <div className="flex bg-red-700">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6 py-10 gap-6">
        <div>
          <h1 className="text-3xl font">{header.name}</h1>
          <h3 className="font-medium font-mono">{header.title}</h3>
          <div className="h-4" />
          <div className="flex flex-col gap-y-4">
            {header.intro.map((intro, index) => (
              <p key={index} className="">
                {intro}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex md:flex-col sm:grid sm:grid-cols-2 xs:flex xs:flex-col gap-3">
            {header.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                className="flex items-center gap-3 px-6 py-3
                bg-red-800/65 hover:bg-red-900/60
                text-white rounded-md duration-300"
              >
                <link.icon size={15} />
                <p className="font-medium text-sm">{link.label}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
