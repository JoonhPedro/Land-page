import { Achievements } from './pages/Achievements'
import { Calender } from './pages/Calender/index'
import { Clients } from './pages/Clients'
import { Community } from './pages/Community'
import { Demo } from './pages/Demo'
import { HeroSection } from './pages/HeroSection'
import { Unlock } from './pages/Unlock'
import { Header } from './pages/header'

function App() {
  return (
    <>
      <Header navLinks={[]} />
      <HeroSection />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Demo />
    </>
  )
}

export default App
