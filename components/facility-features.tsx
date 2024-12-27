export function FacilityFeatures() {
  const features = [
    {
      title: "Sterile Manufacturing",
      description: "Our facilities are equipped with cleanrooms built according to ISO 14644-1 standards, ensuring sterile production environments for our medical devices.",
    },
    {
      title: "Advanced Technology",
      description: "We utilize state-of-the-art automated manufacturing systems and advanced quality control equipment to maintain consistent product quality.",
    },
    {
      title: "Quality Control",
      description: "Every production batch undergoes rigorous quality control processes, including visual inspection, dimensional verification, and functional testing.",
    },
    {
      title: "Research & Development",
      description: "Our R&D center constantly innovates and improves our products, ensuring we stay at the forefront of medical device technology.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#3F8F81] sm:text-4xl">
            World-Class Manufacturing Capabilities
          </h2>
          <p className="mt-4 text-gray-600">
            Our manufacturing facilities are designed to meet the highest standards of quality and efficiency
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 shadow-lg transition-transform hover:-translate-y-1"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#3F8F81]">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

