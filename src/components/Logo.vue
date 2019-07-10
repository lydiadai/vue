<template>
  <div class="my_logo" :title="title">
    <img src="../assets/logo.png" alt="" />
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>
