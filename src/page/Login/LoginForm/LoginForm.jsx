import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {

  const { register, handleSubmit } = useForm()

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id='username'
          {...register('username')}
          
        />
        <input
          type="text"
          id='password'
          {...register('password')}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  )
}
