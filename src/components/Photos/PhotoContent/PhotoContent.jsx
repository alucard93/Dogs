import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoComments } from '../PhotoComments/PhotoComments'

import { PhotoContentContainer } from './style'

export const PhotoContent = ({ dataPhotos }) => {
  const [photo, comments] = dataPhotos

  return (
    <PhotoContentContainer>
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="view">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attruibutes">
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === '1'
                ? `${photo.idade} ano`
                : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </PhotoContentContainer>
  )
}
