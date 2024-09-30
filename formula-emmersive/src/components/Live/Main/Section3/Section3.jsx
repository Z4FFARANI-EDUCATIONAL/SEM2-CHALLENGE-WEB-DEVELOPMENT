import './Section3.css'
import '../../Media.jsx'
import esmallLogo from '../../../../assets/images/EsmallLogo.svg'
import map from '../../../../assets/images/map.png'
import mapRealLife from '../../../../assets/images/mapRealLife.png'

export default function Section3() {
    return (
        <div className="section-three" id="mapas">
            <div className="little-e-sec-three">
                <img src={esmallLogo} alt="Formula E" />
            </div>
            <div className="maps">
                <div className="map-titles">
                    <div className="container-text-shadow">
                        <h1 className="conheca atras">MAPA</h1>
                        <h1 className="conheca frente">MAPA</h1>
                    </div>
                    <span style={{fontSize: '64px'}}>|</span>
                    <div className="container-text-shadow">
                        <h1 className="conheca atras">SEASON 10</h1>
                        <h1 className="conheca frente">SEASON <span style={{color: 'aqua'}}>10</span></h1>
                    </div>
                </div>
                <div className="map-container">
                    <div className="imgcontainer">
                        <img src={map} alt="mapa" />
                        <img src={mapRealLife} alt="mapa real" />
                    </div>
                </div>
                <div className="map-name">
                    <p>SÃO PAULO - ANHEMBI</p>
                </div>
            </div>
        </div> 
    )
}