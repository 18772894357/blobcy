import apilist from './apilist.js'
export default {
  install: (Vue) => {
    Vue.prototype.$http = {
      ...apilist
    }
  }
}
