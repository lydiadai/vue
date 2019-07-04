<template>
  <div class="hi">
    {{ welcome }}

    <div class="">
      <span>msg: {{ msg }}</span>
      <br/>
      <span>id: {{this.$route.query.id}}</span>
      <br/>
      <span>parmas: {{this.$route.params.id}}</span>
      <br/>
      <input type="text" @click="changeMsg('good')" />
      <input type="text" v-model="msg" />
      <br/>
      <b @click="blogPage">to home page</b>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      welcome: 'Hi! I am LiuGang',
      msg: this.$route.query.id
    }
  },
  methods: {
    changeMsg: function(name) {
      this.msg = name + this.$route.query.id
    },
    blogPage: function () {
      this.$router.push({name: 'HelloWorld'})
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
