<template>
  <div class="wrap pos-abt read_box">
    <el-card class='m-t-sm' style="min-height: 95%;">
      <ul>
        <li v-for="item in list" :key="item.id" class='title_box'>
          <a class="cursor-pointer" @click='toDetail(item.id)'>{{item.title}}</a>
          <p style="color: #b2bac2; font-size: 13px; margin-top: 5px; font-weight: normal;">{{new Date(item.time).format('yyyy年MM月dd日 hh:mm:ss')}}</p>
          <p class="title_box-ctrl"><span style="cursor: pointer;" @click='modify(item.id)'>修改</span></p>
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
    },
    modify (id) {
      this.$router.push({name: 'write', path: '/write', query: {id: id}})
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
    position: relative;
  }
  .title_box:not(:last-child){
    border-bottom: 1px solid rgba(178,186,194,.15);
  }
  .title_box-ctrl{
    /*display: none;*/
    width: 68px;
    height: 30px;
    background: rgba(255,225,225, 0.2);
    box-shadow: 2px 2px 5px #999;
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #333;
    display: none;
  }
  .title_box:hover .title_box-ctrl{
    display: flex;
  }
</style>
