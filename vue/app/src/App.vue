<template>
  <div id="app">
    <Header></Header>
    <section class="app_content pos-rlt">
      <router-view/>
    </section>
    <aside></aside>
  </div>
</template>

<script>
import Header from '@/block/header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html{
  height: 100%;
}
body{
  min-width: 1000px;
  overflow-x: auto;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.app_content{
  width: 1000px;
  margin: 0 auto 0;
  padding-top: 52px;
  height: 100%;
  box-sizing: border-box;
}
</style>
