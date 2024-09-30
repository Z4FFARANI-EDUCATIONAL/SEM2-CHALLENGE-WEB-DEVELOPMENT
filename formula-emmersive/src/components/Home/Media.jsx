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

    .headerBtns{
        display: none;
    }

    .headerBtn-768w{
        display: flex;
        height: 35px;
        width: 35px;
    }

    .headerBtn-768w button{
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    .headerBtn-768w img{
        width: 100%;
        height: 100%;
    }

    .logo-emmersive{
        width: 80px;
        margin-left: 65px;
    }

    .header-deco{
        height: 60px;
        width: 75px;
    }

    .name-blitz{
        display: flex;
        flex-direction: column;
        align-items: end;
        background-color: transparent;
        font-size: 12px;
    }
    
    .blitz-qtd{
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: transparent;
        font-weight: bold;
        font-style: italic;
        color: rgb(251,226,1);
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

    /* NAVBAR */
    
    .nav-cont{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        font-size: 10px;
        max-width: 320px;
    }
    
    .nav-cont a{
        background: transparent;
        text-decoration: none;
        color: #ffffff;
    }
    
    .navLiveDot{
        width: 5px;
        height: 5px;
        margin: 0 2px 0 0;
        animation: pisca 1s ease-in-out infinite alternate;
    }
    
    /* SECTION  1 */
    .Homesection-one{
        max-width: 320px;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        padding-bottom: 0px; 
    }

    .section-title-card{
        width: 100%;
        display: flex;
        flex-direction: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        font-weight: bold;
        font-style: italic;
    }

    .section-title-card h1{
        font-size: 16px;
    }

    .section-title-card h2{
        font-weight: 600;
        font-size: 10px;
    }

    
    .share-btns{
        display: flex;
        gap: 0px;
        height: 30px;
        justify-content: center;
    }


    .share-btns button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;
    }

    .tiny-share img {
        height: 20px;
        width: 20px;
    }

    /* OCULTA COMPARTILHAR GRANDE */
    button.big-share{
        display: none;
    }


    /* BORDAS DE SEÇÃO PERSONALIZADAS */
    .Homeblue-frame-one-sec1, .Homeblue-frame-inner-one-sec1, .Homeblue-frame-two-sec1, .Homeblue-frame-inner-two-sec1{
        display: flex;
        background-color: transparent;
        padding: 0;
        background: none;
    }

    /* BORDAS DE SEÇÃO PERSONALIZADAS FIM*/

    .section-card{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }

    .card-btns{
        display: none;
    }
    /* NOVOS CARD-BTNs */

    .card1{
        width: 100%;
    }

    .mw425-blitz-shop-btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 320px;
        margin: 15px auto 0 auto;
        gap: 10px;
    }

    .mw425-blitz-shop-btn a{
        width: 100px;
        height: 20px;
        font-size: 14px;
        border-radius: 3px;
    }

    .mw425-blitz-shop-btn p{
        font-size: 10px;
        font-style: 'Montserrat', sans-serif;
        font-style: italic;
        font-weight: bold;
    }

    /* SECTION 2 */
    .Homesection-two{
        max-width: 320px;
        margin: 30px auto;
        display: flex;
        flex-direction: column; 
    }
    
    .Homesection-two{
        margin-top: 0px;
    }
    
    .card2 img{
        width: 100%;
        max-width: 320px;
    }
    
    .live-corner{
        width: 75px;
        height: 25px;
        font-size: 10px;
        border-bottom-right-radius: 50px;
    
    }
    
    /* LIVE PONTINHO PISCANTE */
    .live-corner img{
        width: 10px;
        height: 10px;
        margin: 0 2px 0 8px;
    }
     
    
    /* BORDA PERSONALIZADA */
    .Homeblue-frame-one-sec2, .Homeblue-frame-inner-one-sec2,  .Homeblue-frame-two-sec2, .Homeblue-frame-inner-two-sec2{
        display: flex;
        background-color: transparent;
        padding: 0;
        background: none;
    }
    

    /* BORDAPERSONALIZADA */
    
    h1.aposte-blitz{
        font-size: 10px;
        margin-top: 5px;
        text-align: center;
    }


    /* SECTION 3 */
    .shop-banner-background{
        height: 70px;
    }
    
    .banner-decoration-spot{
        max-width: 320px;
        height: 100%;
    
    }
    
    
    .blitz-title{
        max-width: 320px;
    }
    
    .blitzshop-logo{
        height: 30px;
        width: 120px;
        margin-top: 15px;
    }
    
    .title-box{
        margin-left: 50px;
    }
    
    .title-box h1{
        font-size: 10px;
    }
    
    .sorteio{
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        max-width: 320px;
    }
    
    .blitz-tickets{
        display: flex;
        align-items: center;
        gap: 3px;
    }
    
    .blitz-tickets img{
        width: 15px;
    }
    
    
    /* BORDA PERSONALIZADA */
    .Homeblue-frame-one-sec3, .Homeblue-frame-inner-one-sec3, .Homeblue-frame-two-sec3,  .Homeblue-frame-inner-two-sec3{
        display: flex;
        background-color: transparent;
        padding: 0;
        background: none;
    }
    
    .Homeblue-frame-inner-one-sec3{
        padding-top: 20px;
    }
    
    .sorteio-title{
        display: flex;
        font-size: 16px;
        justify-content: center;
        width: 320px;
        height: 50px;
    }
    
    
    /* BORDA PERSONALIZADA FIM */
    
    /* AREA DE SORTEIO(SEÇÃO 3) */
    .sorteio-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 320px;
        height: 100%;
        background-color:#2210F4;
        border-radius: 15px;
    }
    
    .sorteio-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    
    }
    
    .anounce-img-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        margin-right: 0px;
    }
    
    .anounce-img-container img{
        width: 100%;
        border-radius: 10px;
        border: 8px solid #000053;
        margin: 15px 15px 0 15px;
    } 
    
    .card-interactions{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0px;

    }
    
    .tickets-txt{
        display: flex;
        align-items: center;
        gap: 5px;
        color: #FAE101;
        font-size: 20px;
        animation: shiny 1s ease-in-out infinite alternate;
    }
    
    .tickets-txt img{
        margin-top: 0px;
        width: 30px;
        height: 25px;
    }
    
    .eprix{
        font-size: 24px;
    }
    
    .passagem{
        font-weight: 300;
        font-size: 16px;
    }
    
    .probabilistico{
        margin: 15px 0 0 0;
    }
    
    .probabilistico p{
        text-align: center;
        font-size: 20px;
        margin-bottom: 5px;
    }
    
    .prob-btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .more-minus-btns{
        background: transparent;
        max-width: 80%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 10px;
        border: 5px solid white;
    }
    
    .more-minus-btns button{
        font-weight: bold;
        color: #ffffff;
        border: none;
        background: none;
        cursor: pointer;
    }
    
    .more-btn{
        font-size: 40px;
    }
    
    .minus-btn{
        font-size: 45px;
    }
    
    .more-minus-btns button:hover{
        scale: 110%;
    }
    
    .more-minus-btns p{
        display: flex;
        font-size: 18px;
        align-items: center;
        padding-top: 5px;
    }

    
    .participar-btn{
        width: 85%;
        color: blue;
        font-size: 24px;
        border: 5px solid white;
    }
    
    .corner-logo{
        width: 20px;
        height: 30px;
        margin-right: 20px;
        margin-bottom: 0px;
    
    }

    /* SECTION  4*/
    .section-four{
        max-width: 320px;
        margin: 0 auto 60px auto;
        display: flex;
        justify-content: center;
        
    }

    .temporizador{
        display: flex;
        justify-content: center;
        gap: 5px;
        font-size: 12px;
    }

    .item-cards-display{
        max-width: 320px;
        margin: 15 auto;

    }

    .item-card{
        width: 100PX;
        height: 210px;
        border-radius: 10px;
    }

    .item-card p{
        font-family: 'Michroma', sans-serif;
        font-weight: 600;
    }

    .item-name{
        color: black;
        font-size: 12px;
        text-align: center;
    }

    .item{
        max-width: 75px;
    }

    p.item-description{
        font-size: 10px;
    }

    .raridade{
        font-size: 16px;
        color: #101010;
    }


    .item.comum{
        width: 70px;
        height: 70px;
    }

    .blitz-qtd.price{
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 16px;
    }

    .blitz-qtd.price img{
        width: 15px;
    }

    .adquirir{
        width: 65px;
        height: 20px;
        border-radius: 5px;
        font-size: 10px;
   
    }

    .fundo-item-card{
        width: 110px;
        height: 220px;
        border-radius: 3px;
    }


    /* CARD LENDARIO */
    .borda-animada-item.lendario::before, .borda-animada-item.lendario:after{
        width: 120px;
        height: 230px;
    }

    /* CARD RARO ANIMAÇÃO */
    .borda-animada-item.raro::before, .borda-animada-item.raro:after{
        width: 120px;
        height: 230px;
    }

    /* CARD ESPECIAL ANIMAÇÃO*/
    .borda-animada-item.especial::before, .borda-animada-item.especial:after{
        width: 120px;
        height: 230px;
    }

    /* CARD COMUM ANIMAÇÃO*/
    .borda-animada-item.comum::before, .borda-animada-item.comum:after{
        width: 120px;
        height: 230px;
    }

    .areaShop{
        display: flex;
        justify-content: center;
        max-width: 320px;
        gap: 30px;
    }

    /* FOOTER */
    footer{
        width: 100%;
        height: 60px;
        background-color: #2210F4;
    }

    .footer-content{
        max-width: 320px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;

    }

    .footer-content h1{
        font-size: 12px;
    }

    .footer-content p{
        font-size: 10px;
    }

    .footer-logo{
        width: 90px;
        height: 40px;
    }


}

@media (min-width: 426px) and (max-width: 768px) {
        /* HEADER */
        header{
            height: 60px;
        }
    
        
        .header-content{
            max-width: 425px;
            display: flex;
            justify-content: space-between;
        }
    
        .headerBtns{
            display: none;
        }
    
        .headerBtn-768w{
            display: flex;
            height: 35px;
            width: 35px;
        }
    
        .headerBtn-768w button{
            cursor: pointer;
            background-color: transparent;
            border: none;
        }
    
        .headerBtn-768w img{
            width: 100%;
            height: 100%;
        }
    
        .logo-emmersive{
            width: 100px;
            margin-left: 80px;
        }
    
        .header-deco{
            height: 60px;
            width: 75px;
        }
    
        .name-blitz{
            display: flex;
            flex-direction: column;
            align-items: end;
            background-color: transparent;
            font-size: 14px;
        }
        
        .blitz-qtd{
            display: flex;
            align-items: center;
            gap: 5px;
            background-color: transparent;
            font-weight: bold;
            font-style: italic;
            color: rgb(251,226,1);
        }
        
        .blitz-icon{
            width: 10px;
            height: 15px;
            
        }
        
        .moldura-user{
            width: 35px;
            height: 35px;
        }
    
        /* NAVBAR */
        
        .nav-cont{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 60px;
            font-size: 10px;
            max-width: 320px;
        }
        
        .nav-cont a{
            background: transparent;
            text-decoration: none;
            color: #ffffff;
        }
        
        .navLiveDot{
            width: 8px;
            height: 8px;
            margin: 0 2px 0 0;
            animation: pisca 1s ease-in-out infinite alternate;
        }
        
        /* SECTION  1 */
        .Homesection-one{
            max-width: 425px;
            margin: 35px auto;
            display: flex;
            flex-direction: column;
            justify-content: center; 
        }
    
        .section-title-card{
            width: 100%;
            display: flex;
            flex-direction: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
        }
    
        .section-title-card h1{
            font-size: 18px;
        }
    
        .section-title-card h2{
            font-weight: 600;
            font-size: 12px;
        }
    
        
        .share-btns{
            display: flex;
            gap: 0px;
            height: 40px;
            justify-content: center;
        }
    
    
        .share-btns button{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
        }
    
        .tiny-share img {
            height: 20px;
            width: 20px;
        }
    
        /* OCULTA COMPARTILHAR GRANDE */
        button.big-share{
            display: none;
        }
    
    
        /* BORDAS DE SEÇÃO PERSONALIZADAS */
        .Homeblue-frame-one-sec1{
            max-width: 425px;
            background: rgb(34,16,244);
            background: linear-gradient(335deg, rgba(34,16,244,1) 0%, rgba(16,16,16,1) 50%);
            padding-right: 4px; /* largura da borda */
            padding-bottom: 4px; /* largura da borda */
        }
    
        .Homeblue-frame-inner-one-sec1{
            background-color: #101010; /* Fundo interno */
            padding-right: 7px; /* Conteúdo interno */
            padding-bottom: 6px; /* Conteúdo interno */
        }
    
        .Homeblue-frame-two-sec1{
            max-width: 425px;
            background: rgb(34,16,244);
            background: linear-gradient(335deg, rgba(34,16,244,1) 0%, rgba(16,16,16,1) 50%);
            padding-right: 4px; 
            padding-bottom: 4px; 
        }
    
        .Homeblue-frame-inner-two-sec1{
            background-color: #101010;
            padding-right: 7px; 
            padding-bottom: 6px;
        }
        /* BORDAS DE SEÇÃO PERSONALIZADAS FIM*/
    
    
        .section-card{
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
        }
    
        .card-btns{
            display: none;
        }
        /* NOVOS CARD-BTNs */
    
        .card1{
            width: 100%;
        }
    
        .mw425-blitz-shop-btn{
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 425px;
            margin: 15px auto 0 auto;
            gap: 10px;
        }
    
        .mw425-blitz-shop-btn a{
            width: 150px;
            height: 30px;
            font-size: 18px;
            border-radius: 5px;
        }
    
        .mw425-blitz-shop-btn p{
            font-size: 14px;
            font-style: 'Montserrat', sans-serif;
            font-style: italic;
            font-weight: bold;
        }
    
        /* SECTION 2 */
        .Homesection-two{
            max-width: 425px;
            margin: 35px auto;
            display: flex;
            flex-direction: column; 
        }
        
        .Homesection-two{
            margin-top: 0px;
        }
        
        .card2 img{
            width: 100%;
            max-width: 425px;
        }
        
        .live-corner{
            width: 75px;
            height: 25px;
            font-size: 10px;
            border-bottom-right-radius: 50px;
        
        }
        
        /* LIVE PONTINHO PISCANTE */
        .live-corner img{
            width: 10px;
            height: 10px;
            margin: 0 4px 0 10px;
        }
         
        
        /* BORDA PERSONALIZADA */
        .Homeblue-frame-one-sec2{
            max-width: 425px;
            padding-left: 4px; /* largura da borda */
            padding-bottom: 4px; /* largura da borda */
        }
        
        .Homeblue-frame-inner-one-sec2{
            background-color: #101010; /* Fundo interno */
            padding-left: 7px; /* Conteúdo interno */
            padding-bottom: 6px; /* Conteúdo interno */
        }
        
        .Homeblue-frame-two-sec2{
            max-width: 425px;
            padding-left: 4px; 
            padding-bottom: 4px; 
        }
        
        .Homeblue-frame-inner-two-sec2{
            padding-left: 7px; 
            padding-bottom: 6px;
        }
        /* BORDAPERSONALIZADA */
        
        h1.aposte-blitz{
            font-size: 10px;
            margin-top: 5px;
            text-align: center;
        }
    
    
        /* SECTION 3 */
        .shop-banner-background{
            height: 80px;
        }
        
        .banner-decoration-spot{
            max-width: 425px;
            height: 100%;
        
        }
        
        
        .blitz-title{
            max-width: 425px;
        }
        
        .blitzshop-logo{
            height: 35px;
            width: 140px;
            margin-top: 15px;
        }
        
        .title-box{
            margin-left: 55px;
        }
        
        .title-box h1{
            font-size: 12px;
        }
        
        .sorteio{
            margin: 30px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 425px;
        }
        
        .blitz-tickets{
            display: flex;
            align-items: center;
            gap: 3px;
        }
        
        .blitz-tickets img{
            width: 15px;
        }
    
        
        
        /* BORDA PERSONALIZADA */
        .Homeblue-frame-one-sec3{
            max-width: 425px;
            background: rgb(34,16,244);
            background: linear-gradient(255deg, rgba(34,16,244,1) 0%, rgba(16,16,16,1) 35%);
            padding-right: 4px;
            padding-top: 4px;
        }
        
        .Homeblue-frame-inner-one-sec3{
            background-color: #101010; 
            padding-right: 7px; 
            padding-top: 6px; 
        }
        
        .Homeblue-frame-two-sec3{
            max-width: 425px;
            background: rgb(34,16,244);
            background: linear-gradient(255deg, rgba(34,16,244,1) 0%, rgba(16,16,16,1) 35%);
            padding-right: 4px; 
            padding-top: 4px; 

        }
        
        .Homeblue-frame-inner-two-sec3{
            background-color: #101010;
            padding-right: 7px; 
            padding-top: 6px;
        
        }
        
        .sorteio-title{
            font-size: 12px;
        }
        
        
        /* BORDA PERSONALIZADA FIM */
        
        /* AREA DE SORTEIO(SEÇÃO 3) */
        .sorteio-card{
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 425px;
            height: 100%;
            background-color:#2210F4;
            border-radius: 15px;
        }
        
        .sorteio-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
        
        }
        
        .sorteio-title{
            font-size: 16px;
        }

        .anounce-img-container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 85%;
            margin-right: 0px;
        }
        
        .anounce-img-container img{
            width: 100%;
            border-radius: 10px;
            border: 8px solid #000053;
            margin: 15px 15px 0 15px;
        } 
        
        .card-interactions{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0px;
    
        }
        
        .tickets-txt{
            display: flex;
            align-items: center;
            gap: 5px;
            color: #FAE101;
            font-size: 28px;
            animation: shiny 1s ease-in-out infinite alternate;
        }
        
        .tickets-txt img{
            margin-top: 0px;
            width: 30px;
            height: 25px;
        }
        
        .eprix{
            font-size: 32px;
        }
        
        .passagem{
            font-weight: 300;
            font-size: 20px;
        }
        
        .probabilistico{
            margin: 15px 0 0 0;
        }
        
        .probabilistico p{
            text-align: center;
            font-size: 20px;
            margin-bottom: 5px;
        }
        
        .prob-btns{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .more-minus-btns{
            background: transparent;
            max-width: 80%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-radius: 10px;
            border: 5px solid white;
        }
        
        .more-minus-btns button{
            font-weight: bold;
            color: #ffffff;
            border: none;
            background: none;
            cursor: pointer;
        }
        
        .more-btn{
            font-size: 40px;
        }
        
        .minus-btn{
            font-size: 45px;
        }
        
        .more-minus-btns button:hover{
            scale: 110%;
        }
        
        .more-minus-btns p{
            display: flex;
            font-size: 18px;
            align-items: center;
            padding-top: 5px;
        }
    
        
        .participar-btn{
            width: 85%;
            color: blue;
            font-size: 24px;
            border: 5px solid white;
        }
        
        .Homecorner-logo{
            width: 30px;
            height: 40px;
            margin-right: 30px;
            margin-bottom: 0px;
        
        }
    
        /* SECTION  4*/
        .section-four{
            max-width: 1024px;
            margin: 0 auto 60px auto;
            display: flex;
            justify-content: center;
            
        }
    
        .temporizador{
            display: flex;
            justify-content: center;
            gap: 5px;
            font-size: 14px;
        }
    
        .item-cards-display{
            max-width: 320px;
            margin: 15 auto;
    
        }
    
        .item-card{
            width: 120px;
            height: 230px;
            border-radius: 10px;
        }
    
        .item-card p{
            font-family: 'Michroma', sans-serif;
            font-weight: 600;
        }
    
        .item-name{
            color: black;
            font-size: 14px;
            text-align: center;
        }
    
        .item{
            max-width: 85px;
        }
    
        p.item-description{
            font-size: 12px;
        }
    
        .raridade{
            font-size: 18px;
            color: #101010;
        }
    
    
        .item.comum{
            width: 80px;
            height: 80px;
        }
    
        .blitz-qtd.price{
            font-family: "Montserrat", sans-serif;
            font-weight: bold;
            font-size: 18px;
        }
    
        .blitz-qtd.price img{
            width: 15px;
        }
    
        .adquirir{
            width: 70px;
            height: 25px;
            border-radius: 8px;
            font-size: 12px;
       
        }
    
        .fundo-item-card{
            width: 140px;
            height: 250px;
            border-radius: 5px;
        }
    
    
        /* CARD LENDARIO */
        .borda-animada-item.lendario::before, .borda-animada-item.lendario:after{
            width: 150px;
            height: 260px;
        }
    
        /* CARD RARO ANIMAÇÃO */
        .borda-animada-item.raro::before, .borda-animada-item.raro:after{
            width: 150px;
            height: 260px;
        }
    
        /* CARD ESPECIAL ANIMAÇÃO*/
        .borda-animada-item.especial::before, .borda-animada-item.especial:after{
            width: 150px;
            height: 260px;
        }
    
        /* CARD COMUM ANIMAÇÃO*/
        .borda-animada-item.comum::before, .borda-animada-item.comum:after{
            width: 150px;
            height: 260px;
        }
    
        .areaShop{
            display: flex;
            justify-content: center;
            max-width: 425px;
            gap: 40px;
        }
    
        /* FOOTER */
        footer{
            height: 60px;
        }
    
        .footer-content{
            max-width: 425px;
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


@media (min-width: 769px) and (max-width: 1024px){
    header{
        width: 100%;
        height: 80px;
    }
    
    .header-content{
        max-width: 768px;
        margin: 0 auto;
    }
    
    .logo-emmersive{
        width: 140px;
    }
    
    .headerBtns{
        display: flex;
        justify-content: center;
        background-color: white;
        width: 280px;
        height: 40px;
        border-radius: 15px;
        justify-content: space-around;
        align-items: center;
    }
    
    .header-minilogo{
        width: 15px;
        height: 15px;
        padding: 5px;
        background-color: #2210F4;
        border-radius: 5px;
    }
    
    .profile{
        display: flex;
        align-items: center;
        gap: 7px;
        background-color: transparent;
        z-index: 1;
    }
    
    .header-deco{
        height: 80px;
        width: 100px;
    } 

    /* SECTION  1 */
    .Homesection-one{
        max-width: 768px;
        margin: 35px auto;
        display: flex;
        flex-direction: column; 
    }

    .section-title-card{
        font-size: 12px;
    }

    .tiny-share img {
        height: 25px;
        width: 25px;
        margin: 0;
    }

    .share-btns{
        height: 50px;
    }

    .share-btns button{
        font-size: 18px;
        padding: 15px;
        cursor: pointer;
    }

    button.big-share.sec1{
        margin-right: 0;
        margin-left:  0;
    }

    /* BORDAS DE SEÇÃO PERSONALIZADAS */
    .Homeblue-frame-one-sec1{
        max-width: 768px;
        padding-right: 4px; /* largura da borda */
        padding-bottom: 4px; /* largura da borda */
    }

    .Homeblue-frame-inner-one-sec1{
        background-color: #101010; /* Fundo interno */
        padding-right: 10px; /* Conteúdo interno */
        padding-bottom: 8px; /* Conteúdo interno */
    }

    .Homeblue-frame-two-sec1{
        max-width: 768px;
        padding-right: 4px; 
        padding-bottom: 4px; 
    }

    .Homeblue-frame-inner-two-sec1{
        background-color: #101010;
        padding-right: 10px; 
        padding-bottom: 10px;
    }
    /* BORDAS DE SEÇÃO PERSONALIZADAS FIM*/
    .card-btns{
        display: flex;
        flex-direction: column;
        width: 20%;
        gap: 10px;
    }

    .big-blue-btn{
        background-image: url('../../../../assets/images/Babe_ruth.gif');
        background-size: 200px;
        background-position-y: center;
        background-position-x: center;
        height: 80%;
        width: 165px;
    }

    .blitz-gain{
        border-left: none;
        border-top: none;
        height: 12%;
        width: 65%;
        font-size: 18px;

        
    }

    .blitz-gain img{
        width: 15px;
        margin-top: 5px;
    }

    .blitz-shop{
        height: 17%;
        width: 165px;
        font-size: 22px;
    }

    .card1{
        width: 76%;
    }
 
        /* SEÇÃO 2 */
    .Homesection-two{
        max-width: 768px;
        margin: 35px auto;
        display: flex;
        flex-direction: column; 
    }

    .Homesection-two{
        margin-top: 70px;
    }

    .card2 img{
        width: 100%;
        max-width: 768px;
        cursor: pointer;

    }


    .live-corner{
        width: 140px;
        height: 50px;
        font-size: 22px;
        gap: 10px;
    }

    /* LIVE PONTINHO PISCANTE */
    .live-corner img{
        width: 15px;
        height: 15px;
        margin: 0 0 0 15px;
    }

    /* BORDA PERSONALIZADA */
    .Homeblue-frame-one-sec2{
        max-width: 768px;
        padding-left: 4px; /* largura da borda */
        padding-bottom: 4px; /* largura da borda */
    }

    .Homeblue-frame-inner-one-sec2{
        padding-left: 10px; /* Conteúdo interno */
        padding-bottom: 8px; /* Conteúdo interno */
    }

    .Homeblue-frame-two-sec2{
        max-width: 768px;
        padding-left: 4px; 
        padding-bottom: 4px; 
    }

    .Homeblue-frame-inner-two-sec2{
        background-color: #101010;
        padding-left: 10px; 
        padding-bottom: 10px;
    }
    /* BORDAPERSONALIZADA */

    button.big-share.sec2{
        margin-left: 0px;
    }

    h1.aposte-blitz{
        font-size: 16px;
        text-align: center;
        margin-top: 15px;
    }

    /* Section 3 */
    .shop-banner-background{
        width: 100%;
        height: 130px;
    }

    .banner-decoration-spot{
        max-width: 768px;
        height: 100%;

    }

    .blitz-title{
        max-width: 768px;
        margin: 0 auto;
    }

    .blitzshop-logo{
        height: 65px;
        width: 270px;
        margin-top: 15px;
    }

    .title-box{
        margin-left: 100px;
    }

    .title-box h1{
        font-size: 22px;
    }

    .sorteio{
        margin: 50px auto;
        max-width: 768px;
    }

    .blitz-tickets{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .blitz-tickets img{
        width: 20px;
    }

    /* BORDA PERSONALIZADA */
    .Homeblue-frame-one-sec3{
        max-width: 768px;
        padding-right: 4px;
        padding-top: 4px;
    }

    .Homeblue-frame-inner-one-sec3{
        padding-right: 10px; 
        padding-top: 8px; 
    }

    .Homeblue-frame-two-sec3{
        max-width: 768px;
        padding-right: 4px; 
        padding-top: 4px; 
        position: relative;
    }

    .Homeblue-frame-inner-two-sec3{
        padding-right: 10px; 
        padding-top: 10px;

    }

    .sorteio-title{
        font-size: 22px;
    }


    /* BORDA PERSONALIZADA FIM */

    /* AREA DE SORTEIO(SEÇÃO 3) */
    .sorteio-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 768px;
    }

    .sorteio-content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        margin: 0 auto;
        gap: 30px;

    }

    .anounce-img-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        margin: 10px;
    }

    .anounce-img-container img{
        width: 100%;
        border-radius: 10px;
        border: 8px solid #000053;
        margin: 15px;
    } 

    .card-interactions{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 5px;
    }

    .tickets-txt{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 28px;
    }

    .tickets-txt img{
        margin-top: 10px;
        width: 35px;
        height: 30px;
    }

    .eprix{
        font-size: 32px;
        font-style: italic;
    }

    .passagem{
        font-weight: 300;
        font-size: 18px;
    }

    .probabilistico{
        margin: 0;
    }

    .probabilistico p{
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .prob-btns{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        gap: 15px;
    }

    .more-minus-btns{
        width: 160px;
    }

    .more-btn{
        font-size: 40px;
    }

    .minus-btn{
        font-size: 45px;
    }

    .more-minus-btns p{
        font-size: 22px;
        padding-top: 10px;
    }

    .participar-btn{
        width: 160px;
        font-size: 24px;
    }

    .Homecorner-logo{
        position: absolute;
        width: 25px;
        height: 25px;
        margin-right: 40px;
        margin-bottom: 5px;

    }

    /* SECTION 4 */
    .section-four{
        max-width: 768px;
        margin: 0 auto 30px auto;
        display: flex;
        justify-content: center;
        
    }

    .temporizador{
        font-size: 22px;
    }

    .item-cards-display{
        max-width: 768px;
        margin: 20 auto;
        display: flex;
        justify-content: space-between;

    }

    .item-card{
        width: 180PX;
        height: 370px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .item-card p{
        font-family: 'Michroma', sans-serif;
        font-weight: 600;
    }

    .item-name{
        color: black;
        font-size: 16px;
    }

    .item{
        max-width: 150px;
    }

    .item.comum{
        width: 133px;
    }

    .blitz-qtd.price{
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 32px;
    }

    .adquirir{
        width: 125px;
        height: 30px;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #D9D9D9;
        cursor: pointer;
    }

    .raridade{
        font-size: 24px;
        color: #101010;
    }

    .fundo-item-card{
        width: 210px;
        height: 400px;
        border-radius: 5px;
    }

    .areaShop{
        display: flex;
        justify-content: center;
        max-width: 768px;
        margin: 0 auto;
        flex-wrap: wrap;
        gap: 50px;
    }
    }
`