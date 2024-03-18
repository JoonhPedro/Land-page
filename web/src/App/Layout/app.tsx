import { Achievements } from '../../pages/Achievements'
import { Calender } from '../../pages/Calender'
import { Clients } from '../../pages/Clients'
import { Community } from '../../pages/Community'
import { Customer } from '../../pages/Customer'
import { Demo } from '../../pages/Demo'
import { HeroSection } from '../../pages/HeroSection/'
import { Unlock } from '../../pages/Unlock/'
import { Header } from '../../pages/Header/'

export function AppLayout() {
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
      <Demo />
    </>
  )
}
