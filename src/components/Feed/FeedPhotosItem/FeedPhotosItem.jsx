import React, { useContext } from 'react'
import { FeedPhotosItemContainer } from './styles'

import view from '../../../assets/visualizacao.svg'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { Image } from '../../Image/Image'

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const { setDataPhotoModal } = useContext(PhotosContext)
  function handleClick() {
    setModalPhoto(photo)
    setDataPhotoModal(photo)
  }

  return (
    <FeedPhotosItemContainer view={view} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className="view">{photo.acessos}</span>
    </FeedPhotosItemContainer>
  )
}
