"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Certificate {
  id: number
  title: string
  imageUrl: string
  pdfUrl: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Halal Certification",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/1-Halal-Certification-scaled.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/1-Halal-Certification.pdf",
  },
  {
    id: 2,
    title: "Certificate PQS-WHO : E008/030",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/2-01_Certificate-PQS-WHO-E008-030-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/2-Certificate-PQS-WHO-E008030.pdf",
  },
  {
    id: 3,
    title: "Certificate PQS-WHO : E008/052",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/3-02_Certificate-PQS-WHO-E008-052-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/3-Certificate-PQS-WHO-E008052.pdf",
  },
  {
    id: 4,
    title: "Certificate PQS-WHO : E008/065",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/4-03_Certificate-PQS-WHO-E008-065.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/4-Certificate-PQS-WHO-E008065.pdf",
  },
  {
    id: 5,
    title: "Certificate PQS-WHO : E008/019",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/5-04_Certificate-PQS-WHO-E008-019-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/5-Certificate-PQS-WHO-E008019.pdf",
  },
  {
    id: 6,
    title: "Certificate PQS-WHO : E008/053",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/6-05_Certificate-PQS-WHO-E008-053-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/6-Certificate-PQS-WHO-E008053.pdf",
  },
  {
    id: 7,
    title: "Certificate PQS-WHO : E013/023",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/7-06_Certificate-PQS-WHO-E013-023-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/7-Certificate-PQS-WHO-E013023.pdf",
  },
  {
    id: 8,
    title: "Certificate PQS-WHO : E013/092",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/8-07_Certificate-PQS-WHO-E013-092-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/8-Certificate-PQS-WHO-E013092.pdf",
  },
  {
    id: 9,
    title: "Certificate PQS-WHO : E013/108",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/9-08_Certificate-PQS-WHO-E013-108-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/9-Certificate-PQS-WHO-E013108.pdf",
  },
  {
    id: 10,
    title: "Certificate PQS-WHO : E013/019",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/10-09_Certificate-PQS-WHO-E013-019-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/10-Certificate-PQS-WHO-E013019.pdf",
  },
  {
    id: 11,
    title: "Certificate PQS-WHO : E013/093",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/11-10_Certificate-PQS-WHO-E013-093-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/11-Certificate-PQS-WHO-E013093.pdf",
  },
  {
    id: 12,
    title: "Certificate PQS-WHO : E013/024",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/12-11_Certificate-PQS-WHO-E013-024.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/12-Certificate-PQS-WHO-E013024.pdf",
  },
  {
    id: 13,
    title: "Certificate PQS-WHO : E013/109",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/13-12_Certificate-PQS-WHO-E013-109-.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/13-Certificate-PQS-WHO-E013109.pdf",
  },
  {
    id: 14,
    title: "TKDN Certificate",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/Image/14-PC-13.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/product/14-tkdn-2019.pdf",
  }
]

export function ProductCertificationContent() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleCertificateClick = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#4DA8CF] to-[#5B5856] py-6 text-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Product Certification
            </h1>
            <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
              Our products meet the highest standards of quality and safety, certified by leading international organizations.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/50 opacity-50" />
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                className="group relative rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg cursor-pointer"
                onHoverStart={() => setHoveredId(cert.id)}
                onHoverEnd={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCertificateClick(cert.pdfUrl)}
              >
                {/* Certificate Preview */}
                <div className="block">
                  <div className="relative aspect-[1/1.414] w-full overflow-hidden rounded-lg bg-gray-50">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Certificate Title */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-[#4DA8CF] group-hover:text-[#3F8F81]">
                    {cert.title}
                  </h3>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-black/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === cert.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

