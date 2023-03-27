import { createContext, useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()

  async function autoLogin() {
    const token = localStorage.getItem('@DOGS')

    if (token) {
      try {
        setError(null)
        setLoading(true)
        setLogin(true)
        const res = await requestValidationToken(token)

        GetUser(token)
      } catch (error) {
        userLogout()
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
      setError(null)
      setLoading(true)
      const res = await requestSessionUser(data)
      localStorage.setItem('@DOGS', res.token)
      setToken(res.token)
      setLogin(true)

      GetUser(res.token)
      navigate('/conta')
      
    } catch (error) {
      setLogin(false)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function userLogout() {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)

    navigate('/login')
    localStorage.removeItem('@DOGS')
  }

  return (
    <LoginContext.Provider
      value={{
        token,
        data,
        error,
        loading,
        login,
        setToken,
        sessionUser,
        userLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
