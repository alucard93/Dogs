import React, { useContext, useState } from 'react'
import { LoginContext } from '../src/contenxt/LoginProvider/LoginProvider'

import { requestPhoto } from './api'

export const PhotoPost = () => {
  const [nome, setNome] = useState('')
  const [peso, setPeso] = useState('')
  const [idade, setIdade] = useState('')
  const [img, setImg] = useState('')

  const { token } = useContext(LoginContext)

  async function photo(data) {
    try {
      const res = await requestPhoto(data, token)
    } catch (error) {
      console.log(error) //imprime o erro real
      throw new Error('Deu erro')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const data = {
      img,
      nome,
      idade,
      peso,
    }

    photo(data)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        margin: '0 auto',
        marginTop: '180px',
      }}
    >
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />

      <input
        type="text"
        placeholder="nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />

      <input
        type="text"
        placeholder="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />

      <input
        type="text"
        placeholder="idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />

      <input type="file" onChange={({ target }) => setImg(target.files[0])} />

      <button>Enviar</button>
    </form>
  )
}
