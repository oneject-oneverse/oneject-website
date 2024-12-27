"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { TimelineItem } from "@/components/timeline-item"

const timelineData = [
  {
    year: "2003",
    description: "PT Oneject Indonesia was established and launched 1st Auto Disable Syringe"
  },
  {
    year: "2005",
    description: "Obtained ISO 13485 and WHO PQS Certifications"
  },
  {
    year: "2006",
    description: "Commenced first export project"
  },
  {
    year: "2007",
    description: "Oneject's syringe was certified to have the highest local content"
  },
  {
    year: "2010",
    description: "Chosen for Export Fast Track Program"
  },
  {
    year: "2013",
    description: "Launched 2nd Auto Disable Syringe"
  },
  {
    year: "2019",
    description: "Completed 2nd Factory in KITIC and patented 1st Smart Syringe"
  },
  {
    year: "2021",
    description: "Expanded into OEM Business"
  },
  {
    year: "2022",
    description: "Launched Brand Awareness program through social media channel and KOL"
  },
  {
    year: "2023",
    description: "Strategic Investment from Marubeni Growth Capital Asia"
  },
  {
    year: "2024",
    description: "Expanded into blood collection tubes, blood bags and electro medical devices"
  }
]

export function HistoryTimeline() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#4DA8CF]/20" />
          
          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <AnimatedTimelineItem
                key={item.year}
                year={item.year}
                description={item.description}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedTimelineItem({ year, description, isLeft, index }: {
  year: string
  description: string
  isLeft: boolean
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0,
          x: isLeft ? -50 : 50,
          y: 20
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }
        }
      }}
    >
      <TimelineItem
        year={year}
        description={description}
        isLeft={isLeft}
      />
    </motion.div>
  )
}

