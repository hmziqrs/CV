import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="h-full ">
      <Header />
      <div className="h-16" />
      <Skills />
      <div className="h-16" />
      <Projects />
      <div className="h-16" />
      <Experience />
      <div className="h-16" />
      <Footer />
    </main>
  );
}
