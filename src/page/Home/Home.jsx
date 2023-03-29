import React from 'react'
import { Feed } from '../../components/Feed/Feed'
import { Container } from '../../styles/global'
import { HomeContainer } from './style'

export const Home = () => {
  return (
    <HomeContainer>
      <Container  >
        <Feed />
      </Container>
    </HomeContainer>
  )
}
