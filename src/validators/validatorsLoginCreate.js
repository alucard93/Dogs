import * as yup from 'yup'

export const validationLoginCreate = yup.object().shape({
  username: yup.string().required('O username é obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(3, 'A senha deve conter no minímo 8 caracteres'),
    email: yup.string().required('O email é obrigatório'),
})
