import React, { useContext } from 'react'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { PhotoDeleteContainer } from './style'

export const PhotoDelete = ({ id }) => {
  const { deleteComment } = useContext(PhotosContext)

  function handleClickdeleteComment() {
    deleteComment(id)
  }
  return (
    <PhotoDeleteContainer onClick={handleClickdeleteComment}>PhotoDelete</PhotoDeleteContainer>
  )
}
