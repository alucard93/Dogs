
import { Route, Routes } from 'react-router-dom'

import { LoginCreate } from './LoginCreate/LoginCreate'
import { LoginForm } from './LoginForm/LoginForm'
import { LoginPasswordLost } from './LoginPasswordLost/LoginPasswordLost'
import { LoginPasswordReset } from './LoginPasswordReset/LoginPasswordReset'
import { LoginContainer } from './style'

import login from '../../assets/login.jpg'

export const Login = () => {
  return (
    <LoginContainer img={login}>
      <div className='forms'>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </LoginContainer>
  )
}
