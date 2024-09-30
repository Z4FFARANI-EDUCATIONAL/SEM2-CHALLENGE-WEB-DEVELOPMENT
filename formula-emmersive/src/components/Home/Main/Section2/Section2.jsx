import './Section2.css'
import esmallLogo from '../../../../assets/images/EsmallLogo.svg'
import imgSection from '../../../../assets/images/Section 2.png'
import liveDot from '../../../../assets/images/liveDot.png'

export default function Section2() {
    return (
        <div className="Homesection-two" id="LIVE-banner">
            <div className="section-title-card two">
                <div className="share-btns">
                    <button className="big-share sec2">Compartilhar</button>
                    <button className="tiny-share sec2">
                        <img className='share-Logo' src={esmallLogo} alt="E logo" />
                    </button>
                </div>
                <div className="title two">
                    <h1>ASSISTA AGORA MESMO!</h1>
                    <h2>AO VIVO E-PRIX SÃO PAULO</h2>
                </div>
            </div>

            <div className="Homeblue-frame-two-sec2">
                <div className="Homeblue-frame-inner-two-sec2">
                    <div className="Homeblue-frame-one-sec2">
                        <div className="Homeblue-frame-inner-one-sec2">
                            <div className="card2">
                                <a href="../livePage/livePage.html"><img src={imgSection} alt="Seção 2 Card" /></a>
                                <div className="live-corner">
                                    <img className="imagem-Live" src={liveDot} alt="ponto vermelho live" />
                                    LIVE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="aposte-blitz">APOSTE SEUS <span style={{color: '#FAE101'}}>BLITZ</span>, OS GANHOS ESTÃO <span style={{color: '#FAE101'}}>TRIPLICADOS</span> POR TEMPO LIMITADO! </h1>
        </div>
    )
}