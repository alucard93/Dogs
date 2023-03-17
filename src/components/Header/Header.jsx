import React from 'react'
import { Link } from 'react-router-dom'

import Dogs from '../../assets/dogs.svg'
import user from './usuario.svg'

import { Container } from '../../styles/global'
import { HeaderContainer } from './style'



export const Header = () => {
  return (
    <HeaderContainer>
      <Container className='nav'>
        <Link className='logo' to="/">
          <img src={Dogs} alt="" />
        </Link>
        <Link className='login' to="/login">Login / Criar</Link>
        {/* <img src={user} alt="" /> */}
      </Container>
    </HeaderContainer>
  )
}
