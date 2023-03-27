import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../components/Layout/DefaultLayout'
import { ProtectedRoutes } from '../components/ProtectedRoute/ProtectedRoute'

import { Home } from '../page/Home/Home'
import { Login } from '../page/Login/Login'
import { User } from '../page/User/User'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/conta/*" element={<User />} />
        </Route>

      </Route>
    </Routes>
  )
}
