import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollEffects from "@/components/ScrollEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Story from "@/components/Story";
import CharacterGrid from "@/components/CharacterGrid";
import SeriesSection from "@/components/SeriesSection";
import ForestSection from "@/components/ForestSection";
import CommunitySection from "@/components/CommunitySection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <ScrollEffects />

      <main id="main-content">
        <Hero />
        <Stats />
        <Story />
        <CharacterGrid />
        <SeriesSection />
        <ForestSection />
        <CommunitySection />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
