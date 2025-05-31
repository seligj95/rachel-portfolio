import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <FeaturedWork />
      <About />
    </main>
  );
}
