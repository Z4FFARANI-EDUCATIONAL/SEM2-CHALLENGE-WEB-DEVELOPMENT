import './Header.css'
import { GlobalResponsive } from './Media.jsx'

import menuSvg from '../../assets/images/menu.svg'
import logo from '../../assets/images/logo.png'
import esmallLogo from '../../assets/images/EsmallLogo.svg'
import blitz from '../../assets/images/blitz.png'
import blankProfile from '../../assets/images/blank-profile.png'
import headerDecoration from '../../assets/images/header-decoration.png'
import liveDot from '../../assets/images/liveDot.png'

export default function Header() {
    return (
        <>
            <GlobalResponsive />
            <header>
                <div className="header-content">
                    <div className="headerBtn-768w">
                        <button onClick={() => underConstruction()}><img className='menu-svg' src={menuSvg} alt="mini botão" /></button>
                    </div>
                    <img className="logo-emmersive" onClick={() => adicionarBlitz()} src={logo} alt="Logo Formula Emmersive" />
                    <div className="headerBtns" onClick={() => adicionarBlitz()}>
                        <button className="scoreBtn">Score</button>
                        <span className="texto_Header" style={{color: '#101010'}}>|</span>
                        <button className="challengesBtn">Desafios</button>
                        <span className="texto_Header" style={{color: '#101010'}}>|</span>
                        <button className="newsBtn">
                            <p className="texto_Header">News</p>
                            <img className="header-minilogo" src={esmallLogo} alt="E logo" />
                        </button>
                    </div>
                    <div className="profile">
                        <div className="name-blitz">
                            <p className="username" id="username">Usuário</p>
                            <div className="userSaldo">
                                <img className="blitz-icon" src={blitz} alt="Blitz Icon" />
                                <p className="blitz-qtd" id="saldo-blitz">2500</p>
                            </div>
                        </div>
                        <img id="moldura-user" className="moldura-user" src={blankProfile} alt="user-box" />
                        <img className='header-deco' src={headerDecoration} alt="decoração header" />
                    </div>
                </div>
            </header>
            <nav>
                <div className="nav-cont">
                    <a href="#FE-area">Formula E</a>
                    <a href="#LIVE-banner"><span><img className="navLiveDot" src={liveDot} alt="live dot" /></span>LIVE</a>
                    <a href="#Blitz-shop">Recompensas</a>
                </div>
            </nav>
        </>
    )
}