import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../../../contenxt/LoginProvider/LoginProvider'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { Loading } from '../../Loading/Loading'
import { FeedPhotosItem } from '../FeedPhotosItem/FeedPhotosItem'
import { FeedPhotosContainer } from './style'

export const FeedPhotos = ({ setModalPhoto }) => {
  const { loading } = useContext(LoginContext)
  const { getPhotos, dataPhotos } = useContext(PhotosContext)

  useEffect(() => {
    getPhotos()
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FeedPhotosContainer className="animeLeft">
          {dataPhotos.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </FeedPhotosContainer>
      )}
    </>
  )
}
