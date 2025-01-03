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


export function EnergyDecarbonizationContent() {
  const [selectedEsg, setSelectedEsg] = useState<ESGItem | null>(null);

  const esgItems: ESGItem[] = [
    {
      title: "Celebrating Milestones in Energy Decarbonization at Oneject!",
      preview: "",
      content: "At Oneject, we're proud to announce significant strides in our journey towards energy decarbonization. With the installation of 1,085 photovoltaic panels in early 2024, generating 726,950 Wp, we've enhanced our capacity to produce clean, renewable energy. This equates to up to 2,908 kWh/day or 1.06 GWh/year, contributing 12% -15% towards our total energy consumption. Our commitment to sustainability drives us forward as we work towards aligning with the Paris Agreement and achieving net zero emissions. Join us in celebrating these achievements and our ongoing dedication to a sustainable future! 🌍✨\n\n\n#SDG's\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%201/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%201/2.jpeg", 
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%201/3.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%201/4.jpeg"
      ],
    },
    {
      title: "Powering a Sustainable Future At PT. Oneject Indonesia",
      preview: "",
      content: "We're embracing renewable energy to reduce our carbon footprint and lead the way in sustainable manufacturing. From harnessing solar power to driving impactful changes, our commitment to clean energy is helping create a healthier planet. Swipe to see how we're making a difference!\n\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%202/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%202/2.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%202/3.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%202/4.jpeg"
      ],
    },
    {
      title: "Auto Disable Syringe production with green energy",
      preview: "",
      content: "At PT. Oneject Indonesia, we power our Auto Disable Syringe production with green energy, ensuring that our medical devices are as sustainable as they are safe. Our commitment to clean energy reflects our dedication to both healthcare and the environment. 🌱💚\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%203/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%203/2.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%203/3.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%203/4.jpeg"
      ],
    },
    {
      title: "PT. Oneject Indonesia: Our Commitment to a Greener Future Through Energy Efficiency",
      preview: "",
      content: "At PT. Oneject Indonesia, we've made significant strides in reducing energy consumption. We've cut our fixed energy use by 41.4%, and the energy required to produce each syringe has decreased by 22.5%. These efforts reflect our unwavering commitment to sustainability and a greener future. Swipe to see how we're making a difference!\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%204/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%204/2.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%204/3.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%204/4.jpeg"
      ],
    },
    {
      title: "PT. Oneject Indonesia is proud to achieve ISO 50001:2018 certification",
      preview: "",
      content: "PT. Oneject Indonesia is proud to achieve ISO 50001:2018 certification and cut energy use per syringe from 0.0279 kWh to 0.0216 kWh. Our commitment to reducing energy and making a positive impact on the environment is stronger than ever. Join us on our green journey!\n\n#oneject\n#onejectindonesia\n#smartsyringe\n#autodisablesyringe\n#medical\n#health\n#healthcare\n#wellness\n#medicallife\n#medicalinformation\n#healthinformation",
      images: [
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%205/1.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%205/2.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%205/3.jpeg",
        "https://oji.beehive.web.id/website-asset/ESG/Energy_Decarbonization/Post%205/4.jpeg"
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

