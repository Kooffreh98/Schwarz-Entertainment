"use client"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopSection from "./components/topsection/TopSection";
import SecondSection from "./components/topsection/SecondSection";
import AboutSection from "./components/AboutSection";
import PodcastSection from "./components/PodcastSection";
import VideosSection from "./components/VidoesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
     <>
        <Navbar />

        <TopSection />
        
        <SecondSection />

        <AboutSection />

        <PodcastSection />

        <VideosSection />

        <ContactSection />
        
        <Footer />
      </>
  );
}
