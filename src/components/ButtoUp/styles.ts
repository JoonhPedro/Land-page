import styled from 'styled-components'
import { HiArrowSmUp } from 'react-icons/hi'

export const ButtoUp = styled.div`
  height: 50px;
  width: 50px;
  background: ${(props) => props.theme['color-Shade1']};
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  transition: background-color 0.5s ease-in-out;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  span {
    position: absolute;
    left: 200px;
    top: 10px;
  }
  &:hover {
    opacity: 0.8;
    transition: 0.4s;
  }

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    bottom: 10px;
    right: 10px;
  }

  @media (min-width: 1200px) {
    bottom: 30px;
    right: 30px;
  }
`
export const Icone = styled(HiArrowSmUp)`
  position: relative;
  top: 12px;
  left: 11.5px;
  color: white;

  @media (max-width: 768px) {
    position: relative;
    top: 7px;
    left: 7.4px;
  }

`
