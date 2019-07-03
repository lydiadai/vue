<template>
  <div class="hi">
    {{ welcome }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      welcome: 'Hi! I am LiuGang'
    }
  }
}
</script>

<style>
.hi {
  color: red;
  font-size: 20px;
}
</style>
