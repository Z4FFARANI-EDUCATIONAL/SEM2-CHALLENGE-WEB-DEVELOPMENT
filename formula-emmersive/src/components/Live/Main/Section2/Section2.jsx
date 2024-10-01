import './Section2.css'
import '../../Media.jsx'

import mahindra from '../../../../assets/images/scuderias/MAHINDRA.png'
import andretti from '../../../../assets/images/scuderias/ANDRETTI.png'
import envision from '../../../../assets/images/scuderias/ENVISION.png'  
import dsAuto from '../../../../assets/images/scuderias/DS AUTO.png'
import jaguar from '../../../../assets/images/scuderias/JAGUAR.png'   
import maserati from '../../../../assets/images/scuderias/MASERATI.png'
import abt from '../../../../assets/images/scuderias/ABT.png'
import ert from '../../../../assets/images/scuderias/ERT.png'  

import liveDot from '../../../../assets/images/liveDot.png'
import greenPlay from '../../../../assets/images/greenPlay.png'
import play from '../../../../assets/images/Play.png'
import impulse from '../../../../assets/images/impulse.png'
import pause from '../../../../assets/images/pause.png'
import audio from '../../../../assets/images/Audio.png'
import expand from '../../../../assets/images/Expand.png'
import impulseQuest from '../../../../assets/images/impulse-quest.png'
import blitzZeroBet from '../../../../assets/images/blitz0bet.png'
import whiteCheck from '../../../../assets/images/white-check.png'
import blitzLetter from '../../../../assets/images/Blitz-letter.png'
import blueBlitz from '../../../../assets/images/blue blitz.png'
import blitz from '../../../../assets/images/blitz.png'
import { useState } from 'react'

export default function Section2() {
    const [aposta, setAposta] = useState(0);

    const incrementAposta = () => {
        setAposta(aposta + 1000);
    };

    const decrementAposta = () => {
        if (aposta > 0) {
            setAposta(aposta - 1000);
        }
    };

    return (
        <div className="section-two" id="placar">
            <div className="rank">
                <h1><img className="live-dot-bar" src={liveDot} alt="ponto live" />PLACAR</h1>
            </div>
            <div className="vision">
                <h1><img className="live-dot-bar" src={liveDot} alt="ponto live" />VISÃO DOS PILOTOS</h1>
            </div>

            <div className="position first">
                <img className="status-icon" src={greenPlay} alt="boosted" />
                <div className="team-racer">
                    <h2>MAHINDRA RACING</h2>
                    <h1>DE VRIES</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={mahindra} alt="scuderia" />
                    <p>1</p>
                </div>
            </div>

            <div className="position second">
                <img className="status-icon" src={greenPlay} alt="boosted" />
                <div className="team-racer">
                    <h2>DS AUTOMOBILES</h2>
                    <h1>VANDOORNE</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={dsAuto} alt="scuderia" />
                    <p>2</p>
                </div>
            </div>

            <div className="position third">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>ANDRETTI</h2>
                    <h1>NATO</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={andretti} alt="scuderia" />
                    <p>3</p>
                </div>
            </div>

            <div className="position fourth">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>EVISION RACING</h2>
                    <h1>FROJS</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={envision} alt="scuderia" />
                    <p>4</p>
                </div>
            </div>

            <div className="position fifth">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>ABT FORMULA E</h2>
                    <h1> VAN DER LINDE</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={abt} alt="scuderia" />
                    <p>5</p>
                </div>
            </div>

            <div className="position sixth">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>MAHINDRA RACING</h2>
                    <h1>MORTARA</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={mahindra} alt="scuderia" />
                    <p>6</p>
                </div>
            </div>

            <div className="position seventh">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>JAGUAR TCS RACING</h2>
                    <h1>CASSIDY</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={jaguar} alt="scuderia" />
                    <p>7</p>
                </div>
            </div>

            <div className="position eighth">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>ERT FORMULA E</h2>
                    <h1>TICKTUM</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={ert} alt="scuderia" />
                    <p>8</p>
                </div>
            </div>

            <div className="position ninth">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>MAHINDRA RACING</h2>
                    <h1>JORDAN KING</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={mahindra} alt="scuderia" />
                    <p>9</p>
                </div>
            </div>

            <div className="position tenth">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>MASSERATI MSG</h2>
                    <h1>DARUVALA</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={maserati} alt="scuderia" />
                    <p>10</p>
                </div>
            </div>

            <div className="position eleventh">
                <img className="status-icon" src={play} alt="without-boost" />
                <div className="team-racer">
                    <h2>MASSERATI MSG</h2>
                    <h1>NIXON</h1>
                </div>
                <div className="team-place">
                    <img className="team" src={maserati} alt="scuderia" />
                    <p>11</p>
                </div>
            </div>

            <div className="runners-vision">

                <div className="runner-stts devries">
                    <div className="runner-stts-content">
                        <div className="header-cam">
                            <div className="name-team">
                                <img className="team-cam" src={mahindra} alt="team" />
                                <h1>DE VRIES</h1>
                            </div>
                            <div className="button-impulse">
                                <button><img src={impulse} alt="impulse" /><span>IMPULSIONADO</span></button>
                            </div>
                        </div>
                        <div className="camera-status">
                            <div className="cam-bkg ">
                                <div className="gif-devriesbkg">
                                    <div className="screen-icons">
                                        <img className="pause" src={pause} alt="pausar" />
                                        <div className="audio-fullscreen">
                                            <img className="audio" src={audio} alt="audio bar" />
                                            <img className="fullscreen" src={expand} alt="fullscreen" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="impulse">
                                <div className="button-impulse-smartphone">
                                    <button><img src={impulse} alt="impulse" />IMPULSIONADO</button>
                                </div>
                                <h2>BATERIA</h2>
                                <div className="time-status">
                                    <div className="battery-bar">
                                        <p className="battery">25 kWh</p>
                                    </div>
                                    <p className="time green">TEMPO + RAPIDO: <span style={{color: '#37FF4F'}} onClick={() => addAposta(1)}>25 : 35 : 259</span></p>
                                    <p className="time red">TEMPO + LENTO: <span style={{color: '#DD052C'}}>32: 24 : 109</span></p>
                                    <p className="time red">ATTACK MODE: <span style={{fontFamily: 'Montserrat, sans-serif', color: '#DD052C'}}>DESATIVADO</span></p>
                                </div>
                                <div className="lap">
                                    <h3>VOLTA</h3>
                                    <h3>23 | 45</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="glow-hr" />
                <hr className="glow-hr" />
                <hr className="glow-hr" />
                

                <div className="runner-stts vandoorne">
                    <div className="runner-stts-content">
                        <div className="header-cam">
                            <div className="name-team">
                                <img className="team-cam" src={dsAuto} alt="team" />
                                <h1>VANDOORNE</h1>
                            </div>
                            <div className="button-impulse">
                                <button><img src={impulseQuest} alt="impulse" /><span>IMPULSIONAR</span></button>
                            </div>
                        </div>
                        <div className="camera-status">
                            <div className="cam-bkg">
                                <div className="gif-vandoornebkg">
                                    <div className="screen-icons">
                                        <img className="pause" src={pause} alt="pausar" />
                                        <div className="audio-fullscreen">
                                            <img className="audio" src={audio} alt="audio bar" />
                                            <img className="fullscreen" src={expand} alt="fullscreen" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="impulse">
                                <div className="button-impulse-smartphone">
                                    <button><img src={impulseQuest} alt="impulse" />IMPULSIONAR</button>
                                </div>
                                <h2>BATERIA</h2>
                                <div className="time-status">
                                    <div className="battery-bar">
                                        <p className="battery">28 kWh</p>
                                        <p className="fill-battery">.</p>
                                    </div>
                                    <p className="time green">TEMPO + RAPIDO: <span style={{color: '#37FF4F'}}>25 : 35 : 259</span></p>
                                    <p className="time red">TEMPO + LENTO: <span style={{color: '#DD052C'}}>32: 24 : 109</span></p>
                                    <p className="time red">ATTACK MODE: <span style={{fontFamily: 'Montserrat, sans-serif', color: '#DD052C'}}>DESATIVADO</span></p>
                                </div>
                                <div className="lap">
                                    <h3>VOLTA</h3>
                                    <h3>23 | 45</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blitz-bet-invisible-bkg">
                <div className="blitz-bet">
                    <img className="blitz-bet-icon" src={blitzZeroBet} alt="blitz-bet-icon" />
                    <div className="bet-card left-side">
                        <div className="bet-title">
                            <h1><img className="live-dot-bar" src={liveDot} alt="ponto live" />MULTIPLICADOR</h1>
                            <h2>QUEM VENCERÁ?</h2>
                        </div>
                        <div className="choose-runner">
                            <select className="select-runner" name="corredor" id="corredor" ClassName="form-select">
                                    <option value="" selected disabled>Selecione</option>
                                    <option value="CASSIDY">CASSIDY</option>
                                    <option value="DARUVALA">DARUVALA</option>
                                    <option value="DE VRIES">DE VRIES</option>
                                    <option value="FROJS">FROJS</option>
                                    <option value="JORDAN KING">JORDAN KING</option>
                                    <option value="MORTARA">MORTARA</option>
                                    <option value="NATO">NATO</option>
                                    <option value="NIXON">NIXON</option>
                                    <option value="TICKTUM">TICKTUM</option>
                                    <option value="VAN DER LINDE">VAN DER LINDE</option>
                                    <option value="VANDOORNE">VANDOORNE</option>
                            </select>
                            <button className="check">
                                <img src={whiteCheck} alt="confirmar" />
                            </button>
                        </div>
                        <div className="choosen-place">
                            <img className="choosen-team" src={mahindra} alt="team-bet" />
                            <div className="quantity-bet">
                                <div>
                                    <p>MAHINDRA RACING</p>
                                    <h1>DE VRIES</h1>
                                </div>
                                <p className="qttBlitz-bet" id="blitz-bet">{aposta}</p>
                            </div>
                        </div>
                        <div className="add-guess">
                            <img className="blitz-guess" src={blitzLetter} alt="Blitz" />
                            <div className="Livemore-minus-btns">
                                <button className="Livemore-btn" id="maisBtn" onClick={() => incrementAposta()}>+</button>
                                <button className="Liveminus-btn" id="menosBtn" onClick={() => decrementAposta()}>-</button>
                                <img src={blueBlitz} alt="blitz blue" />
                            </div>
                        </div>
                        <p className="low-res-bet-p" style={{fontWeight: '400', fontFamily: 'Michroma, sans-serif', fontSize: '7px', marginBottom: '10px'}}>APOSTE SEUS BLITZ: ESCOLHA UM CORREDOR OU SCUDERIA</p>
                    </div>
                    <div className="bet-card right-side">
                        <div className="big-blitz">
                            <img src={blitz} alt="BLITZ-ICON" />
                            <h1 className="big-blitz" id="multiplicado">{aposta}</h1>
                        </div>
                        <h2>MULTIPLICADORES</h2>
                        <div className="multiplicadores">
                            <div className="multi">
                                <img src={mahindra} alt="MAHINDRA LOGO" />
                                <div className="h1-gold">
                                    <h1>CORREDOR</h1>
                                </div>
                                <div className="p-green">
                                    <p>4X</p>
                                </div>
                            </div>
                            <div className="multi">
                                <img src={mahindra} alt="MAHINDRA LOGO" />
                                <div className="h1-gold">
                                    <h1>SCUDERIA</h1>
                                </div>
                                <div className="p-green">
                                    <p>2X</p>
                                </div>
                            </div>
                            <p className="low-res-bet-p" style={{fontWeight: '400', fontFamily: 'Michroma, sans-serif', fontSize: '7px', color: '#37FF4F', width: '100%', textAlign: 'center', marginTop: '15px'}}>COMPETIÇÃO EM ANDAMENTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}