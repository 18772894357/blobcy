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
      url: '/api/create_blob',
      data: data,
      method: 'post'
    })
  },
  // 获取文章详情
  getContent: (data) => {
    return method({
      url: '/api/get_detail',
      data: data
    })
  }
}
export default apilist
