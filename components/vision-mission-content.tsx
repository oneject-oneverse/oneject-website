import { Target, Crosshair } from 'lucide-react'

export function VisionMissionContent() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Company Description */}
        <section className="mb-16">
          <h1 className="relative mb-8 inline-block text-4xl font-bold text-[#4DA8CF]">
            About Oneject
            <div className="absolute -top-4 left-0 h-1 w-16 bg-[#6DC5EE]" />
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              PT. Oneject Indonesia is a manufacturer who produces Medical Devices, especially Auto Disable Syringes.
            </p>
            
            <p>
              As a pioneer of AD syringes manufacturer in Indonesia in providing safe injections, PT. Oneject Indonesia has contributed to reduce the number of standard syringes, which are produced and distributed in Indonesia. Our product is the market leader of AD syringes in Indonesia with 90% market share.
            </p>

            <p>
              PT. Oneject Indonesia is growing continuously, not only in Indonesia. We have been exported our AD syringes to Asian countries and ready to enter the European market. We ensure the quality of the products at each stage of the production process starting with the selection of medical grade raw materials, the complete manufacturing process to the point of finished product. The products are monitored and controlled by our QC Department as per requirement of ISO 9001:2015 and ISO 13485:2016, in cooperation with our R&D Department, in order to continuously monitor the improvement, innovation and thereby increase our product quality.
            </p>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <div className="rounded-lg bg-white p-8 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6DC5EE]/10">
                <Target className="h-6 w-6 text-[#4DA8CF]" />
              </div>
              <h2 className="text-2xl font-bold text-[#4DA8CF]">Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To lead as an industry pioneer in crafting premier medical equipment, emphasizing prevention and safety for both local and global markets.
            </p>
          </div>

          {/* Mission Card */}
          <div className="rounded-lg bg-white p-8 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6DC5EE]/10">
                <Crosshair className="h-6 w-6 text-[#4DA8CF]" />
              </div>
              <h2 className="text-2xl font-bold text-[#4DA8CF]">Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To manufacture superior medical devices incorporating cutting-edge technology, dedicated to upholding and advocating for safe healthcare practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

