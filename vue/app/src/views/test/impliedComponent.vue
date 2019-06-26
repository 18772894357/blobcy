<template>
  <div>{{title}}</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    setTiele (tips) {
      this.title = tips
    }
  }
}
</script>
