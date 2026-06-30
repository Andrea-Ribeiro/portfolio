import { Header, Hero, About, Skills, ScrollToTopButton } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />

      <main id="top">
        <Hero />
        <About />
        <Skills />

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
