<template>
  <div class="wrap white_box">
    <el-card class='m-t-sm'>
      <el-form :model='form' ref='form' label-width="120px">
        <el-form-item label='标题'>
          <el-input v-model='form.title'></el-input>
        </el-form-item>  
        <el-form-item label='内容'>
          <el-input v-model='form.content' type='textarea' rows='25'></el-input>
        </el-form-item> 
      </el-form>
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
      }
    }
  },
  methods: {
  }
}
</script>
<style>
</style>
