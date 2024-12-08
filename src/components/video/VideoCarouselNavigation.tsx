import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselButtonProps {
  direction: "prev" | "next"
  onClick: () => void
}

export const CarouselButton = ({ direction, onClick }: CarouselButtonProps) => {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight

  return (
    <Button
      variant="ghost"
      size="icon"
      className="bg-white hover:bg-gray-50 rounded-full"
      onClick={onClick}
    >
      <Icon className="h-4 w-4 text-gray-700" />
    </Button>
  )
}

interface CarouselNavigationProps {
  onPrev: () => void
  onNext: () => void
}

export const VideoCarouselNavigation = ({
  onPrev,
  onNext,
}: CarouselNavigationProps) => {
  return (
    <div className={`flex gap-5 `}>
      <CarouselButton direction="prev" onClick={onPrev} />
      <CarouselButton direction="next" onClick={onNext} />
    </div>
  )
}
