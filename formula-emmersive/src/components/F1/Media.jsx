import { createGlobalStyle } from 'styled-components'

export const GlobalResponsive = createGlobalStyle`
    @media (max-width: 425px) {
        /* HEADER */
        header{
        height: 60px;
    }

    .header-content{
        max-width: 320px;
        display: flex;
        justify-content: space-between;
    }

    .logo-emmersive{
        width: 80px;
    }

    .header-deco{
        height: 60px;
        width: 75px;
    }

    .name-blitz{
        font-size: 12px;
    }
    
    .blitz-icon{
        width: 10px;
        height: 15px;
        
    }

    .moldura-user{
        width: 35px;
        height: 35px;
    }

    .username{
            font-size: 10px;
        }  
    /* HEADER BAR */
    .header-bar{
        height: 8px;
    }

    .F1-logo{
        max-width: 260px;
        margin-bottom: 15px;
    }
    
    .bottomPageF1-deco{
        max-width: 150px;
        max-height: 150px;

    }

    .bottomPage-deco{
            position: absolute;
            left: 0;
            z-index: -1;
    }
    

        .top-deco img{
        max-width: 240px;
    }

        .bottomPage-deco{
            position: absolute;
            left: 0;
            z-index: -1;
    }

    main{
        max-width: 320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: auto;
    }

    /* CONTEUDO F1 */
    .F1-content{
        max-width: 320px;
        margin: 0 auto;
        padding-top: 20px;
        background: none;
    
    }
    
    .carrossel-btns{
        max-width: 320px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .carrossel-btns a{
        color: white;
        font-size: 12px;
        padding: 0;
    }
    
    .slide-btnsf1 button{
        width: 30px;
        height: 20px;
    }

    .slide-btnsf1 .left{
        font-size: 24px;
        }


        .slide-btnsf1 .right{
        font-size: 24px;
        }

    .F1-content p{
        font-family: "Numans", sans-serif;
        text-align: center;
        margin-top: 30px;
        width: 100%;
        padding-bottom: 20px;
    }
    
    
    .slide-containerf1{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 320px;
        height: 210px;
        padding: 10px;
        overflow: hidden;
        margin: auto;
    }
        
    .slides{
        display: flex;
        transition: transform 0.5s ease;
        gap: 20px;
    }
    
    .slide-text-container{
        max-width: 320px;
    }
    
    .slides-textos{
        display: flex;
        transition: transform 0.5s ease;
        font-size: 12px;
        width: 320px;
    }

    .redirect{
        max-width: 320px;
        justify-content: center;
        gap: 10px;
        padding: 0 0 20px 0;
    }
    
    .redirect img{
        padding: 8px 0 0 0 ;
        width: 45px;
    }
    
    
    .redirect a{
        color: white;
        font-family: 'Formula', sans-serif;
        font-size: 12px;
    }
        
    
    /* FOOTER */
    footer{
        height: 60px;
    }
    
    .footer-content{
        max-width: 320px;
    }
    
    .footer-content h1{
        font-size: 12px;
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
    header{
        height: 60px;
    }

    .header-content{
        max-width: 425px;
        display: flex;
        justify-content: space-between;
    }

    .logo-emmersive{
        width: 110px;
    }

    .header-deco{
        height: 60px;
        width: 80px;
    }

    .name-blitz{
        font-size: 14px;
    }

    .blitz-icon{
        width: 10px;
        height: 15px;
    }

    .moldura-user{
        width: 35px;
        height: 35px;
    }

    /* HEADER BAR */
    .header-bar{
        height: 10px;
    }

    .F1-logo{
            padding-top: 70px;
            max-width: 300px;
            margin-bottom: 15px;
    }

    .bottomPage-deco{
        right: 30%;
    }
    
    .bottomPageF1-deco{
        max-width: 200px;
        max-height: 150px;
    }

    .top-deco img{
        max-width: 240px;
    }

        .bottomPage-deco{
            position: absolute;
            left: 0;
            z-index: -1;
    }
    
    .topPageF1-deco{
            position: absolute;
            top: 0;
            right: 0;
            width: 400px;
        }

    main{
        max-width: 425px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: auto;
    }

    /* CONTEUDO F1 */
    .F1-content{
        max-width: 425px;
        margin: 0 auto;
        padding-top: 20px;
        background: none;

    }

    .carrossel-btns{
        max-width: 425px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .carrossel-btns a{
        color: white;
        font-size: 14px;
        padding: 0;
    }

    .slide-btnsf1 button{
        border: none;
        width: 35px;
        height: 20px;
        font-size: 10px;
    }

    .F1-content p{
        font-family: "Numans", sans-serif;
        text-align: center;
        margin-top: 30px;
        width: 100%;
        padding-bottom: 20px;
    }


    .slide-containerf1{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 425px;
        height: 275px;
        padding: 10px;
        overflow: hidden;
        margin: auto;
    }
    
    .slides{
        display: flex;
        transition: transform 0.5s ease;
        gap: 20px;
    }

    .slide-text-container{
        max-width: 425px;
    }

    .slides-textos{
        display: flex;
        transition: transform 0.5s ease;
        font-size: 14px;
        width: 425px;
    }

    .slide-btnsf1 .left{
            font-size: 24px;
        }


        .slide-btnsf1 .right{
            font-size: 24px;
        }

    .redirect{
        width: 425px;
        justify-content: center;
        gap: 10px;
        padding: 0 0 20px 0;
    }

    .redirect img{
        padding: 8px 0 0 0 ;
        width: 50px;
    }


    .redirect a{
        color: white;
        font-family: 'Formula', sans-serif;
        font-size: 14px;
    }
    
    /* FOOTER */
    footer{
        height: 60px;
    }

    .footer-content{
        max-width: 425px;
    }

    .footer-content h1{
        font-size: 14px;
    }

    .footer-content p{
        font-size: 14px;
    }

    .footer-logo{
        width: 110px;
    }
    }

    /* RESPONSIVIDADE LAPTOPS */
    /* O DESIGN POR SI SÓ JA É RESPONSIVO */
    @media (min-width: 769px){
    .redirect{
        padding: 0;
    }

    .F1-content p{
        font-family: "Numans", sans-serif;
        text-align: center;
        margin-top: 30px;
        width: 100%;
        padding-bottom: 10px;
    }

    main{
        overflow: auto;
    }

    .bottomPage-deco{
        position: absolute;
        left: 0;
        z-index: -1;
    }
    
    .bottomPageF1-deco{
            width: 250px;
    }

    .topPageF1-deco{
            position: absolute;
            top: 0;
            right: 0;
            width: 500px;
        }

        .slides{
            display: flex;
            transition: transform 0.5s ease;
            gap: 10px;
        }
    }
`