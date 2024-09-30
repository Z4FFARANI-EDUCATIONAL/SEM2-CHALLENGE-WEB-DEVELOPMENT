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
            margin-left: 50px;
        }

        .header-deco{
            height: 60px;
            width: 55px;
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
        }

        /* section 1 */
        .section-one{
            max-width: 320px;
            margin: 0px auto;
        }

        .livestream{
            max-width: 320px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 200px 150px 450px 200px;
            margin-top: 371px;
        }

        /* GRID ITENS */
        .live{   
            grid-column: 1/2;
            grid-row: 1/2;
        }

        .live-title{
            grid-column: 1/2;
            grid-row: 2/3;
        }

        .live-comments{
            grid-column: 1/2;
            grid-row: 3/4;
        }

        .live-message-box{
            grid-column: 1/2;
            grid-row: 4/5;
        }
        /* ITENS */


        /* ITENS CSS */
        /* LIVE */
        .live-video{
            width: 100%;
            height: 100%;
        }

        .video-icons{
            position: absolute;
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-around;
            gap: 30%;
            align-items: center;
            bottom: 0;

        }

        .live-on h1{
            font-size: 18px;
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .live-dot{
            width: 15px;
            height: 15px;
            animation: pisca 1s ease-in infinite alternate;
        }

        /* LIVE-TITLE */
        .live-title{
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .competition-name{
            display: flex;
            gap: 15px;
            font-size: 8px;
            margin: 5px;
        }

        .title-live-division{
            display: none;
        }

        .title-live-text{
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 0px;
        }

        .live-title p{
            font-size: 10px;
            gap: 10px;
            margin: 5px;
        }

        /* LIVE MESSAGE BOX */  
        .position-racer h3{
            font-size: 12px;
        }

        .fanboost-choose h2{
            font-size: 14px;
        }

        /* COMMENTS BOX */
        .comments-live-bar {
            border-top: 2px solid #101010;
        }

        .comments-live-bar h1{
            font-size: 24px;
        }

        .comentario  div{
            gap: 10px;  
        }

        .comentario h1{
            font-size: 16px;
        }

        .comentario p{
            margin: 5px 0;
            font-size: 10px;
        }

        /* SECTION 2 */
        .section-two{
            width: 320px;
            margin: 390px auto 50px auto ;
            display: grid;
            grid-template-columns: 320px;
            grid-template-rows: 50px repeat(8, 150px) 50px repeat(11, 60px) repeat(5, 100px);
            grid-template-areas: 
                'vision'
                "runners"
                "runners"
                "runners"
                "runners"
                "runners"
                "runners"
                "runners"
                "runners"
                'rank'
                'first'
                'second'
                'third'
                'fourth'
                'fifth'
                'sixth'
                'seventh'
                'eighth'
                "ninth"
                "tenth"
                "eleventh"
                "bet"
                "bet"
                "bet"
                ;
            row-gap: 10px;
        }

        /* TITULOS */
        .rank{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .rank h1{
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            font-size: 18px;
        }

        .vision{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .vision h1{
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            font-size: 18px;
        }
        /* TITULOS */

        /* RUNNERS VISION */
        .runners-vision{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px;
        }

        .runner-stts{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            height: 50%;
            margin-top: 30px;
        }

        .runners-vision hr{
            height: 5px;
            margin: 5px 0;
            border: none;
        }

        .glow-hr{
            position: relative;
            width: 280px;
        }

        .header-cam{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 280px;
        }

        .name-team{
            display: flex;
            width: 100%;
            font-size: 12px;
            align-items: center;
            gap: 10px;
        }

        .button-impulse{
            display: none;
        }

        .button-impulse-smartphone{
            display: flex;
        }

        .button-impulse-smartphone button{
            background: transparent;
            border: none;
            cursor: pointer;
            font-style: italic;
            font-weight: bold;
            display: flex;
            align-items: center;
            font-size: 24px;
            height: 35px;
        }
        
        .team-cam{
            width: 60px;
            height: 50px;
        }

        .camera-status{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: 95%;
        }

        .cam-bkg{
            padding: 8px;
            width: 250px;
            height: 200px;
        }

        .impulse{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .impulse h2{
            font-family: "Michroma", sans-serif;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 10px;
        }

        


        /* BET AREA */
        .blitz-bet-invisible-bkg{
            position: relative;
            padding: 10px;
            border-radius: 10px;
            height: 520px;
            padding: 10px;
        }

        .blitz-bet{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 520px;
            border-radius: 8px;
        }

        /* LEFT SIDE */
        .bet-title{
            margin: 10px 0;
        }

        .bet-title h1{
            font-size: 24px;
            display: flex;
            align-items: center;
        }

        .bet-title h2{
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            font-family: 'Michroma', sans-serif;
            opacity: 50%;
        }

        .bet-card{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .choosen-place{
            display: flex;
            width: 240px;
            height: 45px;
            
        }

        .quantity-bet{
            display: flex;
            align-items: center;
            width: 100%;
            background-color: #C99B26;
            gap: 5px;
            border-radius: 1px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border: 5px solid#C99B26;
        }

        .quantity-bet div p{
            font-size: 12px;
            white-space: nowrap;
            max-width: 100px;
        }

        .choosen-team{
            width: 25%;
            height: 100%;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        .quantity-bet h1{
            font-size: 18px;
        }

        .low-res-bet-p{
            margin-bottom: 10px;
            text-align: center;
        }


        /* RIGHT SIDE */
        .right-side{
            display: flex;
            margin-top: 0px;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 50%;
        }

        .multi{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 240px;
            height: 45px;
            margin: 5px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            
        }

        .right-side .big-blitz{
            display: flex;
            align-items: center;
            font-style: italic;
            font-weight: 400px;
            font-size: 50px;
            color: #FFE500;
        }

        .big-blitz img{
            width: 25px;
        }

        .right-side h2{
            font-family: 'Michroma', sans-serif;
            font-weight: lighter;
            font-size: 16px;
        }

        .h1-gold{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 55%;
            height: 100%;
            background: rgb(201,155,38);
            background: linear-gradient(90deg, rgba(201,155,38,1) 0%, rgba(236,212,1,1) 100%);
        }
        .p-green{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25%;
            height: 100%;
            font-weight: bold;
            font-size: 40px;
            background-color: #87E366;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        .multi img{
            width: 20%;
            height: 100%;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        .multi h1{
            display: flex;
            justify-content: center;
            width: 100px;
            font-size: 18px;
            color: #120275;
            
        }

        /* POSIÇÃO BLOCK */
        .position{
            display: flex;
            width: 320px;
            background-color: #2204DB;
            align-items: center;
            justify-content: space-between;
            border-radius: 5px;
        }

        .position h2{
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            font-size: 10px;
            max-width: 130px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .position h1{
            max-width: 130px;
            font-size: 18px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        
        .position p{
            font-size: 42px;
            font-weight: bold;
            width: 50%;
            text-align: center;
            z-index: 1;
            
        }

        .team-place{
            display: flex;
            width: 30%;
            align-items: center;
            justify-content: space-between;
        }

        .team-racer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }

        .status-icon{
            width: 35px;
            height: 35px;
            margin-left: 10px;
        }

        .team{
            width: 50px;
            height: 100%;
        }

        .first .team-place{
            background-color: #E1CB00;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            position: relative;
        }

        .second .team-place{
            background-color: #C9C9C9;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            position: relative;
        }

        .third .team-place{
            position: relative;
            background-color: #FF5C00;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            
        }

        .first .team-place::before{
            width: 48%;
            filter: opacity(70%);
        }

        .second .team-place::before{
            width: 48%;
        }

        .third .team-place::before{
            width: 48%;
        }


        /* Seção 3 */
        .section-three{
            padding: 45px 0;
            max-width: 320px;
        }

        .little-e-sec-three{
            display: none;
        }

        .maps{
            max-width: 290px;
            gap: 20px;
            padding: 15px;
        }

        .map-titles{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }

        .container-text-shadow{
            display: flex;
            justify-content: center;
            font-style: italic;
        }

        .conheca{
            font-size: 24px;
            text-shadow: #2210f4;

        }

        .atras{
            position: absolute;
            font-weight: bold;
            color: transparent;
            -webkit-text-stroke: 1px white;
            position: absolute;
            margin-top: 2px;

        }

        .frente{
            position: relative;
            
        }

        .map-container{
            display: flex;
            padding: 10px;
            max-width: 295px;
        }

        .imgcontainer{
            max-width: 280px;
        }

        .imgcontainer img{
            max-width: 280px;
        }

        .map-name{
            max-width: 300px;
            gap: 10px;
        }

        .map-name p{
            font-weight: 400;
            font-family: 'Michroma', sans-serif;
            font-size: 18px;
            margin: 0 0 10px;
        }

        .screen-icons img{
            cursor: pointer;
        }

        /* section 4 */
        .section-four{
            max-width: 320px;
            margin: 45px auto;
        }

        .little-e-sec-four{
        display: none;
        }

        .destaque-title img{
            height: 15px;
            width: 20px;
            margin-right: 4px;
        }

        .destaque-title{
            margin: 30px 0 0px 0;
        }


        .destaque{
            font-size: 24px;
        }

        .atras{
            margin-top: 2px;
        }

        .vod-img{
            max-width: 300px;
        }

        .sample-chooser{
            display: flex;
            margin: 30px 0;
            margin-bottom: 60px;
            align-items: center;

        }


        .sample-chooser img{
            width: 25px;
            height: 25px;
            cursor: pointer;
        }

        .samples{
            width: 150px;
            height: 12px;
            border-radius: 30px;
        }

        .samples p{
            margin-bottom: 6px;
        }

        .three-dots-p{
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
            width: 80px;
            margin-left: 25px;
        }

        .header-deco{
            height: 60px;
            width: 55px;
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
            gap: 30px;
            font-size: 12px;
            max-width: 425px;
        }
        
        .nav-cont a{
            background: transparent;
            text-decoration: none;
            color: #ffffff;
        }
        
        .navLiveDot{
            width: 7px;
            height: 7px;
            margin: 0 2px 0 0;
        }

        /* section 1 */
        .section-one{
            max-width: 425px;
            margin: 0px auto;
        }

        .livestream{
            max-width: 425px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 250px 170px 470px 200px;
            margin-top: 461px;
        }

        /* GRID ITENS */
        .live{   
            grid-column: 1/2;
            grid-row: 1/2;
        }

        .live-title{
            grid-column: 1/2;
            grid-row: 2/3;
        }

        .live-comments{
            grid-column: 1/2;
            grid-row: 3/4;
        }

        .live-message-box{
            grid-column: 1/2;
            grid-row: 4/5;
        }
        /* ITENS */


        /* ITENS CSS */
        /* LIVE */
        .live-video{
            width: 100%;
            height: 100%;
        }

        .video-icons{
            position: absolute;
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-around;
            gap: 30%;
            align-items: center;
            bottom: 0;

        }

        .live-on h1{
            font-size: 18px;
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .live-dot{
            width: 15px;
            height: 15px;
            animation: pisca 1s ease-in infinite alternate;
        }

        /* LIVE-TITLE */
        .live-title{
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .title-live-division{
            display: none;
        }

        .title-live-text{
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 0px;
        }

        .live-title p{
            font-size: 12px;
            gap: 10px;
            margin: 5px;
        }

        /* LIVE MESSAGE BOX */  
        .position-racer h3{
            font-size: 12px;
        }

        .fanboost-choose h2{
            font-size: 14px;
        }

        /* COMMENTS BOX */
        .comments-live-bar {
            border-top: 2px solid #101010;
        }

        .comments-live-bar h1{
            font-size: 24px;
        }

        .comentario  div{
            gap: 10px;  
        }

        .comentario h1{
            font-size: 20px;
        }

        .comentario p{
            margin: 5px 0;
            font-size: 14px;
        }

        /* SECTION 2 */
        .section-two{
            width: 425px;
            margin: 470px auto 50px auto ;
            display: grid;
            grid-template-columns: 425px;
            grid-template-rows: 50px repeat(8, 170px) 50px repeat(11, 60px) repeat(5, 100px);
            grid-template-areas: 
                'vision'
                "runners"
                "runners"
                "runners"
                "runners"
                "runners"
                "runners"
                "runners"
                "runners"
                'rank'
                'first'
                'second'
                'third'
                'fourth'
                'fifth'
                'sixth'
                'seventh'
                'eighth'
                "ninth"
                "tenth"
                "eleventh"
                "bet"
                "bet"
                "bet"
                ;
            row-gap: 10px;
        }

        /* TITULOS */
        .rank{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .rank h1{
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            font-size: 28px;
        }

        .rank img{
            width: 20px;
            height: 20px;
        }

        .vision{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .vision h1{
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            font-size: 18px;
        }
        /* TITULOS */

        /* RUNNERS VISION */
        .runners-vision{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .runner-stts{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            height: 50%;
            margin-top: 30px;
        }

        .runners-vision hr{
            height: 5px;
            margin: 5px 0;
            border: none;
        }

        .glow-hr{
            position: relative;
            width: 385px;
        }

        .header-cam{
            width: 385px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .name-team{
            display: flex;
            width: 100%;
            font-size: 12px;
            align-items: center;
            gap: 10px;
        }

        .button-impulse{
            display: none;
        }

        .button-impulse-smartphone{
            display: flex;
        }

        .button-impulse-smartphone button{
            background: transparent;
            border: none;
            cursor: pointer;
            font-style: italic;
            font-weight: bold;
            display: flex;
            align-items: center;
            font-size: 24px;
            height: 35px;
        }
        
        .team-cam{
            width: 60px;
            height: 50px;
        }

        .camera-status{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: 95%;
        }

        .cam-bkg{
            padding: 8px;
            width: 350px;
            height: 250px;
        }

        .impulse{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .impulse h2{
            font-family: "Michroma", sans-serif;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 10px;
        }

        .time{
            width: 354px;
        }
    
        .battery-bar{
            display: flex;
            width: 98%;
            height: 20px;
        }
        /* BET AREA */
        .blitz-bet-invisible-bkg{
            position: relative;
            padding: 10px;
            border-radius: 10px;
            height: 520px;
            padding: 10px;
        }

        .blitz-bet{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 405px;
            height: 520px;
            border-radius: 8px;
        }

        /* LEFT SIDE */
        .bet-title{
            margin: 10px 0;
        }

        .bet-title h1{
            font-size: 32px;
            display: flex;
            align-items: center;
        }

        .bet-title h2{
            font-size: 20px;
            text-align: center;
            font-weight: 400;
            font-family: 'Michroma', sans-serif;
            opacity: 50%;
        }

        .bet-card{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .choosen-place{
            display: flex;
            width: 240px;
            height: 45px;
            
        }

        .quantity-bet{
            display: flex;
            align-items: center;
            width: 100%;
            background-color: #C99B26;
            gap: 5px;
            border-radius: 1px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border: 5px solid#C99B26;
        }

        .quantity-bet div p{
            font-size: 12px;
            white-space: nowrap;
            max-width: 100px;
        }

        .choosen-team{
            width: 25%;
            height: 100%;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        .quantity-bet h1{
            font-size: 18px;
        }

        .low-res-bet-p{
            margin-bottom: 10px;
            text-align: center;
        }


        /* RIGHT SIDE */
        .right-side{
            display: flex;
            margin-top: 0px;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 50%;
        }

        .multi{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 240px;
            height: 45px;
            margin: 5px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            
        }

        .right-side .big-blitz{
            display: flex;
            align-items: center;
            font-style: italic;
            font-weight: 400px;
            font-size: 50px;
            color: #FFE500;
        }

        .big-blitz img{
            width: 25px;
        }

        .right-side h2{
            font-family: 'Michroma', sans-serif;
            font-weight: lighter;
            font-size: 16px;
        }

        .h1-gold{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 55%;
            height: 100%;
            background: rgb(201,155,38);
            background: linear-gradient(90deg, rgba(201,155,38,1) 0%, rgba(236,212,1,1) 100%);
        }
        .p-green{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25%;
            height: 100%;
            font-weight: bold;
            font-size: 40px;
            background-color: #87E366;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        .multi img{
            width: 20%;
            height: 100%;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        .multi h1{
            display: flex;
            justify-content: center;
            width: 100px;
            font-size: 18px;
            color: #120275;
            
        }

        /* POSIÇÃO BLOCK */
        .position{
            display: flex;
            width: 425px;
            background-color: #2204DB;
            align-items: center;
            justify-content: space-between;
            border-radius: 5px;
        }

        .position h2{
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            font-size: 12px;
            max-width: 170px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .position h1{
            max-width: 170px;
            font-size: 24px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        
        .position p{
            font-size: 42px;
            font-weight: bold;
            width: 50%;
            text-align: center;
            z-index: 1;
            
        }

        .team-place{
            display: flex;
            width: 30%;
            align-items: center;
            justify-content: space-between;
        }

        .team-racer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }

        .status-icon{
            width: 47px;
            height: 47px;
            margin-left: 10px;
        }

        .team{
            width: 60px;
            height: 60px;
        }

        .first .team-place{
            background-color: #E1CB00;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            position: relative;
        }

        .second .team-place{
            background-color: #C9C9C9;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            position: relative;
        }

        .third .team-place{
            position: relative;
            background-color: #FF5C00;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            
        }

        .first .team-place::before{
            width: 52%;
            border-radius: 0;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            filter: opacity(70%);
        }

        .second .team-place::before{
            width: 52%;
            border-radius: 0;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        .third .team-place::before{
            width: 52%;
            border-radius: 0;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        /* Seção 3 */
        .section-three{
            padding: 45px 0;
            max-width: 425px;
        }

        .little-e-sec-three{
            width: 50px;
            height: 50px;
        }

        .little-e-sec-three img{
            width: 30px;
            height: 30px;
            margin-left: -40px
        }

        .maps{
            max-width: 425px;
            gap: 20px;
            padding: 10px;
        }

        .map-titles{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }

        .container-text-shadow{
            display: flex;
            justify-content: center;
            font-style: italic;
        }

        .conheca{
            font-size: 32px;
            text-shadow: #2210f4;

        }

        .atras{
            position: absolute;
            font-weight: bold;
            color: transparent;
            -webkit-text-stroke: 1px white;
            position: absolute;
            margin-top: 2px;

        }

        .frente{
            position: relative;
            
        }

        .map-container{
            display: flex;
            padding: 10px;
            max-width: 390px;
        }

        .imgcontainer{
            max-width: 375px;
        }

        .imgcontainer img{
            max-width: 375px;
        }

        .map-name{
            max-width: 300px;
            gap: 10px;
        }

        .map-name p{
            font-weight: 400;
            font-family: 'Michroma', sans-serif;
            font-size: 18px;
            margin: 0 0 15px;
        }

        .screen-icons img{
            cursor: pointer;
        }

        /* section 4 */
        .section-four{
            max-width: 425px;
            margin: 45px auto;
        }

        .little-e-sec-four{
            width: 50px;
            height: 50px;
        }

        .little-e-sec-four img{
            width: 30px;
            height: 30px;
        }
        
        .destaque-title img{
            height: 15px;
            width: 20px;
            margin-right: 4px;
        }

        .destaque-title{
            margin: 30px 0 0px 0;
        }


        .destaque{
            font-size: 32px;
        }

        .atras{
            margin-top: 2px;
        }

        .vod-img{
            max-width: 390px;
        }

        .sample-chooser{
            display: flex;
            margin: 30px 0;
            margin-bottom: 60px;
            align-items: center;

        }


        .sample-chooser img{
            width: 40px;
            height: 40px;
            cursor: pointer;
        }

        .samples{
            width: 200px;
            height: 18px;
            border-radius: 30px;
        }

        .samples p{
            margin-bottom: 8px;
        }

        .three-dots-p{
            font-size: 16px;
        }

        /* FOOTER */  
        footer{
            height: 60px;
        }
            
        .footer-content{
            max-width: 320px;
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

    /* RESPONSIVIDADE LAPTOPS */
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

        /* section 1 */
        .section-one{
            max-width: 768px;
            max-height: 640px;
            margin: 30px auto;
        }

        .livestream{
            max-width: 768px;
            display: grid;
            grid-template-columns: 3fr 200px ;
            grid-template-rows: 400px 170px;
            border: 5px solid #101010;
            margin-top: 0;
        }
    

        /* LIVE-TITLE */
        .live-title p{
            font-size: 14px;
        }

        /* LIVE MESSAGE BOX */
        .write-message{
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid black;
        }

        .write-message input{
            height: 30px;
            border-radius: 8px;
            width: 80%;
            border: 2px solid #3c3c3c;
            background: #101010;
            color: #ffffff;
            font-size: 12px;
        }


        .position-racer img{
            width: 30px;
            height: 30px;
        }

        .position-racer .attack-mini{
            width: 30px;
        }

        .position-racer h3{
            font-size: 8px;
        }

        .fanboost-choose{
            gap: 7px;
        }

        .fanboost-choose h1{
            font-size: 20px;
            margin-top: 15px;
        }

        .fanboost-choose h2{
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            font-size: 12px;
        }

        /* COMMENTS BOX */
        .comments-live-bar{
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom:  2px solid #101010;
        }

        .comments-live-bar h1{
            font-family: 'Michroma', sans-serif;
            font-weight: 400;
            font-size: 24px;
        }

        .pfp{
            width: 30px;
        }

        .comentario h1{
            font-family: 'Numans', sans-serif;
            font-size: 18px;
        }

        .comentario p{
            margin: 5px 0;
            font-size: 8px;
            font-family: 'Numans', sans-serif;
        }

        /* Section 2 */
        .section-two{
            max-width: 768px;
            margin: 100px auto 50px auto ;
            display: grid;
            grid-template-columns: 310px 450px;
            grid-template-rows: 50px repeat(11, 80px);
            grid-template-areas: 
                'rank vision'
                'first runners'
                'second runners'
                'third runners'
                'fourth runners'
                'fifth runners'
                'sixth runners'
                'seventh runners'
                'eighth runners'
                "ninth bet"
                "tenth bet"
                "eleventh bet"
                
            ;
            row-gap: 15px;
            column-gap: 10px;
        }

        /* TITULOS */
        .rank{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .rank img{
            width: 15px;
            height: 15px;
        }

        .rank h1{
            font-weight: 400;
            font-size: 20px;
        }
        
        .vision{
            display: flex;
            align-items: center;
        }
        .vision h1{
            font-size: 20px;
        }

        /* RUNNERS VISION */
        
        .runner-stts{
            gap: 25px;
            height: 50%;
            margin-top: 15px;
        }

        .glow-hr{
            position: relative;
        }
        
        .header-cam{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .name-team{
            display: flex;
            width: 50%;
            font-size: 10px;
            align-items: center;
            gap: 10px;
        }
        
        .button-impulse{
            width: 40%;
            display: flex;
            justify-content: center;
        }

        .button-impulse span{
            font-size: 18px;
        }

        .button-impulse img{
            width: 20px;
        }

        
        .team-cam{
            width: 50px;
            height: 50px;
        }
        
        .camera-status{
            display: flex;
            gap: 20px;
            width: 100%;
        }
        
        .cam-bkg{
            padding: 8px;
            width: 60%;
        }
    
        .impulse{
            display: flex;
            flex-direction: column;
            width: 40%;
        }
        
        .button-impulse-smartphone{
            display: none;
        }
        
        .header-cam button{
            background: transparent;
            border: none;
            cursor: pointer;
            font-style: italic;
            font-weight: bold;
            display: flex;
            align-items: center;
            font-size: 24px;
        }
        
        .devries{
            width: 100%;
        }
        
        .devries button{
            color: #37FF4F;
        }
        
        .vandoorne button{
            color: #37ff4e79;
            border: 3px solid #37FF4e79;
            border-radius: 10px;
            padding: 5px;
        
        }
        
        .impulse h2{
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 10px;
        }
        
        .battery-bar{
            width: 100%;
            height: 20px;
        }
        
        .time{
            width: 100%;
            font-size: 8px;
            height: 40px;
        
        }
        
        .lap{
            width: 100%;
            height: 70px;
        }
        
        /* BET AREA */
        .blitz-bet-invisible-bkg{
            position: relative;
            padding: 10px;
            border-radius: 10px;
        }
        
        /* LEFT SIDE */
        .bet-title{
            margin: 30px 0 10px 0;
        }
        
        .bet-title h1{
            font-size: 18px;
        }
        
        .bet-title img{
            width: 15px;
            height: 15px;
        }

        .bet-title h2{
            font-size: 10px;
            font-weight: 400;
            font-family: 'Michroma', sans-serif;
            opacity: 50%;
            text-align: center;
        }
        
        .bet-card{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        
        .choosen-place{
            display: flex;
            width: 200px;
            height: 40px;
            
        }
        
        .quantity-bet{
            display: flex;
            align-items: center;
            width: 100%;
            background-color: #C99B26;
            gap: 5px;
            border-radius: 1px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border: 5px solid#C99B26;
        }
        
        .quantity-bet div p{
            font-size: 8px;
            white-space: nowrap;
            max-width: 100px;
            font-family: 'Michroma', sans-serif;
            overflow-x: hidden;
            text-overflow: ellipsis;
        
        }
        
        .choosen-team{
            width: 25%;
            height: 100%;
        }
        
        .quantity-bet h1{
            font-size: 12px;
        }
        
        .qttBlitz-bet{
            width: 80%;
            height: 100%;
            font-size: 12px;
        }
        
        .select-runner{
            width: 170px;
            font-size: 16px;
        }
        
        .check{
            width: 30px;
            height: 30px;
            background-color: #C99B26;
        }
        
        .blitz-guess{
            width: 50px;
            height: 20px;
            
        }
        
        .add-guess{
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .more-minus-btns{
            width: 140px;
            height: 35px;
        }

        .left-side .low-res-bet-p{
            text-align: center;
        }

        /* RIGHT SIDE */
        .multi{
            width: 190px;
            height: 45px;
            margin: 5px;
        }
        
        .right-side .big-blitz{
            font-weight: 400px;
            font-size: 42px;
            color: #FFE500;
        }
        
        .right-side .low-res-bet-p{
            margin-bottom: 20px;
        }

        .big-blitz img{
            width: 22px;
        }
        
        .right-side h2{
            font-family: 'Michroma', sans-serif;
            font-weight: lighter;
            font-size: 12px;
        }
        
        .h1-gold{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 55%;
            height: 100%;
            background: rgb(201,155,38);
            background: linear-gradient(90deg, rgba(201,155,38,1) 0%, rgba(236,212,1,1) 100%);
        }
        .p-green{
            font-size: 30px;
        }
        
        .multi img{
            width: 20%;
            height: 100%;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }
        
        .multi h1{
            display: flex;
            justify-content: center;
            width: 100px;
            font-size: 18px;
            color: #120275;
            
        }
        
        /* POSIÇÃO BLOCK */
        .position h2{
            font-size: 12px;
            max-width: 120px;
        }
        
        .position h1{
            max-width: 120px;
            font-size: 20px;
        }
        .position p{
            font-size: 50px;
            width: 50%;
        }
        
        .team-place{
            width: 50%;
        }
        
        .status-icon{
            width: 35px;
            height: 35px;
            margin-left: 5px;
        }
        
        .team{
            width: 80px;
            height: 80px;
        }
        
        .first .team-place::before{
            width: 47%;
            height: 100%;
        }
        
        .second .team-place::before{
            width: 47%;
            height: 100%;
        }
        
        .third .team-place::before{
            width: 47%;
            height: 100%;
        }

        /* Seção 3 */
        .section-three{
            max-width: 768px;
        }

        .little-e-sec-three{
            width: 80px;
            height: 80px;
            border-bottom-left-radius: 60px;
        }

        .little-e-sec-three img{
            width: 50px;
            height: 50px;
            margin-left: 20px;
            margin-bottom: 10px;
        }


        .maps{
            width: 768px;
        }

        .map-titles{
            display: flex;
            width: 100%;
            justify-content: center;
            gap: 40px;
        }

        .container-text-shadow{
            display: flex;
            justify-content: center;
            font-style: italic;
        }

        .conheca{
            padding-top: 40px;
            font-size: 64px;
            text-shadow: #2210f4;

        }

        .atras{
            position: absolute;
            font-weight: bold;
            color: transparent;
            -webkit-text-stroke: 1px white;
            position: absolute;
            margin-top: 7px;

        }

        .frente{
            position: relative;
            
        }

        .map-container{
            position: relative;
            display: flex;
            justify-content: center;
            padding: 15px;
        }

        .imgcontainer{
            position: relative;
            display: flex;
            background-color: #101010;
        }

        .imgcontainer img{
            width: 330px;
        }

        .map-name p{
            font-size: 32px;
            margin: 10px 0 45px 0;
        }

        /* section 4 */
        .section-four{
            margin-top: 30px;
            max-width: 768px;
        }

        .little-e-sec-four{
            width: 80px;
            height: 80px;
        }

        .destaque-title img{
            margin-right: 10px;
            height: 40px;
            width: 50px;
        }

        /* FOOTER */
        .footer-content{
            width: 768px;
        }

        .footer-content h1{
            font-size: 18px;
        }

        .footer-logo{
            width: 150px;
        }
    }

`

