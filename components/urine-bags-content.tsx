import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const product = {
  id: 1,
  name: "Urine Bags",
  image: "https://oji.beehive.web.id/website-asset/Product/Urology%20Care/Urine-Bag-2.png",
  specifications: [
    "Capacity: 2000ml",
    "Material: Medical grade PVC",
    "Tube Length: 90cm or 110cm",
    "Graduation: Every 100ml",
    "Valve: Anti-reflux valve",
    "Sterilization: EO sterilized"
  ],
  description: "Oneject Urine Bags are designed for safe and comfortable urine collection during patient care. Featuring high-quality medical grade PVC material and advanced anti-reflux valve system, these bags ensure reliable performance and minimize the risk of infection.",
  features: [
    "Universal connector",
    "Kink-resistant tubing",
    "Clear graduation marks",
    "Strong hanging system",
    "Secure drainage port",
    "Cross valve for sampling",
    "Non-return valve",
    "Reinforced eyelets"
  ],
  safetyFeatures: [
    "Anti-reflux mechanism",
    "Needle-free sampling port",
    "Secure drainage tap",
    "Sterile fluid pathway",
    "Double-sealed edges",
    "Leak-proof design"
  ],
  standards: [
    "ISO 13485:2016 certified",
    "CE marked",
    "FDA registered",
    "ISO 8669-2 compliant",
    "Meets ASTM standards"
  ]
}

export function UrineBagsContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 text-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Urine Bags
            </h1>
            <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
              High-quality urine collection systems with advanced safety features for optimal patient care.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/50 opacity-50" />
      </section>

      {/* Product Display Section */}
      <section className="py-16">
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

