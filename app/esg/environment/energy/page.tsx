import { EnergyDecarbonizationContent } from "@/components/energy-decarbonization-content";

export default function EnergyDecarbonizationPage() {
  return (
    <main className="flex-1">
      <section className="relative bg-gradient-to-r from-[#4DA8CF] to-[#5B5856] py-12 text-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Energy Decarbonization
            </h1>
          </div>
        </div>
        <div
          className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/50 opacity-50"
        />
      </section>
      <EnergyDecarbonizationContent />
    </main>
  );
}

