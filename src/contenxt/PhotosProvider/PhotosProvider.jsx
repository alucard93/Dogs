import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import {
  requestCommentPost,
  requestGetComments,
  requestGetPhoto,
  requestGetPhotos,
} from '../../service/api'
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
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function getComment(id) {
    try {
      setLoading(true)
      const res = await requestGetComments(id)

      setDataCommentModal(res.comments)
      return res.comments
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function postComment(id, data) {
    try {
      const res = await requestCommentPost(id, data)
      setDataCommentModal((prevComments) => [...prevComments, res])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PhotosContext.Provider
      value={{
        getPhoto,
        getComment,
        getPhotos,
        postComment,
        dataPhotos,
        dataPhotoModal,
        dataCommentModal,
        setDataPhotoModal,
        setDataCommentModal,
      }}
    >
      {children}
    </PhotosContext.Provider>
  )
}
