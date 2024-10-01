import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from '../assets/images/logo.png';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat';
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
        position: relative;
    }

    label {
        font-family: "Michroma", sans-serif;
        font-size: 13px;
        display: flex;
        color: white;
        padding-bottom: 2px;
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
    width: 330px;
    padding-bottom: 40px;
    scale: 90%;
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
`
const InputAndTitle = styled.div`
    width: 80%;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-family: 'Montserrat';
    color: white;
    padding-bottom: 10px;
`
const CampoPreencher = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 10px;
`
const FillName = styled.input`
    display: flex;
    flex-direction: column;
    background-color: #0A012E;
    width: 180px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #0000FF;
    margin-bottom: 5px;
`
const FillEmail = styled.input`
    display: flex;
    flex-direction: column;
    background-color: #0A012E;
    width: 180px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #0000FF;
    margin-bottom: 5px;
`
const FillSenha = styled.input`
    display: flex;
    flex-direction: column;
    background-color: #0A012E;
    width: 180px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #0000FF;
    margin-bottom: 5px;
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
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const armazenarDados = () => {
        if (!email || !senha || !nome) {
            alert("Preencha todos os campos!");
            return;
        }

        sessionStorage.setItem('nome', nome);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('senha', senha);

        setTimeout(() => {
            alert('Usuário cadastrado!\nClique em "OK" para ser redirecionado.');
            window.location.href = ("/login");
        }, 500);
    };

    return (
        <>
            <GlobalStyle />
            <Logo src={logo} alt="LOGO FORMULA EMMERSIVE" />
            <SignInBox>
                <InputAndTitle>
                    <Title>Cadastre-se</Title>
                    <CampoPreencher>
                        <DivCampo>
                            <label htmlFor="nome">Nome de usuário:</label>
                            <FillName type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </DivCampo>
                        <DivCampo>
                            <label htmlFor="email">Digite um E-mail:</label>
                            <FillEmail type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </DivCampo>
                        <DivCampo>
                            <label htmlFor="senha">Digite uma senha:</label>
                            <FillSenha type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </DivCampo>
                    </CampoPreencher>
                </InputAndTitle>
                <BtnAgreement>
                    <Cadastrar onClick={armazenarDados}>Cadastrar</Cadastrar>
                </BtnAgreement>
                <p>Ao criar uma conta, você está de acordo com nossa política de privacidade.</p>
            </SignInBox>
        </>
    );
}