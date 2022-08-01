import './App.css';
import DadosGerais from './components/DadosGerais';
import React, { useState } from 'react';
import EtapaTres from './components/EtapaTres';
import EtapaFinal from './components/EtapaFinal';
import EtapaDois from './components/EtapaDois';

function App() {

 const [telaAtual, setTelaAtual] = useState(1)

  const irParaHome = () => {
    setTelaAtual("home")
  }

  const irParaEtapaDois = () => {
    setTelaAtual("etapaDois")
  }

  const irParaEtapaTres = () => {
    setTelaAtual("etapaTres")
  }

  const irParaEtapaFinal = () => {
    setTelaAtual("etapaFinal")
  }

  const renderizaTela = () => {
    switch(telaAtual){
      case 1:
      return <DadosGerais setTelaAtual={setTelaAtual}/>
    case 2 :
      return <EtapaDois setTelaAtual={setTelaAtual}/>
    case 3 :
      return <EtapaTres setTelaAtual={setTelaAtual}/>
    case 4 :
      return <EtapaFinal/>
    default:
      return <p>TEMPORARIAMENTE EM MANUTENÇÃO, TENTE MAIS TARDE.</p>
    }
  }

  return (
    <div>
     {renderizaTela()}
    </div>
  );
}

export default App;
