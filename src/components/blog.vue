<template>
  <div class='blogs'>
    <div v-for='(blog,index) in blogs' :key='index' @click='toShow(blog.title)'>
      {{blog.title}}
    </div>
    <!--pagination :listData='blogs' @pageBlogs="cutBlog"></pagination-->
  </div>
</template>

<script>
import pagination from '@/components/base/pagination'
export default {
  data () {
    return {
      blogs: [],
      pageBlogs: []
    }
  },
  mounted () {
    this.getBlogs()
    this.cutBlog()
  },
  /*
  watch: {
    pageBlogs: function (newBlogs, oldBlogs) {
      this.pageBlogs = newBlogs
    }
  },
  */
  methods: {
    /*
    async getBlogs () {
      console.log('get')
      let blogs = await this.$http.get('api/interface/blogs/all')
      this.blogs = blogs.body.blogs
      console.log(this.blogs)
      },
    */
    getBlogs () {
      this.$http.get('api/interface/blogs/all').then((response) => {
        this.blogs = response.body.blogs
      }, (response) => {
        console.error(response)
      })
    },
    cutBlog (data) {
      this.pageBlogs = data
    },
    toShow (name) {
      this.$router.push({path: `/blog/${name}`})
    }
  },
  components: {
    pagination
  }
}
</script>

<style>
.blogs{
  text-align: left;
}
</style>
