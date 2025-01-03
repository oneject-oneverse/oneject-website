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
    title: "Halal Assurance System Status",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/1-Halal-Assurance-System-Status.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/1-Halal-Assurance-System-Status.pdf",
  },
  {
    id: 2,
    title: "ISO 13485:2016 – BSI MDSAP",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/2-ISO-13485-2016-BSI-MDSAP-01.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/2-ISO-13485-2016-BSI-MDSAP.pdf",
  },
  {
    id: 3,
    title: "ISO 13485:2016 – BSI",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/3-Certificate-ISO-13485-2016-BSI.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/3-Certificate-ISO-13485-2016-BSI.pdf",
  },
  {
    id: 4,
    title: "ISO 13485:2016 – TÜV NORD",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/4-ISO-13485-Tuv-Nord_page-0001-1.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/4-ISO-13485-Tuv-Nord.pdf",
  },
  {
    id: 5,
    title: "ISO 14001:2015 – BSI",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/5-Certificate-ISO-14001-scaled.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/5-ISO-14001-BSI.pdf",
  },
  {
    id: 6,
    title: "ISO 45001:2018 – BSI",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/6-Certificate-ISO-45001-scaled.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/6-ISO-45001-BSI.pdf",
  },
  {
    id: 7,
    title: "ISO 50001:2018 – BSI",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/7-Certificate-ISO-50001-scaled.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/7-ISO-50001-BSI.pdf",
  },
  {
    id: 8,
    title: "Certificate CE",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/8-Certificate-CE.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/8-Certificate-CE.pdf",
  },
  {
    id: 9,
    title: "GMP Certificate 21015",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/9-Certificate-CPAKB-20-December-2023-scaled.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/9-Sertifikat-CPAKB-Cikarang-21015-20-December-2023-PMA-1.pdf",
  },
  {
    id: 10,
    title: "GMP Certificate 26602",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/10-Certificate-CPAKB-26602-26-September-2024-scaled.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/10-Sertifikat-CPAKB-26602-Terbit-26-Sep-24.pdf",
  },
  {
    id: 11,
    title: "GMP Certificate 32502",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/11-Certificate-CPAKB-32502-26-september-2024-scaled.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/11-Sertifikat-CPAKB-32502-Terbit-26-Sep-24-1.pdf",
  },
  {
    id: 12,
    title: "Sertifikat Standar Sentul 32502",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/12-Sertifikat-Standar-Sentul-32502.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/12-Sertifikat-Standar-Sentul-32502.pdf",
  },
  {
    id: 13,
    title: "Sertifikat Standar Cikarang 32502",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/13-Sertifikat-Standar-Cikarang-32502.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/13-Sertifikat-Standar-Cikarang-32502.pdf",
  },
  {
    id: 14,
    title: "Sertifikat Standar Cikarang 26602",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/14-Sertifikat-Standar-Cikarang-26602-scaled.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/14-Sertifikat-Standar-Cikarang-26602.pdf",
  },
  {
    id: 15,
    title: "Sertifikat Standar Cikarang 21015",
    imageUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/Image/15-Sertifikat-Standar-Cikarang-21015.jpg",
    pdfUrl: "https://oji.beehive.web.id/website-asset/about/Certification/General/15-Sertifikat-Standar-Cikarang-21015.pdf",
  }
]

export function GeneralCertificationContent() {
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
              General Certification
            </h1>
            <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
              Our commitment to quality and excellence is validated through internationally recognized certifications.
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

