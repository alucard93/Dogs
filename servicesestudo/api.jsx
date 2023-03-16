import axios from "axios";

const api = axios.create({
  baseURL: 'https://dogsapi.origamid.dev/json/',
  timeout: 5000
})

// const token = localStorage.getItem('@DOGS')


export async function requestRegisterUser (data) {
  const response = await api.post("api/user", data)
  
  return response.data
  
}

export async function requestSessionUser(data) {
  const response = await api.post("jwt-auth/v1/token", data)
  
  return response.data
}


export async function requestPhoto(data, token) {
  const { nome, peso, idade, img } = data;
  
  const formData = new FormData();
  formData.append('img', img);
  formData.append('nome', nome);
  formData.append('peso', peso);
  formData.append('idade', idade);

  const response = await api.post("api/photo", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  
  return response.data;
}

export async function requestGetPhoto() {
  const response = await api.get("api/photo")
  return response.data
}