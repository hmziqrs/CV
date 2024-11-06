import { Header } from "@/components/header";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="h-full ">
      {/* <StarField /> */}
      <div className="h-16" />
      <Header />
      <div className="h-16" />
      <Skills />
      <div className="h-[3000px]" />
    </main>
  );
}
