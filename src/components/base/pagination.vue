<template>
  <div class='pagination'>
    <button @click="prevPage" :disable="pageNumber == 0 ? true : false">
      上一页
      {{pageNumber}}
    </button>
    <button v-for="(p,index) in pageCount" :key='index' @click="setPage(p)">
      {{p}}
    </button>
    <button @click="nextPage">
      下一页
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pageNumber: 0,
      pageCount: []
    }
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  mounted () {
    this.setPageCount()
    this.paginatedData()
  },
  methods: {
    nextPage () {
      this.pageNumber++
      this.paginatedData()
    },
    prevPage () {
      this.pageNumber--
      this.paginatedData()
    },
    setPage (page) {
      this.pageNumber = page
      this.paginatedData()
    },
    setPageCount () {
      let l = this.listData.length
      let s = this.size
      this.pageCount = Math.floor(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      this.$emit('pageBlogs', this.listData.slice(start, end))
    }
  }
}
</script>
