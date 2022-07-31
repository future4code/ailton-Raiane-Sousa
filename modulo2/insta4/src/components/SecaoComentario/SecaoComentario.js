import React, {Component, useState} from 'react'
import styled from 'styled-components'
import Post from '../Post/Post'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export function SecaoComentario (props) {
	const[input,setInput]=useState("")

	const onChangeComentario = (event) => {
	 setInput(event.target.value)
	}

	
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={input}
				onChange={onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>       

}

export default SecaoComentario;
