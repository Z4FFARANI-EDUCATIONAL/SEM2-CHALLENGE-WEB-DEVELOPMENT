import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #101010;
        color: white;
        margin: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }
`

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
