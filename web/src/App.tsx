import { Demo } from '../src/pages//Demo'
import { Achievements } from '../src/pages/Achievements/layout'
import { Calender } from '../src/pages/Calender'
import { Clients } from '../src/pages/Clients/layout/'
import { Community } from '../src/pages/Community/layout'
import { Customer } from '../src/pages/Customer'
import { Footer } from '../src/pages/Footer'
import { Header } from '../src/pages/Header'
import { HeroSection } from '../src/pages/HeroSection/'
import { Marketing } from '../src/pages/Marketing/layout'
import { Unlock } from '../src/pages/Unlock/'

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
