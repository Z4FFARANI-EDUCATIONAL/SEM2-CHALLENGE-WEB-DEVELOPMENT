import './Section3.css'
import '../../Media.jsx'
import emmersive from '../../../../assets/images/emmersive.png'
import blitzLetter from '../../../../assets/images/Blitz-letter.png'
import blitzComplexLogo from '../../../../assets/images/blitz-complex-logo.png'

export default function Section3() {
    return (
        <div className="section-three">
            <div className="division-bars">
                <div className="section-three-div gold">/</div>
                <div className="section-three-div red">/</div>
                <div className="section-three-div pink">/</div>
                <div className="section-three-div white">/</div>
            </div>

                <div className="section-three-content">
                    <img className="emmersive" src={emmersive} alt="Emmersive logo" />
                    <div className="blitz-e-logo">
                        <img className="blitz-letter" src={blitzLetter} alt="Blitz" />
                        <img className="blitz-logo" src={blitzComplexLogo} alt="Bliz-Icon" />
                    </div>
                    <p>Os Blitz, ou também apelidados de Blitz Points, são méritos que podem ser adquiridos navegando, interagindo ou participando de eventos no site Fórmula E•mmersive. Quanto mais Blitz você obtiver, melhores serão as recompensas e recursos que você poderá resgatar, além de maiores chances de ganhar sorteios periódicos!</p>
                </div>

            <div className="division-bars">
                <div className="section-three-div white">/</div>
                <div className="section-three-div pink">/</div>
                <div className="section-three-div red">/</div>
                <div className="section-three-div gold">/</div>
            </div>
        </div>
    )
}