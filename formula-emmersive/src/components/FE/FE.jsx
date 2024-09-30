import './FE.css'
import { createGlobalStyle } from 'styled-components'
import { GlobalResponsive } from './Media.jsx'
import topPageFEDeco from '../../assets/images/topPageFE-deco.png'
import fELogo from '../../assets/images/FORMULA E FULL BLUE.png'
import carrosselFE1 from '../../assets/images/carrosselFE-1.png'
import carrosselFE2 from '../../assets/images/carrosselFE-2.png'
import carrosselFE3 from '../../assets/images/carrosselFE-3.png'
import carrosselFE4 from '../../assets/images/carrosselFE-4.png'
import carrosselFE5 from '../../assets/images/carrosselFE-5.png'
import f1MiniLogo from '../../assets/images/F1-MiniLogo.png'
import bottomImg from '../../assets/images/bottomPageFE-deco.png'

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
                                <button className="left" id="voltBtn">⬅</button>
                                <button className="right" id="proxBtn" onClick={() => proximoSlideFormulaE()}>⮕</button>
                            </div>
                        </div>
                        <div className="slide-container">
                            <div className="slides" id="carrossel">
                                <div className="slide"><img src={carrosselFE1} alt="slide1" id="slideImg" /></div>
                                <div className="slide"><img src={carrosselFE2} alt="slide2" id="slideImg" /></div>
                                <div className="slide"><img src={carrosselFE3} alt="slide3" id="slideImg" /></div>
                                <div className="slide"><img src={carrosselFE4} alt="slide4" id="slideImg" /></div>
                                <div className="slide"><img src={carrosselFE5} alt="slide5" id="slideImg" /></div>
                            </div>
                        </div>
                        <div className="slide-text-container">
                            <div className="slides-textos" id="carrosselTexto">
                                <div className="slide-text"><p>Você sabia que os carros da <span style={{color: '#2210F4'}}>Fórmula E</span> possuem uma opção que ativa um "boost" durante a corrida? Chama-se <span style={{color: '#2210F4'}}>Attack Mode</span>, e dá ao carro cerca de 25 kW de impulso, permitindo aos pilotos ultrapassar os adversários e obter posições melhores!</p></div>
                                <div className="slide-text"><p>Lorem ipsum dolor, sit amet consectetur <span style={{color: '#2210F4'}}>adipisicing elit</span>. Vitae dolorum facere earum, libero, minima enim maiores provident nostrum, et est commodi laboriosam odio excepturi voluptate. Neque ullam autem dicta dolorum.</p></div>
                                <div className="slide-text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam <span style={{color: '#2210F4'}}>perferendis</span> eos unde optio perspiciatis mollitia hic. Consequuntur eaque blanditiis inventore, illo sed repellendus cum consectetur vel aperiam non tempore excepturi.</p></div>
                                <div className="slide-text"><p>Lorem ipsum <span style={{color: '#2210F4'}}>dolor sit</span> amet consectetur adipisicing elit. Sint quidem libero nostrum dolorum eligendi velit magnam, iure hic placeat est ratione dolor, repudiandae eius quia eum cumque impedit, quod architecto.</p></div>
                                <div className="slide-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae ex libero reiciendis hic <span style={{color: '#2210F4'}}>laudantium excepturi</span> ea iusto velit maiores reprehenderit nam, architecto adipisci facere in culpa est? Assumenda, consequatur!</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="redirect">
                    <a href="../../pages/FExF1/formula1.html" onClick={() => proximaPagina()}> <img src={f1MiniLogo} alt="F1 mini logo" /></a>
                    <span style={{fontSize: '48px', fontWeight: '100'}}>|</span>
                    <a href="../../pages/FExF1/formula1.html" style={{textDecoration: 'underline'}} onClick={() => proximaPagina()}>Sobre: Formula 1</a>
                </div>
                <div className="bottomPage-deco"><img className="bottomPageFE-deco" src={bottomImg} alt=" background-decoration" /></div>
            </main>
        </>
    )
}