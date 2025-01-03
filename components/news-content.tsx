"use client"

import { useState } from 'react';
import Image from 'next/image'
import { NewsModal } from './news-modal';

interface NewsItem {
  title: string;
  date: string;
  preview: string;
  content: string;
  images: string[];
}

export function NewsContent() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const newsItems: NewsItem[] = [
    {
      title: "Arab Health 2024: Advancing Global Healthcare at Dubai World TradeCentre",
      date: "04 June 2024",
      preview: "Arab Health 2024: Advancing Global Healthcare at Dubai World TradeCentre",
      content: "Arab Health 2024, held at the prestigious Dubai World Trade Centre from January 29th to February 1st, served as a beacon of progress and collaboration in the realm of global healthcare. This pivotal gathering, renowned as one of the world’s largest medical conferences, brought together a diverse array of regional and international stakeholders, including influencers, policy drivers, and healthcare professionals, to explore and shape the future of healthcare.\n\nSupported by the UAE Ministry of Health and other key authorities, Arab Health 2024 provided a platform for showcasing the latest advancements in trade and innovation in the healthcare sector. Among the myriad of pavilions and exhibitions, the Indonesia Pavilion at Booth Z5D10 stood out, shining a spotlight on Indonesia’s significant contributions to medical technology and pharmaceuticals.\n\nThroughout Arab Health 2024, attendees were treated to a plethora of insightful discussions, engaging seminars, and cutting-edge product demonstrations. The conference placed a particular emphasis on digital health and emerging technologies, reflecting the rapidly evolving landscape of modern healthcare. From AI-driven diagnostics to telemedicine solutions, participants had the opportunity to witness firsthand the transformative potential of innovative technologies in revolutionizing patient care and healthcare delivery.\n\nMore than merely a forum for showcasing products and services, Arab Health 2024 served as a dynamic platform for collaboration and partnership building. The conference facilitated meaningful exchanges of ideas, fostered new connections, and sparked innovative collaborations among industry leaders, policymakers, and healthcare professionals. By bringing together stakeholders from across the globe, Arab Health 2024 played a pivotal role in driving the healthcare industry forward and addressing the most pressing challenges facing healthcare systems worldwide.\n\nAs the curtains closed on Arab Health 2024, the echoes of collaboration and innovation reverberated throughout the global healthcare community. The conference served as a testament to the power of collective action and shared vision in advancing the cause of healthcare excellence. As we look to the future, Arab Health continues to serve as a beacon of hope and inspiration, guiding us towards a healthier, more equitable world for all.",
      images: [
        "https://oji.beehive.web.id/website-asset/News/2024/06_June/04/arabhealth1-1280x634.png",
        "https://oji.beehive.web.id/website-asset/News/2024/06_June/04/arabhealth2.png"
      ],
    },
    {
      title: "Oneject Indonesia Recognized for Excellence in Research & Innovation at ASPAKI's RAKERNAS 2024",
      date: "28 May 2024",
      preview: "Oneject Indonesia Recognized for Excellence in Research & Innovation at ASPAKI's RAKERNAS 2024",
      content: "Oneject Indonesia proudly participated in the Rapat Kerja Nasional (RAKERNAS) organized by ASPAKI (Asosiasi Pengusaha Alat Kesehatan Indonesia) under the theme “Semangat Transformasi dan Kolaborasi menuju Indonesia Emas 2045.” This gathering, held to discuss and strategize towards Indonesia’s golden era in 2045, provided a platform for industry leaders to come together and chart the course for transformative change.\n\nAmidst this esteemed event, we were thrilled to receive the 2nd place award in the category of Research & Innovation. This recognition serves as a testament to our unwavering commitment to pushing the boundaries of innovation and driving positive change in the healthcare landscape of Indonesia.\n\nWe extend our heartfelt gratitude to ASPAKI for this acknowledgment and for providing a platform to showcase our dedication to excellence. This achievement would not have been possible without the dedication and hard work of our talented team at Oneject Indonesia. Their relentless pursuit of innovation and their passion for making a difference in people’s lives have been instrumental in this success.\n\nAs we celebrate this milestone, we are reminded of the importance of collaboration and collective effort in driving progress and innovation. We remain steadfast in our commitment to continue pushing the envelope, exploring new frontiers, and delivering cutting-edge solutions that contribute to the advancement of healthcare in Indonesia and beyond.\n\nOnwards and upwards, guided by the spirit of innovation and collaboration! this award serving as both recognition of our past achievements and inspiration for our future endeavors, we are excited to embark on the next phase of our journey toward excellence.\n\nHere’s to many more successes and milestones ahead as we continue to strive toward our shared vision of a healthier, brighter future for Indonesia.",
      images: [
        "https://oji.beehive.web.id/website-asset/News/2024/05_May/28/rakernas-2024.png"
      ],
    },
    {
      title: "Celebrating Design Excellence: Oneject Indonesia's Triumph at the Good Design Indonesia (GDI) Awards 2023 & Launch Event of 2024's GDI",
      date: "27 May 2024",
      preview: "Celebrating Design Excellence: Oneject Indonesia's Triumph at the Good Design Indonesia (GDI) Awards 2023 & Launch Event of 2024's GDI",
      content: "Oneject Indonesia proudly participated in the prestigious Awarding Ceremony of Good Design Indonesia (GDI) 2023 & GDI 2024's event launch held on Monday, February 26, 2024, at the Auditorium of the Ministry of Trade in Jakarta. This event marked a significant moment for the design community, celebrating innovation and excellence in Indonesian design.\n\nThe highlight of the evening was undoubtedly Oneject Indonesia's remarkable achievement – the recognition of our groundbreaking product, Oneject Smart Syringe, as one of the Best Designs for 2023. This coveted accolade, bestowed by The Ministry of Trade of the Republic of Indonesia, underscored the ingenuity and dedication of the Oneject Indonesia team.\n\nThe Awarding Ceremony of Good Design Indonesia (GDI) 2023 was a platform to showcase the pinnacle of design across diverse industries. Oneject Indonesia's win not only showcased our leadership in innovative design but also highlighted our commitment to improving lives through cutting-edge technology.\n\nReceiving this esteemed award reaffirmed Oneject Indonesia's position as a trailblazer in design excellence. It serves as a testament to our unwavering dedication to delivering products that not only meet but exceed expectations. With this win, Oneject Indonesia looks forward to embarking on a continued journey of innovation, driven by a mission to make a positive impact on society.\n\nAs we celebrate this milestone, we extend our gratitude to our dedicated team, whose tireless efforts and creative vision have brought us to this momentous achievement. We also express our appreciation to the Ministry of Trade for their recognition and support. Moving forward, Oneject Indonesia remains committed to pushing the boundaries of design innovation, guided by the principle that good design leads to good impact. We are excited about the future possibilities and are eager to continue our pursuit of excellence in design, contributing to a brighter, more innovative future for Indonesia and beyond.\n\nHere's to many more milestones and achievements in our collective pursuit of design excellence. Good design, good impact!",
      images: [
        "https://oji.beehive.web.id/website-asset/News/2024/05_May/27/oneject-good-design.png",
        "https://oji.beehive.web.id/website-asset/News/2024/05_May/27/oneject-celebrating.png"
      ],
    },
  ];

  const handleReadMore = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden flex flex-col">
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
              <p className="text-gray-600 text-sm mb-2">{item.date}</p>
              <p className="text-gray-700 mb-4 flex-grow">{item.preview}</p>
              <button
                className="bg-white text-[#4DA8CF] font-medium py-2 px-4 rounded border border-[#4DA8CF] hover:bg-gradient-to-r hover:from-[#4DA8CF] hover:to-[#5B5856] hover:text-white transition-colors duration-300 self-start"
                onClick={() => handleReadMore(item)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedNews && (
        <NewsModal news={selectedNews} onClose={handleCloseModal} />
      )}
    </div>
  );
}

