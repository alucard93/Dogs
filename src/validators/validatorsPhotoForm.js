import * as yup from 'yup'

export const validatorsPhotoComment = yup.object().shape({
  comment: yup.string().required('O comentário é obrigatório'),

})
