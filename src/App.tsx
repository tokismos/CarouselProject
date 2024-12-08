import { NewsLetter } from "./components/newsLetter"
import { VideoCarousel } from "./components/video"
import { MainLayout } from "./layouts/MainLayout"

function App() {
  return (
    <MainLayout>
      <VideoCarousel />
      <NewsLetter />
    </MainLayout>
  )
}

export default App
