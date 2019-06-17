<template>
  <div class="app_header">
    <div class="app_header-navbox bg-white">
      <img src="../assets/favicon.jpg" alt="" class="app_header-logo pull-left">
      <b class="pull-left logo-tit m-l-sm">blobcy</b>
      <el-menu class='m-l-xl pull-left'  mode="horizontal" :default-active="this.$route.path" router>
        <el-menu-item index='/read'>读搏客</el-menu-item>
        <el-menu-item index='/write'>写搏客</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
  .app_header{
    height: 52px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    z-index: 999;
  }
  .app_header-navbox{
    width: 1000px;
    margin: 0 auto 0;
    line-height: 52px;
  }
  .app_header-logo{
    height: 30px;
    padding-top: 11px;
    display: inline-block;
  }
  .logo-tit{
    font-size: 22px;
    color: #0084ff;
  }
  .app_header-navbox .el-menu-item, .app_header-navbox .el-submenu__title{
    height: 52px;
    line-height: 52px;
  }
</style>
