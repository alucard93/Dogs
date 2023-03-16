import React from 'react'
import { requestGetPhoto } from './api';

export const PhotoGet = () => {

  async function photoList() {
    try {
      const res = await requestGetPhoto();
      console.log(res)
    } catch (error) {
      console.log(error); //imprime o erro real
      throw new Error('Deu erro')
    }
  }

  function handleSubmit (event) {
    event.preventDefault()
    photoList()
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Enviar</button>
      <input type="text" />
    </form>
  )
}
