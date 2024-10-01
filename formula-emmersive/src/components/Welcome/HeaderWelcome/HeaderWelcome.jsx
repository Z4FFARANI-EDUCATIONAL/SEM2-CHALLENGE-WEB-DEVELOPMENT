import './HeaderWelcome.css'
import '../Media.jsx'
import logo from '../../../assets/images/logo.png'
import headerDeco from '../../../assets/images/header-decoration.png'
import { Link } from 'react-router-dom'

export default function HeaderWelcome() {
    return (
        <>
            <header className='headerWelcome'>
                <div className="headerWelcome-content">
                    <div className="space-fill"></div>
                    <img className="logoWelcome-emmersive" src={logo} alt="Logo Formula Emmersive" />
                    <div className="profile">
                        <img className='headerWelcome-deco' src={headerDeco} alt="decoração header" />
                        <Link to={'/login'} className="init-section">iniciar sessão</Link>
                    </div>
                </div>
            </header>
            <div className="gradientBar"></div>
        </>
    )
}