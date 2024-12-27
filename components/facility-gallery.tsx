import Image from 'next/image'

export function FacilityGallery() {
  const images = [
    {
      src: "https://oneject.co.id/wp-content/uploads/2024/01/manufacture-1.jpg",
      alt: "Manufacturing Facility Clean Room",
    },
    {
      src: "https://oneject.co.id/wp-content/uploads/2024/01/manufacture-2.jpg",
      alt: "Quality Control Laboratory",
    },
    {
      src: "https://oneject.co.id/wp-content/uploads/2024/01/manufacture-3.jpg",
      alt: "Automated Production Line",
    },
    {
      src: "https://oneject.co.id/wp-content/uploads/2024/01/manufacture-4.jpg",
      alt: "Research and Development Center",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#3F8F81] sm:text-4xl">
            Our Facilities
          </h2>
          <p className="mt-4 text-gray-600">
            Take a look at our state-of-the-art manufacturing facilities and processes
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {images.map((image, index) => (
            <div key={index} className="group relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

