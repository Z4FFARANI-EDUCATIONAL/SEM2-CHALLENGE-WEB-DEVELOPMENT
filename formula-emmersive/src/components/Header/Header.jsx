import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { GlobalResponsive } from './Media.jsx'
import menuSvg from '../../assets/images/menu.svg'
import logo from '../../assets/images/logo.png'
import esmallLogo from '../../assets/images/EsmallLogo.svg'
import blitz from '../../assets/images/blitz.png'
import blankProfile from '../../assets/images/blank-profile.png'
import headerDecoration from '../../assets/images/header-decoration.png'
import liveDot from '../../assets/images/liveDot.png'

import { updateBlitz } from '../../script/Home.jsx'

export default function Header() {
    const [blitzCount, setBlitzCount] = useState(updateBlitz())

    useEffect(() => {
        const updateCount = () => {
            const storedCount = updateBlitz()
            setBlitzCount(storedCount)
        }
        updateCount()
        const intervalId = setInterval(updateCount, 100)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <GlobalResponsive />
            <header>
                <div className="header-content">
                    <div className="headerBtn-768w">
                        <button><img className='menu-svg' src={menuSvg} alt="mini botão" /></button>
                    </div>
                    <Link to={'/home'}>
                        <img
                            className="logo-emmersive"
                            src={logo}
                            alt="Logo Formula Emmersive"
                        />
                    </Link>
                    <div className="headerBtns">
                        <button className="scoreBtn">Score</button>
                        <span className="texto_Header" style={{ color: '#101010' }}>|</span>
                        <button className="challengesBtn">Desafios</button>
                        <span className="texto_Header" style={{ color: '#101010' }}>|</span>
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
                                <p className="blitz-qtd" id="saldo-blitz">{blitzCount}</p>
                            </div>
                        </div>
                        <img id="moldura-user" className="moldura-user" src={blankProfile} alt="user-box" />
                        <img className='header-deco' src={headerDecoration} alt="decoração header" />
                    </div>
                </div>
            </header>
            <nav>
                <div className="nav-cont">
                    <Link to={'/f1'}>F1 x FE</Link>
                    <Link to={'/live'}>
                        <span><img className="navLiveDot" src={liveDot} alt="live dot" /></span>LIVE
                    </Link>
                    <Link to={'/home#BlitzShop'}>BlitzShop</Link>
                </div>
            </nav>
        </>
    )
}
