import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/51/50"}
        fotoPost={"https://picsum.photos/201/150"}
      />
      <Post
        nomeUsuario={"bruninha"}
        fotoUsuario={"https://picsum.photos/53/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post
        nomeUsuario={"lara"}
        fotoUsuario={"https://picsum.photos/54/50"}
        fotoPost={"https://picsum.photos/203/150"}
      />
    </MainContainer>
  );
}

export default App;
