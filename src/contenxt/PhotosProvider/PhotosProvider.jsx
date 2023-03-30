import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import { requestGetPhoto, requestGetPhotos } from '../../service/api'
import { LoginContext } from '../LoginProvider/LoginProvider'

export const PhotosContext = createContext({})

export const PhotosProvider = ({ children }) => {
  const { setLoading } = useContext(LoginContext)
  const [dataPhotos, setDataPhotos] = useState([])
  const [dataPhotoModal, setDataPhotoModal] = useState([])
  const [dataCommentModal, setDataCommentModal] = useState([])

  async function getPhotos() {
    try {
      const res = await requestGetPhotos({ page: 1, total: 6, user: 0 })

      setDataPhotos(res)
    } catch (error) {
      console.log(error)
    }
  }

  async function getPhoto(id) {
    try {
      setLoading(true)
      const res = await requestGetPhoto(id)
  
      setDataPhotoModal(res.photo)
      setDataCommentModal(res.comments)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PhotosContext.Provider
      value={{
        getPhoto,
        getPhotos,
        dataPhotos,
        dataPhotoModal,
        setDataPhotoModal,
        setDataCommentModal,
      }}
    >
      {children}
    </PhotosContext.Provider>
  )
}
