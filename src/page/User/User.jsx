import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Feed } from '../../components/Feed/Feed'
import { Container } from '../../styles/global'
import { UserHeader } from './UserHeader/UserHeader'
import { UserPhotoPost } from './UserPhotoPost/UserPhotoPost'
import { UserStats } from './UserStats/UserStats'

export const User = () => {
  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/posta" element={<UserPhotoPost />}></Route>
        <Route path="/estatisticas" element={<UserStats />}></Route>
      </Routes>
    </Container>
  )
}
