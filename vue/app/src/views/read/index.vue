<template>
  <div class="wrap"></div>
</template>
<script>
export default {
  name: 'read',
  data () {
    return {}
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http.getReadList({page: 1}).then(data => {
        console.log(data)
      })
    }
  }
}
</script>
