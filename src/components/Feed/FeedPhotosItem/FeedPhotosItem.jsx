import React from 'react'
import { FeedPhotosItemContainer } from './styles'

import view from '../../../assets/visualizacao.svg'

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <FeedPhotosItemContainer view={view} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className='view'>{photo.acessos}</span>
    </FeedPhotosItemContainer>
  )
}
