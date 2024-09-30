import './Section4.css'
import '../../Media.jsx'
import attack from '../../../../assets/images/attack.png'

export default function Section4() {
    return (
        <div className="section-four">
            <div className="division-bars">
                <div className="section-four-div">/</div>
                <div className="section-four-div">/</div>
                <div className="section-four-div">/</div>
                <div className="section-four-div">/</div>
            </div>

            <div className="section-four-content">
                <div className="container-text-shadow">
                    <h1 className="conheca atras">CONHEÇA:</h1>
                    <h1 className="conheca frente">CONHEÇA:</h1>
                </div>
                <h1 className="fanboost">FANBOOST</h1>
                <div className="attack-description">
                    <img src={attack} alt="Fanboost icon" />
                    <p>Fanboost é uma extensão da funcionalidade online existente para competições de Fórmula E. Ele permite que os usuários votem em um piloto específico para receber um pouco mais de potência em seu veículo temporariamente durante uma corrida ao vivo. Quanto mais votos um piloto tiver, maior será a chance de ele receber a potência extra. Enquanto outros usuários precisam conferir a enquete de votação pelas redes sociais, você poderá votar facilmente por aqui.</p>
                </div>
                <h1 className="make-the-difference">FAÇA VOCÊ A <span style={{color: 'rgba(1, 253, 71, 1)'}}>DIFERENÇA</span> NAS PISTAS</h1>
            </div>

            <div className="division-bars">
                <div className="section-four-div">/</div>
                <div className="section-four-div">/</div>
                <div className="section-four-div">/</div>
                <div className="section-four-div">/</div>
            </div>
        </div>
    )
}
