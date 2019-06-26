<template>
  <div class="wrap detail_box m-t-sm">
    <el-card shadow="never" style='height: 100%;min-height: calc(100vh - 150px);'>
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
      })
    }
  }
}
</script>
<style>
  .detail_box{
    font-size: 16px;
  }
  .detail_box pre{
    margin: .5em 0;
    padding: .4em .6em;
    border-radius: 8px;
    background: #f8f8f8;
  }
</style>
