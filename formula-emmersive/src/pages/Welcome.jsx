import { createGlobalStyle } from "styled-components"
import HeaderWelcome from '../components/Welcome/HeaderWelcome/HeaderWelcome.jsx'
import Main from '../components/Welcome/Main/Main.jsx'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }

    body {
        background-color: #101010;
        color: white;
    }

    html {
        scroll-behavior: smooth;
    }
`

export default function Welcome() {
    return (
        <>
            <GlobalStyle />
            <HeaderWelcome />
            <Main />
        </>
    )
}