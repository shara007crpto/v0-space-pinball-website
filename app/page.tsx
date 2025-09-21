import { HeroSection } from "@/components/hero-section"
import { GameSection } from "@/components/game-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GameSection />
      <TokenomicsSection />
      <Footer />
    </main>
  )
}
