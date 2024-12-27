import Image from 'next/image'

export function FacilityHero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              State-of-the-Art
              <br />
              Manufacturing Facility
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Our cutting-edge facilities in Sentul and Bekasi are equipped with advanced technology 
              and follow strict quality control measures to ensure the highest standards in medical device manufacturing.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://oneject.co.id/wp-content/uploads/2022/07/oneject-21-of-36.png"
              alt="Oneject Manufacturing Facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/50 opacity-50"
      />
    </section>
  )
}

