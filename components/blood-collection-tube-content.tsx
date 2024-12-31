import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const product = {
id: 1,
name: "Blood Collection Tube",
image: "https://oji.beehive.web.id/website-asset/Product/Blood%20Collection%20System/BCT.png",
specifications: [
  "Volume: 2ml, 3ml, 4ml, 5ml, 6ml, 8ml",
  "Material: PET plastic / Glass",
  "Sterility: Sterile, non-pyrogenic",
  "Vacuum: Pre-set vacuum for precise draw volume",
  "Shelf Life: 24 months",
],
description: "Oneject Blood Collection Tubes are precision-engineered vacuum tubes designed for accurate and safe blood specimen collection. Available in various sizes and additives, these tubes ensure sample integrity and reliable test results.",
features: [
  "Color-coded caps for easy identification",
  "Pre-measured additives",
  "Clear tube walls for sample visualization",
  "Guaranteed vacuum integrity",
  "Non-breakable PET material option",
  "Standardized draw volumes",
  "Label area for sample identification",
  "Compatible with standard holders"
],
types: [
  {
    name: "Red Cap (Serum)",
    additive: "No additive / Clot activator",
    uses: "Chemistry, Serology, Immunology"
  },
  {
    name: "Purple Cap (EDTA)",
    additive: "K2EDTA / K3EDTA",
    uses: "Hematology"
  },
  {
    name: "Green Cap (Heparin)",
    additive: "Sodium/Lithium Heparin",
    uses: "Chemistry, Plasma determinations"
  },
  {
    name: "Grey Cap (Glucose)",
    additive: "Sodium Fluoride/Potassium Oxalate",
    uses: "Glucose determinations"
  },
  {
    name: "Blue Cap (Coagulation)",
    additive: "Sodium Citrate",
    uses: "Coagulation tests"
  }
],
standards: [
  "ISO 13485:2016 certified manufacturing",
  "CE marked",
  "FDA registered",
  "Compliant with CLSI guidelines",
  "Meets ISO 6710 requirements"
]
}

export function BloodCollectionTubeContent() {
return (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-[#4DA8CF] to-[#5B5856] py-6 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Blood Collection Tube
          </h1>
          <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
            High-quality vacuum tubes for precise and safe blood specimen collection.
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

            {/* Tube Types */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#3F8F81]">Available Types</h3>
              <div className="grid gap-4">
                {product.types.map((type, idx) => (
                  <div key={idx} className="rounded-lg border p-4">
                    <h4 className="font-semibold text-[#4DA8CF]">{type.name}</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      <span className="font-medium">Additive:</span> {type.additive}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Uses:</span> {type.uses}
                    </p>
                  </div>
                ))}
              </div>
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

