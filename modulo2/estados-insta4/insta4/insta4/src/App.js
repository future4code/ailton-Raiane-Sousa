import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [{
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Julia',
      fotoUsuario: 'https://picsum.photos/200/250',
      fotoPost: 'https://picsum.photos/200/300?grayscale'
    },
    {
      nomeUsuario: 'Clarinha',
      fotoUsuario: 'https://picsum.photos/200/300',
      fotoPost: 'https://picsum.photos/id/870/200/300?grayscale&blur=2'
    }
    ]
  }

  render() {
    const listaDeComponentes = this.state.posts.map((post) => {
      return (
        <p>
          {post.nomeUsuario} - {post.fotoUsuario} - {post.fotoPost}
        </p>
      );
    });
    return (

      <div>
        {listaDeComponentes}
      </div>
    )

  }
}


export default App;
