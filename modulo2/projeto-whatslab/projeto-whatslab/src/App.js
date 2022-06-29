
import { render } from "@testing-library/react";
import React from "react";
import './App.css';


class App extends React.Component {
  state={
    mensagem:[
      {usuario:"Raiane",texto:"Olá, boa tarde!"}
    ],

    usuarioB:'',
    textoB:''
  };
  pegarValorInputRemetente=(event) =>{
    this.setState({
      usuarioB: event.target.value
    })
  }
  pegarValorInputMensagem=(event) =>{
     this.setState({
      textoB: event.target.value
    })
  }
  
  onClickEnviar = () => {
  const novoArray=[...this.state.mensagem,{usuario:this.state.usuarioB, texto:this.state.textoB}]
  this.setState({mensagem:novoArray}) 
  this.setState({usuarioB:''})
  this.setState({textoB:''})
  }

  apagarMensagem=(id)=>{
    const novoArray= this.state.mensagem.filter((sms, index)=>{
      return id !== index
    })
    this.setState({mensagem: novoArray})
  }

  render(){
    const renderizaMensagem = this.state.mensagem.map((sms, index) => {
      return(
          <container className="card" key={index}>
            <p><b>{sms.usuario} :</b></p>
            <p>{sms.texto}</p>
            <button className="apagar" onClick={() => this.apagarMensagem(index)}>x</button>
            <hr/>
          </container>
      )
    })
    return(
      <div className="pai">
      <div className="Container">
        <div className="App-header"> 
          <h1>WhatsLab</h1>
          <img src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Lupa-PNG.png" />
        </div>
        <div className="Corpo">{renderizaMensagem}</div>
      </div>

      <div className="inputs">
      <input className="inputRemetente"
      value={this.state.usuarioB}
      onChange={this.pegarValorInputRemetente}
      placeholder={"Usuário"}
      />

      <input
      value={this.state.textoB}
      onChange={this.pegarValorInputMensagem}
      placeholder={"Mensagem"}
      />

      <button onClick={this.onClickEnviar}>Enviar</button>
      </div> 
      </div>
      )
  }
    
}




export default App;
