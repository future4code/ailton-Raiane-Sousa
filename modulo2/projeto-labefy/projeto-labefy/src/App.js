import axios from 'axios'
import React from 'react'
import Home from './pages/Home'
import Playlist from './pages/Playlist'

export default class App extends React.Component {
  state={
    telaAtual: 'Home'
  }


  escolherTela = () => {
    switch(this.state.telaAtual){
      case 'Home':
        return <Home irParaHome={this.irParaHome}/>
      case 'Playlist':
          return <Playlist irParaPlaylist={this.irParaPlaylist}/>
      default:
        return "Erro!"
    }
  }

  irParaHome = () => {
    this.setState({telaAtual:"Home"})    
    }

  irParaPlaylist = () => {
    this.setState({telaAtual:"Playlist"}) 
    }

  render() {
    return (
      <div> 
        {this.escolherTela()}
      </div>
    )
  }
}

// export default App;
