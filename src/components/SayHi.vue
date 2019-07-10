<template>
  <div class="hi">
    {{ welcome }}

    <my-logo title="sub_title"></my-logo>
    <div class="">
      <span>msg: {{ msg }}</span>
      <br/>
      <span>id: {{this.$route.query.id}}</span>
      <br/>
      <span>parmas: {{this.$route.params.id}}</span>
      <br/>
      <input type="text" @click="changeMsg('good')" />
      <input type="text" v-model.lazy.trim="msg" />
      <br/>
      <b @click="blogPage">to home page</b>
    </div>
  </div>
</template>

<script>
import MyLogo from '@/components/Logo'

export default {
  data () {
    return {
      welcome: 'Hi! I am LiuGang',
      msg: this.$route.query.id
    }
  },
  methods: {
    changeMsg: function (name) {
      this.msg = name + this.$route.query.id
    },
    blogPage: function () {
      this.$router.push({name: 'HelloWorld'})
    }
  },
  components: {
    MyLogo
  }
}
</script>

<style>
.hi {
  color: red;
  font-size: 20px;
}
</style>
