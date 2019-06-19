<template>
  <div class="wrap detail_box m-t-sm">
    <el-card shadow="never" style='height: 100%;min-height: 500px;'>
      <h1 class='text-center'>{{content.title}}</h1>
      <div v-html='content.content'></div>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent () {
      this.$http.getContent({id: this.$route.query.id}).then(data => {
        this.content = data
        this.content.content = this.content.content.replace(/_ueditor_page_break_tag_/g, '<hr/>')
      })
    }
  }
}
</script>
<style>
  .detail_box{
    min-height: 90%;
  }
</style>
