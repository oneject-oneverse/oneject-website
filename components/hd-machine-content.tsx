import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const product = {
id: 1,
name: "HD Machine",
image: "https://oji.beehive.web.id/website-asset/Product/Blood%20Purification/Hemodialysis.png",
specifications: [
  "Treatment Modes: HD, HF, HDF, ISO UF",
  "Blood Flow Rate: 30-600 ml/min",
  "UF Rate: 0-4000 ml/h",
  "Treatment Time: 0-12 hours",
  "Screen: 15.6\" HD Color Touch Screen",
  "Battery Backup: Up to 30 minutes",
],
description: "The Oneject HD Machine is a state-of-the-art hemodialysis system designed for optimal patient care and ease of use. Featuring advanced technology and comprehensive safety systems, it delivers reliable and efficient dialysis treatments.",
features: [
  "Intuitive touch screen interface",
  "Real-time treatment monitoring",
  "Automatic self-test system",
  "Integrated blood pressure monitoring",
  "Multiple treatment modes",
  "Advanced ultrafiltration control",
  "Automatic priming and rinsing",
  "Emergency battery backup",
  "Comprehensive alarm system",
  "Data management and connectivity"
],
safetyFeatures: [
  "Air detection system",
  "Blood leak detector",
  "Temperature monitoring",
  "Pressure monitoring (arterial/venous)",
  "Flow monitoring and control",
  "Conductivity monitoring",
  "UF rate monitoring"
],
standards: [
  "CE certified",
  "ISO 13485:2016 certified",
  "IEC 60601-1 compliant",
  "IEC 60601-2-16 specific requirements",
  "Medical Device Directive 93/42/EEC"
]
}

export function HDMachineContent() {
return (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-[#4DA8CF] to-[#5B5856] py-6 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            HD Machine
          </h1>
          <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
            Advanced hemodialysis system with comprehensive safety features and intuitive operation.
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
              <h3 className="text-xl font-semibold text-[#3F8F81]">Technical Specifications</h3>
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

