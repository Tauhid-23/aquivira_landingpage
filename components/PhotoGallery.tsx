"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface Photo {
  src: string
  alt: string
  caption: string
}

const photos: Photo[] = [
  {
    src: "/Photos/Blue Award receiving.JPG",
    alt: "Blue Business Idea Competition Award Ceremony",
    caption: "Receiving the Blue Business Idea Competition Award"
  },
  {
    src: "/Photos/Pitching snippets 1.jpg",
    alt: "Pitching presentation session 1",
    caption: "Presenting AquiVira at competition event"
  },
  {
    src: "/Photos/Pitching snippets 2.jpg",
    alt: "Pitching presentation session 2",
    caption: "Team presenting at pitch competition"
  },
  {
    src: "/Photos/Product showcasing stall.JPG",
    alt: "Product showcase at exhibition stall",
    caption: "Showcasing AquiVira at product exhibition"
  },
  {
    src: "/Photos/AquiVira in Community.jpg",
    alt: "AquiVira community engagement",
    caption: "Community engagement and product demonstration"
  },
  {
    src: "/Photos/SwissContact Country Director.JPG",
    alt: "Meeting with SwissContact Country Director",
    caption: "Discussion with SwissContact Country Director"
  },
  {
    src: "/Photos/With DEIED PD.JPG",
    alt: "With DEIED Program Director",
    caption: "Meeting with DEIED Program Director"
  },
  {
    src: "/Photos/DEIED PD.JPG",
    alt: "DEIED Program Director session",
    caption: "DEIED Program Director official session"
  },
  {
    src: "/Photos/DSC09742.jpg",
    alt: "Team working session",
    caption: "Team collaboration and development session"
  },
  {
    src: "/Photos/DSC09789.jpg",
    alt: "Product testing and development",
    caption: "Product testing and refinement process"
  },
  {
    src: "/Photos/IMG20250927172423.jpg",
    alt: "AquiVira product display",
    caption: "AquiVira clay water purifier display"
  },
  {
    src: "/Photos/IMG_4768.JPG",
    alt: "Team achievement celebration",
    caption: "Celebrating milestones and achievements"
  },
  {
    src: "/Photos/MTA07523-EDIT.jpg",
    alt: "Professional team photo session",
    caption: "AquiVira team professional photoshoot"
  },
  {
    src: "/Photos/Extra.JPG",
    alt: "Additional team activities",
    caption: "Additional team activities and events"
  }
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setSelectedPhoto(index)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual proof of our journey, achievements, and milestones.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium line-clamp-2">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>

            {/* Image Container */}
            <div
              className="max-w-5xl max-h-[80vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white text-center mt-4 md:mt-6 text-base md:text-lg font-medium px-4">
                {photos[currentIndex].caption}
              </p>
            </div>

            {/* Photo Counter */}
            <div className="absolute bottom-4 md:bottom-8 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
