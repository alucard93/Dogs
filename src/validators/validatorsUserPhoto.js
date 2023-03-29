import * as yup from 'yup'

export const validatorsUserPhoto = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),

  peso: yup.number().required('O número é obrigatório'),

  idade: yup.number().required('A idade é obrigatória'),

  // file: yup.mixed().required('O arquivo é obrigatório').test('fileFormat', 'Formato de arquivo inválido', (value) => {
  //   if (value) {
  //     return value instanceof File;
  //   }
  //   return false;
  // }),

})
