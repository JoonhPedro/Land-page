import { Clients } from './pages/Clients'
import { Community } from './pages/Community'
import { HeroSection } from './pages/HeroSection'
import { Header } from './pages/header'

function App() {
  return (
    <>
      <Header navLinks={[]} />
      <HeroSection />
      <Clients />
      <Community />
    </>
  )
}

export default App
