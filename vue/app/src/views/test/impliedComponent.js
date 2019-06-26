import toastwrap from './impliedComponent.vue'
import Vue from 'vue'

let ToastHtml = Vue.extend(toastwrap)

let notice = (type, tips) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const toasthtml = new ToastHtml()
  toasthtml.setTiele(tips)
  toasthtml.$mount(div)
}

let toast = {
  success: (tips) => {
    notice('success', tips)
  }
}
export default toast
