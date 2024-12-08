import { ChevronDown } from "lucide-react"
import usaFlag from "@/assets/Usa.svg"
import { TOP_BAR_LINKS } from "@/constants"

export const TopBar = () => (
  <div className="w-full bg-[#69A2FF] text-[#F7F8F6] text-xs px-4 md:px-20">
    <div className="h-8 flex items-center justify-between">
      <div className="flex items-center gap-4 text-[10px] md:text-xs">
        <span>Designed in North America</span>
        <span>|</span>
        <span>Fast & Free Shipping</span>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex gap-8">
          {TOP_BAR_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:underline hover:text-red-600 text-[#F7F8F6] text-xs whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-[6px] text-xs">
          <span>EN</span>
          <div className="flex gap-[4px]">
            <img src={usaFlag} alt="US Flag" />
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
