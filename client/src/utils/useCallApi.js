import axios from 'axios'

export const useCallApi = (url, method, data) => {


  return axios({
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    },
    data
  })
}