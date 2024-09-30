import styled, { createGlobalStyle } from 'styled-components'
import logo from '../assets/images/logo.png'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        color: white;
    }

    html {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    body {
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        background-color: #101010;
        gap: 40px;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    
    label {
        font-family: "Michroma", sans-serif;
        font-size: 16px;
        display: flex;
    }

    p {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 30px;
    }

    a {
        display: flex;
        padding: 5px;
        font-size: 12px;
    }
`
const Logo = styled.img`
    width: 250px;
    padding-bottom: 40px;
`
const SignInBox = styled.div`
    background-color: #2210F4;
    height: 400px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
`
const InputAndTitle = styled.div`
    width: 70%;
`
const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 2.2rem;
    padding-bottom: 20px;   
`
const CampoPreencher = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const Email= styled.input`
    display: flex;
    flex-direction: column;
    background-color: #0A012E;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #0000FF;
`
const Senha = styled.input`
    display: flex;
    flex-direction: column;
    background-color: #0A012E;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #0000FF;
`
const BtnAgreement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 280px;
    height: 75px;
    margin-bottom: 30px;
`
const Acessar = styled.button`
    width: 80%;
    height: 55px;
    background-color: white;
    color: #2210F4;
    font-size: 22px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-shadow: 0 2px 4px gray;

    &:hover {
        filter: brightness(90%);
    }
`
const PrimeiroAcesso = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 3px solid white;
    border-radius: 5px;
    width: 80%;
    height: 30px;

    &:hover {
        background-color: white;
        color: #2210F4;
    }
`
const PrimeiroAcessoA = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    width: 100%;
    height: 100%;

    &:hover {
        color: #2210F4;
    }
`

export default function Login() {
    return (
        <>
            <GlobalStyle/>
            <Logo src={logo} alt="LOGO FORMULA EMMERSIVE"/>
            <SignInBox>
                <InputAndTitle>
                    <Title>Boas vindas</Title>
                    <CampoPreencher>
                        <div>
                            <label id="emailLog" htmlFor="email">E-mail:</label>
                            <Email type="text" id="loginEmail"/>
                        </div>
                        <div>
                            <label id="senhaLog" htmlFor="senha">Senha:</label>
                            <Senha type="password" id="loginSenha"/>
                            <a>Esqueci minha senha</a>
                        </div>
                    </CampoPreencher>
                </InputAndTitle>
                <BtnAgreement>
                    <Acessar onClick={() => checarDados('')}>Acessar</Acessar>
                    <PrimeiroAcesso><PrimeiroAcessoA>Primeiro acesso</PrimeiroAcessoA></PrimeiroAcesso>
                </BtnAgreement>
            </SignInBox>
        </>  
    )
}