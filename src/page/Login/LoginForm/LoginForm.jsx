import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { validationLoginForm } from '../../../validators/validatorsLoginForm'
import { LoginFormContainer } from './style'
import { LoginContext } from '../../../contenxt/LoginProvider/LoginProvider'
import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'

export const LoginForm = () => {
  const { token, setToken, sessionUser } = useContext(LoginContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginForm),
  })

  function handleSubmitLogin(data) {
    const { username, password } = data
    const newLogin = {
      username,
      password,
    }
    sessionUser(newLogin)
  }

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit((data) => handleSubmitLogin(data))}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          register={register}
          errosMessage={errors.username?.message?.toString()}
        />

        {/* <input type="text" id="password" {...register('password')} /> */}
        <Input
          label="Senha"
          type="password"
          name="password"
          register={register}
          errosMessage={errors.password?.message?.toString()}
        />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  )
}
