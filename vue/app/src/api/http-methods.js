import axios from 'axios'
import config from './config.js'
import $bus from '@/main.js'
import qs from 'qs'

let method = (params) => {
  return axios({
    method: params.method || 'get',
    url: params.url,
    params: params.method === 'post' ? '' : params.data,
    data: params.method === 'post' ? qs.stringify(params.data) : '',
    timeout: config.timeout,
    headers: config.headers
  })
}

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    if (response.data.code === 0) {
      return response.data.data
    } else {
      $bus.$message.error(`当前接口出错：${response.data.message}`)
      return Promise.reject(response)
    }
  } else {
    $bus.$message.error(`当前接口出错：${response.status}`)
    return Promise.reject(response)
  }
}, function (err) {
  return Promise.reject(err)
})
export default method
