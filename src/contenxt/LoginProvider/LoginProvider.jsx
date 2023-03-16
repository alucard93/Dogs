import { createContext, useContext, useState } from 'react'

export const LoginContext = createContext({})

const LoginProvider = ({ children }) => {
  const [token, setToken] = useState('')

  async function sessionUser(data) {
    try {
      const res = await requestSessionUser(data)
      localStorage.setItem('@DOGS', res.token)
      setToken(res.token)
    } catch (error) {
      throw new Error('puts')
    }
  }

  return (
    <LoginContext.Provider value={{ token, setToken, sessionUser }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
