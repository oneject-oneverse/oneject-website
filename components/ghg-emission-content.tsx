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


export function GhgEmissionContent() {
  const [selectedEsg, setSelectedEsg] = useState<ESGItem | null>(null);

  const esgItems: ESGItem[] = [
    {
      title: "PT. Oneject Indonesia's shift to solar energy has reduced our GHG emissions by 925.9 tCO2eq annually",
      preview: "",
      content: "PT. Oneject Indonesia's shift to solar energy has reduced our GHG emissions by 925.9 tCO2eq annually, which is a 12% decrease from our base year. This impact is equivalent to planting 42,086 trees, highlighting our commitment to sustainability and a cleaner planet. 🌍💚\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation"
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/GHG_Emission_Inventory/Post%201/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/GHG_Emission_Inventory/Post%201/2.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/GHG_Emission_Inventory/Post%201/3.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/GHG_Emission_Inventory/Post%201/4.jpeg"
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
            <div className="relative w-full h-48"> {/* Maintain square aspect ratio */}
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
                onClick={() => handleReadMore(item)}
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

