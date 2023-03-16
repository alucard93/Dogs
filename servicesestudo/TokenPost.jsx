import React, { useContext } from 'react'
import { LoginContext } from '../contenxt/LoginProvider/LoginProvider'
import { RegisterContext } from '../contenxt/RegisterProvider/RegisterProvider'

export const TokenPost = () => {
  const { username, password, setUsername, setPassword } =
    useContext(RegisterContext)

  const { token, setToken, sessionUser } = useContext(LoginContext)

  function handleSubmitLogin(event) {
    event.preventDefault()
    const newLogin = {
      username: username,
      password: password,
    }
    sessionUser(newLogin)
  }

  return (
    <form
      onSubmit={handleSubmitLogin}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        margin: '0 auto',
        marginTop: '180px',
      }}
    >
      <h2 style={{wordBreak: 'break-all'}}> {token}</h2>

      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
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
