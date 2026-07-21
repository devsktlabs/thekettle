import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PhotoMarquee from "@/components/PhotoMarquee";
import VibeGrid from "@/components/VibeGrid";
import CannabisDrinks from "@/components/CannabisDrinks";
import Events from "@/components/Events";
import Hours from "@/components/Hours";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PhotoMarquee />
      <VibeGrid />
      <CannabisDrinks />
      <Events />
      <Hours />
      <Footer />
    </main>
  );
}
