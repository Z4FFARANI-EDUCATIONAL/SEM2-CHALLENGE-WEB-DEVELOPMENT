import './Section3.css'
import blitzShopBanner from '../../../../assets/images/BlitzShop-banner.png'
import shopBannerDeco from '../../../../assets/images/shop-banner-deco.png'
import sorteio from '../../../../assets/images/Sorteio Img.png'
import tickets from '../../../../assets/images/TICKETS.png'
import blitz from '../../../../assets/images/blitz.png'
import esmallLogo from '../../../../assets/images/EsmallLogo.svg'
import lendario from '../../../../assets/images/lendario item.png'
import itemRaro from '../../../../assets/images/item raro.png'
import playStore from '../../../../assets/images/playstore.png'
import molduraComum from '../../../../assets/images/moldura Comum.png'
import { updateBlitz, addBlitz } from '../../../../script/Home'
import { useState } from 'react'

export default function Section3() {
    const [blitzCount, setBlitzCount] = useState(updateBlitz())
    const [participationAmount, setParticipationAmount] = useState(0)

    const handleAddBlitz = (quantity) => {
        addBlitz(quantity)
        setBlitzCount(updateBlitz())
    }

    const handleBlitzChange = (delta) => {
        setParticipationAmount((prevAmount) => Math.max(0, prevAmount + delta))
    }

    const participar = () => {
        if (participationAmount > blitzCount) {
            alert("Você não tem blitz suficiente para participar.")
            return
        }

        let probability = 0
        if (participationAmount >= 50000) {
            probability = 50;
        } else if (participationAmount >= 25000) {
            probability = 25
        } else {
            probability = 5
        }
    
        const random = Math.random() * 100
        if (random < probability) {
            alert(`Parabéns! Você ganhou! Chance: ${probability}%`)
        } else {
            alert(`Infelizmente, você não ganhou. Chance: ${probability}%`)
        }
    
        addBlitz(-participationAmount)
        setParticipationAmount(0)
        setBlitzCount(updateBlitz())
    }
    
    return (
        <>
            <div className="shop-banner-background">
                <div className="banner-decoration-spot">
                    <div className="title-box">
                        <img className="blitzshop-logo" src={blitzShopBanner} alt="decoração banner blitzshop" />
                        <h1 className="aposte-blitz1">TROQUE <span style={{ color: '#FAE101' }}>BLITZ</span> POR RECOMPENSAS!</h1>
                    </div>
                    <img className="banner-deco" src={shopBannerDeco} alt="decoração banner blitzshop" />
                </div>
            </div>
            <div>
                <div className="sorteio">
                    <div className="Homeblue-frame-two-sec3">
                        <div className="Homeblue-frame-inner-two-sec3">
                            <div className="Homeblue-frame-one-sec3">
                                <div className="Homeblue-frame-inner-one-sec3">
                                    <div className="sorteio-card">
                                        <div className="sorteio-content">
                                            <div className="anounce-img-container">
                                                <img className="anounce-img" src={sorteio} alt="imagem promocional de sorteio" />
                                            </div>
                                            <div className="card-interactions">
                                                <h1 className="tickets-txt"><span><img className="imagem-SorteioTicket" src={tickets} alt="Icone Ticket" /></span>10x TICKETS PARA:</h1>
                                                <h1 className="eprix">E-PRIX <span style={{ fontWeight: '300' }}>SÃO PAULO</span></h1>
                                                <h2 className="passagem"><span style={{ color: '#FAE101' }}>+ PASSAGEM & ESTADIA:</span> 17/06/2024</h2>
                                                <div className="probabilistico">
                                                    <p className="texto-Probabilistico">PROBABILISTICO:</p>
                                                    <div className="prob-btns">
                                                        <div className="more-minus-btns">
                                                            <button className="more-btn" id="maisBtn" onClick={() => handleBlitzChange(1000)}>+</button>
                                                            <div className="blitz-tickets">
                                                                <img src={blitz} alt="blitz icon" />
                                                                <p id="blitz-qtd">{participationAmount}</p>
                                                            </div>
                                                            <button className="minus-btn" id="menosBtn" onClick={() => handleBlitzChange(-1000)}>-</button>
                                                        </div>
                                                        <button className="participar-btn" onClick={participar}>Participar</button>
                                                        <img className="corner-logo" src={esmallLogo} alt="Formula E mini Logo" />
                                                    </div>
                                                    <div className="pop-up compra" id="pop-up-compra">
                                                        <div className="pop-up-content">
                                                            <h1>Confirmar troca de Blitz?</h1>
                                                            <div className="pop-up-btn">
                                                                <button className="option-cofirm" onClick={() => confirmar()}>Confirmar</button>
                                                                <button className="option-cancel" onClick={() => cancelar()}>Cancelar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="sorteio-title">SORTEIO - SORTEIO - SORTEIO</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-four">
                <div className="item-shop">
                    <div className="temporizador">
                        <p className="p-responsive1">NOVAS RECOMPENSAS CHEGAM EM:</p>
                        <div id="timer" className="timer"></div>
                    </div>
                    <div className="item-cards-display" id='BlitzShop'>
                        <div className="areaShop">
                            <div className="borda-animada-item lendario">
                                <div className="fundo-item-card">
                                    <div className="tamanho-CardShop item-card lendario">
                                        <p className="paragrafo-CardShop item-description lendario">MOLDURA</p>
                                        <img className="imagem-CardShop item lendario" src={lendario} alt="moldura gold" />
                                        <p className="paragrafo-CardShop item-name">GOLD</p>
                                        <p className="paragrafo-CardShop blitz-qtd price"><img src={blitz} alt="Blitz Icon" />2000</p>
                                        <button id="compra-moldura" className="adquirir lendario" onClick={() => handleAddBlitz(-2000)}>adquirir</button>
                                        <p className="paragrafo-CardShop raridade">lendário</p>
                                    </div>
                                </div>
                            </div>
                            <div className="borda-animada-item raro">
                                <div className="fundo-item-card">
                                    <div className="item-card raro">
                                        <p className="item-description raro">SAMPLE</p>
                                        <img className="item" src={itemRaro} alt="E-tron" />
                                        <p className="item-name">E-TRON</p>
                                        <p className="blitz-qtd price"><img src={blitz} alt="Blitz Icon" />1000</p>
                                        <button className="adquirir raro">adquirido</button>
                                        <p className="raridade">raro</p>
                                    </div>
                                </div>
                            </div>
                            <div className="borda-animada-item especial">
                                <div className="fundo-item-card">
                                    <div className="item-card especial">
                                        <p className="item-description especial">GIFT CARD</p>
                                        <img className="item" src={playStore} alt="GooglePlay giftcard" />
                                        <p className="item-name">GOOGLE PLAY</p>
                                        <p className="blitz-qtd price"><img src={blitz} alt="Blitz Icon" />20.000</p>
                                        <button id="compra-especial" className="adquirir especial"  onClick={() => handleAddBlitz(-20000)}>adquirir</button>
                                        <p className="raridade">especial</p>
                                    </div>
                                </div>
                            </div>
                            <div className="borda-animada-item comum">
                                <div className="fundo-item-card">
                                    <div className="item-card comum">
                                        <p className="item-description comum">EXEMPLO</p>
                                        <img className="item comum" src={molduraComum} alt="EXEMPLO" />
                                        <p className="item-name">EXEMPLO</p>
                                        <p className="blitz-qtd price"><img src={blitz} alt="Blitz Icon" />1000</p>
                                        <button id="compra-exemplo" className="adquirir comum"  onClick={() => handleAddBlitz(-1000)}>adquirir</button>
                                        <p className="raridade">comum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
