import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { requestPhoto, requestRegisterUser } from '../../service/api'

export const RegisterContext = createContext({})

export const RegisterProvider = ({ children }) => {

  const navigate = useNavigate()
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(data) {
    try {
      const res = await requestRegisterUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function registerPhoto(data) {

    
    const token = localStorage.getItem('@DOGS')
    
    try {
      const res = await requestPhoto(data, token)
      navigate('/conta')
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
        registerPhoto,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
