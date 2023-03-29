import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoComments } from '../PhotoComments/PhotoComments'

import { PhotoContentContainer } from './style'

import view from '../../../assets/visualizacao-black.svg'

export const PhotoContent = ({ dataPhotos }) => {
  const [photo, comments] = dataPhotos

  return (
    <PhotoContentContainer view={view}>
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className='author'>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="view">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attributes">
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
