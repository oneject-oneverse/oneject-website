import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const product = {
id: 1,
name: "AV Fistula Needle",
image: "https://oji.beehive.web.id/website-asset/Product/Blood%20Purification/AV-Fistula-Needle.png",
specifications: [
  "Gauge Sizes: 14G, 15G, 16G, 17G",
  "Tubing Length: 150mm, 300mm",
  "Material: Medical grade stainless steel",
  "Back-eye: Available in selected sizes",
  "Rotation Wing: Color-coded by gauge",
  "Sterilization: EO sterilized"
],
description: "Oneject AV Fistula Needles are precision-engineered for safe and comfortable vascular access during hemodialysis. Featuring ultra-sharp triple-bevel tips and ergonomic design, these needles ensure minimal insertion trauma and optimal blood flow.",
features: [
  "Triple-bevel tip design",
  "Transparent wings",
  "Color-coded sizes",
  "Smooth cannula surface",
  "Ergonomic grip",
  "Flexible tubing",
  "Secure connections",
  "Clear graduation marks"
],
safetyFeatures: [
  "Needle stick prevention",
  "Secure locking mechanism",
  "Clear visualization",
  "Sterile packaging",
  "Safety clip",
  "Back-flow prevention"
],
standards: [
  "ISO 13485:2016 certified",
  "CE marked",
  "FDA registered",
  "ISO 9626 compliant",
  "Meets AAMI standards"
]
}

export function AVFistulaNeedleContent() {
return (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-[#4DA8CF] to-[#5B5856] py-6 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            AV Fistula Needle
          </h1>
          <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
            Precision-engineered needles for safe and efficient vascular access in hemodialysis.
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
            
            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#3F8F81]">Specifications</h3>
              <ul className="space-y-2">
                {product.specifications.map((spec, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#6DC5EE]" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#3F8F81]">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#6DC5EE]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#3F8F81]">Safety Features</h3>
              <ul className="space-y-2">
                {product.safetyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#6DC5EE]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#3F8F81]">Standards & Certifications</h3>
              <ul className="space-y-2">
                {product.standards.map((standard, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#6DC5EE]" />
                    {standard}
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

