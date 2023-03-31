import React, { useContext } from 'react'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { PhotoDeleteContainer } from './style'

export const PhotoDelete = ({ id }) => {
  const { deleteComment, loading } = useContext(PhotosContext)

  function handleClickdeleteComment() {
    deleteComment(id)
  }
  return (
    <>
      {loading ? (
        <PhotoDeleteContainer>PhotoDelete</PhotoDeleteContainer>
      ) : (
        <PhotoDeleteContainer onClick={handleClickdeleteComment} disabled>
          PhotoDelete
        </PhotoDeleteContainer>
      )}
    </>
  )
}
