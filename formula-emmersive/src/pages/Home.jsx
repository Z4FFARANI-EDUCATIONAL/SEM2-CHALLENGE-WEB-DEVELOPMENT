import { createGlobalStyle } from "styled-components"
import Main from "../components/Home/Main/Main.jsx"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
    }

    body{
        margin: 0 auto;
        background-color: #101010;
        color: white;
    }

    html{
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    nav {
        background-color: blue;
    }

    footer {
        background-color: blue;
    }
`

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <Main />
        </>
    )   
}