import cartIcon from "@/assets/Cart.svg"
import logo from "@/assets/Logo.svg"
import NavigationIcons from "@/assets/NavigationIcons.svg"
import { NAV_ITEMS } from "@/constants"
import { Button } from "@/components/ui/button"

export const NavBar = () => (
  <div className="w-full bg-[#F7F8F6]">
    <div className="w-full h-[60px] px-4 md:px-20">
      <div className="flex justify-between items-center h-full">
        <img src={logo} alt="Logo" />
        <nav className="hidden md:flex">
          {NAV_ITEMS.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium"
              asChild
            >
              <a href="#">{item}</a>
            </Button>
          ))}
        </nav>
        <nav className="md:hidden">
          <img src={NavigationIcons} alt="Menu" />
        </nav>
        <div className="md:flex hidden items-center">
          <Button variant="ghost" size="icon" className="p-2">
            <img src={cartIcon} alt="cart" />
          </Button>
        </div>
      </div>
    </div>
  </div>
)
