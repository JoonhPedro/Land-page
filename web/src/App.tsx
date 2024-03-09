import { Clients } from './pages/Clients'
import { Community } from './pages/Community'
import { HeroSection } from './pages/HeroSection'
import { Calender } from './pages/Calender/index'
import { Header } from './pages/header'
import { Unlock } from './pages/Unlock'

function App() {
  return (
    <>
      <Header navLinks={[]} />
      <HeroSection />
      <Clients />
      <Community />
      <Unlock />
      <Calender />
    </>
  )
}

export default App
