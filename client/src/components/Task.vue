<template>
  
  <div class="card shadow mb-3 mt-3" style="max-width: 18rem;">
    <div class="card-header">{{ task.User.email}}</div>
    <div class="card-body text-black">
      <h5 class="card-title">{{ task.title }}</h5>
      <p class="card-text">{{task.description}}</p>
      <a href="#" class="card-link text-center"><i class="material-icons">mode_edit</i></a>
      <a href="#" class="card-link float-right"><i class="material-icons" @click="deleteTask">delete</i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: [ 'task' ],
  methods: {
    deleteTask() {
      // alert('masukk')
      this.$emit('deleteTask', this.task.id)
    }
  }
}
</script>

<style>

</style>