import axios from 'axios'

export const callApi = (url, method, data) => {


  return axios({
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    data
  })
}