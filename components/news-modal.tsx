import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface NewsItem {
  title: string;
  date: string;
  content: string;
  images: string[];
}

interface NewsModalProps {
  news: NewsItem;
  onClose: () => void;
}

export function NewsModal({ news, onClose }: NewsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === news.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? news.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#4DA8CF]">{news.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">{news.date}</p>
          <div className="relative w-full h-64 mb-4">
            <Image
              src={news.images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1} for ${news.title}`}
              fill
              className="rounded-lg object-contain"
            />
            {news.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage} 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
          <p className="text-gray-700 whitespace-pre-line">{news.content}</p>
        </div>
      </div>
    </div>
  );
}

