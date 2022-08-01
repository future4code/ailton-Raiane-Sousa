import React from "react";
import styled from "styled-components";

const ContainerT = styled.div`
text-align: center;
font-size: 15px`

const Titulo = styled.h1`
font-size: 20px;`


function EtapaTres (props) {
    return(
        <ContainerT>
          <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
          <p>5. Por que você não terminou um curso de graduação? </p>
          <input/><br/>
          <p>6. Você fez algum curso complementar?</p>
            <select name="select">
                <option value="valor1" selected>Nenhum</option>
                <option value="valor2">Curso técnico</option>
                <option value="valor3">Curso de inglês</option>
            </select>
                <p/>
            <button onClick={() => props.setTelaAtual(4)}>Próxima etapa</button>
        </ContainerT>
    )
}

export default EtapaTres;