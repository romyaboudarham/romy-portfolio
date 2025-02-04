import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
      {/* TODO: left off at 28:04 */}
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-4">
        <HeroSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
