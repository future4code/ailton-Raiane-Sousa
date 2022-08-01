import React from "react";
import styled from "styled-components";
import App from "../App";
import EtapaFinal from "./EtapaFinal";

const ContainerPrimario = styled.div`
text-align: center;
font-size: 16px`


const Titulo = styled.h1`
font-size: 20px;`

function DadosGerais(props) {
    return (
        <ContainerPrimario>
            <Titulo>ETAPA 1 -DADOS GERAIS</Titulo>

            <p>1. Qual o seu nome?</p>
            <input />
            <p>2. Qual sua idade?</p>
            <input />
            <p>3. Qual o seu email?</p>
            <input />
            <p>4. Qual a sua escolaridade?</p>
            <select name="select">
                <option value="valor1" selected>Ensino médio incompleto</option>
                <option value="valor2">Ensino médio completo</option>
                <option value="valor3">Ensino superior incompleto</option>
                <option value="valor4">Ensino superior completo</option>
            </select>

            <p />
            <button onClick={() => props.setTelaAtual(2)}>Próxima etapa</button>
        </ContainerPrimario>
    )
}

export default DadosGerais;