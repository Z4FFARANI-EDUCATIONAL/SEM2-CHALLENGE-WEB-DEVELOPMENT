import './FE.css'
import { createGlobalStyle } from 'styled-components'
import { GlobalResponsive } from './Media.jsx'
import { Link } from 'react-router-dom'
import topPageFEDeco from '../../assets/images/topPageFE-deco.png'
import fELogo from '../../assets/images/FORMULA E FULL BLUE.png'
import carrosselFE1 from '../../assets/images/carrosselFE-1.png'
import carrosselFE2 from '../../assets/images/carrosselFE-2.png'
import carrosselFE3 from '../../assets/images/carrosselFE-3.png'
import carrosselFE4 from '../../assets/images/carrosselFE-4.png'
import carrosselFE5 from '../../assets/images/carrosselFE-5.png'
import f1MiniLogo from '../../assets/images/F1-MiniLogo.png'
import bottomImg from '../../assets/images/bottomPageFE-deco.png'
import { useState, useEffect } from 'react'
import { updateBlitz, addBlitz } from '../../script/Home.jsx'


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Formula';
        src: url('../../../public/css/fonts/Formula1-Regular.otf') format('opentype');
    }

    *{
        font-family: 'Montserrat', sans-serif;
    }

    body {
        margin: 0 auto;
        background-color: #101010;
        color: white;
    }

    html {
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

export default function F1() {
    const [imageUrl, setImageUrl] = useState(carrosselFE1)
    const [blitzCount, setBlitzCount] = useState(0)

    useEffect(() => {
        const storedCount = updateBlitz()
        setBlitzCount(storedCount)
    }, [])

    const handleAddBlitz = (quantity) => {
        if (imageUrl != carrosselFE5) {
            addBlitz(quantity)
        } else {
            addBlitz(0)
        }
        setBlitzCount(updateBlitz())
    }

    const foward = () => {
        if (imageUrl === carrosselFE1) {
            setImageUrl(carrosselFE2)
        } else if (imageUrl === carrosselFE2) {
            setImageUrl(carrosselFE3)
        } else if (imageUrl === carrosselFE3) {
            setImageUrl(carrosselFE4)
        } else {
            setImageUrl(carrosselFE5)
        }
    }

    const backward = () => {
        if (imageUrl === carrosselFE5) {
            setImageUrl(carrosselFE4)
        } else if (imageUrl === carrosselFE4) {
            setImageUrl(carrosselFE3)
        } else if (imageUrl === carrosselFE3) {
            setImageUrl(carrosselFE2)
        } else {
            setImageUrl(carrosselFE1)
        }
    }

    return (
        <>
        <GlobalStyle />
        <GlobalResponsive />
            <main>
                <div className="top-deco"><img className="topPageFE-deco" src={topPageFEDeco} alt="background-decoration" /></div>
                <div className="FE-content">
                    <div className="carrossel">
                        <img className="logoFullBlue" src={fELogo} alt="LOGO FORMULA E" />
                        <div className="carrossel-btns">
                            <a href="#">Compartilhar</a>
                            <div className="slide-btns">
                                <button className="left" id="voltBtn" onClick={() => backward()}>⬅</button>
                                <button className="right" id="proxBtn" onClick={() => { foward(); handleAddBlitz(100) }}>⮕</button>
                            </div>
                        </div>
                        <div className="slide-container">
                            <div className="slides" id="carrossel">
                                <div className="slide"><img src={imageUrl} alt="slide1" id="slideImg" /></div>
                            </div>
                        </div>
                        <div className="slide-text-container">
                            <div className="slides-textos" id="carrosselTexto">
                                <div className="slide-text"><p>Você sabia que os carros da <span style={{color: '#2210F4'}}>Fórmula E</span> possuem uma opção que ativa um "boost" durante a corrida? Chama-se <span style={{color: '#2210F4'}}>Attack Mode</span>, e dá ao carro cerca de 25 kW de impulso, permitindo aos pilotos ultrapassar os adversários e obter posições melhores!</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="redirect">
                    <Link to={'/f1'}> <img src={f1MiniLogo} alt="F1 mini logo" onClick={() => proximaPagina()} /></Link>
                    <span style={{fontSize: '48px', fontWeight: '100'}}>|</span>
                    <Link to={'/f1'} onClick={() => proximaPagina()}>Sobre: Fórmula 1</Link>
                </div>
                <div className="bottomPage-deco"><img className="bottomPageFE-deco" src={bottomImg} alt=" background-decoration" /></div>
            </main>
        </>
    )
}