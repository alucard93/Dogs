import React, { useContext } from 'react'
import { LoginCreateContainer } from './style'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { validationLoginCreate } from '../../../validators/validatorsLoginCreate'

import { RegisterContext } from '../../../contenxt/RegisterProvider/RegisterProvider'

import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'
import { LoginContext } from '../../../contenxt/LoginProvider/LoginProvider'

export const LoginCreate = () => {
  const { registerUser } = useContext(RegisterContext)
  const { sessionUser } = useContext(LoginContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginCreate),
  })

  const handleSubmitRegister = async (data) => {
    const { username, password, email } = data

    const newUser = {
      username,
      email,
      password,
    }

    await registerUser(newUser)

    const newLogin = {
      username,
      password,
    }

    sessionUser(newLogin)
  }

  return (
    <LoginCreateContainer className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit((data) => handleSubmitRegister(data))}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          register={register}
          errosMessage={errors.username?.message?.toString()}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          register={register}
          errosMessage={errors.email?.message?.toString()}
        />

        <Input
          label="Senha"
          type="password"
          name="password"
          register={register}
          errosMessage={errors.password?.message?.toString()}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </LoginCreateContainer>
  )
}
