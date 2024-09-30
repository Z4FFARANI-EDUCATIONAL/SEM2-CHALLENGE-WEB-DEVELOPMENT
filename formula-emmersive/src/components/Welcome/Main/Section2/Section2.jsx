import './Section2.css'
import '../../Media.jsx'
import introducaoCard from '../../../../assets/images/introdução-card.png'
import video from '../../../../assets/images/video.png'

export default function Section2() {
    return (
        <div className="Welcomesection-two" id="video-intro">
            <div className="section-two-content">
                <img className="introdução-card" src={introducaoCard} alt="card de introdução" />
                <div className="introduction">
                    <h1 className="conheca atras">INTRODUÇÃO</h1>
                    <h1 className="conheca frente">INTRODUÇÃO</h1>
                </div>
                <div className="blue-frame-two-sec2">
                    <div className="blue-frame-inner-two-sec2">
                        <div className="blue-frame-one-sec2">
                            <div className="blue-frame-inner-one-sec2">
                                <img className="video" src={video} alt="video preview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}