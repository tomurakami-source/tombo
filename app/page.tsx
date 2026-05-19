import Hero from "@/components/Hero";
import LiveInfo from "@/components/LiveInfo";
import YouTubeSection from "@/components/YouTube";
import Discography from "@/components/Discography";
import LyricsQuote from "@/components/LyricsQuote";
import TwitterTimeline from "@/components/TwitterTimeline";
import Bio from "@/components/Bio";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";
import LoadingScreen from "@/components/LoadingScreen";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        <Hero />
        <FadeIn>
          <LiveInfo />
        </FadeIn>
        <FadeIn>
          <YouTubeSection />
        </FadeIn>
        <FadeIn>
          <Discography />
        </FadeIn>
        <LyricsQuote />
        <FadeIn>
          <TwitterTimeline />
        </FadeIn>
        <FadeIn>
          <Bio />
        </FadeIn>
        <FadeIn>
          <FAQ />
        </FadeIn>
        <FadeIn>
          <Footer />
        </FadeIn>
        <StickyNav />
      </main>
    </>
  );
}
