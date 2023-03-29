import React, { useState } from 'react'
import { FeedModal } from './FeedModal/FeedModal'
import { FeedPhotos } from './FeedPhotos/FeedPhotos'

export const Feed = () => {
  const [modalPhoto, setModalPhoto ] = useState(null)
  return (
    <div>
      {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto } /> }
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  )
}
