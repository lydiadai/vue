<template>
  <div class='pagination'>
    <ul>
      <li v-for="p in paginatedData">
        {{p.first}}
        {{p.last}}
        {{p.suffix}}
      </li>
    </ul>
    <button @click="prevPage">
      Previous
    </button>
    <button @click="nextPage">
      Next
    </button>
  </div>
</template>
<script>
export default {
  props:{
    listData:{
      type:Array,
      required:true
    },
    size:{
      type:Number,
      required:false,
      default: 10
    }
  }
}
</script>
