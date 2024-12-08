import { useState, useRef, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { VideoControls } from "./VideoControlButtons"

interface VideoPlayerProps {
  src: string
  title: string
  isActive: boolean
  autoPlay?: boolean
  onVideoEnd?: () => void
  isSelected: boolean
}

export const VideoPlayer = ({
  src,
  title,
  isActive,
  autoPlay,
  onVideoEnd,
  isSelected,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return

    if (isActive) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isActive])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <>
      <div
        className={`relative w-[300px] h-[500px] rounded-xl p-1 ${
          isSelected ? "ring-4 ring-[#69A2FF]" : ""
        }`}
      >
        {!isLoaded && <Skeleton className="absolute inset-0 m-1 rounded-xl" />}
        <div className="w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            autoPlay={autoPlay}
            muted={isMuted}
            onLoadedData={() => setIsLoaded(true)}
            onEnded={onVideoEnd}
            className={`w-full h-full object-cover rounded-xl `}
          />

          {isActive && isLoaded && (
            <div className="absolute bottom-2 right-2">
              <VideoControls
                isPlaying={isPlaying}
                isMuted={isMuted}
                onPlayPause={togglePlayPause}
                onMute={toggleMute}
              />
            </div>
          )}
        </div>
      </div>
      <div className="pl-1 pt-2">
        <p className="text-sm text-left text-[#4F6076]">{title}</p>
      </div>
    </>
  )
}
