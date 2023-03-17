import { Route, Routes } from 'react-router-dom'

import { DefaultLayots } from '../components/Layout/DefaultLayout'

import { Home } from '../page/Home/Home'
import { Login } from '../page/Login/Login'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayots />}>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/conta" element={<Login />} />
      </Route>
    </Routes>
  )
}
