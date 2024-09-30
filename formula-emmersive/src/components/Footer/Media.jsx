import { createGlobalStyle } from "styled-components";

export const GlobalResponsive = createGlobalStyle`
    @media (max-width: 425px) {
        footer {
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

    @media (min-width: 426px) and (max-width: 768px) {
        footer {
            width: 100%;
            height: 60px;
            background-color: #2210F4;
    
        }
    
        .footer-content {
            max-width: 425px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            align-items: center;
        }
        
        .footer-content h1 {
            font-size: 12px;
        }

        .footer-content p {
            font-size: 12px;
        }
        
        .footer-logo {
            width: 110px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        footer {
        width: 100%;
        height: 80px;
        background-color: #2210F4;
        }

        .footer-content {
            max-width: 768px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
        }
    }
`