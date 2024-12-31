import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const product = {
id: 1,
name: "Blood Bag",
image: "https://oji.beehive.web.id/website-asset/Product/Blood%20Collection%20System/Blood-Bag.png",
specifications: [
  "Capacity: 250ml, 350ml, 450ml",
  "Material: Medical grade PVC",
  "Anticoagulant: CPDA-1 / CPD / CP2D",
  "Needle: 16G ultra-thin wall needle",
  "Tubing: Flexible, kink-resistant",
  "Shelf Life: 3 years",
],
description: "Oneject Blood Bags are designed for safe and efficient blood collection, storage, and transfusion. Made from high-quality medical grade PVC with optimal gas permeability, these bags ensure maximum red cell viability throughout the storage period.",
features: [
  "Break-away cannula for easy separation",
  "Multiple sample ports",
  "Clear graduation marks",
  "Radio frequency sealed ports",
  "Tamper-evident external wrap",
  "Flexible and durable construction",
  "Optimal gas permeability",
  "Color-coded differentiation",
  "Integrated needle protection",
  "Satellite bag options"
],
types: [
  {
    name: "Single Blood Bag",
    description: "For whole blood collection and storage",
    capacity: "250ml, 350ml, 450ml"
  },
  {
    name: "Double Blood Bag",
    description: "For preparation of PRP and RBC",
    capacity: "350ml, 450ml"
  },
  {
    name: "Triple Blood Bag",
    description: "For preparation of PRP, RBC, and Platelet concentrate",
    capacity: "450ml"
  },
  {
    name: "Quadruple Blood Bag",
    description: "For preparation of multiple blood components",
    capacity: "450ml"
  }
],
standards: [
  "ISO 13485:2016 certified",
  "CE marked",
  "FDA registered",
  "GMP certified facility",
  "ISO 3826-1:2013 compliant"
]
}

export function BloodBagContent() {
return (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-[#4DA8CF] to-[#5B5856] py-6 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Blood Bag
          </h1>
          <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
            Advanced blood collection and storage systems designed for optimal blood component preservation.
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

            {/* Blood Bag Types */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#3F8F81]">Available Types</h3>
              <div className="grid gap-4">
                {product.types.map((type, idx) => (
                  <div key={idx} className="rounded-lg border p-4">
                    <h4 className="font-semibold text-[#4DA8CF]">{type.name}</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      <span className="font-medium">Use:</span> {type.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Available Capacity:</span> {type.capacity}
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

