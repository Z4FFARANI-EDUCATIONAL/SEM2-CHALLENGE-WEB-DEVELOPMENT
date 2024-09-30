import './Section1.css'
import '../../Media.jsx'
import pause from '../../../../assets/images/pause.png'
import audio from '../../../../assets/images/Audio.png'
import expand from '../../../../assets/images/Expand.png'
import liveDot from '../../../../assets/images/liveDot.png'
import fia from '../../../../assets/images/fia.png'
import commentPfpOne from '../../../../assets/images/comment-pfp-1.png'
import commentPfpTwo from '../../../../assets/images/comment-pfp-2.png'
import commentPfpThree from '../../../../assets/images/comment-pfp-3.png'
import commentPfpFour from '../../../../assets/images/comment-pfp-4.png'
import commentPfpFive from '../../../../assets/images/comment-pfp-5.png'
import attackMini from '../../../../assets/images/attack-mini.png'
import number from '../../../../assets/images/Number.png'
import mahindraRacing from '../../../../assets/images/mahindra-racing.png'

export default function Section1() {
    return (
        <div className="section-one" id="live">
            <div className="livestream">
                <div className="live">
                    <div className="video-icons">
                        <img  src={pause} alt="pause button" />
                        <div className="volume-fullscreen">
                            <img  src={audio} alt="audio bar" />
                            <img  src={expand} alt="fullscreen" />
                        </div>
                    </div>
                    <div className="live-on">
                        <h1><img className="live-dot" src={liveDot} alt="ponto live" />LIVE</h1>
                    </div>
                </div>
                <div className="live-title">
                    <div className="competition-name">
                        <img className="fia" src={fia} alt="FIA logo" />
                        <div className="title-live-text">
                            <h1>E-PRIX - <span style={{fontWeight: '300'}}>SÃO PAULO</span></h1>
                            <span className="title-live-division" style={{fontSize: '42px', color: 'blue', fontWeight: 'bold', fontStyle: 'normal'}}>|</span>
                            <h1>SEASON <span style={{color: 'aqua'}}>10</span></h1>
                        </div>
                    </div>
                    <p>Who do you think it’s going to win this race?! Vote now on the chat! Don’t forget to answer our quizzes during the intervals to get more blitz and change them for better prizes!</p>
                    <p>Don’t forget to follow us on social media! Live is happening on Formula E’s official channel too.</p>
                </div>
                
                <div className="live-comments">
                    <div className="comments-live-bar item-0">
                        <h1><img className="live-dot-bar" src={liveDot} alt="ponto live" />LIVE</h1>
                    </div>
                    <div className="comentario item-1">
                        <div>
                            <img className="pfp" src={commentPfpOne} alt="comment-pfp-1" />
                            <h1>Hep</h1>
                        </div>
                        <p>I was here since the beginning! Good Luck my team!</p>
                    </div>

                    <div className="comentario item-2">
                        <div>
                            <img className="pfp" src={commentPfpTwo} alt="comment-pfp-2" />
                            <h1>Jeff</h1>
                        </div>
                        <p>I will bet De Vries. Definitely he is going to win. Otherwise, the most popular in this season.</p>
                    </div>

                    <div className="comentario item-3">
                        <div>
                            <img className="pfp" src={commentPfpThree} alt="comment-pfp-3" />
                            <h1>Alex</h1>
                        </div>
                        <p>OMG, SÃO PAULO!! VAMOS BRASIL</p>
                    </div>

                    <div className="comentario item-4">
                        <div>
                            <img className="pfp" src={commentPfpFour} alt="comment-pfp-4" />
                            <h1>Zanery</h1>
                        </div>
                        <p>I’ve got 1.000 Blitz just for entering here. How cool is that?</p>
                    </div>

                    <div className="comentario item-5">
                        <div>
                            <img className="pfp" src={commentPfpFive} alt="comment-pfp-5" />
                            <h1>User_5879</h1>
                        </div>
                        <p>Loving see eletric cars in competitions like that. Let’s save our nature with style!!</p>
                    </div>
                </div>

                <div className="live-message-box">
                    <div className="write-message">
                        <input type="text" placeholder="Envie uma mensagem" />
                    </div>
                    <div className="fanboost-choose">
                        <h1>FANBOOST</h1>
                        <h2>PILOTO ESCOLHIDO</h2>
                        <div className="position-racer">
                            <img className="attack-mini" src={attackMini} alt="fannboost icon" />
                            <img src={number} alt="1st Place" />
                            <img src={mahindraRacing} alt="scuderia: Mahindra Racing" />
                            <div>
                                <h3>MAHINDRA RACE</h3>
                                <p>DE VRIES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}