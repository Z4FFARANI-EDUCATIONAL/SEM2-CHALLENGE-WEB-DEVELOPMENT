import './Section6.css'
import '../../Media.jsx'
import patrocinador from '../../../../assets/images/patrocinador.png'
import check from '../../../../assets/images/check.png'

export default function Section6() {
    return (
        <div className="section-six">
            <div className="container-text-shadow">
                <h1 className="conheca atras">PATROCINADOR OFICIAL:</h1>
                <h1 className="conheca frente">PATROCINADOR OFICIAL:</h1>
            </div>
            <div className="section-six-content">
                <img className="patrocinador" src={patrocinador} alt="Patrocinador Oficial" />
                <div className="plataform-functions">
                    <p>Graças à parceria com a ABB FIA Formula E, nosso site apresenta conteúdos exclusivos.</p>
                    <ul>
                        <li>Acesso às transmissões ao vivo <span><img src={check} alt="check" /></span></li>
                        <li>Acesso a câmeras exclusivas <span><img src={check} alt="check" /></span></li>
                        <li>Destaques das competições <span><img src={check} alt="check" /></span></li>
                        <li>Sorteios periódicos <span><img src={check} alt="check" /></span></li>
                        <li>Integração simultânea <span><img src={check} alt="check" /></span></li>
                        <li>E muito mais! <span><img src={check} alt="check" /></span></li>
                    </ul>
                    <a className="continue" href="#section-seven">Continuar</a>
                </div>
            </div>
        </div>
    )
}