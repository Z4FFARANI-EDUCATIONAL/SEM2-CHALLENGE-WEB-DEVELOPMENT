import { createGlobalStyle } from "styled-components"
import Main from "../components/Live/Main/Main.jsx"

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
    }

    body {
        margin: 0 auto;
        background-color: #1D1A28;
        color: white;
    }

    html {
        scroll-behavior: smooth;
    }

    .divLive {
        margin: 0;
    }
`

export default function Live() {
    return (
        <>
            <GlobalStyle />
            <Main />
        </>
    )
}