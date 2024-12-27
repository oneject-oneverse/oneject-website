import { Boxes, Factory, Award, Users } from 'lucide-react'

export function FacilityStats() {
  const stats = [
    {
      icon: Factory,
      value: "30,000m²",
      label: "Total Production Area",
    },
    {
      icon: Boxes,
      value: "600M+",
      label: "Annual Production Capacity",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Skilled Employees",
    },
    {
      icon: Award,
      value: "100%",
      label: "Quality Assurance",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 text-center shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6DC5EE]/10">
                <stat.icon className="h-8 w-8 text-[#6DC5EE]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#3F8F81]">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

