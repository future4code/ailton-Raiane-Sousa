import React from "react";
import styled from "styled-components";

const ContainerF = styled.div`
text-align: center;
font-size: 17px`

const Titulo = styled.h1`
font-size: 20px;`

function EtapaFinal (props) {
    return(
        <ContainerF>
            <Titulo>O FORMULÁRIO ACABOU</Titulo>
            <p>Muito obrigado por participar! Entramos em contato! </p>
        </ContainerF>
    )
}

export default EtapaFinal;