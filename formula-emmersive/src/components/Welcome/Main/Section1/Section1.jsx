import './Section1.css'
import '../../Media.jsx'
import welcomeImg from '../../../../assets/images/welcome-img.png'

export default function Section1() {
    return (
        <div className="section-one">
            <div className="blue-frame-two-sec1">
                <div className="blue-frame-inner-two-sec1">
                    <div className="blue-frame-one-sec1">
                        <div className="blue-frame-inner-one-sec1">
                            <div className="section-card">
                                <img className="welcome-img" src={welcomeImg} alt="Saudações_banner" />
                                <div className="text-saudacoes">
                                    <div className="container-text-shadow">
                                        <h1 className="conheca atras">SAUDAÇÕES!</h1>
                                        <h1 className="conheca frente">SAUDAÇÕES!</h1>
                                    </div>
                                    <p>QUE TAL PARTICIPAR DE UMA  NOVA  EXPERIÊNCIA  <span className="interativa" style={{fontFamily: "'Michroma', sans-serif"}}>INTERATIVA?</span></p>
                                    <a className="saudacoes-anchor" href="#video-intro" style={{textDecoration: 'none'}}>VAMOS NESSA!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
