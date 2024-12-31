import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const product = {
id: 1,
name: "Safeject Hypodermic Needle",
image: "https://oneject.co.id/wp-content/uploads/2024/01/Safeject-Hypodermic-Needle.png",
features: [
  "Needle Size: 18G x 1 1/2″ (1.2 x 38mm)",
  "Needle Size: 19G x 1 1/2″ (1.1 x 38mm)",
  "Needle Size: 20G x 1 1/2″ (0.9 x 38mm)",
  "Needle Size: 21G x 1 1/2″ (0.8 x 38mm)",
  "Needle Size: 22G x 1 1/4″ (0.7 x 32mm)",
  "Needle Size: 23G x 1″ (0.6 x 25mm)",
  "Needle Size: 23G x 1 1/4″ (0.6 x 32mm)",
  "Needle Size: 25G x 5/8″ (0.5 x 16mm)",
  "Needle Size: 26G x 1/2″ (0.45 x 13mm)",
  "Needle Size: 27G x 1/2″ (0.4 x 13mm)",
],
description: "Safeject Hypodermic Needle features precision-engineered stainless steel construction with ultra-sharp, triple-beveled tips for smooth penetration. Each needle is sterile and individually packaged for single use, ensuring maximum safety and comfort during medical procedures.",
additionalFeatures: [
  "Triple-beveled needle tip for minimal insertion force",
  "Medical grade stainless steel construction",
  "Transparent needle hub for flashback visualization",
  "Color-coded hub for easy gauge identification",
  "EO sterilized and individually blister packed",
  "Latex-free materials",
]
}

export function SafejectHypodermicNeedleContent() {
return (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-[#4DA8CF] to-[#5B5856] py-6 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Safeject Hypodermic Needle
          </h1>
          <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
            Precision-engineered needles designed for optimal performance and patient comfort in medical procedures.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/50 opacity-50" />
    </section>

    {/* Product Display Section */}
    <section className="py-6">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-white p-8">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold text-[#4DA8CF]">
              {product.name}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
            
            {/* Available Sizes */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#3F8F81]">Available Sizes</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#6DC5EE]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#3F8F81]">Key Features</h3>
              <ul className="space-y-2">
                {product.additionalFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#6DC5EE]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Button */}
            <Button 
              variant="outline" 
              className="w-fit"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
)
}

