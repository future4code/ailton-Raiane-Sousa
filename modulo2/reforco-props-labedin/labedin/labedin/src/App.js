import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  // infos () =>{
  //   CardPequeno
  // }
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/123827716_359514201968808_4538147567366582466_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHtooyf36uUv7OGsKMxgDeYsUu3ttannNGxS7e21qec0VDLmCxaOgwVbCQ3ZNNrDr3DbFTQFHV-TdMseuq6ZCqI&_nc_ohc=WBEJ03jFkxgAX9lKCFb&_nc_ht=scontent-gru1-1.xx&oh=00_AT8roeHY4YQLIc09MRQUgnDGLuETBg8i-nBNQG4HqEUqKg&oe=630888DB" 
          nome="Raiane Marcelino" 
          descricao="Olá, eu sou a Raiane. Sou estudante da Labenu. Adoro aprender sobre desenvolvimento web. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
          // onClick={infos}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent-gru1-2.xx.fbcdn.net/v/t1.18169-9/16472893_1910490755839085_3761413742175811429_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFWuX9U5oRHfrtJ5sVLzQ6TogXASd8uCIiiBcBJ3y4IiCR4NxASth5R05JHpk_H2NSyZ7_YeGbq4mDUVwlPHJn8&_nc_ohc=sNhg5BhcmS4AX-L5-Nh&_nc_oc=AQn6btmCF9HTR_ijMNl4EQj5LfVcKLeHZCb8CTIzPWaVtTbtoR10SWTg_6YudFS41qs&tn=R1LAZ9f-J1S4_SHu&_nc_ht=scontent-gru1-2.xx&oh=00_AT8TOCXWVqBx_piIhQuJCSikOcF_bl2sXS_vmH906Q4W_Q&oe=6306EE45" 
          nome="Laurita Center Paranaguá" 
          descricao="Vendedora de loja de departamento por cinco anos." 
        />
        
        <CardGrande 
          imagem="https://scontent-gru1-2.xx.fbcdn.net/v/t1.18169-9/16472893_1910490755839085_3761413742175811429_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFWuX9U5oRHfrtJ5sVLzQ6TogXASd8uCIiiBcBJ3y4IiCR4NxASth5R05JHpk_H2NSyZ7_YeGbq4mDUVwlPHJn8&_nc_ohc=sNhg5BhcmS4AX-L5-Nh&_nc_oc=AQn6btmCF9HTR_ijMNl4EQj5LfVcKLeHZCb8CTIzPWaVtTbtoR10SWTg_6YudFS41qs&tn=R1LAZ9f-J1S4_SHu&_nc_ht=scontent-gru1-2.xx&oh=00_AT8TOCXWVqBx_piIhQuJCSikOcF_bl2sXS_vmH906Q4W_Q&oe=6306EE45" 
          nome="Laurita C. Mega Store Praia de Ipanema" 
          descricao="Lider de equipe no setor de eletronicos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
