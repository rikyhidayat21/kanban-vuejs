<template>
  
  <div class="col-md-3 bg-white rounded">
    <div class="text-center text-white p-2 rounded shadow mt-3" 
      :class="`bg-${category.color}`"
    >{{category.category}}</div>
    <!-- {{tasksPerCategory}} -->
    <Task
      :tasks="tasks"
      v-for="task in tasksPerCategory" 
      :key="task.id"
      :task="task"
      @deleteTask="deleteTask"
      @toUpdatePage="toUpdatePage"
    ></Task>

    
  </div>
</template>

<script>
import Task from './Task'
export default {
  name: 'Category',
  components: { Task },
  props: [ 'category', 'tasks' ],
  computed: {
    tasksPerCategory() {
      return this.tasks.filter((task) => task.category == this.category.category)
    }
  },
  methods: {
    deleteTask(data) {
      console.log(data, '<< data di category')
      this.$emit('deleteTask', data)
    },
    toUpdatePage(payload) {
      this.$emit('toUpdatePage', payload)
    }
  }
}
</script>

<style>

</style>