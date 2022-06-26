import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Card  = styled.div`
border: 2px solid black;
padding: 10px;
margin: 10px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`

export default class Home extends React.Component {
    state={
        inputName:'',
        lista:[]
    }

componentDidMount(){
    this.mostrarList()
}
mostrarList = () =>{
    // const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{
        headers:{
            Authorization:"raiane-sousa-ailton"
        }
    })
    .then((res) => {
        this.setState({lista: res.data.result.list})
        
    })
    .catch((err) => {
        alert("erro, tente novamente")
    })
}

novaPlaylist = (event) => {
this.setState({inputName: event.target.value})
}

inputList= () => {
    // const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {name:this.state.inputName}
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,{
        headers:{
            Authorization: "raiane-sousa-ailton"
        }
    })
    .then((res) => {
        console.log(res)
        alert("Playlist Cadastrada com sucesso!")
        this.setState({inputName:""})
    })
    .catch((error) => {
        console.log(error)
        alert("error.response.data.massage") 
    })
}


  render() {
    const novaLista = this.state.lista.map((item) => {
        return <Card key={item.id}>
            {item.name}
            <button>x</button>
            </Card>
    })
    return (
      <div>
        <h1>Home</h1>
        <input placeholder='Nova Playlist' onChange={this.novaPlaylist} value={this.state.inputName}/>
        <button onClick={this.inputList}>Criar</button>
        {novaLista}
      </div>
    )
  }
}
