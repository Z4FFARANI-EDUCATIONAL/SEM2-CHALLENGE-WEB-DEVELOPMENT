import './Section7.css'
import backgroundSectionSeven from '../../../../assets/images/background-section-seven.png'
import { Link } from 'react-router-dom'

export default function Section7() {
    return (
        <div className="section-seven" id="section-seven">
            <div className="container-text-shadow">
                <h1 className="conheca atras">TUDO PRONTO!</h1>
                <h1 className="conheca frente">TUDO PRONTO!</h1>
            </div>
            <p>agora voce pode aproveitar nossa plataforma ao maximo</p>
            <div className="background-seven">
                <img src={backgroundSectionSeven} alt=" fundo seção final" />
                <Link to={'/register'}>Acessar Formula E•mmersive</Link> 
            </div>
        </div>
    )
}