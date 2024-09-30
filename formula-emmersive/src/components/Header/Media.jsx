import { createGlobalStyle } from "styled-components"

export const GlobalResponsive = createGlobalStyle`

    @media (max-width: 425px) {
        header {
            height: 60px;

        .header-content {
            max-width: 320px;
            display: flex;
            justify-content: space-between;
        }

        .headerBtns {
            display: none;
        }

        .headerBtn-768w {
            display: flex;
            height: 35px;
            width: 35px;
        }

        .headerBtn-768w button {
            cursor: pointer;
            background-color: transparent;
            border: none;
        }

        .headerBtn-768w img {
            width: 100%;
            height: 100%;
        }

        .logo-emmersive {
            width: 80px;
            margin-left: 65px;
        }

        .header-deco {
            height: 60px;
            width: 75px;
        }

        .name-blitz {
            display: flex;
            flex-direction: column;
            align-items: end;
            background-color: transparent;
            font-size: 12px;
        }
        
        .blitz-qtd {
            display: flex;
            align-items: center;
            gap: 5px;
            background-color: transparent;
            font-weight: bold;
            font-style: italic;
            color: rgb(251,226,1);
        }
        
        .blitz-icon {
            width: 10px;
            height: 15px;
            
        }
        
        .moldura-user {
            width: 35px;
            height: 35px;
        }

        .username {
            font-size: 10px;
        }

        /* NAVBAR */
        
        .nav-cont {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
            font-size: 10px;
            max-width: 320px;
        }
        
        .nav-cont a {
            background: transparent;
            text-decoration: none;
            color: #ffffff;
        }
        
        .navLiveDot {
            width: 5px;
            height: 5px;
            margin: 0 2px 0 0;
            animation: pisca 1s ease-in-out infinite alternate;
        }
    }

    @media (min-width: 426px) and (max-width: 768px) {
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
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        header {
        width: 100%;
        height: 80px;
        }
    
        .header-content {
            max-width: 768px;
            margin: 0 auto;
        }
        
        .logo-emmersive {
            width: 140px;
        }
        
        .headerBtns {
            display: flex;
            justify-content: center;
            background-color: white;
            width: 280px;
            height: 40px;
            border-radius: 15px;
            justify-content: space-around;
            align-items: center;
        }
        
        .header-minilogo {
            width: 15px;
            height: 15px;
            padding: 5px;
            background-color: #2210F4;
            border-radius: 5px;
        }
        
        .profile {
            display: flex;
            align-items: center;
            gap: 7px;
            background-color: transparent;
            z-index: 1;
        }
        
        .header-deco {
            height: 80px;
            width: 100px;
        } 
    }
`