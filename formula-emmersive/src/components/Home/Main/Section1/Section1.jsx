import './Section1.css'
import esmallLogo from '../../../../assets/images/EsmallLogo.svg'
import blitz from '../../../../assets/images/blitz.png'
import imgSection from '../../../../assets/images/Section 1.png'

export default function Section1() {
    return (
        <div className="Homesection-one" id="FE-area">
            <div className="section-title-card one">
                <div className="title-one">
                    <h1 className="title-responsive">FORMULA E <span style={{color: 'yellow'}}>X</span> FORMULA 1</h1>
                    <h2 className="title-responsive">AFINAL, EXISTE DIFERENÇA?</h2>
                </div>
                <div className="share-btns">
                    <button className="tiny-share sec1">
                        <img className='share-Logo' src={esmallLogo} alt="E logo" />
                    </button>
                    <button className="big-share sec1">
                        Compartilhar
                    </button>
                </div>
            </div>

            <div className="Homeblue-frame-two-sec1">
                <div className="Homeblue-frame-inner-two-sec1">
                    <div className="Homeblue-frame-one-sec1">
                        <div className="Homeblue-frame-inner-one-sec1">
                            <div className="section-card">
                                <div className="card-btns">
                                    <button className="big-blue-btn">
                                        <div className="blitz-gain">
                                            <img className="blitz-responsive" src={blitz} alt="blitz" />
                                            <p className="p-responsive">2000</p>
                                        </div>
                                    </button>
                                    <a className="blitz-shop" href="#Blitz-shop" style={{color: '#2210F4'}}>BLITZ SHOP</a>
                                </div>
                                <div className="card1">
                                    <a href="../FExF1/formulaE.html"><img className="imagem-CarrosLive" src={imgSection} alt="Seção 1 Card" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mw425-blitz-shop-btn">
                <p>RECEBA 2000 <span style={{color: '#FAE101'}}>BLITZ</span> POR LER ESTE ARTIGO</p>
                <a className="blitz-shop" href="#Blitz-shop" style={{color: '#2210F4'}}>BLITZ SHOP</a>
            </div>
        </div>
    )
}