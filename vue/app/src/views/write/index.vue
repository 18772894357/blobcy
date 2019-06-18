<template>
  <div class="wrap white_box">
    <el-card class='m-t-sm'>
      <!-- <el-form :model='form' ref='form' label-width="120px">
        <el-form-item label='标题'>
          <el-input v-model='form.title'></el-input>
        </el-form-item>
        <el-form-item label='内容'>
          <el-input v-model='form.content' type='textarea' rows='25'></el-input>
        </el-form-item>
      </el-form> -->
      <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'read',
  data () {
    return {
      form: {
        title: '',
        content: ''
      },
      msg: '',
      myConfig: {
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 540,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // serverUrl: 'http://35.201.165.105:8000/controller.php',
        // serverUrl: 'http://localhost:3000/api/uploadFile',
        serverUrl: 'http://localhost:3000/ueditor/ue',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        maximumWords: 100000
        // imagePathFormat: '/imageStorage/{yyyy}{mm}{dd}/{time}(rand: 6)',
        // imageUrlPrefix: 'imageStorage'
      }
    }
  },
  methods: {
    test () {
      console.log(this.msg)
    }
  }
}
</script>
<style>
</style>
