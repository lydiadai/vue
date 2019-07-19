<template>
  <div class='root-container'>
    hello! vue js ~
    <router-link tag='div' class='user' :to="{path: '/detail', query:{user: 'lydia'}}">
      - query {{user}}
    </router-link>
    <router-link tag='div' class='user' :to="{path: '/detail', name: 'detail', parmas: {user: 'lydia'}}">
      - params {{user}}
    </router-link>
    <div class='detail' @click="toShow('Lydia')">
      点我 查看具体信息
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: 'Lydia Dai'
    }
  },
  methods: {
    toShow (name) {
      alert(name)
    }
  }
}
</script>

<style>
  .root-container{
    color: #404040;
    font-size: 18px;
    cursor: default;
  }
  .root-container .user{
    color: #50a4ff;
    font-size: 16px;
    cursor: pointer;
  }
  .root-container .detail{
    margin-top: 20px;
    cursor: pointer;
  }
</style>
