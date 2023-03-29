import { yupResolver } from '@hookform/resolvers/yup'

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../../../components/Button/Button'
import { Input } from '../../../components/Input/Input'
import { LoginContext } from '../../../contenxt/LoginProvider/LoginProvider'
import { RegisterContext } from '../../../contenxt/RegisterProvider/RegisterProvider'
import { validatorsUserPhoto } from '../../../validators/validatorsUserPhoto'
import { UserPhotoContainer } from './style'

export const UserPhotoPost = () => {
  const { loading } = useContext(LoginContext)
  const { registerPhoto } = useContext(RegisterContext)
  const [img, setImg] = useState({})


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validatorsUserPhoto),
  })

  const handleSubmitPhoto = (data) => {
    const formData = new FormData()

    formData.append('nome', data.nome)
    formData.append('peso', data.peso)
    formData.append('idade', data.idade)
    formData.append('img', img.raw)

    registerPhoto(formData)
  }

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <UserPhotoContainer className="animeLeft">
      <form onSubmit={handleSubmit((data) => handleSubmitPhoto(data))}>
        <Input
          label="Nome"
          type="text"
          name="nome"
          register={register}
          errosMessage={errors.nome?.message?.toString()}
        />
        <Input
          label="Peso"
          type="number"
          name="peso"
          register={register}
          errosMessage={errors.peso?.message?.toString()}
        />
        <Input
          label="Idade"
          type="number"
          name="idade"
          register={register}
          errosMessage={errors.idade?.message?.toString()}
        />
        <input type="file" name="img" id="img" onChange={handleImgChange} />

        {loading ? (
          <Button disabled> Enviando...</Button>
        ) : (
          <Button type="submit">Enviar</Button>
        )}
      </form>

      {img.preview && (
        <div
          className="preview"
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </UserPhotoContainer>
  )
}
