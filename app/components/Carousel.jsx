import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({ slides }) {
  const [curr, setCurr] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null) // State for modal
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  // Handle touch events
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current
    if (deltaX > 50) next() // Swipe left to go next
    if (deltaX < -50) prev() // Swipe right to go prev
  }

  return (
    <div 
      className="overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div key={index} className="w-full flex flex-col items-center shrink-0">
            <p className="mb-2 text-center text-md text-gray-600">{s.caption}</p>
            <img 
              src={s.image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-auto cursor-pointer"
              onClick={() => setSelectedImage(s.image)} 
            />
          </div>
        ))}
      </div>

      {/* Nav Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={30}/>
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={30}/>
        </button>
      </div>

      {/* Nav Dots */}
      <div className="relative lg:absolute lg:bottom-10 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`
              transition-all w-3 h-3 bg-gray-400 rounded-full
              ${curr === i ? "p-2 bg-gray-600" : "bg-opacity-50"}
            `}
          />
        ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Enlarged" className="max-w-[90%] max-h-[90%]" />
          <button 
            className="absolute top-5 right-5 text-white text-3xl" 
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
