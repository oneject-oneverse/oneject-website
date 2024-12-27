import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const product = {
  id: 1,
  name: "Acid Concentrate",
  image: "https://oji.beehive.web.id/website-asset/Product/Blood%20Purification/Acid-Concentrate.png",
  specifications: [
    "Volume: 5L, 10L containers",
    "pH: 2.0 - 3.0",
    "Specific Gravity: 1.05 - 1.07",
    "Sterility: Sterile, non-pyrogenic",
    "Shelf Life: 24 months",
  ],
  description: "Oneject Acid Concentrate is a precisely formulated hemodialysis concentrate designed for optimal dialysis solution preparation. Our concentrate ensures consistent electrolyte composition and pH balance for safe and effective treatments.",
  features: [
    "Ready-to-use formulation",
    "Precise electrolyte composition",
    "Compatible with all HD machines",
    "Clear labeling and identification",
    "Tamper-evident packaging",
    "Extended shelf life",
    "Batch-specific certification",
    "Easy-pour container design"
  ],
  composition: [
    "Sodium Chloride",
    "Potassium Chloride",
    "Calcium Chloride",
    "Magnesium Chloride",
    "Acetic Acid",
    "Water for Injection"
  ],
  standards: [
    "ISO 13485:2016 certified manufacturing",
    "CE marked",
    "FDA registered",
    "GMP compliant",
    "Meets European Pharmacopoeia standards"
  ]
}

export function AcidConcentrateContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 text-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Acid Concentrate
            </h1>
            <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
              High-quality hemodialysis concentrate for precise dialysis solution preparation.
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

              {/* Composition */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#3F8F81]">Composition</h3>
                <ul className="space-y-2">
                  {product.composition.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#6DC5EE]" />
                      {item}
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

