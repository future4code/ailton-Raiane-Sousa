import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

export default class App extends Component {
  state = {
    tela: "TelaPrincipal"
  };

  goTelaPrincipal = () => {
    this.setState({
      tela: "TelaPrincipal"
    });
  };

  goSegundaTela = () => {
    this.setState({
      tela: "SegundaTela"
    });
  };

  goTerceiraTela = () => {
    this.setState({
      tela: "TerceiraTela"
    });
  };

  goQuartaTela = () => {
    this.setState({
      tela: "QuartaTela"
    });
  };


  escolheTela = () => {
    switch (this.state.tela) {
      case "TelaPrincipal":
        return <TelaPrincipal goSegundaTela={this.goSegundaTela} />;
        break;
      case "SegundaTela":
        return <SegundaTela goTerceiraTela={this.goTerceiraTela} />;
        break;
      case "TerceiraTela":
        return <TerceiraTela goQuartaTela={this.goQuartaTela} />;
        break;
        case "QuartaTela":
          return <QuartaTela goQuartaTela={this.goQuartaTela} />;
          break;
    
    }
  };

  render() {
    return <div>{this.escolheTela()}</div>;
  }
}


class TelaPrincipal extends Component {
  state = {
    escolaridade: false
    
  };

  mostraEscolaridade = () => {
    this.setState({
      escolaridade: !this.state.escolaridade
    });
  };
  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1.Qual é o seu nome?</p>
        <input/>
        <p>2.Qual é a sua idade?</p>
        <input/>
        <p>3.Qual é o seu email?</p>
        <input/>
       
        <p>4.Qual a sua escolaridade?</p>
         
          <p>Ensino médio incompleto</p>
          <p>nsino médio</p>
          <p>Ensino superior incompleto</p>
          <p>Ensino superior completo</p>

        <button onClick={this.props.goSegundaTela}>Proxima Etapa</button>
      </div>
    );
  }
}
class SegundaTela extends Component {

  render() {
    return (
      <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <p>5. Qual curso?</p>
        <input/>
        <p>6. Qual a unidade de ensino?</p>
        <input/>
        <br/>
        <button onClick={this.props.goTerceiraTela}>Proxima Etapa</button>
      </div>
    );
  }
}

class TerceiraTela extends Component {

  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input/>
        <p>8. Você fez algum curso complementar?</p>


        <button onClick={this.props.goQuartaTela}>Proxima Etapa</button>
      </div>
    );
  }
}

class QuartaTela extends Component {

  render() {
    return (
      <div>
        <h1>O FORMULÁRIO ACABOU</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>

      </div>
    );
  }
}
