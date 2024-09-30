import './Section4.css'
import '../../Media.jsx'
import esmallLogo from '../../../../assets/images/EsmallLogo.svg'
import crown from '../../../../assets/images/crown.png'
import destaqueVod from '../../../../assets/images/destaque-vod.png'
import passarLeft from '../../../../assets/images/passarLeft.png'
import rectangle145 from '../../../../assets/images/Rectangle 145.png'
import itemRaro from '../../../../assets/images/item raro.png'
import rectangle146 from '../../../../assets/images/Rectangle 146.png'
import passarRight from '../../../../assets/images/passarRight.png'

export default function Section4() {
    return (
        <div className="section-four" id="destaques">
            <div className="little-e-sec-four">
                <img src={esmallLogo} alt="Formula E" />
            </div>
            <div className="destaque-title">
                <img src={crown} alt="coroa" />
                <div className="container-text-shadow-destaque">
                    <h1 className="destaque atras" style={{WebkitTextStroke: '1px #C99B26', fontStyle: 'normal'}}>DESTAQUES</h1>
                    <h1 className="destaque frente" style={{color: '#C99B26', fontStyle: 'normal'}}>DESTAQUES</h1>
                </div>
            </div>
            <div className="vod">
                <div className="vod-header">
                    <p>TOCANDO AGORA:</p>
                    <p style={{color: '#DD052C'}}>E-tron</p>
                </div>
                <img className="vod-img" src={destaqueVod} alt="VOD" />
            </div>
            <div className="sample-chooser">
                <img className="passar" src={passarLeft} alt="passador esquerda" />
                <div className="samples">
                    <p className="three-dots-p">. . . </p>
                    <img src={rectangle145} alt="sample" />
                    <img src={itemRaro} alt="sample" />
                    <img src={rectangle146} alt="sample" />
                    <p className="three-dots-p">. . . </p>
                </div>
                <img className="passar" src={passarRight} alt="passador direita" />
            </div>
        </div>
    )
}