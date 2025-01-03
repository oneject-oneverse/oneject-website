import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://oji.beehive.web.id/website-asset/Video/factory_tour_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container flex min-h-[80vh] flex-col items-center justify-center space-y-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-white">
            ONEJECT
            <br />
            ONEGOAL
          </h1>
          <p className="max-w-[600px] text-gray-300 md:text-xl">
            Hold tight who close to you and ensure your healthiness and safety with our Oneject Syringe
          </p>
          <Link href="https://oji.beehive.web.id/website-asset/Video/factory_tour_video.mp4" target="_blank" rel="noopener noreferrer">
            <Button className="inline-flex items-center space-x-2 text-white" size="lg"> {/* Added text-white class */}
              <Play className="h-5 w-5" />
              <span>Watch Full video</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

