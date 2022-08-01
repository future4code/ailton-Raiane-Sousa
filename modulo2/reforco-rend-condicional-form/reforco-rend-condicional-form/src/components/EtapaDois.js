import React from "react";
import styled from "styled-components";

const ContainerSegundario = styled.div`
text-align: center;
font-size: 15px`

const Titulo = styled.h1`
font-size: 20px;`

function EtapaDois (props) {
    return(
        <ContainerSegundario>
          <Titulo>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</Titulo>
          <p>5. Qual curso?</p>
          <input/>
          <p>6. Qual a unidade de ensino?</p>
          <input/><p/>
          <button onClick={() => props.setTelaAtual(3)}>Próxima etapa</button>
        </ContainerSegundario>
    )
}

export default EtapaDois; 