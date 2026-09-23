import { Experience } from "@/components/Experience";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Marquee } from "@/components/Marquee";
import { MenuPreview } from "@/components/MenuPreview";
import { MobileCTA } from "@/components/MobileCTA";
import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { StayLonger } from "@/components/StayLonger";
import { Vibe } from "@/components/Vibe";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Vibe />
        <Experience />
        <MenuPreview />
        <StayLonger />
        <Gallery />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
