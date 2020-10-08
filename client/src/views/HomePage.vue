<template>
   <div class="container">
      <h6 class="p-2 text-center mt-4 mb-4 btn-info col-1 rounded shadow" id="add-task">Add Task</h6>
      <div class="row mt-4 mb-4">
        <Category 
          v-for="(category, i) in categories" 
          :key="i"
          :category="category"
        ></Category>

      </div>
    </div>
</template>

<script>
import Category from '../components/Category'
export default {
  name: 'HomePage',
  components: { Category },
  props: [ 'categories' ]
}
</script>

<style>

</style>