import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div>
      <Header />

      <main id="top">
        <Hero />
        <section
          id="about"
          className="min-h-screen mt-5 scroll-mt-20 mx-auto max-w-6xl px-6"
        >
          About
        </section>
        <section
          id="skills"
          className="min-h-screen scroll-mt-20 mx-auto max-w-6xl px-6"
        >
          Skills
        </section>
        <section
          id="work"
          className="min-h-screen scroll-mt-20 mx-auto max-w-6xl px-6"
        >
          Work
        </section>
        <section
          id="contact"
          className="min-h-screen scroll-mt-20 mx-auto max-w-6xl px-6"
        >
          Contact
        </section>

        <div className="flex justify-center items-center py-8">
          <ScrollToTopButton />
        </div>
      </main>
    </div>
  );
}
