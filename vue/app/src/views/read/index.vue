<template>
  <div class="wrap pos-abt read_box">
    <el-card class='m-t-sm' style="height: 95%;">
      <ul>
        <li v-for="item in list" :key="item.id" class='title_box'>
          <a class="cursor-pointer" @click='toDetail(item.id)'>{{item.title}}</a>
        </li>
      </ul>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'read',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http.getReadList({page: 1}).then(data => {
        this.list = data
      })
    },
    toDetail (id) {
      this.$router.push({name: 'detail', path: '/detail', query: {id: id}})
    }
  }
}
</script>
<style>
  .read_box{
    top: 52px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .h-min-full{
    min-height: 100%;
  }
  .title_box{
    padding: 15px 20px;
    font-size: 15px;
    font-weight: bold;
  }
  .title_box:not(:last-child){
    border-bottom: 1px solid rgba(178,186,194,.15);
  }
</style>
