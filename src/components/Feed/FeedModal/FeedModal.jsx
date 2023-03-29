import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../../../contenxt/LoginProvider/LoginProvider'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { Loading } from '../../Loading/Loading'
import { PhotoContent } from '../../Photos/PhotoContent/PhotoContent'

import { FeedModalContainer } from './style'

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { loading } = useContext(LoginContext)
  const { getPhoto, dataPhotos } = useContext(PhotosContext)
  
  useEffect(() => {
    getPhoto(photo.id)
  }, [photo])

  function handleOutsideClick(event) {
    if(event.target == event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <FeedModalContainer onClick={handleOutsideClick}>
      {loading && <Loading />}
      {dataPhotos && <PhotoContent dataPhotos={dataPhotos} />}
    </FeedModalContainer>
  )
}
