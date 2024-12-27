import Image from "next/image"
import { EBeamContactForm } from "@/components/e-beam-contact-form"

export function EBeamSterilizationContent() {
  const images = [
    {
      src: "https://oji.beehive.web.id/website-asset/ebeam/E-Beam-sterilization-1.jpg",
      alt: "E-Beam Sterilization"
    },
    {
      src: "https://oji.beehive.web.id/website-asset/ebeam/why-use-ebeam.jpg",
      alt: "Why Use E-Beam"
    },
    {
      src: "https://oji.beehive.web.id/website-asset/ebeam/our-process-1.jpg",
      alt: "Our Process"
    },
    {
      src: "https://oji.beehive.web.id/website-asset/ebeam/benefits.jpg",
      alt: "Benefits of E-Beam Sterilization"
    }
  ]

  return (
    <div className="flex flex-col">
      {images.map((image, index) => (
        <div key={index}>
          <div className={`relative w-full ${
            index === 0 ? 'max-h-[90vh] aspect-[16/9]' :
            index === 1 ? 'max-h-[80vh] aspect-[4/3]' :
            index === 2 ? 'max-h-[190vh] aspect-[4/3]' :
            'max-h-[190vh] aspect-[16/10]'
          }`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        </div>
      ))}
      <div className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#4DA8CF]">Contact Us for E-Beam Sterilization</h2>
          <EBeamContactForm />
        </div>
      </div>
    </div>
  )
}

