import { createContext, useContext, useEffect, useState } from 'react'
import {
  requestSessionUser,
  requestValidationToken,
  requestGetUser,
} from '../../service/api'

export const LoginContext = createContext({})

const LoginProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function autoLogin() {
    const token = localStorage.getItem('@DOGS')

    if (token) {
      try {
        setError(null)
        setLoading(true)
        const res = await requestValidationToken(token)

        GetUser(token)
        
      } catch (error) {
        console.log('Erro na validação do token:', error)
        setError(error)

      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    autoLogin()
  }, [])

  async function GetUser(token) {
    try {
      const res = await requestGetUser(token)
      setData(res)
      
    } catch (error) {
      console.log(error)
    }
  }

  async function sessionUser(data) {
    try {
      const res = await requestSessionUser(data)
      localStorage.setItem('@DOGS', res.token)
      setToken(res.token)
      setLogin(true)

      GetUser(res.token)
    } catch (error) {
      console.log(error)
      throw new Error('puts')
    }
  }

  return (
    <LoginContext.Provider value={{ token, setToken, sessionUser, data }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
