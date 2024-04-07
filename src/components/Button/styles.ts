import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
`

export const ButtonStyle = styled.button<{
  variant: 'primary' | 'secondary'
}>`
  height: auto;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === 'primary' ? props.theme.primary : 'transparent'};
  color: ${(props) =>
    props.variant === 'primary' ? props.theme.white : props.theme.primary};
`
