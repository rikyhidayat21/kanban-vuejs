<template>
  <section id="home-page">
    <!-- navbar -->
    <!-- <h1>{{message}}</h1> -->
    <div class="container-flex">
      <div class="item-flex"><span><b><i>mm</i>T</b></span></div>
      <div class="item-flex" style="letter-spacing: 3px;"><b>KANBAN  BOARD</b></div>
      <div class="item-flex">
        <button class="bg-info rounded" @click.prevent="logout">Logout</button>
      </div>
    </div>
    <!-- end of navbar -->
    <div class="container">
      <button class="p-2 text-center mt-4 mb-4 btn-info col-1 rounded shadow" id="add-task" @click.prevent="addPage">Add Task</button>
      <!-- <h6 class="p-2 text-center mt-4 mb-4 btn-info col-1 rounded shadow" id="add-task" @click.prevent="addPage">Add Task</h6> -->
      <div class="row mt-4 mb-4">
        <Category 
          v-for="(category, i) in categories" 
          :key="i"
          :category="category"
          :tasks="tasks"
          @deleteTask="deleteTask"
          @toUpdatePage="toUpdatePage"
        ></Category>
        <!-- {{tasks}} -->
      </div>
    </div>

  </section>
</template>

<script>
import Category from '../components/Category'
export default {
  name: 'HomePage',
  components: { Category },
  props: [ 'categories', 'tasks' ],
  methods: {
    deleteTask(data) {
      this.$emit('deleteTask', data)
    },
    addPage() {
      this.$emit('changePage', 'addPage')
    },
    logout() {
      localStorage.clear()
      this.$emit('changePage', 'login')
    },
    toUpdatePage(payload) {
      this.$emit('toUpdatePage', payload)
    }
  }
}
</script>

<style>

</style>