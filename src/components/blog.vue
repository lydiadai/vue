<template>
  <div class='blogs'>
    <div v-for='(blog,index) in blogs' :key='index'>
      {{blog.title}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageNumber: 0,
      blogs: []
    }
  },
  mounted () {
    this.$http.get('api/interface/blogs/all').then((response) => {
      console.info(response.body)
      this.blogs = response.body.blogs
    }, (response) => {
      console.error(response)
    })
  },
  methods: {
    toShow (name) {
      alert(name)
    },
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    }
  }
}
</script>

<style>
.blogs{
  text-align: left;
}
</style>
