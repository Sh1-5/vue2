import axios from 'axios'
// import localCache from '@/utils/cache'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})

request.interceptors.request.use(
  (config) => {
    // const token = localCache.getCache('token')
    // if (token) {
    //   config.headers = {
    //     Authorization: `Bearer ${token}`
    //   }
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
