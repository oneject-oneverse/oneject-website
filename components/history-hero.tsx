export function HistoryHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#4DA8CF] to-[#5B5856] py-12 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Our Journey of Innovation
          </h1>
          <p className="mt-6 max-w-[600px] text-gray-300 md:text-xl">
            Since 2003, Oneject has been at the forefront of medical device innovation, 
            consistently delivering solutions that enhance healthcare safety and efficiency.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/50 opacity-50"
      />
    </section>
  )
}

