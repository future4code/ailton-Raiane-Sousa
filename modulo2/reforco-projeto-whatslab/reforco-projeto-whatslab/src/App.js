import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
import { useState } from 'react';
const Inputs = styled.div`
// border: 1px solid black;
display: flex;
margin-top: 100%;
width:100.1%;
`
const InputWidth1 = styled.input`
width: 25%`

const InputWidth = styled.input`
width: 65%`


const ContainerDiv = styled.div`

  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-items: center;
  margin-left: 10%;
  height: 101%;
`
const Balao = styled.div`
width:30%;
margin-left: 10px;
padding-left: 10px;
border-radius: 8%;
background-color: aquamarine;`

function App() {
  const [texto, setTexto] = useState ([
    {
      usuario: "Raiane",
      mensagens: "Bom Dia!"
    }
  ])
const [usuarioInput, setUsuarioInput] = useState("");
const [smsInput, setSmsInput] = useState("");

const mensagem = () => {

  const novaMensagem = {
    usuario: usuarioInput,
    mensagens: smsInput
  }

  const nvasMensagens = [...texto, novaMensagem]
  setTexto(nvasMensagens)
}

const onChangeInputUsuario = (event) => {
  setUsuarioInput(event.target.value);
}

const onChangeInputSms = (event) => {
  setSmsInput(event.target.value);
}

const listDeSms = texto.map((item) => {
  return(
    <Balao>
      <p><b>{item.usuario}:</b></p>
      <p>{item.mensagens}</p>
    </Balao>
  )
})
  return (
< ContainerDiv>
<div>{listDeSms}</div>
  <Inputs>
  <InputWidth1 value={usuarioInput} onChange={onChangeInputUsuario} placeholder='Usuário'/>
  <InputWidth value={smsInput} onChange={onChangeInputSms} placeholder='Mensagem'/>
  <button onClick={mensagem}>Enviar</button>
  
  </Inputs>

</ ContainerDiv>
  )
}
export default App;
