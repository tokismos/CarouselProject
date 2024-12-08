import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navigation/NavBar"
import { TopBar } from "@/components/navigation/TopBar"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="w-screen">
    <TopBar />
    <NavBar />
    <main className="bg-[#ECEBE7] h-full">{children}</main>
    <Footer />
  </div>
)
