import { ChevronDown } from "lucide-react"

type Props = {
  title: string
}

export const MobileFooterSection = ({ title }: Props) => (
  <div className="w-full py-3 flex justify-between items-center text-xl text-[#A3C6FF] cursor-pointer">
    {title}
    <ChevronDown className="w-5 h-5" />
  </div>
)
