import React, { useContext } from 'react'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { PhotoDeleteContainer } from './style'

export const PhotoDelete = ({ id }) => {
  const { deletePhoto, loading } = useContext(PhotosContext)

  function handleClickdeletePhoto() {
    deletePhoto(id)
  }
  return (
    <>
      {loading ? (
        <PhotoDeleteContainer>PhotoDelete</PhotoDeleteContainer>
      ) : (
        <PhotoDeleteContainer onClick={handleClickdeletePhoto} disabled>
          PhotoDelete
        </PhotoDeleteContainer>
      )}
    </>
  )
}
