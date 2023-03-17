import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Dogs from '../../assets/dogs.svg'
import user from './usuario.svg'

import { Container } from '../../styles/global'
import { HeaderContainer } from './style'
import { LoginContext } from '../../contenxt/LoginProvider/LoginProvider'

export const Header = () => {
  const { data } = useContext(LoginContext)
  return (
    <HeaderContainer>
      <Container className="nav">
        <Link className="logo" to="/">
          <img src={Dogs} alt="" />
        </Link>

        {data ? (
          <Link className="login" to="/conta">
            {data.username}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </Container>
    </HeaderContainer>
  )
}

// {data && console.log(data)}
// {data && data.user_email}
