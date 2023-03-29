import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import LoginProvider from './contenxt/LoginProvider/LoginProvider'
import { RegisterProvider } from './contenxt/RegisterProvider/RegisterProvider'
import { PhotosProvider } from './contenxt/PhotosProvider/PhotosProvider'

import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <PhotosProvider>
          <RegisterProvider>
            <GlobalStyle />
            <Router />
            <App />
          </RegisterProvider>
        </PhotosProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
)
