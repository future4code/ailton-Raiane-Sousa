import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {

  const [post,setPost] = useState([   
    {   
    nomeUsuario:"paulinha",
    fotoUsuario:"https://picsum.photos/51/50",
    fotoPost:"https://picsum.photos/201/150"},
   
   
    {  
    nomeUsuario:"bruninha",
    fotoUsuario:"https://picsum.photos/53/50",
    fotoPost:"https://picsum.photos/200/150"},
   
    {
    nomeUsuario:"lara",
    fotoUsuario:"https://picsum.photos/54/50",
    fotoPost:"https://picsum.photos/203/150"}
   ]);
 
   const [inputPessoa,setInputPessoa] = useState("");
   const [inputFoto,setInputFoto] = useState("");
   const [inputPost,setInputPost] = useState("");

   const adicionaPost = () =>{
    const novaPostagem = {
      nome: inputPessoa,
      fotoUsuario: inputFoto,
      post: inputPost
    }
    const novoPosts = [...post, novaPostagem];
    setPost(novoPosts);
   }

   const onChangePessoa = (event) => {
    setInputPessoa(event.target.value)

   }
   const onChangeFoto = (event) => {
    setInputFoto(event.target.value)

   }
   const onChangePost = (event) => {
    setInputPost(event.target.value)
   }

   const listaDePost = post.map((item)=>{
    return(
    <MainContainer>
        {item.nomeUsuario}
        {item.fotoUsuario}        
        {item.fotoPost}
        <p/>
     </MainContainer>
    )
   })

  return(
    <div>
      <input value={inputPessoa} onChange={onChangePessoa} placeholder={"Nome"}/>
      <input value={inputFoto} onChange={onChangeFoto} placeholder={"Link da imagem do usuário"}/>
      <input value={inputPost} onChange={onChangePost} placeholder={"Link do post"}/>
      <button onClick={adicionaPost}>Adicionar post</button>
      <div>{listaDePost}</div>
    </div>
  )
}

export default App;
