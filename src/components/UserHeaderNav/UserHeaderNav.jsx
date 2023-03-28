import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LoginContext } from '../../contenxt/LoginProvider/LoginProvider'
import { UserHeaderNavContainer } from './style'

import MinhasFotos from '../../assets/feed.svg'
import Estatisticas from '../../assets/estatisticas.svg'
import AdicionarFotos from '../../assets/adicionar.svg'
import Sair from '../../assets/sair.svg'

import { useMediaQuery } from 'react-responsive'

export const UserHeaderNav = () => {
  const { userLogout } = useContext(LoginContext)

  const [mobileMenu, setMobileMenu] = useState(false)
  const [buttonActive, setButtonActive] = useState(false)

  const mobile = useMediaQuery({ maxWidth: 640 })

  // quando o pathname mudar, eu limpo tudo
  const { pathname } = useLocation()
  useEffect(() => {
    setMobileMenu(false)
    setButtonActive(false)
  }, [pathname])

  return (
    <UserHeaderNavContainer>
      {mobile && (
        <button
          className={!buttonActive ? 'mobileButton' : 'mobileButtonActive'}
          aria-label="Menu"
          onClick={() => {
            setMobileMenu(!mobileMenu)
            setButtonActive(!buttonActive)
          }}
        ></button>
      )}
      <nav
        className={`
            ${mobile ? 'navMobile' : 'nav'} 
            ${mobileMenu && 'navMobileActive'}
        `}
      >
        <NavLink to="/conta" end activeclassname="active" className="icon">
          <img src={MinhasFotos} alt="" />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink
          to="/conta/estatisticas"
          activeclassname="active"
          className="icon"
        >
          <img src={Estatisticas} alt="" />
          {mobile && 'Estatística'}
        </NavLink>

        <NavLink to="/conta/postar" activeclassname="active" className="icon">
          <img src={AdicionarFotos} alt="" />
          {mobile && 'Adicionar Fotos'}
        </NavLink>

        <button onClick={userLogout}>
          <img src={Sair} alt="" />
          {mobile && 'Sair'}
        </button>
      </nav>
    </UserHeaderNavContainer>
  )
}
