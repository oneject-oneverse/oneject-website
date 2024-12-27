"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Auto Disable Syringe 0.05ml",
    image: "https://oji.beehive.web.id/website-asset/Product/Syringe/Auto%20Disable%20Syringe/Oneject-II-ADS-0.05-ml.png",
    features: [
      "Needle Size: 26G x 3/8″ (0.45 x 10mm)",
      "Needle Size: 27G x 3/8″ (0.4 x 10mm)",
      "Needle Size: 25G x 5/8″ (0.5 x 16mm)",
      "Needle Size: 23G x 1″ (0.6 x 25mm)",
    ],
    description: "Auto Disable Syringe 0.05ml features a unique locking mechanism that automatically disables the syringe after use, preventing reuse and ensuring safe disposal. Ideal for vaccinations and small volume injections.",
  },
  {
    id: 2,
    name: "Auto Disable Syringe 0.3ml",
    image: "https://oji.beehive.web.id/website-asset/Product/Syringe/Auto%20Disable%20Syringe/ADS-0.3ML.png",
    features: [
      "Needle Size: 26G x 3/8″ (0.45 x 10mm)",
      "Needle Size: 27G x 3/8″ (0.4 x 10mm)",
      "Needle Size: 25G x 5/8″ (0.5 x 16mm)",
      "Needle Size: 23G x 1″ (0.6 x 25mm)",
    ],
    description: "Auto Disable Syringe 0.3ml combines precision with safety, featuring clear markings and an auto-disable mechanism that activates after a single use.",
  },
  {
    id: 3,
    name: "Auto Disable Syringe 0.5ml",
    image: "https://oji.beehive.web.id/website-asset/Product/Syringe/Auto%20Disable%20Syringe/ADS-0.5ML.png",
    features: [
      "Needle Size: 23G x 1″ (0.6 x 25mm)",
      "Needle Size: 22G x 1 1/4″ (0.7 x 32mm)",
      "Needle Size: 21G x 1 1/2″ (0.8 x 38mm)",
    ],
    description: "Auto Disable Syringe 0.5ml offers reliable performance with built-in safety features. The transparent barrel allows for easy content visualization.",
  },
  {
    id: 4,
    name: "Auto Disable Syringe 1ml",
    image: "https://oji.beehive.web.id/website-asset/Product/Syringe/Auto%20Disable%20Syringe/ADS-1ML.png",
    features: [
      "Needle Size: 23G x 1″ (0.6 x 25mm)",
      "Needle Size: 22G x 1 1/4″ (0.7 x 32mm)",
      "Needle Size: 21G x 1 1/2″ (0.8 x 38mm)",
    ],
    description: "Auto Disable Syringe 1ml provides enhanced capacity while maintaining safety standards. Features smooth plunger action and clear graduation marks.",
  },
  {
    id: 5,
    name: "Auto Disable Syringe 2ml",
    image: "https://oji.beehive.web.id/website-asset/Product/Syringe/Auto%20Disable%20Syringe/Oneject-II-ADS-2-ml.png",
    features: [
      "Needle Size: 22G x 1 1/4″ (0.7 x 32mm)",
      "Needle Size: 21G x 1 1/2″ (0.8 x 38mm)",
      "Needle Size: 20G x 1 1/2″ (0.9 x 38mm)",
    ],
    description: "Auto Disable Syringe 2ml delivers larger volume capacity with integrated safety features. Perfect for procedures requiring precise medium-volume medication delivery.",
  },
  {
    id: 6,
    name: "Auto Disable Syringe 3ml",
    image: "https://oji.beehive.web.id/website-asset/Product/Syringe/Auto%20Disable%20Syringe/ADS-3ML.png",
    features: [
      "Needle Size: 21G x 1 1/2″ (0.8 x 38mm)",
      "Needle Size: 20G x 1 1/2″ (0.9 x 38mm)",
      "Needle Size: 18G x 1 1/2″ (1.2 x 38mm)",
    ],
    description: "Auto Disable Syringe 3ml combines large capacity with essential safety features. Suitable for procedures requiring larger volume medication administration.",
  },
  {
    id: 7,
    name: "Auto Disable Syringe 5ml",
    image: "https://oji.beehive.web.id/website-asset/Product/Syringe/Auto%20Disable%20Syringe/ADS-5ML.png",
    features: [
      "Needle Size: 20G x 1 1/2″ (0.9 x 38mm)",
      "Needle Size: 18G x 1 1/2″ (1.2 x 38mm)",
    ],
    description: "Auto Disable Syringe 5ml offers maximum capacity with reliable safety mechanisms. Ideal for procedures requiring large volume medication delivery.",
  },
]

export function AutoDisableSyringeContent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === products.length - 1 ? 0 : prevIndex + 1
      }
      return prevIndex === 0 ? products.length - 1 : prevIndex - 1
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 text-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Auto Disable Syringe
            </h1>
            <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
              Single-use syringes with automatic disabling mechanism for enhanced safety and prevention of reuse.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/50 opacity-50" />
      </section>

      {/* Product Display Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="relative h-[800px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-white p-8">
                    <Image
                      src={products[currentIndex].image}
                      alt={products[currentIndex].name}
                      fill
                      className="object-contain p-8"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl font-bold text-[#4DA8CF]">
                      {products[currentIndex].name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {products[currentIndex].description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#3F8F81]">Available Sizes</h3>
                      <ul className="space-y-2">
                        {products[currentIndex].features.map((feature, idx) => (
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
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-4">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Product Navigation Dots */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#4DA8CF] w-4" : "bg-gray-300"
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

