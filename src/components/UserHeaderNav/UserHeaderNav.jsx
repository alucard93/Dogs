import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LoginContext } from '../../contenxt/LoginProvider/LoginProvider'
import { UserHeaderNavContainer } from './style'

import MinhasFotos from '../../assets/feed.svg'
import Estatisticas from '../../assets/estatisticas.svg'
import AdicionarFotos from '../../assets/adicionar.svg'
import Sair from '../../assets/sair.svg'

export const UserHeaderNav = () => {
  const { userLogout } = useContext(LoginContext)

  const [mobile, setMobile] = useState(null)
  return (
    <UserHeaderNavContainer>
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
    </UserHeaderNavContainer>
  )
}
