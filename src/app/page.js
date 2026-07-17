import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SportsStrip from "@/components/SportsStrip";
import Features from "@/components/Features";
import Sports from "@/components/Sports";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SportsStrip />
        <Features />
        <Sports />
        <Community />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
