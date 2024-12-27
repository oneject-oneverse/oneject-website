interface TimelineItemProps {
  year: string
  description: string
  isLeft: boolean
}

export function TimelineItem({ year, description, isLeft }: TimelineItemProps) {
  return (
    <div className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} md:px-8`}>
      {/* Content Container */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="relative space-y-4 rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
          {/* Year */}
          <div className="flex items-center space-x-2">
            <div className={`h-1 w-12 bg-[#4DA8CF] ${isLeft ? 'md:ml-auto' : ''}`} />
            <span className="text-2xl font-bold text-[#4DA8CF]">{year}</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Center Dot (desktop) */}
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="h-3 w-3 rounded-full border-2 border-[#4DA8CF] bg-white" />
      </div>

      {/* Center Dot (mobile) */}
      <div className="absolute right-0 top-1/2 md:hidden">
        <div className="h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#4DA8CF] bg-white" />
      </div>
    </div>
  )
}

