<template>
  <div class='detail'>
    detail
    {{name}}
    {{name1}}
  </div>
</template>

<script>
export default{
  data () {
    return {
      name: this.$route.query.user,
      name1: this.$route.params.user
    }
  },
  methods: {
  }
}
</script>

<style>
  .detail{
    color: #ff4f4c;
  }
</style>
