import { Achievements } from './pages/Achievements/layout'
import { Calender } from './pages/Calender'
import { Clients } from './pages/Clients/layout'
import { Community } from './pages/Community/layout'
import { Customer } from './pages/Customer'
import { Demo } from './pages/Demo'
import Footer from './pages/Footer'
import { Header } from './pages/Header'
import { HeroSection } from './pages/HeroSection'
import { Marketing } from './pages/Marketing/layout'
import { Unlock } from './pages/Unlock'

export function App() {
  return (
    <>
      <Header navLinks={[]} />
      <HeroSection />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customer />
      <Marketing />
      <Demo />
      <Footer />
    </>
  )
}

export default App
