import './App.css';
import React, { Component } from 'react'
import axios from 'axios';
export  class Home extends Component {
  state={
    listaDeCadastro:[],
    inputEmail:"",
    inputName:"",
    tela: "home"
  }

  onChangeInput = (event) => {
    this.setState({inputEmail: event.target.value})
  }
  onChangeInputName = (event) => {
    this.setState({inputName: event.target.value})
  }
  componentDidMount() {
    this.getLogin();
  }
  criarLogin = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,
      {
        headers:{
          Authorization:"raiane-sousa-ailton"
        }
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  getLogin = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization:"raiane-sousa-ailton"
          }
        }
      )
      .then((response) => {
        this.setState({ listaDeCadastro: response.data});
        // alert("cadastro efetuado com sucesso!")
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message);
        // alert("cadastro não efetuado!")
      });
  };
  render() {
    const listaDeUsuarios = this.state.listaDeCadastro?.map((login) => {
      return<div key={login.id}>
        <li>{login.name}</li><br/>
        
        </div>
    })
    return (
      <main>
        <h1>Cadastro do usuário</h1>
        <button onClick={this.props.goLogin}>Usuários</button>
        <hr />

        <section>
          <label>
            Email:
            <input value={this.state.inputEmail} onChange={this.onChangeInput} />   
            Nome:
            <input value={this.state.inputName} onChange={this.onChangeInputName}/>
          </label> 

          <button onClick={this.criarLogin}>Enviar</button>
        </section>

         <section>

         {listaDeUsuarios}
          
        </section> 
      </main>
     
    )
  }
}




class Login extends Component {
  criarLogin = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,
      {
        headers:{
          Authorization:"raiane-sousa-ailton"
        }
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  render() {
    const listaDeUsuarios = this.state.listaDeCadastro?.map((login) => {
      return<div key={login.id}>
        <p>{login.name}</p>
        </div>
    })
    return (
      <div>
        <div>{listaDeUsuarios}</div>
        <button onClick={this.props.goHome}>Voltar</button>
      </div>
    );
  }
}

export default  class App extends Component {
  state = {
    tela: "home",
    
  };

  goHome = () => {
    this.setState({
      tela: "home"
    });
  };

  goLogin = () => {
    this.setState({
      tela: "login"
    });
  };

  escolheTela = () => {
    switch (this.state.tela) {
      case "home":
        return <Home goLogin={this.goLogin} />;
        break;
      case "login":
        return <Login goHome={this.goHome} />;
        break;
      
    }
  };

  render() {
    return <div>{this.escolheTela()}</div>;
  }
}
