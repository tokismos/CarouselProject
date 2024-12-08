import { FOOTER_SECTIONS } from "@/constants"
import { FooterSection } from "./FooterSection"
import { MobileFooterSection } from "./MobileFooterSection"

export const Footer = () => (
  <footer className="bg-[#0B2341] text-white py-6 md:py-12 md:px-20 pb-4">
    <div className="hidden md:grid md:grid-cols-5 gap-6">
      {FOOTER_SECTIONS.map((section) => (
        <FooterSection key={section.title} {...section} />
      ))}
    </div>

    <div className="md:hidden px-4">
      {FOOTER_SECTIONS.map((section) => (
        <MobileFooterSection key={section.title} title={section.title} />
      ))}
    </div>

    <div className="pt-6 md:pt-12 flex text-center gap-4 text-sm text-[#F7F8F6] flex-wrap md:gap-20 px-4 justify-center md:justify-start md:px-0">
      <p>© 2024 Cozey Inc. All rights reserved.</p>
      <span className="cursor-pointer hover:text-white mr-20 sm:mr-0">
        Privacy Policy
      </span>
      <span className="cursor-pointer hover:text-white">Terms of Use</span>
    </div>
  </footer>
)
