import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'


export const DefaultLayots = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
