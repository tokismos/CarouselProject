import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

import { VideoPlayer } from "./VideoPlayer"
import { VIDEOS } from "@/constants"
import { VideoCarouselNavigation } from "./VideoCarouselNavigation"

export const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  })

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="md:pl-20 pt-10 mb-10 md:mb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[28px] font-semibold text-[#4F6076] pl-4 md:pl-0">
          A day in the life
        </h2>
        <div className="gap-5 hidden md:flex pr-20">
          <VideoCarouselNavigation onPrev={scrollPrev} onNext={scrollNext} />
        </div>
      </div>
      <div className="overflow-hidden p-2" ref={emblaRef}>
        <div className="flex h-full">
          {VIDEOS.map((video, index) => (
            <div key={video.id} className="mx-2">
              <VideoPlayer
                {...video}
                isSelected={index === currentIndex}
                isActive={index === currentIndex}
                autoPlay={index === 0}
                onVideoEnd={scrollNext}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
