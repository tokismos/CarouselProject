import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoControlButtonProps {
  onClick: () => void
  icon: React.ReactNode
}

interface VideoControlsProps {
  isPlaying: boolean
  isMuted: boolean
  onPlayPause: () => void
  onMute: () => void
}
const VideoControlButton = ({ onClick, icon }: VideoControlButtonProps) => (
  <Button
    size="sm"
    variant="ghost"
    className="bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 p-0"
    onClick={onClick}
  >
    {icon}
  </Button>
)

export const VideoControls = ({
  isPlaying,
  isMuted,
  onPlayPause,
  onMute,
}: VideoControlsProps) => {
  return (
    <div className="flex flex-col gap-2 mr-1 mb-1">
      <VideoControlButton
        onClick={onMute}
        icon={
          isMuted ? (
            <VolumeX className="h-4 w-4 text-white" />
          ) : (
            <Volume2 className="h-4 w-4 text-white" />
          )
        }
      />
      <VideoControlButton
        onClick={onPlayPause}
        icon={
          isPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )
        }
      />
    </div>
  )
}
