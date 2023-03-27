import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { LoginContext } from '../../contenxt/LoginProvider/LoginProvider'

export const ProtectedRoutes = () => {
  const { login } = useContext(LoginContext)
  return login ? <Outlet /> : <Navigate to="/login" replace />    
}
