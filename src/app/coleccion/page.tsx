import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
