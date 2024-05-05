import { useEffect, useState } from 'react'
import { ButtoUp, Icone } from './styles'

export function ButtonUp() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log('Quantidade de pixels de rolagem:', window.scrollY)
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {scrolled && (
        <ButtoUp
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <Icone size={25} />
        </ButtoUp>
      )}
    </div>
  )
}
