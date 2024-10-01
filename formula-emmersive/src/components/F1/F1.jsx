import './F1.css'
import { GlobalResponsive } from './Media.jsx'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import topPageF1Deco from '../../assets/images/topPageF1-deco.png'
import f1Logo from '../../assets/images/FORMULA 1 LOGO.png'
import carrosselF11 from '../../assets/images/carrosselF1-1.png'
import carrosselF12 from '../../assets/images/carrosselF1-2.png'
import carrosselF13 from '../../assets/images/carrosselF1-3.png'
import carrosselF14 from '../../assets/images/carrosselF1-4.png'
import carrosselF15 from '../../assets/images/carrosselF1-5.png'
import fEMiniLogo from '../../assets/images/FE-MiniLogo.png'
import bottomImg from '../../assets/images/bottomPageF1-deco.png'
import { useState, useEffect } from 'react'
import { updateBlitz, addBlitz } from '../../script/Home.jsx'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Formula';
        src: url('../../assets/fonts/Formula1-Regular.otf') format('opentype');
    }

    * {
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background-color: #101010;
        color: white;
    } 

    nav {
        background-color: red;
    }

    footer {
        background-color: red;
    }
`

export default function F1() {
    const [imageUrl, setImageUrl] = useState(carrosselF11)
    const [blitzCount, setBlitzCount] = useState(0)

    useEffect(() => {
        const storedCount = updateBlitz()
        setBlitzCount(storedCount)
    }, [])

    const handleAddBlitz = (quantity) => {
        addBlitz(quantity)
        setBlitzCount(updateBlitz())
    }

    const foward = () => {
        if (imageUrl === carrosselF11) {
            setImageUrl(carrosselF12)
        } else if (imageUrl === carrosselF12) {
            setImageUrl(carrosselF13)
        } else if (imageUrl === carrosselF13) {
            setImageUrl(carrosselF14)
        } else {
            setImageUrl(carrosselF15)
        }
    }

    const backward = () => {
        if (imageUrl === carrosselF15) {
            setImageUrl(carrosselF14)
        } else if (imageUrl === carrosselF14) {
            setImageUrl(carrosselF13)
        } else if (imageUrl === carrosselF13) {
            setImageUrl(carrosselF12)
        } else {
            setImageUrl(carrosselF11)
        }
    }

    return (
        <>
            <GlobalStyle />
            <GlobalResponsive />
            <main>
                <div className="topPage-deco"><img className="topPageF1-deco" src={topPageF1Deco} alt="decoração topo da pagina" /></div>
                <div className="F1-content">
                    <div className="carrossel">
                        <img className="F1-logo" src={f1Logo} alt="" />
                        <div className="carrossel-btns">
                            <a href="#">Compartilhar</a>
                            <div className="slide-btnsf1">
                                <button className="left" id="voltBtn" onClick={() => backward()}>⬅</button>
                                <button className="right" id="proxBtn" onClick={() => { foward(); handleAddBlitz(100) }}>⮕</button>
                            </div>
                        </div>
                        <div className="slide-containerf1">
                            <div className="slides" id="carrossel">
                                <div className="slide"><img src={imageUrl} alt="slide1" id="slideImg" /></div>
                            </div>
                        </div>
                        <div className="slide-text-container">
                            <div className="slides-textos" id="carrosselTexto">
                                <div className="slide-text"><p>Os carros modernos de <span style={{color: 'red'}}>F1</span> usam uma mistura de combustível de alta octanagem, semelhante à gasolina sem chumbo, mas otimizada para desempenho. Eles usam cerca de 100-110 kg de <span style={{color: 'red'}}>combustível</span> por corrida, devido a regulamentos rígidos.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="redirect">
                    <Link to={'/fe'}> <img src={fEMiniLogo} alt="F1 mini logo" onClick={() => proximaPagina()} /></Link>
                    <span style={{fontSize: '48px', fontWeight: '100'}}>|</span>
                    <Link to={'/fe'} onClick={() => proximaPagina()}>Sobre: Fórmula E</Link>
                </div>
            </main>
            <div className="bottomPage-deco"><img className="bottomPageF1-deco" src={bottomImg} alt="decoração base da pagina" /></div>
        </>
    )
}