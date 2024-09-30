import './F1.css'
import { GlobalResponsive } from './Media.jsx'
import { createGlobalStyle } from 'styled-components'
import topPageF1Deco from '../../assets/images/topPageF1-deco.png'
import f1Logo from '../../assets/images/FORMULA 1 LOGO.png'
import carrosselF11 from '../../assets/images/carrosselF1-1.png'
import carrosselF12 from '../../assets/images/carrosselF1-2.png'
import carrosselF13 from '../../assets/images/carrosselF1-3.png'
import carrosselF14 from '../../assets/images/carrosselF1-4.png'
import carrosselF15 from '../../assets/images/carrosselF1-5.png'
import fEMiniLogo from '../../assets/images/FE-MiniLogo.png'
import bottomImg from '../../assets/images/bottomPageF1-deco.png'

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
                                <button className="left" id="voltBtn">⬅</button>
                                <button className="right" id="proxBtn" onClick={() => proximoSlideFormulaE()}>⮕</button>
                            </div>
                        </div>
                        <div className="slide-containerf1">
                            <div className="slides" id="carrossel">
                                <div className="slide"><img src={carrosselF11} alt="slide1" id="slideImg" /></div>
                                <div className="slide"><img src={carrosselF12} alt="slide2" id="slideImg" /></div>
                                <div className="slide"><img src={carrosselF13} alt="slide3" id="slideImg" /></div>
                                <div className="slide"><img src={carrosselF14} alt="slide4" id="slideImg" /></div>
                                <div className="slide"><img src={carrosselF15} alt="slide5" id="slideImg" /></div>
                            </div>
                        </div>
                        <div className="slide-text-container">
                            <div className="slides-textos" id="carrosselTexto">
                                <div className="slide-text"><p>Os carros modernos de <span style={{color: 'red'}}>F1</span> usam uma mistura de combustível de alta octanagem, semelhante à gasolina sem chumbo, mas otimizada para desempenho. Eles usam cerca de 100-110 kg de <span style={{color: 'red'}}>combustível</span> por corrida, devido a regulamentos rígidos.</p></div>
                                <div className="slide-text"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<span style={{color: 'red'}}>Vitae dolorum</span> facere earum, libero, minima enim maiores provident  nostrum, et est commodi laboriosam odio excepturi voluptate. Neque ullam autem dicta dolorum.</p></div>
                                <div className="slide-text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam <span style={{color: 'red'}}>perferendis</span> eos unde optio perspiciatis mollitia hic. Consequuntur eaque blanditiis<span style={{color: 'red'}}> inventore</span>, illo sed repellendus cum consectetur vel aperiam non tempore excepturi.</p></div>
                                <div className="slide-text"><p>Lorem ipsum dolor sit amet<span style={{color: 'red'}}>consectetur adipisicing</span> elit. Sint quidem libero nostrum dolorum eligendi velit magnam, iure hic placeat est ratione <span style={{color: 'red'}}>dolor</span>, repudiandae eius quia eum cumque impedit, quod architecto.</p></div>
                                <div className="slide-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae ex libero reiciendis hic<span style={{color: 'red'}}> laudantium </span>excepturi ea iusto velit maiores reprehenderit nam, architecto adipisci facere in culpa est? Assumenda, consequatur!</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="redirect">
                    <a href="../../pages/FExF1/formulaE.html"> <img src={fEMiniLogo} alt="F1 mini logo" onClick={() => proximaPagina()} /></a>
                    <span style={{fontSize: '48px', fontWeight: '100'}}>|</span>
                    <a href="../../pages/FExF1/formulaE.html" onClick={() => proximaPagina()}>Sobre: Formula E</a>
                </div>
            </main>
            <div className="bottomPage-deco"><img className="bottomPageF1-deco" src={bottomImg} alt="decoração base da pagina" /></div>
        </>
    )
}