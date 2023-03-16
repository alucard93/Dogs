import React, { useContext, useState } from 'react'
import { RegisterContext } from '../src/contenxt/RegisterProvider/RegisterProvider'

export const UserPost = () => {
  const {
    username,
    email,
    password,
    setUsername,
    setEmail,
    setPassword,
    registerUser,
  } = useContext(RegisterContext)

  function handleSubmit(event) {
    event.preventDefault()
    const newRegister = {
      username: username,
      email: email,
      password: password,
    }
    registerUser(newRegister)
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
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <input
        type="password"
        placeholder="senha"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar</button>
    </form>
  )
}
