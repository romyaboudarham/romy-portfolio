import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
      {/* TODO: left off at 28:04 */}
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <HeroSection />
        {/* Dividing Line */}
        <div className="mb-6 lg:my-6 mx-3 lg:mx-[170px]">
          <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
        </div>
        <ProjectsSection />
      </div>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
          <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
        </div>

      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center text-center py-3 px-6 md:px-20">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-4xl lg:text-5xl"
              style={{ fontFamily: "Londrina Outline, cursive" }}>
                Let’s Connect!
          </h2>
          <p className="mt-6 text-md opacity-80">Interested in my work? Let’s chat.</p>
          <button className="mt-8 px-6 py-3  text-lg transparent hover:text-white border border-[#cd5cc4]">
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
}
