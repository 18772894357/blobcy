import method from './http-methods.js'
let apilist = {
  // 获取当前blob数据
  getReadList: (data) => {
    return method({
      url: '/api/getReadList',
      data: data
    })
  },
  // 写文章
  createBlob: (data) => {
    return method({
      url: '/api/createBlob',
      data: data
    })
  }
}
export default apilist
