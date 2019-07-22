<template>
  <div class='root-container'>
    hello! vue js ~
    <router-link tag='div' class='user' :to="{path: '/detail', query:{user: 'lydia'}}">
      - query {{user}}
    </router-link>
    <router-link tag='div' class='user' :to="{path: '/detail', name: 'detail', params: {user: 'lydia'}}">
      - params {{user}}
    </router-link>
    <div class='detail' @click="toShow('Lydia')">
      点我 查看具体信息
    </div>

    <input type='button' @click="changeValue()" value='通过控制代码修改用户名'/>

    <div class='detail' @click="toForm()">
      查看表单提交
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
    },
    toForm () {
      this.$router.push({path: `/form`})
    },
    changeValue (name) {
      if (this.user === 'dailanyi') {
        this.user = 'Lydia Dai'
      } else {
        this.user = 'dailanyi'
      }
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
