import styled, { createGlobalStyle } from 'styled-components'
import logo from '../assets/images/logo.png'

const GlobalStyle = createGlobalStyle`
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
        position: relative;
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
        font-size: 12px;
    }
`
const Logo = styled.img`
    width: 250px;
    padding-bottom: 40px;
`
const SignInBox = styled.div`
    background-color: #2210F4;
    height: 500px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    margin: 0 auto;
`
const InputAndTitle = styled.div`
    width: 80%;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-weight: 200;
`
const CampoPreencher = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const FillName = styled.input`
    display: flex;
    flex-direction: column;
    background-color: #0A012E;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #0000FF;
`
const FillEmail = styled.input`
    display: flex;
    flex-direction: column;
    background-color: #0A012E;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #0000FF;
`
const FillSenha = styled.input`
    display: flex;
    flex-direction: column;
    background-color: #0A012E;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #0000FF;
`
const BtnAgreement = styled.div`
    width: 280px;
`
const Cadastrar = styled.button`
    width: 100%;
    height: 55px;
    background-color: white;
    color: #2210F4;
    font-size: 28px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-shadow: 0 2px 4px gray;
    font-family: 'Montserrat', sans-serif;

    &:hover {
        filter: brightness(90%);
    }
`
const DivCampo = styled.div`
    scale: 150%;
    width: 200px;
`

export default function Register() {
    return (
        <>
            <GlobalStyle />
            <Logo src={logo} alt="LOGO FORMULA EMMERSIVE"/>
            <SignInBox>
                <InputAndTitle>
                    <Title>Cadastre-se</Title>
                    <CampoPreencher>
                        <DivCampo>
                            <label htmlFor="nome" id='nameCheck'>Nome de usuário:</label>
                            <FillName type="text" id="nome"/>
                        </DivCampo>
                        <DivCampo>
                            <label htmlFor="email" id="emailCheck">Digite um E-mail:</label>
                            <FillEmail type="text" id="email"/>
                        </DivCampo>
                        <DivCampo>
                            <label htmlFor="senha" id="senhaCheck">Digite uma senha:</label>
                            <FillSenha type="text" id="senha"/>
                        </DivCampo>
                    </CampoPreencher>
                </InputAndTitle>
                <BtnAgreement>
                    <Cadastrar id="registrar" onClick={() => armazenarDados('')}>Cadastrar</Cadastrar>
                </BtnAgreement>
                <p>Ao criar uma conta, você está de acordo com nossa política de privacidade.</p>
            </SignInBox>
        </>
    )
}