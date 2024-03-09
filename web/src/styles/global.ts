import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        box-shadow: 0 8 0 2px ${(props) => props.theme['green-500']};
    }
    body{
        background: ${(props) => props.theme['gray-800']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }
    border-style,input-security,text-decoration-thickness,button {
        font: 400 1rem Roboto,sans-serif
    }
`
