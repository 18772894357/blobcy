<template>
  <div class="wrap white_box">
    <el-card class='m-t-sm m-b-sm'>
      <el-input class='m-b-sm' placeholder='请输入标题' v-model='title'></el-input>
      <vue-ueditor-wrap :config="myConfig" v-model='content'></vue-ueditor-wrap>
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
      title: '',
      content: '',
      id: '',
      myConfig: {
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 540,
        // 初始容器宽度
        initialFrameWidth: '100%',
        serverUrl: 'http://47.111.116.91:3000/api/uploadFile',
        maximumWords: 100000
      }
    }
  },
  created () {
    this.getModifyData()
  },
  methods: {
    getModifyData () {
      if (!this.$route.query.id) {
        return
      }
      this.$http.getContent({id: this.$route.query.id}).then(data => {
        this.content = data.content
        this.title = data.title
        this.id = data.id
      })
    },
    publish () {
      if (!this.content && !this.title) {
        this.$notify.error('请输入文章的标题和内容！')
        return
      }
      let params = {
        title: this.title,
        content: this.content,
        time: new Date().format('yyyy-MM-dd hh:mm:ss'),
        id: this.id
      }
      this.$http.createBlob(params).then(data => {
        this.$notify.success('当前发布成功！请去博客内容区查看')
      })
    }
  }
}
</script>
<style>
</style>
