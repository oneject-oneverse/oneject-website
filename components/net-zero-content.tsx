"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ESGModal } from './esg-modal';

interface ESGItem {
  title: string;
  date?: string;
  preview: string;
  content: string;
  images: string[];
}


export function NetZeroContent() {
  const [selectedEsg, setSelectedEsg] = useState<ESGItem | null>(null);

  const esgItems: ESGItem[] = [
    {
      title: "At PT. Oneject Indonesia, we're on a mission to achieve net zero emissions",
      preview: "",
      content: "Our energy efficiency program, launched in August 2023, has reduced our scope 2 GHG emissions from 7,799 tCO2eq to 7,025 tCO2eq—saving 775 tCO2eq in 2023 alone. This is a key step in our climate action journey towards a more sustainable future. ⚡💚\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%201/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%201/2.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%201/3.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%201/4.jpeg"
      ],
    },
    {
      title: "Embracing the Circular Economy At PT. Oneject Indonesia",
      preview: "",
      content: "We're committed to reducing waste and maximizing resources through circular economy practices. By recycling and reusing materials, we're making our medical device production more sustainable and supporting a healthier planet. Swipe to see how we're taking action!\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%202/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%202/2.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%202/3.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%202/4.jpeg"
      ],
    },
    {
      title: "PT. Oneject Indonesia is leading the green revolution in the medical device industry with a strong commitment to sustainability.",
      preview: "",
      content: "Through the application of renewable energy, efficient use of materials, and environmentally friendly production processes, we strive to become the greenest medical device manufacturing company in Indonesia. Together, we create a better and more sustainable future.\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%203/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%203/2.jpeg"
      ],
    },
    {
      title: "PT. Oneject Indonesia is committed to producing medical devices with sustainable practices",
      preview: "",
      content: "PT. Oneject Indonesia is committed to producing medical devices with sustainable practices that are environmentally friendly, reduce environmental impact, and support global health.\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%204/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Net_Zero_Emission/Post%204/2.jpeg"
      ],
    }
  ];

  const handleReadMore = (esg: ESGItem) => {
    setSelectedEsg(esg);
  };

  const handleCloseModal = () => {
    setSelectedEsg(null);
  };

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {esgItems.map((item, index) => (
          <motion.div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer"
            onClick={() => handleReadMore(item)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-[#4DA8CF] mb-2">{item.title}</h2>
              {item.date && <p className="text-gray-600 text-sm mb-2">{item.date}</p>}
              <p className="text-gray-700 mb-4 flex-grow">{item.preview}</p>
              <button
                className="bg-white text-[#4DA8CF] font-medium py-2 px-4 rounded border border-[#4DA8CF] hover:bg-gradient-to-r hover:from-[#4DA8CF] hover:to-[#5B5856] hover:text-white transition-colors duration-300 self-start"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedEsg && (
        <ESGModal esg={selectedEsg} onClose={handleCloseModal} />
      )}
    </div>
  );
}

