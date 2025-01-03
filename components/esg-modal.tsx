import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ESGItem {
  title: string;
  date?: string;
  content: string;
  images: string[];
}

interface ESGModalProps {
  esg: ESGItem;
  onClose: () => void;
}

export function ESGModal({ esg, onClose }: ESGModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === esg.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? esg.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#4DA8CF]">{esg.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="relative w-full h-[600px] mb-4">
            {esg.images.length > 0 ? ( // Conditional rendering to handle cases where there are no images
              <>
                <Image
                  src={esg.images[currentImageIndex]}
                  alt={esg.title}
                  fill
                  className="rounded-lg object-contain"
                />
                {esg.images.length > 1 && (
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
              </>
            ) : (
              <p className="text-gray-500">No images available.</p>
            )}
          </div>
          <p className="text-gray-700 whitespace-pre-line">{esg.content}</p>
        </div>
      </div>
    </div>
  );
}

