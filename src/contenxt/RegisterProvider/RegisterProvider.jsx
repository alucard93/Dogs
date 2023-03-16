import { createContext, useContext, useState } from 'react'

export const RegisterContext = createContext({})

export const RegisterProvider = ({ children }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(data) {
    try {
      const res = await requestRegisterUser(data)
    } catch (error) {
      throw new Error('Deu erro')
    }
  }

  return (
    <RegisterContext.Provider
      value={{
        username,
        email,
        password,
        setUsername,
        setEmail,
        setPassword,
        registerUser,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
