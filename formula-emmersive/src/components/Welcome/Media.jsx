import { createGlobalStyle } from "styled-components";

export const GlobalResponsive = createGlobalStyle`

.divWelcome {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
}

h1 {
    text-style: normal;
}

/* RESPONSIVIDADE */
/* RESPONSIVIDADE SMARTPHONES */
@media (max-width: 425px) {
    /* HEADER */
    .headerWelcome{
        height: 60px;
    }

    .logoWelcome-emmersive{
        width: 80px;
        margin: 0;
        justify-content: space-between;
    }

    .space-fill{
        display: none;
    }
    
    .headerWelcome-content{
        max-width: 320px;
        margin: 0 auto;
    }

    .headerWelcome-deco{
        width: 65px;
        height: 60px;
        margin-left: 0;
    }

    .gradientBar{
        height: 10px;
    }

    .init-section{
        margin-top: 15px;
        padding: 4px;
        font-size: 10px;
        color: white;
        border-radius: 7px;
    }

    /* MAIN */
    .divWelcome{
        margin-top: 0px;
        padding-top: 0;
    }

    /* section one */
    .section-one{
        max-width: 320px;
    }

    .text-saudacoes{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        margin: 30px 0;
        gap: 25px;
        width: 100%;
    }

    .text-saudacoes h1{
        font-size: 18px;
    }

    .text-saudacoes p{
        font-family: 'Michroma';
        font-size: 7px;
    }

    .text-saudacoes .saudacoes-anchor{
        height: 20px;
        width: 70px;
        font-size: 8px;
        border-radius: 5px;
        padding: 0 10px 0 10px;
    }

    .welcome-img{
        width: 100%;
    }

    .blue-frame-one-sec1{
        max-width: 320px;
        padding: 2px; /* largura da borda */ /* largura da borda */
    }

    .blue-frame-inner-one-sec1{
        padding: 6px; /* Conteúdo interno */
    
    }

    .blue-frame-two-sec1{
        max-width: 320px;
        padding: 2px; 

    }

    .blue-frame-inner-two-sec1{
        padding: 6px; 
    }   

    /* section 2 */
    .Welcomesection-two{
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px auto;
    }

    .section-two-content{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        gap: 0px;
        margin: 0 auto;
        max-width: 320px;

    }

    .video{
        min-width: 300px;
    }

    .introdução-card{
       display: none;
    }

    .blue-frame-one-sec2{
        max-width: 320px;
        padding-right: 2px; /* largura da borda */
        padding-bottom: 2px; /* largura da borda */
    }

    .blue-frame-inner-one-sec2{
        padding-right: 7px; /* Conteúdo interno */
        padding-bottom: 6px; /* Conteúdo interno */
    }

    .blue-frame-two-sec2{
        max-width: 320px;
        padding-right: 2px; 
        padding-bottom: 2px; 
    }

    .blue-frame-inner-two-sec2{
        padding-right: 7px; 
        padding-bottom: 6px;
    }

    .introduction{
        display: flex;
    }

    .introduction .conheca{
        font-size: 32px;
        margin-bottom: 15px;
    }

    /* section 3 */
    .section-three{
        max-width: 320px;
        margin: 15px auto;
    }

    .division-bars{
        width: 100%;
        font-size: 0px;
        
    }

    .section-three-div{
        height: 3px;
        margin: 3px 0;
        
    }

    .section-three-content p{
        font-family: "Numans", sans-serif;
        font-size: 10px;
        max-width: 280px;
        text-align: center;
        margin: 20px 0 30px 0;
    }

    .blitz-e-logo{
        gap: 40px;
    }

    .emmersive{
        max-width: 300px;
    }

    .blitz-logo{
        max-width: 80px;
    }

    .blitz-letter{
        max-width: 120px;
    }

    /* section-four */
    .section-four{
        max-width: 320px;
        margin: 30px auto;
        gap: 10px;
    }

    .section-four-div{
        height: 3px;
        margin: 3px 0;
    }

    .container-text-shadow{
        display: flex;
        justify-content: center;
    }

    .conheca{
        font-size: 32px;
        text-shadow: #2210f4;

    }

    .atras{
        margin-top: 4px;

    }

    .fanboost{
        font-family: 'Michroma', sans-serif;
        font-size: 38px;
    }

    .attack-description{
        margin: 30px 0;
        display: flex;
        gap: 15px;
        margin: 30px 0;
        align-items: center;
    }

    .attack-description p{
        font-family: 'Numans', sans-serif;
        text-align: start;
        max-width: 240px;
        font-size: 8px;

    }

    .attack-description img{
        width: 60px;
        height: 80px;
    }

    .make-the-difference{
        font-size: 14px;
        text-align: center;
    }

    /* section 5 */
    .section-five-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        margin: 30px auto;
    }

    .about-container{
        display: grid;
        max-width: 320px;
        overflow-x: hidden;
        overflow: auto;
        grid-template-columns: repeat(4, 196px);
        grid-template-rows: 286px;
        gap: 15px;
        padding: 0 0 30px 0;
    }

    .about-container::-webkit-scrollbar-thumb {
        border-radius: 5px;
        min-height: 15px;
    }


    .mini-container-text h1{
        text-align: center;
        font-family: 'Michroma', sans-serif;    
        font-weight: 400;
        font-size: 18px;
        margin: 30px 0;
    }

    .mini-container-text p{
        text-align: center;
        font-family: 'Numans', sans-serif;    
        font-weight: 400;
        font-size: 14px;
        line-break: normal;
        margin: 0px 0;
    }

    .mini-container-img img{
        width: 100%;
        height: 130px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;

    }

    .section-five .conheca{
        font-size: 18px;    
    }

    /* section 6 */
    .section-six{
        margin: 40px auto;
        padding: 0 0 50px 0;
        border-bottom: 1px solid white;
    }

    .section-six-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 40px;
        max-width: 320px;
    }

    .plataform-functions{
        font-family: 'Numans', sans-serif;
        font-size: 12px;
        width: 320px;
    }

    .plataform-functions ul{
        margin: 0 30px 30px 30px;
        width: 250px;
    }

    .plataform-functions li{
        margin: 5px;
        width: 90%;
    }

    .plataform-functions li img{
        margin: 0 0 0 10px;
        width: 10px;
    }

    .plataform-functions .continue{
        padding: 10px;
        width: 100px;
        height: 30px;
        border-radius: 8px;
        font-size: 14px;
        margin: 0 0 0 20px;
    }
    .section-six .patrocinador{
        width: 90%;
    }

    .section-six .conheca{
        font-size: 18px;
    }

    /* Section 7 */
    .section-seven{
        max-width: 320px;
        height: 300px;
    }

    .background-seven img{
        width: 300px;
        height: 180px;
    }


    .section-seven a{
        min-width: 200px;
        min-height: 25px;
        border-radius: 5px;
        font-size: 12px;
    }

    footer{
        width: 100%;
        height: 60px;
        background-color: #2210F4;
    
    }
    
    .footer-content{
        max-width: 320px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: center;
    }
    
    .footer-content h1{
        font-size: 10px;
    }

    .footer-content p{
        font-size: 10px;
    }
    
    .footer-logo{
        width: 80px;
    }
    
}


/* RESPONSIVIDADE TABLETS */
@media (min-width: 426px) and (max-width: 768px){
    /* HEADER */
    .headerWelcome{
        height: 60px;
    }

    .logo-emmersive{
        width: 110px;
        margin: 0 0 0 120px;
    }

    .headerWelcome-deco{
        width: 75px;
        height: 60px;
        margin-left: 0;
    }

    .gradientBar{
        height: 10px;
    }

    .init-section{
        margin-top: 15px;
        padding: 4px;
        font-size: 12px;
        color: white;
        border-radius: 7px;
    }

    /* MAIN */
    .divWelcome{
        margin-top: -50px;
    }

    /* section one */
    .section-one{
        max-width: 425px;
    }

    .text-saudacoes{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        margin: 30px 0;
        gap: 35px;
        width: 100%;
    }

    .text-saudacoes h1{
        font-size: 24px;
    }

    .text-saudacoes p{
        font-family: 'Michroma';
        font-size: 12px;
    }

    .text-saudacoes .saudacoes-anchor{
        height: 30px;
        width: 90px;
        font-size: 10px;
        border-radius: 7px;
        padding: 0 10px 0 10px;
    }

    .welcome-img{
        width: 100%;
    }

    .blue-frame-one-sec1{
        max-width: 425px;
        padding: 2px; /* largura da borda */ /* largura da borda */
    }

    .blue-frame-inner-one-sec1{
        padding: 6px; /* Conteúdo interno */

    }

    .blue-frame-two-sec1{
        max-width: 425px;
        padding: 2px; 

    }

    .blue-frame-inner-two-sec1{
        padding: 6px; 
    }   

    /* section 2 */
    .Welcomesection-two{
        min-height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px auto;
    }

    .section-two-content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        gap: 0px;
        margin: 0 auto;
        max-width: 425px;

    }

    .video{
        display: flex;
        align-items: center;
        width: 330px;
    }

    .introdução-card{
    display: none;
    }

    .blue-frame-one-sec2{
        max-width: 425px;
        padding-right: 3px;
        padding-bottom: 3px;
    }

    .blue-frame-inner-one-sec2{
        padding-right: 7px;
        padding-bottom: 6px;
    }

    .blue-frame-two-sec2{
        max-width: 425px;
        padding-right: 3px;
        padding-bottom: 3px;
    }

    .blue-frame-inner-two-sec2{
        padding-right: 7px;
        padding-bottom: 6px;
    }

    .introduction{
        display: flex;
    }

    .introduction .conheca{
        font-size: 32px;
        margin-bottom: 15px;
    }

    /* section 3 */
    .section-three{
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 425px;
        margin: 15px auto;
    }

    .division-bars{
        width: 100%;
        font-size: 0px;
        
    }

    .section-three-div{
        height: 4px;
        margin: 4px 0;
        min-width: 425px;
        
    }

    .section-three-content p{
        font-family: "Numans", sans-serif;
        font-size: 12px;
        max-width: 320px;
        text-align: center;
        margin: 20px 0 30px 0;
    }

    .blitz-e-logo{
        gap: 40px;
    }

    .emmersive{
        max-width: 390px;
    }

    .blitz-logo{
        max-width: 90px;
    }

    .blitz-letter{
        max-width: 140px;
    }

    /* section-four */
    .section-four{
        max-width: 425px;
        margin: 30px auto;
        gap: 10px;
    }

    .section-four-div{
        height: 4px;
        margin: 4px 0;
        min-width: 425px;
    }

    .container-text-shadow{
        display: flex;
        justify-content: center;
    }

    .conheca{
        font-size: 36px;
        text-shadow: #2210f4;

    }

    .atras{
        margin-top: 4px;

    }

    .fanboost{
        font-family: 'Michroma', sans-serif;
        font-size: 40px;
    }

    .attack-description{
        margin: 30px 0;
        display: flex;
        gap: 15px;
        margin: 30px 0;
        align-items: center;
    }

    .attack-description p{
        font-family: 'Numans', sans-serif;
        text-align: start;
        max-width: 290px;
        font-size: 10px;

    }

    .attack-description img{
        width: 80px;
        height: 100px;
    }

    .make-the-difference{
        font-size: 18px;
        text-align: center;
    }

    /* section 5 */
    .section-five-content{
        margin: 30px auto;
    }
    .about-container{
        display: grid;
        max-width: 425px;
        overflow-x: hidden;
        overflow: auto;
        grid-template-columns: repeat(4, 236px);
        grid-template-rows: 316px;
        gap: 15px;
        padding: 0 0 30px 0;
    }

    .about-container::-webkit-scrollbar-thumb {
        border-radius: 5px;
        min-height: 15px;
    }


    .mini-container-text h1{
        text-align: center;
        font-family: 'Michroma', sans-serif;    
        font-weight: 400;
        font-size: 18px;
        margin: 30px 0;
    }

    .mini-container-text p{
        text-align: center;
        font-family: 'Numans', sans-serif;    
        font-weight: 400;
        font-size: 14px;
        line-break: normal;
        margin: 0px 0;
    }

    .mini-container-img img{
        width: 100%;
        height: 130px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;

    }

    .section-five .conheca{
        display: flex;
        justify-content: center;
        font-size: 24px;
        width: 425px;
    }

    /* section 6 */
    .section-six{
        margin: 40px auto;
        padding: 0 10px 80px 10px;
        border-bottom: 1px solid white;
    }

    .section-six-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 40px;
        max-width: 320px;
    }

    .plataform-functions{
        font-family: 'Numans', sans-serif;
        font-size: 14px;
        width: 100%;
    }

    .plataform-functions ul{
        margin: 0 30px 30px 30px;
        max-width: 320px;
    }

    .plataform-functions li{
        margin: 5px;
    }

    .plataform-functions li img{
        margin: 0 0 0 10px;
        width: 15px;
    }

    .plataform-functions .continue{
        padding: 10px;
        width: 100px;
        height: 30px;
        border-radius: 8px;
        font-size: 18px;
        margin: 0 0 0 20px;
    }
    .section-six .patrocinador{
        width: 90%;
    }

    .section-six .conheca{
        font-size: 24px;
    }

    /* Section 7 */
    .section-seven{
        max-width: 320px;
        height: 300px;
    }

    .background-seven img{
        width: 400px;
        height: 180px;
    }


    .section-seven a{
        min-width: 200px;
        min-height: 35px;
        border-radius: 5px;
        font-size: 12px;
    }

    footer{
        width: 100%;
        height: 60px;
        background-color: #2210F4;
    
    }
    
    .footer-content{
        max-width: 425px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: center;
    
    }
    
    .footer-content h1{
        font-size: 12px;
    }

    .footer-content p{
        font-size: 12px;
    }
    
    .footer-logo{
        width: 110px;
    }
}


/* RESPONSIVIDADE LAPTOPS */
@media (min-width: 769px) and (max-width: 1024px){
    /* HEADER */
    .headerWelcome-deco{
        height: 80px;
        width: 125px;
        margin-left: 0px;
    }
    
    .gradientBar{
        height: 16px;
    }
    
    .init-section{
        margin-top: 35px;
        padding: 6px;
    }

    .logo-emmersive{
        margin-left: 170px;
    }

    /* MAIN */
    .divWelcome{
        margin-top: 60px auto;
    }

    /* section one */
    .section-one{
        max-width: 768px;
    }

    /* section 2 */
    .Welcomesection-two{
        min-height: 400px;
        margin: 60px auto;
    }

    .section-two-content{
        gap: 10px;
        margin: 0 auto;
        max-width: 768px;
        display: flex;
        flex-wrap: nowrap;
    }

    .introdução-card{
        max-width: 286px;
        max-height: 286px;
        margin-bottom: 35px;
    }
    
    /* section 5 */
    .section-five-content{
        margin: 60px auto;
    }

    .about-container{
        max-width: 768px;
    }

    .section-five .conheca{
        font-size: 46px;
    }

    /* section 6 */
    .section-six{
        margin: 60px auto;
        padding: 0 10px 60px 10px;
    }

    .section-six-content{
        display: flex;
        flex-wrap:nowrap;
        gap: 15px;
        margin-top: 50px;
        max-width: 768px;
    }

    .section-six-content img{
        width: fit-content;
        height: fit-content;
    }

    .section-six-content .patrocinador{
        width: 350px;
    }

    .plataform-functions{
        font-family: 'Numans', sans-serif;
        font-size: 20px;
        width: 60%;
    }

    .plataform-functions ul{
        width: 90%;
        margin: auto 30px;
        padding-bottom: 15px;
    }

    .plataform-functions li{
        width: 90%;
        margin: 12px 0 12px 12px;
        font-size: 18px;
    }

    .plataform-functions .continue{
        margin: 0 0 0 20px;
        font-size: 18px;
        border-radius: 7px;
    }

    .section-six .conheca{
        font-size: 54px;
        
    }

    /* Section 7 */
    .section-seven{
        max-width: 768px;
        height: 470px;
        
    }

    .background-seven img{
        width: 768px;
        height: fit-content;
    }

    /* FOOTER */
    footer{
        width: 100%;
        height: 80px;
        background-color: #2210F4;

    }

    .footer-content{
        max-width: 768px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
}
`