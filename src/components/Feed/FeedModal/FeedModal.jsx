import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../../../contenxt/LoginProvider/LoginProvider'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { Loading } from '../../Loading/Loading'
import { PhotoContent } from '../../PhotoContent/PhotoContent'
import { FeedModalContainer } from './style'

export const FeedModal = ({ photo }) => {
  const { loading } = useContext(LoginContext)
  const { getPhoto, dataPhotos } = useContext(PhotosContext)
  useEffect(() => {
    getPhoto(photo.id)
  }, [photo])

  return (
    <FeedModalContainer>
      {loading && <Loading />}
      {dataPhotos && <PhotoContent dataPhotos={dataPhotos} />}
    </FeedModalContainer>
  )
}
