import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PhotoComments } from '../PhotoComments/PhotoComments'

import { PhotoContentContainer } from './style'

import view from '../../../assets/visualizacao-black.svg'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'

export const PhotoContent = () => {
  const { dataPhotoModal, setDataCommentModal } = useContext(PhotosContext)
  const { id, author, title, src, acessos, peso, idade } = dataPhotoModal
  const { comments } = setDataCommentModal

  return (
    <PhotoContentContainer view={view}>
      <div className="img">
        <img src={src} alt={title} />
      </div>
      <div className="details">
        <div>
          <p className="author">
            <Link to={`/perfil/${author}`}>@{author}</Link>
            <span className="view">{acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${id}`}>{title}</Link>
          </h1>
          <ul className="attributes">
            <li>{peso} kg</li>
            <li>{idade === '1' ? `${idade} ano` : `${idade} anos`}</li>
          </ul>
        </div>
        <PhotoComments id={id} comments={comments} />
      </div>
    </PhotoContentContainer>
  )
}
