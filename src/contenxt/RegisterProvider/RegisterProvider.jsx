import { createContext, useContext, useState } from 'react'
import { requestRegisterUser } from '../../service/api'

export const RegisterContext = createContext({})

export const RegisterProvider = ({ children }) => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(data) {
    try {
      const res = await requestRegisterUser(data)
      console.log(res)
    } catch (error) {
      console.log(error)
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
