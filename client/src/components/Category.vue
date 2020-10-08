<template>
  <div class="col-md-3 bg-white rounded">
    <div class="text-center text-white p-2 rounded shadow mt-3" 
      :class="`bg-${category.color}`"
    >{{category.category}}</div>
    <Task></Task>

    
  </div>
</template>

<script>
import Task from './Task'
export default {
  name: 'Category',
  components: { Task },
  props: [ 'category' ]
}
</script>

<style>

</style>