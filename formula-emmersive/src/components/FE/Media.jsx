import { createGlobalStyle } from "styled-components"

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

        .logoFullBlue{
            max-width: 260px;
            max-height: 100px;
            margin-bottom: 15px;
        }
        
        .bottomPage-deco{
            right: 30%;
        }

        .bottomPageFE-deco{
            max-width: 200px;
            max-height: 200px;
        }
        
        .top-deco img{
            max-width: 170px;
        }
        
        main{
            max-width: 320px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: auto;
        }

        /* CONTEUDO FE */
        .FE-content{
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
        
        .slide-btns button{
            color: white;
            background-color: #2210F4;
            border: none;
            width: 30px;
            height: 20px;
            font-size: 18px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        
        }

        .FE-content p{
            font-family: "Numans", sans-serif;
            text-align: center;
            margin-top: 30px;
            width: 100%;
            padding-bottom: 20px;
        }
        
        
        .slide-container{
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
            width: 60px;
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

        .logoFullBlue{
            max-width: 330px;
            max-height: 160px;
            margin-bottom: 15px;
        }

        .bottomPage-deco{
            right: 30%;
        }
        
        .bottomPageFE-deco{
            max-width: 250px;
            max-height: 200px;
        }

        .top-deco{
            margin-left: 0px;
        }
        .top-deco img{
            max-width: 240px;
        }

        main{
            max-width: 425px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: auto;
        }

        /* CONTEUDO FE */
        .FE-content{
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

        .slide-btns button{
            border: none;
            width: 35px;
            height: 20px;
            font-size: 18px;
        }

        .FE-content p{
            font-family: "Numans", sans-serif;
            text-align: center;
            margin-top: 30px;
            width: 100%;
            padding-bottom: 20px;
        }


        .slide-container{
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

        .redirect{
            width: 425px;
            justify-content: center;
            gap: 10px;
            padding: 0 0 20px 0;
        }

        .redirect img{
            padding: 8px 0 0 0 ;
            width: 80px;
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

        .FE-content p{
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
            bottom: 0;
            right: 40%;
            padding-left: 500px;
            z-index: -1;
        }
        
        .bottomPageFE-deco{
            width: 280px;
        }

        .slides{
            display: flex;
            transition: transform 0.5s ease;
            gap: 10px;
        }
    }
`