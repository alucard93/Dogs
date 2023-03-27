import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { UserHeaderNav } from '../../../components/UserHeaderNav/UserHeaderNav'
import { UserHeaderContainer } from './style'

export const UserHeader = () => {
  const[title, setTitle] = useState('')
  const location =  useLocation()

  useEffect(() => {
    const { pathname } = location
    switch(pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto')
        break

      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break

      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <UserHeaderContainer>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </UserHeaderContainer>
  )
}
