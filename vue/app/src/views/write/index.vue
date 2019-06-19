<template>
  <div class="wrap white_box">
    <el-card class='m-t-sm'>
      <vue-ueditor-wrap :config="myConfig" v-model='msg'></vue-ueditor-wrap>
      <div class="text-center">
        <el-button type='primary' class='m-t-sm' @click='publish'>发布</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'read',
  data () {
    return {
      msg: '',
      myConfig: {
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 540,
        // 初始容器宽度
        initialFrameWidth: '100%',
        serverUrl: 'http://localhost:3000/api/uploadFile',
        maximumWords: 100000
      }
    }
  },
  methods: {
    publish () {
      if (!this.msg) {
        this.$notify.error('请输入文章的标题和内容！')
      } else {
        let reg = /^<h[1-6]>([\s\S]+)<\/h[1-6]>/
        let params = {}
        if (reg.test(this.msg)) {
          params.title = RegExp.$1
          params.content = this.msg
          params.time = new Date().format('yyyy-MM-dd HH:mm:ss')
          this.$http.createBlob(params).then(data => {
            console.log(data)
          })
        }
      }
    }
  }
}
</script>
<style>
</style>
