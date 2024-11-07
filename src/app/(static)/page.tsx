import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
export default function Home() {
  return (
    <main className="h-full" role="main" aria-label="Portfolio Content">
      <Header />
      <section className="h-16 print:h-12" aria-hidden="true" />
      <section
        id="skills"
        aria-label="Skills Section"
        className="skills-section"
      >
        <Skills />
      </section>
      <section className="h-16 print:h-12" aria-hidden="true" />
      <section
        id="projects"
        aria-label="Projects Section"
        className="projects-section"
      >
        <Projects />
      </section>
      <section
        className="h-16 print:h-0"
        style={{ pageBreakAfter: "always" }}
        aria-hidden="true"
      />
      <section
        id="experience"
        aria-label="Experience Section"
        className="experience-section"
      >
        <Experience />
      </section>
      <section className="h-16 print:hidden" aria-hidden="true" />
      <Footer />
    </main>
  );
}
