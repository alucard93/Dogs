import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dogsapi.origamid.dev/json/',
  timeout: 5000,
})

// const token = localStorage.getItem('@DOGS')

export async function requestRegisterUser(data) {
  const response = await api.post('api/user', data)

  return response.data
}

export async function requestGetUser(token) {
  const response = await api.get('api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export async function requestSessionUser(data) {
  const response = await api.post('jwt-auth/v1/token', data)

  return response.data
}

export async function requestValidationToken(token) {
  const response = await api.post('jwt-auth/v1/token/validate', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export async function requestCommentPost(id, data) {
  const token = localStorage.getItem('@DOGS')
  const response = await api.post(`api/comment/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export async function requestPhotos(data, token) {
  const formData = new FormData()
  formData.append('img', data.get('img'))
  formData.append('nome', data.get('nome'))
  formData.append('peso', data.get('peso'))
  formData.append('idade', data.get('idade'))

  const response = await api.post('api/photo', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export async function requestGetPhotos({ page, total, user }) {
  const response = await api.get(
    `api/photo/?_page=${page}&_total=${total}&_user=${user}`
  )
  return response.data
}

export async function requestGetPhoto(id) {
  const response = await api.get(`api/photo/${id}`)
  return response.data
}

export async function requestGetComments(id) {
  const response = await api.get(`api/photo/${id}`)
  return response.data
}

export async function requestDeletePhoto(id) {
  const response = await api.delete(`api/photo/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
