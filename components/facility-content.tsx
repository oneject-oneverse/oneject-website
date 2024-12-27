import Image from 'next/image'

export function FacilityContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://oneject.co.id/wp-content/uploads/2022/07/oneject-21-of-36.png"
          alt="Oneject Manufacturing Facility"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-screen-xl px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="relative mb-8 inline-block text-4xl font-bold text-[#4DA8CF]">
            Manufacturing
            <div className="absolute -top-4 left-0 h-1 w-16 bg-[#6DC5EE]" />
          </h1>

          <div className="space-y-6 text-gray-600">
            <p>
              PT. Oneject Indonesia is located in Bogor, the west of Jakarta which is about 50 km from the international seaport of Jakarta. The built-up area is over 5,000 square metres, including 4,000 square metres office space. PT. Oneject Indonesia has modern facilities and hi-tech machinery which is necessary to produce the best quality of medical devices.
            </p>

            <p>
              Our manufacture factory equip with Sandwich insulated Panel for wall, ceiling and partitions and as for specially clean room, we use Epoxy flooring. We also use flushing doors and windows with no sharp edge corner. We apply HVAC system for production class 100,000 injection molding area and production class 100,000 assembling and blister packing area. We have our own laboratory for quality testing.
            </p>

            <p>
              PT Oneject Indonesia's 2nd factory has officially begun manufacturing operations in Cikarang, with a total area of 15,000m2 and a production capacity of 1.2 billion syringes per year.
            </p>

            <p>
              Due to PT Itama Ranoraya Tbk. collaboration with Global Abbott Laboratories, the new factory will not only make medical devices, but will also become an Original Equipment Manufacturer (OEM) that produces local medical goods.
            </p>

            <p>
              The expansion serve as the center of manufacturing local medical devices that focuses on fulfilling the Domestic Component Level (TKDN) requirements of both domestic and global health sectors. With it, job opportunities will also increase to boost Indonesia's economic progress.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

