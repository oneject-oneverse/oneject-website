import { HeroSection } from "@/components/hero-section"
import { LoadingAnimation } from "@/components/loading-animation"

export default function Home() {
  return (
    <main className="flex-1">
      <LoadingAnimation />
      <HeroSection />
    </main>
  )
}

