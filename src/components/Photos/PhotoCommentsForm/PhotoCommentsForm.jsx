import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { validatorsPhotoComment } from '../../../validators/validatorsPhotoForm'

import Enviar from '../../../assets/enviar.svg'
import { useContext } from 'react'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { PhotoCommentsFormContainer } from './style'

export const PhotoCommentsForm = ({ id }) => {
  const { postComment } = useContext(PhotosContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validatorsPhotoComment),
  })
  function handleSubmitComment(data) {
    postComment(id, data)
  }

  return (
    <PhotoCommentsFormContainer>
      <form onSubmit={handleSubmit((data) => handleSubmitComment(data))}>
        <textarea
          name="comment"
          id="comment"
          placeholder="Comente..."
          {...register('comment')}
        ></textarea>
        <button type='submit'>
          <img src={Enviar} alt="" />
        </button>
      </form>
    </PhotoCommentsFormContainer>
  )
}
