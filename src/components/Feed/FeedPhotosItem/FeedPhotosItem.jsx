import React, { useContext } from 'react'
import { FeedPhotosItemContainer } from './styles'

import view from '../../../assets/visualizacao.svg'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const { setDataPhotoModal } = useContext(PhotosContext)
  function handleClick() {
    setModalPhoto(photo)
    setDataPhotoModal(photo)
  }

  return (
    <FeedPhotosItemContainer view={view} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className="view">{photo.acessos}</span>
    </FeedPhotosItemContainer>
  )
}
