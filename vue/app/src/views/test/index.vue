<template>
  <div class="wrap">
    <el-button @click='notice' class='m-t-lg'>测试弹窗</el-button>
  </div>
</template>
<script type="text/javascript">
import toast from './impliedComponent.js'
export default {
  methods: {
    notice () {
      toast.success('这是一个测试！')
    }
  }
}
</script>
