import './Section5.css'
import '../../Media.jsx'
import miniSlideLives from '../../../../assets/images/mini-slide-lives.png'
import miniSlidePlacar from '../../../../assets/images/mini-slide-placar.png'
import miniSlideShop from '../../../../assets/images/mini-slide-shop.png'
import miniSlideInfo from '../../../../assets/images/mini-slide-info.png'

export default function Section5() {
    return (
        <div className="section-five">
            <div className="section-five-content">
                <div className="container-text-shadow">
                    <h1 className="conheca atras">SOBRE NOSSA PLATAFORMA:</h1>
                    <h1 className="conheca frente">SOBRE NOSSA PLATAFORMA:</h1>
                </div>
                <div className="about-container">
                    <div className="mini-container">
                        <div className="mini-container-text">
                            <h1>LIVES</h1>
                            <p>Transmissões e chat ao vivo, além de enquentes surpresa.</p>
                        </div>
                        <div className="mini-container-img">
                            <img className="mini-slide" src={miniSlideLives} alt="mini-slide-lives" />
                        </div>
                    </div>

                    <div className="mini-container">
                        <div className="mini-container-text">
                            <h1>PLACAR</h1>
                            <p>Interatividade, recursos integrados e funcionalidades.</p>
                        </div>
                        <div className="mini-container-img">
                            <img className="mini-slide" src={miniSlidePlacar} alt="mini-slide-placar" />
                        </div>
                    </div>

                    <div className="mini-container">
                        <div className="mini-container-text">
                            <h1>PRÊMIOS</h1>
                            <p>Recompensas que podem ser resgatadas com Blitz, raridades e especiais.</p>
                        </div>
                        <div className="mini-container-img">
                            <img className="mini-slide" src={miniSlideShop} alt="mini-slide-premios" />
                        </div>
                    </div>

                    <div className="mini-container">
                        <div className="mini-container-text">
                            <h1>E•INFO</h1>
                            <p>Informações e curiosidades relevantes sobre o universo da Fórmula elétrica.</p>
                        </div>
                        <div className="mini-container-img">
                            <img className="mini-slide" src={miniSlideInfo} alt="mini-slide-info" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}