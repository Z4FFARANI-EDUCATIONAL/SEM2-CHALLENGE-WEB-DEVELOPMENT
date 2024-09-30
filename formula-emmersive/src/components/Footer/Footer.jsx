import './Footer.css'
import './Media.jsx'
import logoBlack from '../../assets/images/LOGOBLACK.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <h1>NONONO</h1>
                    <p>XX XXXXX-XXXX</p>
                </div>
                <img src={logoBlack} alt="Formula Emmersive BLACK LOGO" className="footer-logo" />
            </div>
        </footer>
    )
}