import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginContext } from '../../contenxt/LoginProvider/LoginProvider'
import { LoginCreate } from './LoginCreate/LoginCreate'
import { LoginForm } from './LoginForm/LoginForm'
import { LoginPasswordLost } from './LoginPasswordLost/LoginPasswordLost'
import { LoginPasswordReset } from './LoginPasswordReset/LoginPasswordReset'


export const Login = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='perdeu' element={<LoginPasswordLost />} />
        <Route path='resetar' element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}
