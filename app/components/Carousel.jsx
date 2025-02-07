import { useState } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({slides}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  
  return (
    <div className="overflow-hidden relative">
      <div 
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div key={index} className="w-full flex flex-col items-center shrink-0">
            <p className="mb-2 text-lg text-center text-gray-800">{s.caption}</p>
            <img src={s.image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
      {/* Nav Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-grey-800 hover:bg-white">
          <ChevronLeft size={30}/>
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-grey-800 hover:bg-white">
          <ChevronRight size={30}/>
        </button>
      </div>

      {/* Nav Dots */}
      <div className="relative pt-3 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <div
            key={i} // Always add a key when mapping
            className={`
              transition-all w-3 h-3 bg-gray-400 rounded-full
              ${curr === i ? "p-2 bg-gray-600" : "bg-opacity-50"}
            `}
          />
        ))}
        </div>
      </div>
    </div>
  )
}